function minDays(bloomDay: number[], m: number, k: number): number {
    if(m > bloomDay.length / k) return -1;

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while (left < right) {
        const mid = left + (right - left >>> 1);
        if (validation(bloomDay, m, k, mid)){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    return right;
};

function validation(nums: number[], m: number, k: number, cur: number) {
    let flowers = 0, count = 0;
   
   for(const day of nums){
       if(day <= cur){
           flowers++;
           if(flowers === k){
               ++count;
               flowers = 0;
               if(count === m) break;
           }
       }else {
           flowers = 0;
       }
   }

    return m > count;
}