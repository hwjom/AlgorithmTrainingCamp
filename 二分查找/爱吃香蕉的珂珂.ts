function minEatingSpeed(piles: number[], h: number): number {
  if (piles.length > h) return -1;

  // const sum = piles.reduce((a, b) => a + b);
  let left = 1,
    right = Math.max(...piles);

  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (validation(piles, h, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}

function validation(nums: number[], h: number, k: number): boolean {
  let hours = 0;

  for (const val of nums) {
    if (val < k) {
      hours++;
    } else {
      hours += Math.ceil(val / k);
    }
  }

  return hours <= h;
}
