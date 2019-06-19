window.addEventListener("load", function () {
    var notice = document.querySelector("#notice");
    var testRemove = document.querySelector("#test-remove")
    var txt1 = testRemove.querySelector("input[type=text]");
    var btn1 = testRemove.querySelector("input[type=button]");
    var tbody = notice.querySelector(".tbody");

    btn1.onclick = function(e){
        
        alert(e.clientX);

        var id = txt1.value;

        var request = new XMLHttpRequest();
        request.open("GET", "/notice/del-ajax?id="+id, false);
        request.send();
        
        if(request.responseText == "ok")
            //화면에서도 해당 게시글을 지운다
            //데이터 요청하기
	        var request = new XMLHttpRequest();
	        request.open("GET", "/notice/list-ajax?p=1", false);
	        request.send();
        
        var notices = JSON.parse(request.responseText);
        
        //복제방법 2 : 템플릿을 이용한 복제
        //var tr = tbody.querySelector("tr");
        var template = notice.querySelector(".notice-template");
        
        
        //var cloneTr = tr.cloneNode(true);
        var cloneTr = document.importNode(template.content, true);

        var idEl = cloneTr.querySelector(".num");
        var titleEl = cloneTr.querySelector(".title a");

        idEl.innerText = "34234";
        titleEl.innerText = "nana";

        tbody.append(cloneTr);
        
        
         //화면에서도 해당 게시글을 지운ek
         alert("삭제되었습니다.");
        
    };
});

window.addEventListener("load", function () {
    var notice = document.querySelector("#notice");
    var pager = document.querySelector("#pager");
    var tbody = notice.querySelector(".tbody");
    var ul = pager.querySelector("ul");

    var nums = pager.querySelectorAll("a");

    nums[2].onclick = function(e){

        e.preventDefault();
        e.stopPropagation();//태그의 기본 행위를 막는것
        e.target.style.background = "blue";

    };

    // for(var i=0; i<nums.length; i++)
    //     nums[i].onclick = function(e){

        ul.addEventListener ("click", function(e){

            e.preventDefault();

            //alert(e.target.nodeName);
            if(e.target.tagName != "A")
                return;
            
            //e.preventDefault();
    		e.target.style.background = "pink";
    	
            var page = e.target.innerText;

            var request = new XMLHttpRequest();
            request.open("GET", "/notice/list-ajax?p="+page, false);
            request.send();
            
            var notices = JSON.parse(request.responseText);
            var template = notice.querySelector(".notice-template");
            tbody.innerHTML= "";
            
            var keys = Object.keys(notices[0]);

            for(var i=0;i<notices.length;i++) {
            var cloneTr = document.importNode(template.content, true);
    
            var idEl = cloneTr.querySelector(".num");
            var titleEl = cloneTr.querySelector(".title a");
            var writerIdEl = cloneTr.querySelector(".writerId");
            var regDateEl = cloneTr.querySelector(".regDate");
            var hitEl = cloneTr.querySelector(".hit");

    
            idEl.innerText = notices[i][keys[0]];
            titleEl.innerText = notices[i][keys[1]];
            writerIdEl.innerText = notices[i][keys[2]];
            regDateEl.innerText = notices[i][keys[3]];
            hitEl.innerText = notices[i][keys[4]];
    
            tbody.append(cloneTr);
        };
        },true);
        
});

window.addEventListener("load", function () {
    var notice = document.querySelector("#notice");
    var testPager = document.querySelector("#test-pager");
    var txt1 = testPager.querySelector("input[type=text]");
    var btn1 = testPager.querySelector("input[type=button]");
    var tbody = notice.querySelector(".tbody");

    btn1.onclick = function(){
    
        var page = 1;
        if(txt1.value = null && txt1.value != "")
        page = txt1.value;
        
        var request = new XMLHttpRequest();
        request.open("GET", "/notice/list-ajax?p="+page, false);
        request.send();
        
        var notices = JSON.parse(request.responseText);
        
        var template = notice.querySelector(".notice-template");
        //var tr = tbody.children()[0];
        //var tr = tbody.firstElementChild;
        //var tr = tbody.querySelector("tr:first-child");
        //tbody.innerHTML= "";
        
        {

        //var cloneTr = tr.cloneNode(true);
        var cloneTr = document.importNode(template.content, true);

        var idEl = cloneTr.querySelector(".num");
        var titleEl = cloneTr.querySelector(".title a");

        idEl.innerText = json[i];
        titleEl.innerText = "nana";

        tbody.append(cloneTr);

        }

    };
    
});