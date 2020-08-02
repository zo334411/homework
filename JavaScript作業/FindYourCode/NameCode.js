//Ex
//1.檢查不得為空白或非String型別   
//2.一次傳遞完整姓名至function參數   
//3.將結果儲存成Array陣列   
//4.顯示Code


fullCharCode("王昆泉");
let A = [];
function fullCharCode(name) {
    for (let i = 0; i < name.length; i++) {
        for (let j = 33; j < 65536; j++) {
            if (name[i] == String.fromCharCode(j)) {
                A.push(j);
            }
        }
    }
    console.log(A);
}

