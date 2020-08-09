//創立新的陣列Set放入answer,重複的數字會視而不見
var answer = new Set();

//創立空的陣列
var ansarray = [];

//建亂數公式
function getRandomInt(max) {
    let num = Math.floor(Math.random() * Math.floor(max));
    console.log('num=' + num);
    return num;
}

//先選定開始遊戲的位置
let startbtn = document.querySelector(".btn-start");

//點擊後要發生的事
startbtn.addEventListener("click", function () {
    startgame();
    //按了開始遊戲就鎖住了
    this.disabled = true;
});


//while-->要跑出四個數字就好,所以answer.size < 4,然後用亂數方法去跑出數字再放到變數A裡面
//for迴圈-->把answer跑出的數字,放到陣列裡面
function startgame() {
    while (answer.size < 4) {
        let A;
        A = getRandomInt(9);
        answer.add(A);
        console.log(answer);
    }

    for (let i = 0; i <= 9; i++) {
        if (answer.has(i)) {
            console.log(i);
            ansarray.push(i);
        }
    }
    console.log(ansarray);
}



//先選定放棄重來的位置
let resetbtn = document.querySelector(".btn-reset");

resetbtn.addEventListener("click", function () {
    reset();
    startbtn.disabled = false;
});

function reset() {
    ansarray = [];
    console.log(ansarray);
    answer.clear();
    console.log(answer);
}




//先選定查看答案的位置
let seeansbtn = document.querySelector(".btn-see-answer");

seeansbtn.addEventListener("click", function () {
    seeanswer();
});

function seeanswer() {
    A = (ansarray[0].toString());
    B = (ansarray[1].toString());
    C = (ansarray[2].toString());
    D = (ansarray[3].toString());
    E = (A + B + C + D)
    console.log(E)
}



let userinput = document.querySelector(".form-control");
let gobtn = document.querySelector(".btn-Go");
gobtn.addEventListener("click", function () {
    go();
});


//清空輸入框
function clearInput() {
    userinput.value = "";
}

function go() {
    //為了要出現使用者猜的為幾A幾B先預設
    let A_count = 0;
    let B_count = 0;

    //取得輸入的字串 把字串拆成陣列做比對
    let inpstr = userinput.value; //1234
    inpAry = inpstr.split(''); //["1", "2", "3", "4"]
    console.log(inpAry);

    //開始比對正確答案跟使用者輸入
    for (let i = 0; i < ansarray.length; i++) {
        for (let j = 0; j < inpAry.length; j++) {
            //數字對,位置對
            if (ansarray[i] == inpAry[j] && i == j) {
                A_count++;
            }
            //數字對,位置不對
            else if (ansarray[i] == inpAry[j]) {
                B_count++;
            }
        }
    }
    clearInput();
    setRecord(A_count, B_count, inpstr)
    console.log(A_count + "A" + B_count + "B");
}



let guessrecorder = document.querySelector(".list-group");
let record_li = "";
//遊戲紀錄
function setRecord(A_count, B_count, inpstr) {

    if (A_count != 4) {
        record_li += `<li class="list-group-item border mb-3"> <span>${inpstr} : </span>
       <span class="badge badge-danger">${A_count}A${B_count}B</span></li>`;
    }

    //4A
    else {
        record_li += `<li class="list-group-item border mb-3"> <span>${inpstr} : </span>
        <span class="badge badge-success">${A_count}A${B_count}B</span></li>`;
        alert("恭喜答對了~~");
    }
    guessrecorder.innerHTML = record_li;
}