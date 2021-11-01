// function mergesort(array) {
//     if (array.length ===1) return array;
//     const mid = Math.floor(array.length/2);
//     const l_arr= mergesort(array.slice(0,mid));
//     const r_arr= mergesort(array.slice(mid));
//     const sortedArr = [];

//     let i = 0,
//     j = 0;
//     while (i< l_arr.length && j< r_arr.length) {
//         if (l_arr[i] < r_arr[j]){
//             sortedArr.push(l_arr[i]);
//             i++;
//         }else  {
//             sortedArr.push(r_arr[j]);
//             j++; 
//         }}
//     while (i<l_arr.length) sortedArr.push (l_arr[i++]);
//     while (j<r_arr.length) sortedArr.push (r_arr[j++]);
//     return sortedArr

// } 
// const array = []
// for (let i = 0; i<310; i++) {
//   num =  Math.floor(Math.random() * (750 - 3) + 3);
//  array.push(num)}

//  console.log (mergesort(array))

export function getMergeSortAnimations(array) {
    const anim = [];
    if (array.length <= 1) return array;
    const auxArr = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArr, anim);
    return anim;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxArr,
    anim,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArr, startIdx, middleIdx, mainArray, anim);
    mergeSortHelper(auxArr, middleIdx + 1, endIdx, mainArray, anim);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxArr, anim);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxArr,
    anim,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
    
      anim.push([i, j]);
     
      anim.push([i, j]);

      if (auxArr[i] <= auxArr[j]) {
       
        anim.push([k, auxArr[i]]);

        mainArray[k++] = auxArr[i++];
      } else {
      
        anim.push([k, auxArr[j]]);
        mainArray[k++] = auxArr[j++];
      }
    }
    while (i <= middleIdx) {
     
      anim.push([i, i]);
    
      anim.push([i, i]);
    
      anim.push([k, auxArr[i]]);

      mainArray[k++] = auxArr[i++];
    }
    while (j <= endIdx) {
    
      anim.push([j, j]);
      
      anim.push([j, j]);
      
      anim.push([k, auxArr[j]]);
      mainArray[k++] = auxArr[j++];
    }
  }