let unsortedArr = [5, 34, 12, 78, 23, 13, 4, 6, 7];

// SORTING ALGORITHMS
// Bubble Sort ==> Big O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <  arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Selection Sort ==> Big O(n^2)
function selectionSort(arr) { 
  let n = arr.length;

  for(let i = 0; i < n; i++) {
      let min = i;
      for (let j = i+1; j < n; j++) {
          if (arr[j] < arr[min]) {
              min=j; 
          }
      }
      if (min != i) {
          let tmp = arr[i]; 
          arr[i] = arr[min];
          arr[min] = tmp;      
      }
  }
  return arr;
}

// Quick Sort ==> Big O(nlogn)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Merge Sort ==> Big O(n) (a.k.a Linear Time Complexity)
function merge(left, right) {
  let sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}


// SEARCHING ALGORITHMS
// Binary Search (Recursive) ==> Big O(logn)
// ARRAY MUST BE SORTED!!!
function binarySearch(arr, x, start, end) {
  
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return true;

  if (arr[mid] > x)
    return binarySearch(arr, x, start, mid - 1);
  else
    return binarySearch(arr, x, mid + 1, end);
}

// Binary Search (Iterative) ==> Big O(logn)
function binarySearchIterative(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == x) {
      return true;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1
    }
  }
  return false;
}

// Recursion Example
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci (n - 2)
  }
}
































