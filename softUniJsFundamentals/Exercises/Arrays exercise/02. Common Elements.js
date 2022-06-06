function commonElements(arr1,arr2){
    for (let i=0;i<arr1.length;i++){
        let current = arr1[i];
    
    for (let j =0;j<arr2.length;j++){
        if (current === arr2[j]) {
            console.log(current);
        }
    }
}
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);