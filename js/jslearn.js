window.onload = function(){
    //点击超链接删除信息

    var allA = document.getElementsByTagName("a")

    for(var i = 0 ; i<allA.length ; i++){
        allA[i].onclick = function(){
            var tr = this.parentNode.parentNode;
            var text = tr.getElementsByTagName("td")[0].innerHTML;
            
            if(confirm("DELETE " + text + " ?"))
                tr.remove()

            // alert("hello")

            return false;
        }
    }





}