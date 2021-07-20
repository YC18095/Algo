function maxArea(height: number[]): number {
    let point1: number = 0
    let point2: number = height.length - 1
    
    let max: number = 0  
    
    while (point1 !== point2) {
        let maxWhile: number = null        
        let width: number = point2 - point1
        if (height[point1] > height[point2]) {
            
            maxWhile = height[point2] * width
            point2--
        } else {           
            maxWhile = height[point1] * width
            point1++
        }
        if (maxWhile > max) {
            max = maxWhile
        }
    }
    return max
};