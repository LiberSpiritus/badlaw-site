'use strict';

$('.big_tab li').first().addClass("activeClass");
$(".tab-contents").not(':first').hide();

  $('.big_tab li').on('click',function(){
    $(this).addClass("activeClass").siblings().removeClass("activeClass");
    var link = $(this).find("a").attr("href");
    var link_num = link.substr(link.length-1);
    $("select#tabmenu option").eq(link_num-1).prop("selected", "selected");
    $(".tab-contents").hide();
    $(link).show();
  });
  
  $("select#tabmenu").on("change",function(){
    var select_link = $("select#tabmenu").val();
    var select_num = $(this).prop('selectedIndex');
    $('.big_tab li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
    $(".tab-contents").hide();
    $(select_link).show();
    console.log(select_link);
  });
 


  const trashBtn = document.querySelectorAll(".fa-trash");
  for(var i = 0; i < trashBtn.length; i++){
      trashBtn[i].addEventListener("click",function(e){
          e.target.parentElement.parentElement.remove();
      });

  }

function copy3() {
  // var obj = document.querySelectorAll(".copy1 ul li:first-child, .copy1 ul li:last-child a[href], .copy2 ul li:first-child, .copy2 ul li:last-child a[href] ");
  var obj = document.querySelectorAll(".copy1 ul li:first-child, .copy1 ul li:last-child a[href]");
  var obj2 = document.querySelectorAll(".copy2 ul li:first-child, .copy2 ul li:last-child a[href]");
  const textArea = document.createElement('textarea');
  document.body.appendChild(textArea); // textarea안에 데이터를 넣어 복사하기 위해 임시 생성.
  for(var i = 0; i < obj.length; i++){

    if(obj[i].hasAttribute("href") === false){
      // 0번째 인덱스 일경우 공백 2번
      if(i === 0){textArea.value += obj[0].textContent.replace(/^\s+|\s+$/gm,'') + '\r\n' + '\r\n'; i++;}
        textArea.value += obj[i].textContent.replace(/^\s+|\s+$/gm,'') + '\r\n';
        
        // 참고 링크 텍스트 지운후, refer-wrap a href 속성의 값을 가져와서 뿌려줌.
        for(var a = 0; a < obj[i].childNodes.length; a++){
          if (obj[i].childNodes[a].className === "refer-wrap") {
            //textArea에 있는 값중 참고 설명을 공란으로 바꾸고 개행.
            textArea.value = textArea.value.replace("참고 설명","").trim() + '\r\n';
            // 그 이후에 참고 링크 href 속성의 값을 가져와서 textArea에 증폭 시킨다.
            textArea.value += '참고 링크 : ' + obj[i].childNodes[a].childNodes[0].getAttribute('href') + '\r\n';
          }
        }        
    }
    if(obj[i].hasAttribute("href") === true){
      textArea.value += 'URL 링크 : '+ obj[i].getAttribute('href') + '\r\n';
    } 
      // 마지막 인덱스 일경우 공백
      if(i === obj.length-1){textArea.value += '\r\n';}
    textArea.select();
    document.execCommand('copy');
    
    // document.body.removeChild(textArea);
    //var range = document.createRange();
    //range.selectNode(obj[i].childNodes[0]); //텍스트 정보를 Range 객체에 저장
    // range.setStart(obj.childNodes[0], 0); //추가
    // range.setEnd(obj.childNodes[0], 5); //추가
    // var sel = window.getSelection().toString();
    // console.log(sel);
    // sel.removeAllRanges(); //기존 선택정보 삭제
    // sel.addRange(range); //텍스트 정보 선택
    // document.execCommand("copy"); //복사
    // sel.removeRange(range); //선택 정보 삭제    
  } 
  for(var i = 0; i < obj2.length; i++){
    // console.log(obj2[1].textContent);
    if(obj2[i].hasAttribute("href") === false){
        if(obj2[i].textContent.includes("참고설명")){
          obj2[i].textContent.replace("참고설명",'');
        }
        
        // 0번째 인덱스 일경우 공백 2번
        if(i === 0){textArea.value += obj2[0].textContent.replace(/^\s+|\s+$/gm,'') + '\r\n' + '\r\n'; i++;}
        textArea.value += obj2[i].textContent.replace(/^\s+|\s+$/gm,'') + '\r\n';
    }
    
    if(obj2[i].hasAttribute("href") === true){
      textArea.value += 'URL 링크 : ' + obj2[i].getAttribute('href') + '\r\n';
    } 
    textArea.select();
    document.execCommand('copy');
  } 
  document.body.removeChild(textArea); // textarea 사용할 이유가 없으므로 제거.

}
