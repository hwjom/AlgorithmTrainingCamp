function findMin(nums: number[]): number {
    if(!nums?.length) return -Infinity;

    const n = nums.length;
    let left = 0, right = n - 1;

    while(left < right){
        const mid = left + (right - left >>> 1);
        if(nums[mid] > nums[right]){
            left = mid + 1;
        }else {
            right = mid;
        }
    }

    return nums[left];
};