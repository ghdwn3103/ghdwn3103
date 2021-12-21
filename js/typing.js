$(document).ready(function(){
    /*메인 -  첫번째 슬라이드 타이핑*/
    /*타이핑 1번째줄*/
    $('.typing-list1 .typing1').text('');	

    var typingBool1 = false; 
    var typingIdx1 = 0; 
    var typingTxt1 = '나를 소개합니다.'; 


    typingTxt1 = typingTxt1.split(""); 
    if(typingBool1 == false){ 
        typingBool1 = true; 		   
        tyInt1 = setTimeout(function() {
                                    f1 = setInterval(typing1,100); 
                                    $('.typing-list1 .typing1').addClass('typing-active');
                                }, 0) 

    } 		 
    function typing1(){ 
        if(typingIdx1 < typingTxt1.length){ 
            $('.typing-list1 .typing1').append(typingTxt1[typingIdx1]); 
            typingIdx1++; 
        }else{ 
            clearInterval(f1); 
            $('.typing-list1 .typing1').removeClass('typing-active');
            $('.typing-list1 .typing1').css('border','none');
        } 
    }  

    /*타이핑 2번째줄*/
    $('.typing-list1 .typing2').text('');

    var typingBool2 = false; 
    var typingIdx2 = 0; 
    var typingTxt2 = '이    름:이홍주'; 

    typingTxt2 = typingTxt2.split(""); 
    if(typingBool2 == false){ 
        typingBool2 = true; 		   
        tyInt2 = setTimeout(function() {
                                    f2 = setInterval(typing2,100); 
                                    $('.typing-list1 .typing2').addClass('typing-active');
                                }, 1400)
            
    } 		 
    function typing2(){
        
        if(typingIdx2 < typingTxt2.length){  
            $('.typing-list1 .typing2').append(typingTxt2[typingIdx2]);
            typingIdx2++; 
        }else{ 
            clearInterval(f2); 
        } 
    } 
    
    /*타이핑 3번째줄*/
    $('.typing-list1 .typing3').text('');

    var typingBool3 = false; 
    var typingIdx3 = 0; 
    var typingTxt3 = '생년월일 : 940223'; 

    typingTxt3 = typingTxt3.split(""); 
    if(typingBool3 == false){ 
        typingBool3 = true; 		   
        tyInt3 = setTimeout(function() {
                                    f3 = setInterval(typing3,100); 
                                    $('.typing-list1 .typing3').addClass('typing-active');
                                }, 2700)
            
    } 		 
    function typing3(){
        
        if(typingIdx3 < typingTxt3.length){  
            $('.typing-list1 .typing3').append(typingTxt3[typingIdx3]);
            typingIdx3++; 
        }else{ 
            clearInterval(f3); 
        } 
    } 
    
    /*타이핑 4번째줄*/
    $('.typing-list1 .typing4').text('');

    var typingBool4 = false; 
    var typingIdx4 = 0; 
    var typingTxt4 = '거 주 지 : 부산시 기장군'; 

    typingTxt4 = typingTxt4.split(""); 
    if(typingBool4 == false){ 
        typingBool4 = true; 		   
        tyInt4 = setTimeout(function() {
                                    f4 = setInterval(typing4,100); 
                                    $('.typing-list1 .typing4').addClass('typing-active');
                                }, 4200)
            
    } 		 
    function typing4(){
        
        if(typingIdx4 < typingTxt4.length){  
            $('.typing-list1 .typing4').append(typingTxt4[typingIdx4]);
            typingIdx4++; 
        }else{ 
            clearInterval(f4); 
        } 
    } 

    /*타이핑 5번째줄*/
    $('.typing-list1 .typing5').text('');

    var typingBool5 = false; 
    var typingIdx5 = 0; 
    var typingTxt5 = '이 메 일 : ghdwn3103@naver.com'; 

    typingTxt5 = typingTxt5.split(""); 
    if(typingBool5 == false){ 
        typingBool5 = true; 		   
        tyInt5 = setTimeout(function() {
                                    f5 = setInterval(typing5,100); 
                                    $('.typing-list5 .typing5').addClass('typing-active');
                                }, 6000)
            
    } 		 
    function typing5(){
        
        if(typingIdx5 < typingTxt5.length){  
            $('.typing-list1 .typing5').append(typingTxt5[typingIdx5]);
            typingIdx5++; 
        }else{ 
            clearInterval(f5); 
        } 
    } 

    /*타이핑 6번째줄*/
    $('.typing-list1 .typing6').text('');

    var typingBool6 = false; 
    var typingIdx6 = 0; 
    var typingTxt6 = '교육과정 : 2021.09.01 ~ 2021.12.30'; 

    typingTxt6 = typingTxt6.split(""); 
    if(typingBool6 == false){ 
        typingBool6 = true; 		   
        tyInt6 = setTimeout(function() {
                                    f6 = setInterval(typing6,100); 
                                    $('.typing-list6 .typing6').addClass('typing-active');
                                }, 8900)
            
    } 		 
    function typing6(){
        
        if(typingIdx6 < typingTxt6.length){  
            $('.typing-list1 .typing6').append(typingTxt6[typingIdx6]);
            typingIdx6++; 
        }else{ 
            clearInterval(f6); 
        } 
    } 

    /*타이핑 7번째줄*/
    $('.typing-list1 .typing7').text('');

    var typingBool7 = false; 
    var typingIdx7 = 0; 
    var typingTxt7 = 'UI/UX기반 프론트엔드'; 

    typingTxt7 = typingTxt7.split(""); 
    if(typingBool7 == false){ 
        typingBool7 = true; 		   
        tyInt7 = setTimeout(function() {
                                    f7 = setInterval(typing7,100); 
                                    $('.typing-list7 .typing7').addClass('typing-active');
                                }, 12000)
            
    } 		 
    function typing7(){
        
        if(typingIdx7 < typingTxt7.length){  
            $('.typing-list1 .typing7').append(typingTxt7[typingIdx7]);
            typingIdx7++; 
        }else{ 
            clearInterval(f7); 
        } 
    } 

    /*타이핑 8번째줄*/
    $('.typing-list1 .typing8').text('');

    var typingBool8 = false; 
    var typingIdx8 = 0; 
    var typingTxt8 = '개발자 양성 과정 수료'; 

    typingTxt8 = typingTxt8.split(""); 
    if(typingBool8 == false){ 
        typingBool8 = true; 		   
        tyInt8 = setTimeout(function() {
                                    f8 = setInterval(typing8,100); 
                                    $('.typing-list8 .typing8').addClass('typing-active');
                                }, 13600)
            
    } 		 
    function typing8(){
        
        if(typingIdx8 < typingTxt8.length){  
            $('.typing-list1 .typing8').append(typingTxt8[typingIdx8]);
            typingIdx8++; 
        }else{ 
            clearInterval(f8); 
        } 
    } 

    /*타이핑 9번째줄*/
    $('.typing-list1 .typing9').text('');

    var typingBool9 = false; 
    var typingIdx9 = 0; 
    var typingTxt9 = '웹퍼블리셔로 무한성장 기대 중...'; 

    typingTxt9 = typingTxt9.split(""); 
    if(typingBool9 == false){ 
        typingBool9 = true; 		   
        tyInt9 = setTimeout(function() {
                                    f9 = setInterval(typing9,100); 
                                    $('.typing-list9 .typing9').addClass('typing-active');
                                }, 15000)
            
    } 		 
    function typing9(){
        
        if(typingIdx9 < typingTxt9.length){  
            $('.typing-list1 .typing9').append(typingTxt9[typingIdx9]);
            typingIdx9++; 
        }else{ 
            clearInterval(f9); 
        } 
    } 

});