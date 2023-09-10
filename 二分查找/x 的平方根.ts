function mySqrt(x: number): number {
    if(x === 0 || x === 1) return x;

    let left = 0, right = x;

    while(left <= right){
        const mid = left + (right - left >>> 1);
        if(mid * mid <= x){
            if(mid * mid === x || (mid + 1) * (mid + 1) > x){
                return mid;
            }
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return -1;
};