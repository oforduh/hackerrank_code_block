function findMedian(arr: number[]) {
  // Write your code here
  const sortedArray = arr.sort();
  console.log("yes");

  const iseven = sortedArray.length % 2 === 0;

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
