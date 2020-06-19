window.onload = function() {

    function delA() {
        var tr = this.parentNode.parentNode;
        var text = tr.getElementsByTagName("td")[0].innerHTML;

        if (confirm("DELETE " + text + " ?"))
            tr.remove()

        // alert("hello")

        return false;
    }
    //点击超链接删除信息

    var allA = document.getElementsByTagName("a")

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

    aeraDiv.onmousemove = function() {
        alert("wodongle")
    }

}