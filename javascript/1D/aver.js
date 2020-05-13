function aver(arr){
    a=0;
    for(i=0;i<arr.length;i++){
        a=arr[i]+a;
    }
    a=a/arr.length;
    return a;
}
var ar=[854,920,754,928475,8488];
console.log(aver(ar));
