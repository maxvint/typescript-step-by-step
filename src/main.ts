import * as Algorithm from './algorithm/Sort'

/**
 * Copyright (c) 2016-2017 MarkArtisan.com.
 * Released under the MIT license.
 * Author: Max Yu <max@markartisan.com>
 */

/**
 * 数组中第一次重复的项
 */
const array = [4, 5, 6, 7, 1, 2, 4, 5, 6, 7, 8, 9, 3]
const unique = (arr: any[]) => {
  arr.sort()
  const len = arr.length
  let res = []
  for (let i = 0; i < len; i++) {
    // console.log(arr[i])
    if (arr[i] === arr[i + 1]) {
      res = arr[i]
      break
    }
  }
  return res
}

/**
 * 统计字符串中出现次数最多的字符
 */
const string = 'asdfghjklaqeeewertyeeeuioeeepieeeaia'
const strChar = (str: string) => {
  const strArr = str.split('')
  const obj = {}
  let max = 0
  let res = ''
  strArr.forEach((element: string) => {
    obj[element] = obj[element] === undefined ? 1 : obj[element] + 1
    if (obj[element] > max) {
      max = obj[element]
      res = element
    }
  })
  return res
}
strChar(string)

/**
 * 冒泡排序 升序
 * 比较相邻2个元素，如果第一个比第二个大，交互它们
 * @param arr
 */
const bubbleSort = (arr: number[]) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < arr[j]) {
        // const temp = arr[j] // 第2个
        // arr[j] = arr[i] // 第2个等于第1个
        // arr[i] = temp // 第1个等于tmp
        // 解构赋值
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
bubbleSort(array)

const quickInsert = (element, arr) => {
  arr.push(element)
  arr.sort((a, b) => b - a)
}
// quickInsert(3, array)

const binarySearch = (element, arr, start?, end?) => {
  // const mid: number = parseInt(String(len / 2))
  console.log(arr);
  start = start || 0
  end = end || arr.length - 1
  const len: number = start + (end - start)
  const mid: number = parseInt(String(len / 2))
  if (element === arr[mid]) {
    return mid
  } else if (element > arr[mid]) {
    // 右侧查找
    // return binSearch(element, arr, mid + 1, end)
  } else {
    // 左侧查找
    console.log(element)
    // return binSearch(element, arr, start, mid - 1)
  }
  return -1
}

const binarySearchWithoutsort = (element, arr: any[]) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (element === arr[mid]) {
      return mid
    } else if (element > arr[mid]) {
      start = mid + 1
    } else {
      // console.log(element)
      end = mid - 1
    }
  }
  return -1
}

const order = bubbleSort(array)
console.log(order)
console.log(binarySearchWithoutsort(13, order))

export default {
  Algorithm
}
