function array(a,b){
let c=[]
let i=0
while(i<a.length){
c.push(a[i])
i++
}
let k=i
for(let t of b){
    c.push(t)
}
console.log(c)
}


array([12,34,35,66],[1,2,3,4,5])