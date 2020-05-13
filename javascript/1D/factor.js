function factor(n){
    var array=[];
    var a=2;
    while(n>1){
        if(n%a==0){
            array.push(a);
            n=n/a;
            continue;
        }
        a++;
    }
    return array;
}
console.log(factor(753489578934));