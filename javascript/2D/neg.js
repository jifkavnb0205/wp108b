function neg(a){
    var b=[];
    for(i=0;i<a.length;i++){
        b[i]=[];
        for(j=0;j<a[i].length;j++){
            b[i][j]=a[i][j]*-1;
        }
    }
    return b;
}
var a=[[321,123],[89,174]];
console.log(neg(a));