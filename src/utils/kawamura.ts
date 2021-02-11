// 他ファイルで呼び出したいので、exportを記述する
export class kawamura {
    // どこからでも呼び出せるようにするためにstaticを記述する必要あり
    public static bubbleSort(array: number[]){
        let addArray: number[] = [];
        console.log("----------------------")
        console.log("オリジナル配列",array)
        var n = 0;
        console.log("配列の長さ",array.length);
        while(true){
            if(n === 0){
                // console.log("loop",n);
                // console.log("追数",array[0]);

                // 初回loop
                addArray.push(array[0]);
                array.shift();
            }else if(n === 1){
                // console.log("loop",n-1);
                // console.log("追数",array[0]);

                // 1週目loop
                this.compareFuncSize(array[0], addArray, array);
            }else{
                // 2週目以降loop
                console.log("loop",n-1);
                // ↓のarrayは先頭から動かしていくので、結局毎回0番目を取得することになる
                // console.log("追数",array[0]);
                this.compareFuncNum(array[0], addArray, array);

                if(n === 5){
                    break;
                }
            }
            n++;
            // console.log("新規配列",addArray)
            // console.log("最初の配列",array)
            console.log("-")
        }
        // return addArray;//(最後にここを返す)
    }

    // TODO：ロジック検討 配列内で数字を比較して場所を入れ替え
    private static compareFuncNum(addNum:number, addArray:number[], originArray:number[]) {
        // 新しく作成した配列の長さを取得し、その真ん中の数字と数の大きさを比較する
        // 真ん中の数字を取得して、その数より大きかったらより大きな方へ移動させていく
        // 真ん中の数字を取得して、その数より小さかったらより小さな方へ移動させていく
        console.log("追数",addNum);
        console.log("新配",addArray);
        console.log("元配",originArray);
        if(addArray[addArray.length-1] < addNum){
            addArray.push(addNum);
            originArray.shift();
        }else if(addArray[addArray.length-1] > addNum){
            // 新規配列の中の数字よりも小さいパターン
            addArray.unshift(addNum);
            originArray.shift();
        }

        
        // ここで新規配列の中身を見て、順番通りに並び替える

    }

    // 1週目loop時に2つの値の大きさのみ比較
    private static compareFuncSize(addNum:number, addArray:number[], originArray:number[]) {
        // 新規配列の中の数字よりも大きいパターン
        if(addArray[addArray.length-1] < addNum){
            console.log("値大きい")
            console.log("小【配列内の数】",addArray[addArray.length-1])
            console.log("大【追加される数】",addNum)
            addArray.push(addNum);
            originArray.shift();
        }else if(addArray[addArray.length-1] > addNum){
            // 新規配列の中の数字よりも小さいパターン
            console.log("値小さい")
            console.log("大【配列内の数】",addArray[addArray.length-1])
            console.log("小【追加される数】",addNum)
            addArray.unshift(addNum);
            originArray.shift();
        }
    }
}

// バブルソート手法ver1
// ↓をオリジナル配列の中身がある限り繰り返す
// ①配列を1つ用意する(addArray)
// ②初回はaddArrayに値を追加する
// ③2回目以降はaddArrayの値を比較して大きかったら配列の末尾に追加(push)
// ④オリジナル配列から追加した値を削除する

// バブルソート手法ver2
// アルゴリズム図鑑の動きを1ブロック(1ムーブ)再現する
// ↑をloopでできる方法を探す