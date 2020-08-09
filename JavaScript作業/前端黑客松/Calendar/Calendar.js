//獲取當前日期
today = new Date();
var y;
var m;
var d;

function changemonth() {
  //獲取日期中的年份
  y = today.getFullYear();

  //獲取日期中的月份(需要注意的是：月份是從0開始計算，獲取的值比正常月份的值少1)
  m = today.getMonth();

  //獲取日期中的日(方便在建立日期表格時高亮顯示當天)
  d = today.getDate();



  //獲取當月的第一天
  firstday = new Date(y, m, 1);

  //取八月份有幾天
  monthall = (new Date(y, m + 1, 0).getDate())

  //判斷第一天是星期幾(返回[0-6]中的一個，0代表星期天，1代表星期一，以此類推)
  dayOfWeek = firstday.getDay()

  var day = 1; //日期變數

  //先選取tbody的位置
  var tbody = document.getElementsByTagName('tbody')[0];
  //清空tbody
  // tbody.innerHTML = '';
  // document.getElementById('August').innerText = `${new Date(year, month, 1).getFullYear()}年 ${new Date(year, month, 1).getMonth()+1}月`;

  //創立新的tr跟td元素,然後td讓他跑出七個
  //這邊是處理第一列
  var tr = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    let td = document.createElement('td');
    if (i >= dayOfWeek) {
      td.innerText = day
      day++
    }
    tr.appendChild(td)
  }
  tbody.appendChild(tr)


  //這邊開始處理剩下列數
  let rows = Math.ceil((monthall - day + 1) / 7);
  for (let row = 0; row < rows; row++) {
    let tr = document.createElement('tr');
    for (let col = 0; col < 7; col++) {
      let td = document.createElement('td');
      if (day <= monthall) {
        td.innerText = day
        day++
      }
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
}

changemonth()


function nextMonth()
{
  m++;
  changemonth();
}

function lastMonth()
{
  m--;
  changemonth();
}