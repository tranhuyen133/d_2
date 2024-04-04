var number = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,3,6,7,1,8,9,9,8,7,6,5,7,4,2];
var n = parseInt(prompt("Nhập số nguyên bất kì"));
var cout = 0;
for(var i =0;i < number.length;i++){
    if(number[i]==n)
    cout++;
}
console.log("Phần tử" + n + "xuất hiện" + cout + "lần");

