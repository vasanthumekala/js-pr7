function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let largest = arr[0]; // Initialize largest with the first element

    for (let i=1; i<arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i] // Update largest if the current element is greater
        }
    }
    return largest; // Return the largest number found
}

const numbers = [3, 5, 7, 2, 8];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);
