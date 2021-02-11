// 他ファイルで呼び出したいので、exportを記述する
export class sort {
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

    private static swap(array:number[], index1:number, index2:number):Array<number>{
        let array2 = [array[index2], array[index2]=array[index1]];
        array[index1] = array2[0];
        return array;
    }

    // 選択ソート
    public static selectSort(array: number[]): number[]{
        console.log("乱配",array);
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
}
