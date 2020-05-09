function isPrime(n){
    for(var i=2;i<n;i++){
        if(n%i === 0)
        return false;
    }
    return true;
}
a=8,b=20,c=0;
for(i=a;i<=b;i++){
    if(isPrime(i)){
        c=c+1;
    }
}
console.log('countPrime(8,20)=',c);