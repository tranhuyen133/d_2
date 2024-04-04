var a = parseInt(prompt("Nhập số a:"));
var b = parseInt(prompt("Nhập số b:"));

let numbers = [];
// Lưu các số chia hết cho b trong khoảng từ 1 đến a
     for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            numbers.push(i);
        }
    }

 // Lưu các số chia hết cho a trong khoảng từ 1 đến b
    for (let i = 1; i <= b; i++) {
     if (i % a === 0 && !numbers.includes(i)) {
            numbers.push(i);
         }
     }
console.log(numbers);