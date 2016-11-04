/**
 * Created by kevin on 11/4/16.
 */
// 完成一次ajax请求。
function loadMineXmlData() {
    $.showPreloader();
    setTimeout(function () {
        $.hidePreloader();
        console.log("妈的智障1");
    }, 2000);
    console.log("妈的智障");
    var mineXmlHttp ;
    if (window.XMLHttpRequest){
        mineXmlHttp = new XMLHttpRequest();
    }else {
        mineXmlHttp = new ActiveXObject();
    }
    mineXmlHttp.onreadystatechange = function () {
        if (mineXmlHttp.readyState==4&&mineXmlHttp.status==200){
            // error
            var mineJson = JSON.parse(mineXmlHttp.responseText);
            //循环更新数据
            document.getElementsByClassName('');
        }else {

        }
        $.hidePreloader();
    };
    mineXmlHttp.open("GET","",true);
    mineXmlHttp.send();
}


