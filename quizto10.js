//문1
console.log('문자열이 긴 경우에는 ' + '문자열을 '+'나눈 뒤 '+'다시 합칩니다.')

//문2
console.log(3 ** (2 + 1))

//문3
console.log((5 + 4) * 3 === 27)

//문4
console.log(0 || 1)
console.log(1 || 0)
console.log(1 ?? 0)

//문5
{
let a = 2;
let b = 3;
let temp = a;
a = b;
b = temp;
console.log(a, b)
}

{
let a = 5;
let b = 3;
[b, a] = [a, b]
console.log(a, b)
}

//문6

let cond = true
let value = '';
{
switch (cond) {
    case true:
        value = '참';
        break
    case false:
        value = '거짓';
        break
}
console.log(value)
}


{
cond ? value = '참' : value = '거짓';
console.log(value)
}

//문7
/*
for (i = 0; i < 100; i++) {
    console.log(i+1)
}
*/

//문8
for (i = 0; i <= 9; i++) {
    if (i % 2 === 0)
        continue
    for (j = 0; j <= 9; j++){
        if (j % 2 === 0)
            continue;
        console.log(i + ' * ' + j + ' = ' + (i*j));
    }
}

//문9
{
let arr = ['a','b','c','d','e']

console.log(arr.at(-3))
}

//문10
{
const arr = ['가', '라', '다', '라', '마', '라']

for (i = 0; i < arr.length; i++) {
    if (i === arr.indexOf('라')) {
    arr.splice(i, 1)
    }
}

console.log(arr)
}

