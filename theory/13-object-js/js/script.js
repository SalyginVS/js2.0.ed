const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    7 : 8,
    'villa de': 3040,
};


a.yyyy = 555;
a.b = 'uuu';
delete a.a;

console.log(a);
console.log(a.z2);

let k = 'y43';

console.log(a[k]);
console.log(a);

// document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a) {
    //out += key + ' --- ' + a[key] + '<br> ';
    out += `${key} --- ${a[key]}<br>`
}
document.querySelector('.out').innerHTML = out;