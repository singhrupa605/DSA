const nums = [1, 11, 21, 31, 41];

const maximumGap = (nums) => {
  let n = nums.length;
  if (n < 2) {
    return 0;
  }

  let buckets = [],
    max = -Infinity,
    min = Infinity;

  for (let i = 0; i < n; i++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }
  if (n === 2) {
    return max - min;
  }
  for (let i = 0; i < n - 1; i++) {
    buckets.push({ max: null, min: null });
  }
  let bucketsize = Math.ceil((max - min) / (n - 1));
  for (let i = 0; i < n; i++) {
    if (nums[i] === max || nums[i] === min) {
      continue;
    }

    let bucketindex = Math.floor((nums[i] - min) / bucketsize);
    let bucket = buckets[bucketindex];
    bucket.min = bucket.min === null ? nums[i] : Math.min(bucket.min, nums[i]);
    bucket.max = bucket.max === null ? nums[i] : Math.max(bucket.max, nums[i]);
  }

  let maxgap = 0,
    prevMax = min;

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].min !== null) {
      maxgap = Math.max(buckets[i].min - prevMax, maxgap);
      prevMax = buckets[i].max;
    }
  }
  maxgap = Math.max(maxgap, max - prevMax);
  return maxgap;
};

console.log(maximumGap(nums));
