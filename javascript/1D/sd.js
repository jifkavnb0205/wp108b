function SD(n){
    ans=0;
    aver=0;
    s=0;
    for(i=0;i<n.length;i++){
        aver=n[i]+aver;
    }
    aver=aver/n.length;
    aver=aver*aver;
    for(j=0;j<n.length;j++){
        s+=n[j]*n[j];
    }
    s=s/n.length;
    ans=Math.sqrt(s-aver);
    return ans;
}
var a=[3,755,843,9,2557,15777];
console.log(SD(a));