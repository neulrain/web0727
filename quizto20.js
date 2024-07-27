//문11
const fourDimension = [
    ['a', null],
    [1, undefined],
    [NaN, true],
    ['', 0],
]

//문12
let array = []
for (let i = 0; i < 5; i++){
    array[i] = [];
    for (let j = 0; j < 4; j++){
        array[i][j] = 1;
    }
}
console.log(array)

/* 
//innerArray로 [1,1,1,1]를 만들어서 array에 추가하는 모범답안

const array = [];
for (let i = 0; i < 5; i++){
    const innerArray = [];
    for(let j = 0; j < 4; j++) {
    innerArray.push(1);
    }
    array.push(innerArray)
}
*/

//문13
const multifly = (x, y, z) => {
    return x * y * z
};
console.log(multifly(4,3,5))

//문14  - 23
const hof = (a) => (b) => (c) => {
    return a + (b * c);
};
const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third)

/* 
// first
(b) => (c) => {
    return 3+ (b * c);
    }

// second
(c) => {
    return + (4 * c);
    }

//third
3 + (4 * 5)
*/

//문15
const hanaduri = {
	name: {
		first: 'hana',
		last: 'duri',
	},
    gender: 'm'
}
hanaduri['name']['last'] = 'duriduri'

console.log(hanaduri)

//문16
{
const a = {
    name: '강아지',
};
const b = a;
const c = b;

a.name = '고양이'
console.log(b);
console.log(c);
}

//문17
{
const a = 'b'
const c = ['d', true, 1];
const e = {g: 'h'}
const i = [{j: 'k'}, {l: 'm'}];
const n = {o: {p: 'q'}};

let deepA = a;
let deepC = c.slice()
let deepE = {...e}
let deepI = JSON.parse(JSON.stringify(i));
let deepN = JSON.parse(JSON.stringify(n));
}

//문18
{
const obj = {
    a: 'hello',
    b: {
        c: 'hi',
        d: {e: 'wow'},
    },
};

const a1 = obj.a;
const c1 = obj.b.c;
const e1 = obj.b.d.e;

const {a, b: {c, d: {e}}} = obj;

}

//문19
{
const array = [1,3,5,7]
for (let i = 0; i < array.length; i++) {
    console.log(array[i], i)
}
}

//문20
const oddNum = Array(5).fill().map((v, i) => i * 2 + 3);
console.log(oddNum);