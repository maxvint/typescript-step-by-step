/**
 * 冒泡排序
 * 比较相邻2个元素，如果第1个比第2个大，就交换它们2个
 * 时间复杂度: O(n²)
 * 空间复杂度: O(1)
 * @param arr 待排序数组
 */
export const BubbleSort = (arr: any[]) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}

/**
 * 选择排序
 */

/**
 * 插入排序
 */

/**
 * 希尔排序
 */

export default {
  BubbleSort
  // uniqueSet
}
