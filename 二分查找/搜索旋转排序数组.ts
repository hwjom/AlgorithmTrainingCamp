function search(nums: number[], target: number): number {
    if(!nums?.length) return -1;
    const n = nums.length;
    if(n === 1) return nums[0] === target ? 0 : -1;

    let left = 0, right = n - 1;
    while(left <= right){
        const mid = left + (right - left >>> 1);
        if(nums[mid] === target) return mid;

        if(nums[mid] > nums[right]){
            if(nums[mid] > target && nums[left] <= target){
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }else {
            if(nums[mid] < target && nums[right] >= target){
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }

    return -1;
};