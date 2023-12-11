function findMedian(arr: number[]) {
  // Write your code here
  const sortedArray = arr.sort();

  const iseven = sortedArray.length % 2 === 0;
  console.log(iseven);

  if (iseven) {
    const median =
      (sortedArray[Math.floor(arr.length / 2)] +
        sortedArray[Math.floor(arr.length / 2) - 1]) /
      2;
    console.log(median);
    return median;
  }

  const median = sortedArray[Math.floor(arr.length / 2)];
  console.log(median);
  return median;
}

findMedian([1, 4, 6, 7, 8]);
