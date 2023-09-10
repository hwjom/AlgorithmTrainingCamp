function shipWithinDays(weights: number[], days: number): number {
    const sum = weights.reduce((a, b) => a + b);
    const min = Math.max(...weights);

    let left = min, right = sum;
    while (left < right) {
        const mid = left + ((right - left) >>> 1);
        const ans = isDelivered(weights, days, mid);
        if (ans >= 0) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }

    return left;
};

function isDelivered(weights: number[], days: number, capacity: number): number {
    let cur = 0, d = 1;
    for (const w of weights) {
        if (cur + w > capacity) {
            cur = 0;
            d++;
        }
        cur += w;

    }
    return days - d;
}