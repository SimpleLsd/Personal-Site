//设置imglist宽度
var imgList = document.getElementById("imgList")

var imgArr = document.getElementsByTagName("img")
imgList.style.width = imgArr.length * 520 + "px";

var navDiv = document.getElementById("navDiv")
navDiv.style.left = `${255 - navDiv.clientWidth / 2}px`;

var allAA = document.querySelectorAll("#navDiv a")
var index = 0;
var leftIndex = 0;

allAA[index].style.backgroundColor = "#000"

for (var i = 0; i < allAA.length; i++) {

    allAA[i].num = i

    allAA[i].onclick = function() {
        if (this.num == 0) {
            imgList.style.left = -520 * 0 + "px"
            leftIndex = 1

        } else {
            imgList.style.left = -520 * this.num + "px"
            leftIndex = this.num
        }

        for (var i = 0; i < allAA.length; i++) {
            allAA[i].style.backgroundColor = "#fff"
        }

        allAA[this.num].style.backgroundColor = "#000"
    }
}


function showTime() {

    for (var i = 0; i < allAA.length; i++) {
        allAA[i].style.backgroundColor = "#fff"
    }
    allAA[leftIndex % 5].style.backgroundColor = "#000"

    if (leftIndex % 5 == 0) {
        imgList.style.left = 5 * -520 + "px"
        setTimeout(function() {
            imgList.style.transition = "none"
            imgList.style.left = 0;
        }, 500);
    } else {
        imgList.style.left = leftIndex % 5 * -520 + "px"
    }

    leftIndex += 1;
    imgList.style.transition = "all 300ms 0s ease-out"

    setTimeout("showTime()", 1000);
}

showTime();


function delA() {
    var tr = this.parentNode.parentNode;
    var text = tr.getElementsByTagName("td")[0].innerHTML;

    if (confirm("DELETE " + text + " ?"))
        tr.remove()

    // alert("hello")

    return false;
}
//点击超链接删除信息

var allA = document.querySelectorAll("table a")

for (var i = 0; i < allA.length; i++) {
    allA[i].onclick = delA
}

var addEmpButton = document.getElementById("addEmpButton");
addEmpButton.onclick = function() {
    // alert("6");
    var empName = document.getElementById("empName").value;
    var email = document.getElementById("email").value;
    var salary = document.getElementById("salary").value;

    // alert(empName + email + salary);
    var newTr = document.createElement("tr")

    var nameTd = document.createElement("td")
    var emailTd = document.createElement("td")
    var salaryTd = document.createElement("td")
    var aTd = document.createElement("td")

    var a = document.createElement('a')
    a.innerHTML = "delete";
    a.href = "";
    a.onclick = delA;

    nameTd.innerHTML = empName;
    emailTd.innerHTML = email;
    salaryTd.innerHTML = salary;
    aTd.appendChild(a)

    newTr.appendChild(nameTd);
    newTr.appendChild(emailTd);
    newTr.appendChild(salaryTd);
    newTr.appendChild(aTd);
    // console.dir(newTr);

    document.getElementById("TABLE").getElementsByTagName("tbody")[0].appendChild(newTr);

}

var box1 = document.getElementById("box1");
document.getElementById("btn01").onclick = function() {
    box1.style.height = "140px";
}

document.getElementById("btn02").onclick = function() {
    alert(getComputedStyle(box1, null).height);
}

var aeraDiv = document.getElementById("areaDiv")
var showMsg = document.getElementById("showMsg")

aeraDiv.onmousemove = function(event) {
        // alert("wodongle")
        var x = window.event.clientX;
        var y = window.event.clientY;
        // alert(x+","+y)
        showMsg.innerHTML = "&nbspx = " + x + "  , y = " + y;
    }
    /*
    var box3 = document.getElementById("box3");

    document.onmousemove = function(event){

        var left = event.pageX;
        var top = event.pageY;

        box3.style.left = left + "px";
        box3.style.top = top + "px";

    }
    */