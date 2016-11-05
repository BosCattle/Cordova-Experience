/**
 * Created by kevin on 11/4/16.
 */
// 完成一次ajax请求。
$(document).ready(function () {
    $.showPreloader();
    console.log("妈的智障");
    $.get("http://192.168.3.4:8080/test/image.action", function (data, status) {
        var mineJson = JSON.parse(data.toString());
        // 循环更新数据
        $.toast("数据加载成功,总共"+mineJson.length+"条");
        $.hidePreloader();
        for (var i = 0; i < mineJson.length; i++) {
            var jsonElement = mineJson[i];
            var divHead = $("<div></div>").addClass('list-block media-list');
            var ulElement = $("<ul></ul>");
            var liElement = $("<li></li>");
            var aElement = $("<a></a>").addClass('item-link item-content');
            aElement.href="#";
            var imageElement = $("<div></div>").addClass('item-media');
            var imageChild = $("<img/>");
            imageChild.attr("src",jsonElement.image);
            imageChild.css("width","100px");
            imageChild.css("height","100px");
            var lastContainer = $("<div></div>").addClass('item-inner');
            var divTitleRole = $("<div></div>").addClass('item-title-row');
            var divTitle = $("<div></div>").addClass('item-title').text(jsonElement.title);
            var divRight = $("<div></div>").addClass('item-after').text('100$');
            divTitleRole.append(divTitle);
            divTitleRole.append(divRight);
            lastContainer.append(divTitleRole);
            imageElement.append(imageChild);
            aElement.append(imageElement);
            aElement.append(divTitleRole);
            liElement.append(aElement);
            ulElement.append(liElement);
            divHead.append(ulElement);
            $(".content").append(divHead);
        }
    });
});
function loadMineXmlData() {
    $.showPreloader();
    console.log("妈的智障");
    var mineXmlHttp = new XMLHttpRequest();
    // mineXmlHttp.open("GET","http://192.168.3.4:8080/test/image.action",true);
    mineXmlHttp.open("GET", "http://www.baidu.com", true);
    mineXmlHttp.send();
    mineXmlHttp.onreadystatechange = function () {
        if (mineXmlHttp.readyState == 4 && mineXmlHttp.status == 200) {
            // error
            var mineJson = JSON.parse(mineXmlHttp.responseText);
            // 循环更新数据
            for (var i = 0; i < mineJson.length; i++) {
                var jsonElement = mineJson.get(i);
                var divHead = "<div class='list-block media-list'></div>";
                var ulElement = "<ul></ul>";
                var liElement = "<li></li>";
                var aElement = "<a href='#' class='item-link item-content'></a>";
                var imageElment = "<div class='item-media'><img src=jsonElement.image style='width: 4rem;'></div>";
                var contentElement = "<div class='item-inner'> <div class='item-title-row'> <div class='item-title'>jsonElement.title</div> <div class='item-after'>$15</div> </div> <div class='item-subtitle'>标题</div> <div class='item-text'>此处是文本内容...</div> </div>"
                $(".content").after(divHead).after(ulElement).after(liElement).after(aElement).after(imageElment).after(contentElement);
            }
            $.hidePreloader();
        } else {
            $.hidePreloader();
            $.toast("操作失败，错误码："+mineXmlHttp.status);
        }
    };
}


