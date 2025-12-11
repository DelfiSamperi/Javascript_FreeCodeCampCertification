let table2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log('Table of 2:');
console.log(table2);

let table3 = []; //0,3,6,9,12,15,18,21,24,27,30
for (let i = 0; i <= 10; i++) {
    let value = i * 3;
    table3.push(value);
};
console.log('Table of 3:');
console.log(table3);

let table4 = []; //0,4,8,12,16,20,24,28,32,36,40
table2.forEach(num => { 
    num * 2;
    table4.push(num * 2);
});
console.log('Table of 4:');
console.log(table4);

let table5 = [];
for (let i = 0; i <= 10; i++) {
    let value = i * 5;
    table5.unshift(value);
};
console.log(table5);
console.log('Reversing table 5:');
table5.reverse();
console.log(table5);

let table6 = [];
table2.map(num => {
    table6.push(num * 3);
});
console.log(table6);

let table7 = [];
for(i = 0; i < table3.length; i++) {
    for(i = 0; i < table4.length; i++) {
        let value = table3[i] + table4[i];
        table7.push(value);
    };
};
console.log('Table of 7:');
console.log(table7);


let table10 = table5.filter(num => num % 10 === 0);
console.log('Table of 10:');
console.log(table10); // [0, 10, 20, 30, 40, 50]
