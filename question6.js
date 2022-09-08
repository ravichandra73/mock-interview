function prime(n){
    let i=0,f=0,arr=[],s=0
    while(i<=n){
        if(n%i==0){
            f++
            arr.push(i)
        }
        i++
    }
console.log(arr)
}

prime(7)

