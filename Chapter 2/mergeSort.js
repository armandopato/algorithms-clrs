function mergeSort(arr)
{
    const copy = [...arr];
    mergeSortAux(copy, 0, copy.length - 1);
    return copy;
}


function mergeSortAux(arr, first, last)
{
    const size = last - first + 1;
    if (size <= 1) return;
    else if (size === 2)
    {
        if (arr[first] > arr[last])
        {
            [arr[first], arr[last]] = [arr[last], arr[first]];
        }
        return;
    }

    const half = Math.floor( (first + last) / 2);
    mergeSortAux( arr, first, half );
    mergeSortAux( arr, half + 1, last );
    merge(arr, first, half, last);
}


function merge(arr, first, half, last)
{
    const arr1 = [];
    const arr2 = [];

    for (let i = first; i <= half; i++)
    {
        arr1.push( arr[i] );
    }

    for (let i = half + 1; i <= last; i++)
    {
        arr2.push( arr[i] );
    }

    let mainIdx = first;
    let secondIdx = 0;

    for (let i = 0; i < arr1.length; i++)
    {
        while (secondIdx < arr2.length && arr1[i] > arr2[secondIdx])
        {
            arr[mainIdx] = arr2[secondIdx];
            mainIdx++;
            secondIdx++;
        }

        arr[mainIdx] = arr1[i];
        mainIdx++;
    }

    // Add remaining elements if necessary
    if (secondIdx < arr2.length)
    {
        for (let i = secondIdx; i < arr2.length; i++)
        {
            arr[mainIdx] = arr2[i];
            mainIdx++;
        }
    }
}


exports.mergeSort = mergeSort;