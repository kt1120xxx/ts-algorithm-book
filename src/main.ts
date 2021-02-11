import { ArrayUtil } from './utils/arrayUtil';
// 使用したいtsファイルをimportする
import { sort } from './utils/sort';

console.log(ArrayUtil.is([]));

// 配列を作成するメソッドを切り出す場合はこっちに記述
// let array: number[] = [];

/***
 * min以上max未満の乱数を返却する。
 *
 * @param number min 最小値（整数）
 * @param number max 最大値（整数）
 * @returns number 乱数
 */
function getRandomInt({ min, max }: { min: number; max: number }): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  
/**
 * 整数の乱数配列を生成する。
 *
 * @param max number ランダムに生成する数値範囲の最大
 * @param length number 生成する配列の長さ
 * @returns 整数の乱数配列
 */
function getRandomArray({ min, length }: { min: number; length: number }) {
    const arr = [];
    let initAry = [];
    for (let i = 0; i < length; i++) {
        initAry.push(min + i);
    }
    while (initAry.length > 0) {
        arr.push(
        initAry.splice(getRandomInt({ min: 0, max: initAry.length }), 1).slice(-1)[0]
        );
    }
    return arr as number[];
}


function start(){
    // ↓globalで配列を作成したものを受け取る際に必要
    // array = getRandomArray({min:0,length:100});

    // ↓sort classのバブルソートメソッドに乱数配列を渡して、結果を返す
    // ↓バブルソート
    // return sort.bubbleSort(getRandomArray({min:0,length:10}));

    // 選択ソート
    return sort.selectSort(getRandomArray({min:0,length:5}));
}

// メソッド呼び出し
console.log(start());