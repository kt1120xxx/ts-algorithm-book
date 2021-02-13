// 他ファイルで呼び出したいので、exportを記述する
export class Sort {
    // key配置変換
    private static swap(array:number[], index1:number, index2:number):Array<number>{
        let array2 = [array[index2], array[index2]=array[index1]];
        array[index1] = array2[0];
        return array;
    }

    // どこからでも呼び出せるようにするためにstaticを記述する必要あり
    // バブルソート
    public static bubbleSort(array: number[]): Array<number>{
        for(let i=0; i<array.length; i++){
                for(let n=0; n<array.length; n++){
                    if(array[array.length-n-1] < array[array.length-n-2]){
                        this.swap(array, array.length-n-1, array.length-n-2);
                    }
                }
        }
        return array;//(最後にここを返す)
    }

    // 挿入ソート
    public static insertSort(array: number[]): number[]{
        const newArray: number[] = [];
        for(let i=0; i<array.length; i++){
            // 1番目は新配列に追加
            if(i===0){
                newArray.push(array[i]);
            }else{
                // 次の数字が、新配列の末尾より大きい時は末尾に追加
                if(newArray[newArray.length-1]<array[i]){
                    newArray.push(array[i]);
                }else{
                    // 次の数字が、新配列の末尾より小さい時は新配列の中で次の数字より小さい場所か、左端かを判定
                    for(var n=newArray.length; n>0; n--){
                        if(newArray[n-1] < array[i] || n-1===0){
                            let setPotision = newArray[n-1] > array[i] ? 0 : n;
                            newArray.splice(setPotision, 0, array[i]);
                            break;
                        }
                    }
                }
            }
        }
        return newArray;
    }

    // 選択ソート1
    public static selectSort1(array: number[]): number[]{
        for(let i=0; i<array.length; i++){
            // 配列の中で最小値(keyと同じ値)を見つける
            for(let n=0; n<array.length; n++){
                // indexを入れ替える
                if(array[n]===i){
                    this.swap(array, i, n);
                }
            }
    }
        return array;
    }
    // 選択ソート2
    public static selectSort2(array: number[]): number[] {
        const sorted: number[] = [];
        for (let i = array.length - 1; i >= 0; i--) {
            let min = i;
            for (let n = 0; n < array.length; n++) {
                min = array[min] > array[n] ? n : min;
                if (array.length - 1 === n) {
                    sorted.push(array.splice(min, 1)[0]);
                }
            }
        }
        return sorted;
    }
}