function trap(height: number[]): number {
    let n: number = height.length
    let res: number = 0
    for (let i: number = 1; i < n; i++) {
        let r_max: number = 0, l_max: number = 0
        for (let j: number = i; j < n; j++) {
            r_max = Math.max(r_max, height[j])
        }
        for (let j: number = i; j >= 0; j--) {
            l_max = Math.max(l_max, height[j])
        }
        res += Math.min(l_max, r_max) - height[i]
    }
    return res
}