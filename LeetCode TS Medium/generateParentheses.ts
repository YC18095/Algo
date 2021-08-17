function generateParenthesis(n: number): string[] {

    let res: string[] = []
    let stack: string[] = []
    
     if(n === 1) {
        res.push("()")
        return res
    }

    function backTracking(open: number, close: number) : string[] {
        if (close === n && open === n) {
            res.push(stack.join(''))
            return
        }
        if (close < open) {
            stack.push(")")
            backTracking(open, close + 1)
            stack.pop()
        }
        if (open < n) {
            stack.push("(")
            backTracking(open + 1, close)
            stack.pop()
        }

    }

    backTracking(0, 0)

    return res
};