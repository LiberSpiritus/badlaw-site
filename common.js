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
  var obj = document.querySelectorAll(".copy1 ul li:first-child, .copy1 ul li:last-child a[href]");
  const textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].textContent);
    if(obj[i].hasAttribute("href") === false){
        // textArea.value += obj[i].getAttribute('href');
        if(obj[i].textContent.includes("참고설명")){
          obj[i].textContent.replace("참고설명",'');
        }
        textArea.value += obj[i].textContent.replace(/^\s+|\s+$/gm,'') + '\r\n';
    }
      
    
    if(obj[i].hasAttribute("href") === true){
      textArea.value += obj[i].getAttribute('href') + '\r\n';
    } 
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
  document.body.removeChild(textArea);

}
