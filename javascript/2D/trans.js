function tran(a){
    var b=[];
    for(var i in a[0]){
        b[i]=[];
        for(var j in a){
            b[i][j]=a[j][i]; 
        }
    }
    return b;
}
var a=[[1,2,3],[3,2,1]];
console.log(tran(a));

