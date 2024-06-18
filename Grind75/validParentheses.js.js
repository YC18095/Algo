const isValid = function(s) {
   if(!s) return false
    let stack = []
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else if
            ((stack[stack.length - 1] === "(" && s[i] === ")") || 
            (stack[stack.length - 1] === "{" && s[i] === "}") ||
            (stack[stack.length - 1] === "[" && s[i] === "]")) {
                stack.pop()
            } else {
                return false
            }
        }
        return !stack.length ? true : false
    }


// isValid("()")
// isValid("()[]{}")
// isValid("(]")
// isValid("((])")
// isValid("{[()]}")