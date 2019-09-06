window.addEventListener("load", function () {
    /*
drop zone에서 사용되는 이벤트
dragenter : 드래그된 리소스가 drop zone에 들어올 때
dragleave : drop zone에 들어왔던 드래그가 영역 밖으로 나갈 때
dragover  : drop zone에서 드래그 상태로 이동 중일 때
drop      : drop zone에서 드랍할 때
*/

    var section = document.querySelector("#upload");
    var dropZone = section.querySelector(".drop-zone");

    dropZone.addEventListener("dragenter", function (e) {
        e.preventDefault();
        console.log("들어왔니?");

        //for(var key in e.dataTransfer.types)
        //console.log(key);
        //console.log(e.dataTransfer.types[0]);

        if(e.dataTransfer.types[0] == "Files") {
            
            dropZone.classList.add("valide");
            dropZone.classList.remove("invalide");
            //alert("파일을 드래그 하세요.");
        }else{
            
            dropZone.classList.add("invalide");
            dropZone.classList.remove("valide");
            //alert("유효한 파일이 아닙니다.");
        }
    })

    dropZone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        dropZone.classList.remove("invalide","valide");
        console.log("나갔니?");
    })

    dropZone.addEventListener("dragover", function(e){
        e.preventDefault();
        console.log("위에 있니?");
    })
    
    dropZone.addEventListener("drop", function(e){
        e.preventDefault();
        dropZone.classList.remove("invalide","valide");
        console.log("드랍");

        var files = e.dataTransfer.files;
        var size = e.dataTransfer.files.length;

        if(size > 1)
            alert("파일은 하나씩만 업로드 할 수 있습니다.");

        var file = files[0];
        console.log(file.type);
        //var regex = new RegEx("image/(jpeg|png|gif)");
        var regex = /image\/(jpeg|png|gif)/;
        //if (!file.type.match(/imege/(jpeg|png|gif)/)){
        if (!file.type.match(regex)){   
            alert("유효한 파일 형식 아닙니다.");
            return;
        }
        

        if(file.size > 10*1024*1024){
            alert("10메가 이상의 파일은 업로드 할 수 없습니다.");
            return;
        }

        var request = new XMLHttpRequest();
        request.open("POST",);
        request.send();

        request.responseText;

    });

    

});