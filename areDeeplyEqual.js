function areDeeplyEqual(o1, o2) {
    if (o1 === o2) {
        return true
    }
    if (typeof o1 !== typeof o2) {
        return false
    }
    if (typeof o1 !== 'object') {
        return false
    }
    if (o1 === null || o2 === null) {
        return false
    }
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false
    }
    for (let key in o1) {
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false
        }
    }
    return true
}

class TwentyFourPoints {
    constructor() {
        this.cards = []
        this.solutions = []
        this.solution = []
        this.solutionSet = new Set()
    }

    init() {
        for (let i = 1; i <= 13; i++) {
            for (let j = 1; j <= 4; j++) {
                this.cards.push(i)
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }

    solve() {
        this.solveHelper(this.cards, 0)
    }

    solveHelper(cards, index) {
        if (index === cards.length) {
            if (this.isTwentyFour(this.solution)) {
                let solution = this.solution.slice()
                solution.sort()
                let solutionStr = solution.toString()
                if (!this.solutionSet.has(solutionStr)) {
                    this.solutions.push(solution)
                    this.solutionSet.add(solutionStr)
                }
            }
            return
        }
        for (let i = index; i < cards.length; i++) {
            this.solution.push(cards[i])
            this.solveHelper(cards, i + 1)
            this.solution.pop()
        }
    }

    isTwentyFour(solution) {
        let ops = ['+', '-', '*', '/']
        let opCombos = this.getOpCombos(ops, 3)
        let numCombos = this.getPermutations(solution, 4)
        for (let numCombo of numCombos) {
            for (let opCombo of opCombos) {
                let result = this.calculate(numCombo, opCombo)
                if (result === 24) {
                    return true
                }
            }
        }
        return false
    }

    getOpCombos(ops, length) {
        let opCombos = []
        this.getOpCombosHelper(ops, length, [], opCombos)
        return opCombos
    }

    getOpCombosHelper(ops, length, opCombo, opCombos) {
        if (opCombo.length === length) {
            opCombos.push(opCombo.slice())
            return
        }
        for (let op of ops) {
            opCombo.push(op)
            this.getOpCombosHelper(ops, length, opCombo, opCombos)
            opCombo.pop()
        }
    }

    getPermutations(nums, length) {
        let permutations = []
        this.getPermutationsHelper(nums, length, [], permutations)
        return permutations
    }

    getPermutationsHelper(nums, length, permutation, permutations) {
        if (permutation.length === length) {
            permutations.push(permutation.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            permutation.push(nums[i])
            this.getPermutationsHelper(nums, length, permutation, permutations)
            permutation.pop()
        }
    }

    calculate(nums, ops) {
        let result = nums[0]
        for (let i = 1; i < nums.length; i++) {
            result = this.calculateHelper(result, nums[i], ops[i - 1])
        }
        return result
    }

    calculateHelper(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            case '/':
                return num1 / num2
        }
    }

    print() {
        for (let solution of this.solutions) {
            console.log(solution)
        }
    }
}
