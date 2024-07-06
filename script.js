function splitArrayIntoSubarrays(arr, n) {
    const result = [];
    let currentSubarray = [];

    for (let i = 0; i < arr.length; i++) {
        // If adding arr[i] to currentSubarray exceeds n, push currentSubarray to result and start a new subarray
        if (currentSubarray.reduce((acc, val) => acc + val, 0) + arr[i] > n) {
            result.push(currentSubarray);
            currentSubarray = [];
        }
        // Add arr[i] to currentSubarray
        currentSubarray.push(arr[i]);
    }

    // Push the last remaining subarray to result
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}
