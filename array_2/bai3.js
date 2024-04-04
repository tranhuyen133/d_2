var l = [1,3,5,7,9,2,4,6,8]
var a=[]
var b=[]
for(let i = 0 ; i< l.length ; i++ ){
    if(l[i]%2==0){
        a.push(l[i])
    }
    else {
        b.push(l[i])
    }
}
console.log(a)
console.log(b)