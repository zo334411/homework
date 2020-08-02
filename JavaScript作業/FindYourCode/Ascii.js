//Ex

for (let i = 0; i < 255; i++) {
    console.log(i + "," + String.fromCharCode(i));
}

//Ex
let allCode = "";
for (let i = 33; i < 65536; i++) {
    allCode += String.fromCharCode(i)
}
console.log(allCode);



//找到自己名字的號碼
function getCharCode(NameChar) {
    for (let i = 33; i < 65536; i++) {
        if (NameChar == String.fromCharCode(i)) {
            return i;
        }
    }
}

console.log(getCharCode("王"));
console.log(getCharCode("昆"));
console.log(getCharCode("泉"));





