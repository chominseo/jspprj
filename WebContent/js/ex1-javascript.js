/*
1. Javascipt
2. DOM+CSSOM
3. 이벤트 객체
4. 애니메이션(only script, css animation)
5. Ajax
6. HTML5 API
*/
window.addEventListener("load", function(){
    var section = document.querySelector("#ex14");
    var tabMenuList = section.querySelector(".tab-menu-list");
    var contentList = section.querySelector(".content-list");
 

    tabMenuList.addEventListener("click", function(e){
        if(e.target.tagName != "A")
            return;
        e.preventDefault();

        var contentId = e.target.href.split("#")[1];

        for(var i=0; i<contentList.children.length; i++)
             contentList.children[i].classList.remove("current");

        var contentDiv = contentList.querySelector("#"+contentId);
        contentDiv.classList.add("current");
    
    });

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
        var leftLi = centerLi.previousElementSibling;

        leftLi.classList.remove("left");
        leftLi.classList.add("center");
        
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
      };

    goButton.onclick = function(e){
        
        //var boxes = container.querySelectorAll("div");
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

// --- 애니메이션 -------------ex10--------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#ex10"); 
    var showButton = section.querySelector("input");
    var dialog = section.querySelector(".dialog");
    var screen = section.querySelector(".screen");
    var content = dialog.querySelector(".content");
   
    showButton.onclick = function(){
        dialog.classList.add("show");
        
        //dialog.style.display = "block";
    
        //setTimeout(function(){
            //screen.style.opacity = 0.7;
        //}, 10);
    };

    screen.onclick = function(){
        dialog.classList.remove("show");
            
    };

    screen.addEventListener("transitionend", function(){
        content
        .style
        .display = "block";

    });



});


// --- 트랜지션 -------------ex9--------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#ex9");
    var startButton = section.querySelector(".start");
    var stopButton = section.querySelector(".pause");
    var ball = section.querySelector(".ball");
    

    startButton.onclick = function(){
        ball.style.transform = "rotate(45deg)";
        
        //ball.style.position = "absoute"; 정적인 행위 여기서 하는거 아님
        //ball.style.left = "300px";
        // ball.style.top = "300px";
        // ball.style.width = "300px";
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
        },17 fps);*/
    };
    stopButton.onclick = function(){
        
    };
});




// --- 트리거 ----------------ex8--------------------------------
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
        /* 이전 버전 브라우저 지원해야할때(트리거)
        var event = document.createEvent("MouseEvent");
        event.initEvent("click", true,true);
        */
        fileButton.dispatchEvent(event);
    };

});

// --- 공지사항 조작하기 ----------------ex7--------------------------------
window.addEventListener("load", function () {
    var section = document.querySelector("#ex7");
    var noticeTBody = section.querySelector(".notice tbody");
    var loadButton = section.querySelector(".btn-load");
    
    var notices = [
        { 
            id:"6",
            title:"뉴렉쌤 9월 초 국기과정 모집 안내",
            writerId:"newlec",
            regDate:"2019-06-11",
            hit:30
        },
        {
            id:"5",
            title:"뉴렉처 강의 수강 방식 안내",
            writerId:"newlec",
            regDate:"2019-05-24",
            hit:120
        },
        {
            id:"4",
            title:"뉴렉처 강의자바 구조적인 프로그래밍 강의 예제 파일 수강 방식 안내",
            writerId:"newlec",
            regDate:"2019-04-24",
            hit:231
        }
    ];

    loadButton.onclick = function () {

        //데이터 요청하기
        var request = new XMLHttpRequest();
        request.open("GET", "/notice/list-ajax?p=1", false);
        request.send();

        var data = "x=1&y=2x=23&y=34";
        var request = new XMLHttpRequest();
        request.open("POST", "/notice/reg", false);
        request.send(dada);

        var json = JSON.parse(request.responseText);
        
        

        //alert(json[0].title);
        //대체하기
        //notices = json;
        //누적하기
        notices = notices.concat(json);
        
        //방법 3 : 템플릿을 문자열을 이용한 DOM 조작#3
        var keys = Object.keys(notices[0]);
        var html = [];
        for(var j=0; j<notices.length; j++){
            html.push("<tr>");
            for(var i=0;i<5;i++)
                html.push("<td>"+notices[j][keys[i]]+"</td>");
             html.push("</tr>");
            
        }
        
       
        noticeTBody.innerHTML = html.join("");//문자를 더하는 역할 join
         /*
        //방법 2 : 템플릿을 문자열을 이용한 DOM 조작#2
        var keys = Object.keys(notices[0]);
        var html = "";
        for(var j=0; j<notices.length; j++){
            html += "<tr>";
            for(var i=0;i<5;i++)
                html +="<td>"+notices[j][keys[i]]+"</td>";
             html +="<tr>";
            
        }
        noticeTBody.innerHTML = html;
        
        //방법 2 : 템플릿을 이용한 DOM 조작
        var keys = Object.keys(notices[0]);
        for(var j=0; j<notices.length; j++){
            noticeTBody.innerHTML += "<tr>";
            for(var k=0;k<5;k++){
                html +="<td>"+notices[j][keys[i]]+"</td>";
            noticeTBody.innerHTML +="<tr>";
        }*/

        /*
        //방법 1 : 맨땅에 DOM 조작 #1 appendChild
        
        var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];

        for (var j = 0; j < notices.length; j++) {
            var tr = document.createElement("tr");
            for (var i = 0; i < 5; i++) {
                var td = document.createElement("td");
                var key = keys[i];
                // var txt = document.createTextNode(notices[j][key]);
                // td.appendChild(txt);
                td.append(notices[j][key]);
                tr.append(td);
            } 
            noticeTBody.append(tr);
        } 
    
        
      
        //방법 1 : 맨땅에 DOM 조작 #1 appendChild
       
        var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];

        for (var j = 0; j < 10; j++) {
            var tr = document.createElement("tr");
            for (var i = 0; i < 5; i++) {
                var td = document.createElement("td");
                var key = keys[i];
                var txt = document.createTextNode(notices[j][key]);
                td.appendChild(txt);
                tr.appendChild(td);
            }
            noticeTBody.appendChild(tr);
        }*/
     
    };
});






// --- 노드 조작하기 ----------------ex6--------------------------------
window.addEventListener("load", function () {
    var section = document.querySelector("#ex6");
    var addTextButton = section.querySelector(".btn-add-text");
    var addElementButton = section.querySelector(".btn-add-elment");
    var container = section.querySelector(".container");

    addElementButton.onclick = function () {
        var el = document.createElement("div");
        el.className = "box";
        container.appendChild(el);

    };
    addTextButton.onclick = function () {
        var textNode = document.createTextNode("안녕하세요");
        container.appendChild(textNode);

    };

});




// --- 속성 다루기 ----------------ex5--------------------------------
window.addEventListener("load", function () {
    var section = document.querySelector("#ex5");
    var select = section.querySelector(".img-select");
    var imgs = select.querySelector("option");
    var img = section.querySelector("img");
    var button3 = section.querySelector(".btn3");

    button3.onclick = function () {
        img.src = imgs.value;

    };

});






window.addEventListener("load", function () {
    var section = document.querySelector("#ex5");
    var button1 = section.querySelector(".btn1");
    var button2 = section.querySelector(".btn2");
    var img = section.querySelector("img");
    var tid;

    button1.onclick = function () {
        img.src = "https://i.ytimg.com/vi/U58H_Nd0oWI/maxresdefault.jpg";

    };

    button2.onclick = function () {
        //img.style["borderBottom"] = "3px solid blue";
        img.style.borderBottom = "3px solid blue";
        //var width = img.width;
        //img.style.width = "200px";

        var f1 = function () {
            var width = img.width;

            //width-=3;
            width--;
            img.style.width = width + "px";

            if (width <= 200)
                window.clearInterval(tid);
        };


        if (tid == undefined)
            tid = window.setInterval(f1, 17);

    };
});




// --- 노드 선택 방법 1~4 ----------ex4--------------------------------
window.addEventListener("load", function () {
    var section = document.getElementById("ex4");

    //방법 4
    var button = document.querySelector("#ex4>input");
    var ul = section.querySelector("ul");
    var lis = ul.querySelectorAll("li");
    /*
       //방법 3
       //var button = section.firstChild;//모든 자식 노드들
       var button = section.firstElementChild;//엘리먼트 자식 노드들만
       //var ul = button.nextSibling;
       var ul = button.nextElementSibling;
       var lis = ul.children;
    
       //방법 2 
       
        //var button = section.childNodes[1];//모든 자식 노드들
        var button = section.children[0];//엘리먼트 자식 노드들만
        //var ul = section.childNodes[3];
        var ul = section.children[1];
        var lis = ul.children;
    
        //방법 1
        // var button = section.getElementsByTagName("input")[0]; 
        // var ul = section.getElementsByTagName("ul")[0];
        // var lis = ul.getElementsByTagName("li");
    */
    button.onclick = function () {
        lis[3].remove();
        ul.appendChild(lis[3]);
    };
});
// --------------------------------ex3--------------------------------
window.addEventListener("load", function () {

    var ex3Button = document.getElementById("btn-ex3");
    var view = document.getElementById("view");
    console.log("view:" + view);
    var fwin = view.contentWindow;
    var fex3Button = fwin.document.getElementById("btn-ex3");

    ex3Button.onclick = function () {

        fex3Button.value = "안녕하세요";
        //window.location.href="http://www.newlecture.com";
        console.log(window.location.protocol);
    };
});


// --------------------------------ex2--------------------------------
window.addEventListener("load", function () {

    var countdownButton = document.getElementById("countdown-button");
    var countSpan = document.getElementById("count-span");
    var tid;

    countdownButton.onclick = function () {

        var f1 = function () {
            var count = parseInt(countSpan.innerText);

            count--;
            countSpan.innerText = count;

            if (count == 0)
                window.clearInterval(tid);
        };


        if (tid == undefined)
            tid = window.setInterval(f1, 1000);
    };
});

// --------------------------------ex1--------------------------------
//window.onload = function(){
window.addEventListener("load", function () {
    var InputX = document.getElementById("x-input");
    var InputY = document.getElementById("y-input");
    var resultButton = document.getElementById("btn-result");


    resultButton.onclick = function () {
        var x = parseInt(InputX.value);
        var y = parseInt(InputY.value);

        alert(x + y);
    };
});









