window.addEventListener("load", function(){
    var section = document.querySelector("#ex14");
    var tabMenuList = section.querySelector(".tab-menu-list");
    var contentList = section.querySelector(".content-list");

    tabMenuList.onclick = function(e){
        if(e.target.tagName != "A")
            return;

        e.preventDefault();

        var contentId = e.target.href.split("#")[1];

        for(var i=0; i<contentList.children.length; i++)
            contentList.children[i].classList.remove("current");

        var contentDiv = contentList.querySelector("#"+contentId);
        contentDiv.classList.add("current");
    };

});


window.addEventListener("load", function(){
    var section = document.querySelector("#ex13");
    var prevButton = section.querySelector(".prev-button");
    var nextButton = section.querySelector(".next-button");
    
    var imgList = section.querySelector(".img-list");
    var lis = imgList.children;
    
    nextButton.onclick = function(){
        var centerLi = imgList.querySelector(".center");
        var rightLi = centerLi.nextElementSibling;

        centerLi.classList.remove("center");
        centerLi.classList.add("left");
       
        rightLi.classList.remove("right");
        rightLi.classList.add("center");
    };
    prevButton.onclick = function(){

    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#ex12");
    var goButton = section.querySelector(".go-button");
    var container = section.querySelector(".container");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    goButton.onclick = function(e){
        var boxes = container.children;
               
        boxes[0].style.left = getRandomInt(600)+"px";
        boxes[0].style.top = getRandomInt(400)+"px";

    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#ex11");
    var delButton = section.querySelector(".del-button");
    var box = section.querySelector(".box");

    box.addEventListener("animationend", function(){
        box.parentElement.remove();
    });

    delButton.onclick = function(){
        box.classList.add("ani-slide-open");
    };

});
// 애니메이션
window.addEventListener("load", function(){
    var section = document.querySelector("#ex10");
    var showButton = section.querySelector("input");
    var dialog = section.querySelector(".dialog");
    var screen = section.querySelector(".screen");
    var content = section.querySelector(".content");
    
    screen.onclick = function(){
        dialog.classList.remove("show");
    };

    screen.addEventListener("transitionend", function(){
        content
        .style
        .display = "block";
    });

    showButton.onclick = function(){
        dialog.classList.add("show");
        //dialog.style.display = "block";

        //setTimeout(function(){
            //screen.style.opacity = 0.7;
        //}, 10);
        
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#ex9");
    var startButton = section.querySelector(".start");
    var stopButton = section.querySelector(".stop");
    var ball = section.querySelector(".ball");
    var cover = section.querySelector(".cover");
   
    startButton.onclick = function(){ 
        cover.style.transform = "rotate(-45deg)";       
        //ball.style.left = "300px";
       // ball.style.top = "300px";
       //ball.style.width = "300px";
        /*
        var ballStyle = getComputedStyle(ball);
        ball.style.left = ballStyle.getPropertyValue("left");
        ball.style.top = ballStyle.getPropertyValue("top");

        var tid = setInterval(function(){
            var left = parseInt(ball.style.left);
            var top = parseInt(ball.style.top);

            left += 1;
            top += 1;

            ball.style.left = left+"px";
            ball.style.top = top+"px";

            if(left >= 300)
                clearInterval(tid);
        },17);
        */
    };
    stopButton.onclick = function(){

    };
});


/*
1. Javascipt(미흡)
2. DOM+CSSOM(미흡)
3. 이벤트 객체
4. 애니메이션(only script, css animation)
5. Ajax
6. HTML5 API
*/
//- ex8 -- 트리거
window.addEventListener("load", function(){
    var section = document.querySelector("#ex8");
    var fileButton = section.querySelector("input[type=file]");    
    var trigButton = section.querySelector("input[type=button]");
    trigButton.onclick = function(e){        
        
        var event = new MouseEvent(
            "click",
            {
                view:window,
                bubbles:true,
                cancelable:true
            }
        );
        
        fileButton.dispatchEvent(event);
    };
});

//- ex7 -- 공지사항 조작하기
$(function(){
    var section = $("#ex7");
    var noticeTBody = section.find(".notice tbody");
    var loadButton = section.find(".btn-load");
    
    // var notices = [
    //     {
    //         id:6, 
    //         title:"뉴렉쌤 9월 초 국기과정 모집 안내",
    //         writerId:"newlec",
    //         regDate:"2019-06-11",
    //         hit:30
    //     },
    //     {
    //         id:5, 
    //         title:"뉴렉처 강의 수강 방식 안내",
    //         writerId:"newlec",
    //         regDate:"2019-05-24",
    //         hit:120
    //     },
    //     {
    //         id:4, 
    //         title:"자바 구조적인 프로그래밍 강의 예제 파일",
    //         writerId:"newlec",
    //         regDate:"2019-04-24",
    //         hit:231
    //     }
    // ];
    
    var page = 1;
    
    loadButton.click(function(){
        
        // 데이터 요청하기
        /*
       var request = new XMLHttpRequest();
        request.open("GET", "/notice/list-ajax?p=1", false);
        request.send();

        var data = "x=1&y=2&x=23&y=34";
        var request = new XMLHttpRequest();
        request.open("POST", "/notice/reg", false);
        request.send(data);

        var json = JSON.parse(request.responseText);
        
       $.ajax("/notice/list-ajax?p=1")
        .done(function(data){
            alert(data);
        });
       
       $.ajax({
           url:"/notice/list-ajax?p=1",
           dataType:"json",
           complete:function(request, status){
               //alert(request.responseText);
           }
       }).done(function(data){
           alert(data[0].title);
       });
        
      
       $.get("/admin/notice/list-partial")
       .done(function(partial){
           //alert(partial);
           noticeTBody.html(partial);
       });
        */
    	
    	$.get("/admin/notice/list-partial?p="+page++)
        .done(function(partial){
            
            $(partial)
            .css({opacity:0})
            .appendTo(noticeTBody)
            .animate({opacity:1});
        	
        	//noticeTBody.append(partial);
        });
    	
    	
    	
    	/*
    	noticeTBody
       .fadeOut(function(){
    	   noticeTBody
    	   .load("/admin/notice/list-partial?p="+page++)
    	   .fadeIn()
       });
       */
    	
       //console.log(json[0].title);
       // 대체하기 
       // notices = json;
       // 누적하기        
       notices = notices.concat(json);
       

        // 방법 3 : 템블릿 문자열을 이용한 DOM 조작 #3        
        var keys = Object.keys(notices[0]);
        var html = [];
        for(var j=0; j<notices.length; j++){
            html.push("<tr>");
            for(var i=0; i<5; i++)
                html.push("<td>"+notices[j][keys[i]]+"</td>");
            html.push("</tr>");
        }
        noticeTBody.innerHTML = html.join("");  
        //noticeTBody.innerHTML = html.toString();
        
        // 방법 2 : 템플릿 문자열을 이용한 DOM 조작 #2
        /*var keys = Object.keys(notices[0]);
        var html = "";
        for(var j=0; j<notices.length; j++){
            html += "<tr>";
            for(var i=0; i<5; i++)
                html += "<td>"+notices[j][keys[i]]+"</td>";
            html += "</tr>";
        }
        noticeTBody.innerHTML = html;
        */
        // 방법 2 : 템플릿 문자열을 이용한 DOM 조작 #1
        /*var keys = Object.keys(notices[0]);
        for(var j=0; j<notices.length; j++){
            noticeTBody.innerHTML += "<tr>";
            for(var i=0; i<5; i++)
                noticeTBody.innerHTML += "<td>"+notices[j][keys[i]]+"</td>";
            noticeTBody.innerHTML += "</tr>";
        }*/
        //noticeTBody.innerText = "<td>hello</td>";;

        // 방법 1 : 맨땅의 DOM 조작 #1 append     
        /*   
        var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];
        for(var j=0; j<notices.length; j++){
            var tr = document.createElement("tr");
            for(var i=0; i<5; i++){
                var td = document.createElement("td");
                var key = keys[i];
                // var txt = document.createTextNode(notices[j][key]);
                // td.appendChild(txt);
                td.append(notices[j][key]);
                tr.append(td);
            }

            noticeTBody.append(tr);
        }*/

        // 방법 1 : 맨땅의 DOM 조작 #1 appendChild
        /*
        var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];
        for(var j=0; j<notices.length; j++){
            var tr = document.createElement("tr");
            for(var i=0; i<5; i++){
                var td = document.createElement("td");
                var key = keys[i];
                var txt = document.createTextNode(notices[j][key]);
                td.appendChild(txt);
                tr.appendChild(td);
            }

            noticeTBody.appendChild(tr);
        }*/
        
    });
});

//- ex6 -- 노드 조작하기
window.addEventListener("load", function(){
    var section = document.querySelector("#ex6");
    var addTextButton = section.querySelector(".btn-add-text");
    var addElementButton = section.querySelector(".btn-add-element");
    var container = section.querySelector(".container");

    addElementButton.onclick = function(){
        var el = document.createElement("div");
        el.className = "box";
        container.appendChild(el);
    };

    addTextButton.onclick = function(){
        //document.write("안ㄴ여하세요");
        //h1.innerText = "안녕하세요";
        var textNode = document.createTextNode("안녕하세요");
        container.appendChild(textNode);
    };

});

//- ex5 -- 속성 다루기
$(function(){
    var section = $("#ex5");
    var button1 = section.find(".btn1");
    var button2 = section.find(".btn2");
    var img = section.find("img");
    var tid;

    button1.click(function(){
        img.attr("src", "http://mblogthumb3.phinf.naver.net/20130508_178/ichufs_1367997175282LLvRG_JPEG/IMG_3337s.jpg?type=w2");
        //img의 속성 아무거나 다올 수 있음 단 val은 빼고

        //img.fadeOut(3000);
    });

    button2.click(function(){
        //img.style["border-bottom"] = "3px solid blue";
        //img.style.borderBottom = "3px solid blue";
        img.css("border-bottom" , "3px solid blue")
            .animate({width: "200px"},1000)
            .animate({opacity: 0.5},1000, function(){
                button1.animate({width: "200px"},1000);
            });

        



        /*
        img.animate({
                        width: "200px"
                    },
                    3000);

        img.animate({
                        opacity: 0.5
                    },
                    3000);
        */
        /*너비를 200px로 줄이는 애니메이션
        var f1 = function(){
            var width = img.width();
            width -= 3;
            //img.style.width = width+"px";
            img.css("width" , width+"px");

            if(width <= 200)
                window.clearInterval(tid);
        };        
        if(tid == undefined)
            tid = window.setInterval(f1 ,17);
        */
    });



});

//- ex4 -- 노드 선택 방법 1~4 가지 --------------------
$(function(){
    var section = $("#ex4");

    // // 방법 4
    // var button = document.querySelector("#ex4>input");
    // var ul = section.querySelector("ul");
    // var lis = ul.querySelectorAll("li");
    // console.log(lis);

    // var lis = [lis[0], lis[1], lis[2], lis[3], lis[4]];
    // console.log(lis);


    // 방법 3
    //var button = section.firstChild; // 모든 자식 노드들
    var button = section
                    .children()
                    .first();
    //var button = section.firstElementChild; // 엘리먼트 자식 노드들
    //var ul = button.nextSibling;
    //var ul = button.nextElementSibling;
    var ul = button.next().next();

    var lis = ul.children();
    console.log(lis);

    // 방법 2
    //var button = section.childNodes[1]; // 모든 자식 노드들
    //var button = section.children[0]; // 엘리먼트 자식 노드들만
    //var ul = section.childNodes[2];
    //var ul = section.children[1];
    //var lis = ul.children;

    // 방법 1
    // var button = section.children("input").eq(0);
    // var ul = section.children("ul");
    // var lis = ul.children("li");

    button.click(function(){
        alert("헤헤");
        button.val("설정 헤헤")
        lis.eq(3).remove();
        //ul.appendChild(lis[3]);
   });
});

//- ex3 -----------------------
$(function(){
    var ex3Button = $("#btn-ex3");
    var view = $("#view");
    console.log("#view:" + view);
    var fwin = view.contentWindow;
    var fex3Button = fwin.document.getElementById("btn-ex3");
    
    ex3Button.click(function(){
        //var fwin = view.contentWindow;
        //var ex3Button = fwin.document.getElementById("btn-ex3")
        fex3Button.value = "안녕하세요";

        //window.location.href="http://www.newlecture.com";
        console.log(window.location.protocol);
    });
});


//- ex2 --------------------------------
$(function(){
    var countdownButton = $("#countdown-button");
    var countSpan = $("#count-span");
    var tid;

    countdownButton.click(function(){
        var f1 = function(){
            var count = parseInt(countSpan.text());
            count--;        
            countSpan.text(count);
            if(count == 0)
                clearInterval(tid);
        };        
        if(tid == undefined)
            tid = setInterval(f1 ,100);
    });
});


//- ex1 ------------------------------
//window.onload = function(){
//window.addEventListener("load", function(){
$(function(){
    var inputX = $("#x-input");
    var inputY = $("#y-input");
    var resultButton = $("#btn-result");
    
    //resultButton.onclick = function(){
    //resultButton.bind("click",function(){
    resultButton.click(function(){
        var x = parseInt(inputX.val());
        var y = parseInt(inputY.val());
        alert(x+y);
    });
});