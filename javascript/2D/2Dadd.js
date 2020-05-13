function add(a,b){
    var arr=[];
    for (i=0;i<a.length;i++){
        arr[i]=[];
        for(j=0;j<a[i].length;j++){
            arr[i][j]=a[i][j]+b[i][j];
        }
    }
    return arr;
}
var a=[[7,8],[6,2]],b=[[6,8],[6,8]];
console.log(add(a,b))