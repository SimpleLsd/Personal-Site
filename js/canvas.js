// alert('success!');

window.onload = convasDefult();

function convasDefult() {

    var leftButtonC = document.getElementById("leftButtonC");
    var lBCCtx = leftButtonC.getContext("2d");

    var rightButtonC = document.getElementById("rightButtonC");
    var rBCCtx = rightButtonC.getContext("2d");

    // 左箭头绘制
    lBCCtx.beginPath();
    lBCCtx.moveTo(28, 22);
    lBCCtx.lineTo(20, 30);
    lBCCtx.lineTo(28, 38);
    lBCCtx.moveTo(20, 30);
    lBCCtx.lineTo(68, 30);

    lBCCtx.strokeStyle = "black";
    lBCCtx.lineWidth = "2";
    lBCCtx.stroke();

    // 右箭头绘制
    rBCCtx.beginPath();
    rBCCtx.moveTo(52, 22);
    rBCCtx.lineTo(60, 30);
    rBCCtx.lineTo(52, 38);
    rBCCtx.moveTo(60, 30);
    rBCCtx.lineTo(12, 30);

    rBCCtx.strokeStyle = "black";
    rBCCtx.lineWidth = "2";
    rBCCtx.stroke();

}