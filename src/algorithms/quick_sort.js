export function getQuickSortAnimations(array) {
    const anim = [];
    if (array.length <= 1) return array;
    const auxArr = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxArr, anim);
    return anim;

    function quickSortHelper(
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
