type arrNumb = number[]
type arrInit = number[]

function threeSum(nums: arrNumb): arrInit[] {
    if(nums === [] || nums.length === 2) return null
    let p1: number = 0, p3: number = nums.length - 1, p2: number = p3 - 1 
    let arr: arrNumb[] = []
    while (true) {
        if(p2 === p1) {
          p1++
          p3 = nums.length - 1
          p2 = p3 - 1
      }
        if(nums[p1] + nums[p2]+ nums[p3] === 0 ) {
          arr.push([nums[p1], nums[p2], nums[p3]])
        }
        p2--
        p3--
        if(p1 === nums.length - 3) {
          break;
        }
    }
    return arr
}




