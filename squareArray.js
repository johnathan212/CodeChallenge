/* 
    Since the array is ordered the only case the resulting array would need to be sorted is if
    the array contains negative numbers and iterate through the array one time using a pointer
    for each end and entering the larger number into the resulting array for an O(N) solution. 
*/

module.exports = function squareArray(array) {
    let squaredArray = new Array(array.length)
    let leftpointer = 0
    let rightpointer = array.length - 1

    for(let i = array.length - 1; i >= 0; i--) {
        if(Math.abs(array[leftpointer]) < Math.abs(array[rightpointer])) {
            squaredArray[i] = array[rightpointer] ** 2
            rightpointer--
        } else {
            squaredArray[i] = array[leftpointer] ** 2
            leftpointer++
        }
    }
    return squaredArray
}