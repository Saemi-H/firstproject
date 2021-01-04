 $(window).load(function(){
       
        myPage();
        gnbAction();
        popUp();
        visualSlide();
        trEvent();
        asideMenu();
        featuredHover();
        imgHover();
       ftPicRotate();
        accPicRotate();
        trRotate();
        videoPlay();
      toTop();
    })
//    window.onload=function(){
//        toTop();
//    }
    
   function myPage(){
       var $myPageMenu = $('.mypage_menu');
       var $myPageBg=$('#mypage_bg');
       var $myPage=$('.mypage_list > div > a');
    
       
       $myPageMenu.slideUp(0);
       $myPageBg.hide();
       
       $myPage.on('mouseenter focus', dropMyPage);
       $('#htop_wrap').on('mouseleave', upMyPage);
       
       
       function dropMyPage(){
          
            $myPageMenu.slideUp(0);
            $myPageBg.hide();
           $myPageBg.slideDown(0);
           $myPageMenu.show();

           }
       function upMyPage(){
           $myPageMenu.slideUp(0);
            $myPageBg.hide();
       }
               
               
          
    
      
   }//myPage
    
    function gnbAction(){
        var $gnbMenu = $('#gnb_list').find('div').children();
        var $submenu=$('.submenu_list');
        var $subBg=$('#sub_bg');
        
        
        $gnbMenu.on('mouseenter focus', dropMenu);
        $gnbMenu.on('mouseleave', colorRemove);
        $('#header_wrap').on('mouseleave', foldMenu);
        $('.submenu_list').children().last().on('focusout', foldMenu);//$(".submenu_list> li:last-child a")
        $('.submenu_list').children().last().on('focusout', colorRemove);
        $subBg.css({'opacity':0});
        
        function dropMenu(){
            $('#header_wrap').stop();
            $('#header_wrap').animate({'height':616}, 300, "easeOutCubic");
            $subBg.show();
             $(this).parents('li').stop();
            $(this).parents('li').animate({'background-color':'#7580a1'}, 300, "easeOutCubic");
            $subBg.stop();
            $subBg.animate({'opacity':0.8}, 300, "easeOutCubic", function(){
                $('#gnb').css({'height':500})
                $('.submenu_list').show();
            });
        }
        function foldMenu(){
            
            $('.submenu_list').hide();
             $subBg.slideUp(0);
            $subBg.stop();
            $subBg.animate({'opacity':0}, 300, "easeOutCubic", function(){
                $('#gnb').css({'height':64});
            });
            $('#header_wrap').stop();
            $('#header_wrap').animate({'height':116}, 300, "easeOutCubic");
        
        }
        function colorRemove(){
            $(this).parents('li').stop();
            $(this).parents('li').animate({'background-color':'#0f1181'}, 300, "easeOutCubic");
            
        }
        
    }//gnbAction
    

    
    
    function popUp(){
        var $popUp;
        var $popUpImg;
        var $popImgListWidth;
        var currentPosition;
        var $popLiSize;
        var timer;
        var $popBtn;
        var popNum = 0;
        var $closeBtn;
        //var $tabBar;
        var $tabDownX;
        var $tabDownY;
        var onMove=true;
        
        init();
        inEvent();
        btnEvent();
        showBtn(0);
        timer;
         
        function init(){
            $popUp=$('#pop_up');
            $popUpImg=$('#pop_up_img > ul');
            $popImgListWidth=$popUpImg.innerWidth();
            $popLiSize=$popUpImg.children().size();
            //alert($popLiSize)
            $popBtn=$('#pop_up_btn > ul > li > a');
            timer=setInterval(autoPlay, 3000);
            
          
            $popUpImg.css({'width':$popImgListWidth*$popLiSize});
            
           
            
            
            //$popUpImg.css({'left':$popImgListWidth*popNum});
            //alert($popUpImg.position().left)

            
            $closeBtn=$('.pop_close');
        }
        function inEvent(){
            
            
            $popBtn.on('click focus', btnEvent);
           
             $closeBtn.on('click focus', closeBtn);
            $popUp.on('mousedown', dragStart);
            $popUp.on('mouseup', dragEnd);
            
        }
        function btnEvent(){
            popNum=$popBtn.index($(this))+1;
            
           // alert(popNum);
            showBtn(popNum);
            onSlide(popNum);
        }
        function showBtn(newNum){
            
            
            $popBtn.parent().removeClass('on');
            $popBtn.eq(newNum).parent().addClass('on');
 
        }
        function onSlide(newNum){
             //$popUpImg.stop();
            //var currentPosition = $popUpImg.position().left;
           $popUpImg.animate({'left':-$popImgListWidth*newNum }, 300, "easeOutCubic");
            //alert($popUpImg.position().left;)
        }
        
        function autoPlay(){
            popNum++;
            
            if(popNum >= $popLiSize){
    
                 popNum=0;
           
            }
            showBtn(popNum);
            onSlide(popNum);
        }
        
         function closeBtn(){
//                 if($("#pop_up_img").is(":visible")){
//                     
//                     $("#pop_up_img").hide();
//                 }else if($("#pop_up_img").is(":hidden")){
//                     $("#pop_up_img").show()
//                 }
//              return false;
             if(onMove==true){
                 $('#pop_up_img').hide();
                 $('#pop_up_btn').hide();
                 
                 onMove=false;
             }else if(onMove==false){
                 $('#pop_up_img').show();
                 $('#pop_up_btn').show();
                 
                 onMove=true;
             }
             return false;
        }
        
       
         function dragStart(e){
            $tabDownX=e.pageX-$popUp.position().left;
            $tabDownY=e.pageY-$popUp.position().top;
            
            $(document).on('mousemove', moveStart);
        }
        function moveStart(e){
            $popUp.css({'left':e.pageX-$tabDownX, 'top':e.pageY-$tabDownY});
        }
        function dragEnd(){
            $(document).off('mousemove', moveStart);
        }
       
        
        
        
    }//popUp


    
   function visualSlide() {
        var $imgList;
        var $currentPosition;
        //var imgNum=0;
        var $bgImgArray;
        var $imgListInner;
        var $imgInner;
        var $imgListWrap;
        var $imgListTotal;
        var timer;
        var $dot;
        var $stop;
        var visualOverNum=0;
        var onPlay=true;

        init();
        inEvent();
        dotEvent();
        showDot(0);

        function init() {
            $imgList = $('#img_list').children();
            $dot=$('#btn').children();
            $imgInner = $imgList.innerWidth();
            $imgListWrap = $('#img_list');
            $bgImgArray = ['../images/visual/visual_01.png', '../images/visual/visual_02.png'];
            $imgListTotal = $bgImgArray.length;
            $imgListInner = $imgInner * $imgListTotal;
            $stop=$('.stop_btn').children();

            $imgListWrap.css('width',$imgListInner);
            //alert($imgListWrap.innerWidth());
            timer = setInterval(autoSlide,3000);
            $imgList.css('width', $imgInner);
            $imgList.eq(0).css('background-image', 'url("' + $bgImgArray[0] + '")');
            $imgList.eq(1).css('background-image', 'url("' + $bgImgArray[1] + '")');
        }

        function inEvent(){
           timer;
            $dot.on('mouseenter', dotEvent);
            $stop.on('click', stopSlide);
            
        }
        function dotEvent(){
        visualOverNum=$dot.index($(this));
        showDot(visualOverNum);
       }

       function showDot(overNum){
           $dot.removeClass('selected');
           $dot.eq(overNum).addClass('selected');
           if(overNum==0){
                $("#img_list").stop();
               $("#img_list").animate({ 'left': 0 }, 300, "easeOutCubic");
           }else if(overNum==1){
               $("#img_list").stop();
                $("#img_list").animate({ 'left': -$imgInner }, 300, "easeOutCubic");
           }
           
       }

        function autoSlide() {
           $currentPosition = parseInt($("#img_list").position().left);
           if (visualOverNum >= $imgListTotal) {
               visualOverNum = 0;
               $("#img_list").animate({ 'left': 0 }, 300, "easeOutCubic");
               showDot(0);
           } else {
               visualOverNum++;
               $("#img_list").animate({ 'left': -$imgInner }, 300, "easeOutCubic"); //이미지 두 개밖에 없어서 구지 $currentPosition안넣어도 됨
               showDot(1);
           }

       }
       function stopSlide(){
           
           if(onPlay==true){
               clearInterval(timer);
             $stop.parent().removeClass('on');
             $stop.parent().addClass('on');
               
               onPlay=false;
           }else if(onPlay==false){
              
                $stop.parent().removeClass('on');
                 setInterval(autoSlide,3000);
               onPlay=true;
           }
         
       }
   
       }//visualSlide
    
      function trEvent(){
           var $trList;

        init();
        inEvent();
        
        function init(){
            $trList=$('.tr_column >li > a');

        }
        function inEvent(){

            $trList.on('mouseenter focus', wider);
            $trList.on('mouseleave focusout', smaller);
           
        }

           function wider(){
               
               
            $(this).parent().removeClass('open');
            $('#tr_inner').find('ul >li > a').not($(this)).parent().removeClass('on');
            $(this).parent().addClass('open');
            $('#tr_inner').find('ul >li > a').not($(this)).parent().addClass('on');
               
             
           }//wider
          
          function smaller(){
              
              $('#tr_inner').find('ul >li > a').not($(this)).parent().removeClass("on");
               $(this).parent().removeClass('open');
              
          }
      
       }//trEvent
      
        


    function asideMenu(){
        var $menuAside=$('#menu_aside');
        var topPosition=$(window).outerHeight()/2;

        $(window).on("scroll", onScroll);
        onScroll();

        function onScroll(){
            var scrollHeight=$(document).scrollTop();
            $menuAside.stop();
            $menuAside.animate({'top':scrollHeight+150}, 300, "easeOutCubic");
            if(scrollHeight >= 3790)
            {
                $menuAside.stop();
            }
        }


    }//asideMenu

    function toTop(){
        window.scrollTo({ top : 150, left: 0, behavior: 'auto'});
    }

    function featuredHover(){
        var $ftSelect;
        var $accessorySelect;
        var $ftHoverBg;
        var $ftHoverContent;
        var $closeBtn;

        init();
        inEvent();

        function init(){
            $ftSelect=$('.ft_column > li > a');
            $accessorySelect=$('.acc_column > li >a');
            $ftHoverBg=$('#featured_hover_bg');
            $ftHoverContent=$('#featured_hover_content');
            $closeBtn=$('.close_btn').find('a');

            $ftHoverBg.css({'opacity':0});
            $ftHoverBg.hide();
            $ftHoverContent.css({'opacity':0})
            $ftHoverContent.hide();
        }
        function inEvent(){
            $ftSelect.on('click',showItem);
            $accessorySelect.on('click', showItem);
            $closeBtn.on('click focusout', closeItem)
        }
        function showItem(){
            $ftHoverBg.show();
            $ftHoverBg.stop();
            $ftHoverBg.animate({'opacity':0.8}, 300, "easeOutCubic", function(){
                $ftHoverContent.show();
                $ftHoverContent.stop();
                $ftHoverContent.animate({'opacity':1}, 300, "easeOutCubic");
            });return false;
        }//showItem
        function closeItem(){
            $ftHoverContent.hide();
            $ftHoverContent.stop();
            $ftHoverContent.animate({'opacity':0}, 300, "easeOutCubic", function(){
                $ftHoverBg.hide();
                $ftHoverBg.stop();
                $ftHoverBg.animate({'opacity':0}, 300, "easeOutCubic");
            });
            return false;
        }
    }//featuredHover
    
   function imgHover(){
       var $ftSelect;
       var ftSelectName;
       var $accessorySelect;
       var $bigImg;
       var $smallImg;
       var nowImg;
       var nowAlt;
       var imgSrc;
       var newSrc;
       var $asideImg01;
       var $asideImg02;
       var $asideName01;
       var $asideName02;
       
       init();
       inEvent();
       
       
       function init(){
            $ftSelect=$('.ft_column > li > a');
            $accessorySelect=$('.acc_column > li >a');
           $bigImg = $('#hovered_item_big').find('img');
           $smallImg = $('#hovered_item_small').find('img');
           $asideImg01=$('#aside_01').find('img');
           $asideImg02=$('#aside_02').find('img');
       }
       function inEvent(){
           $ftSelect.bind('click foucs', getSrc);
           $accessorySelect.bind('click focus', getSrc);
       }
       
       
       function getSrc(){
           nowImg = $(this).find('img');
           ftSelectName=$(this).attr('title');
           imgSrc = nowImg.attr('src');
           nowAlt= nowImg.attr('alt');
           
          // $('.hovered_item_name').html(nowAlt);
           changeImg(imgSrc);
           changeAlt(nowAlt);
           changeName(ftSelectName);
       }
       
       function changeImg(newSrc){
           
           $bigImg.attr('src', newSrc);
           $smallImg.attr('src', newSrc);
           $asideImg01.attr('src', newSrc);
           
       }
       function changeAlt(newAlt){
           $('.hovered_item_name').html(newAlt);
           $('#aside_01').next().html(newAlt);

       }
       function changeName(newName){
            $('.product_at > span').html(newName);

       }
       
    }//imgHover

   function ftPicRotate(){
          var $slideInner;
          var slideWidth;
          var currentPosition;
          var $nextBtn;
       
       init();
       inEvent();
       
       
       
       function init(){
           $slideInner = $('#ft_slide_inner');
           slideWidth=$('#ft_slide').innerWidth();
           $nextBtn=$('#featured_wrap > .next_btn >a');
           $prevBtn=$('#featured_wrap > .prev_btn >a');
           
           //alert(slideWidth);
           $slideInner.css('width', slideWidth * $('.ft_column').size());
           $slideInner.children().last().prependTo($slideInner);
           $slideInner.css('left', -slideWidth);
           
       }
       function inEvent(){
           $nextBtn.on('click focus', onNext);
           $prevBtn.on('click focus', onPrev);
           
       }
       function onNext(){
           currentPosition = $slideInner.position().left;
           $('#slideInner:not(:animated)').animate({'left':currentPosition-slideWidth}, function(){
               $slideInner.children().first().appendTo($slideInner);
               $slideInner.css('left',-slideWidth);
           })
           return false;
       }
       function onPrev(){
           currentPosition = $slideInner.position().left;
           $('#slideInner:not(:animated)').animate({'left':currentPosition+slideWidth}, function(){
               $slideInner.children().last().prependTo($slideInner);
               $slideInner.css('left', -slideWidth);
           })
           return false;
       }
       
       

   }//ftPicRotate
    function accPicRotate(){
          var $slideInner;
          var slideWidth;
          var currentPosition;
          var $nextBtn;
          var $prevBtn;
       
       init();
       inEvent();
       
       
       
       function init(){
           $slideInner = $('#acc_slide_inner');
           slideWidth=$('#acc_slide').innerWidth();
           $nextBtn=$('#accessroy_wrap > .next_btn >a');
           $prevBtn=$('#accessroy_wrap > .prev_btn >a');
           
           //alert(slideWidth);
           $slideInner.css('width', slideWidth * $('.acc_column').size());
           $slideInner.children().last().prependTo($slideInner);
           $slideInner.css('left', -slideWidth);
           
       }
       function inEvent(){
           $nextBtn.on('click focus', onNext);
           $prevBtn.on('click focus', onPrev);
           
       }
       function onNext(){
           currentPosition = $slideInner.position().left;
           $('#slideInner:not(:animated)').animate({'left':currentPosition-slideWidth}, function(){
               $slideInner.children().first().appendTo($slideInner);
               $slideInner.css('left',-slideWidth);
           })
           return false;
       }
       function onPrev(){
           currentPosition = $slideInner.position().left;
           $('#slideInner:note(:animated)').animate({'left':currentPosition+slideWidth}, function(){
               $slideInner.children().last().prependTo($slideInner);
               $slideInner.css('left', -slideWidth);
           })
           return false;
       }
       
       

   }//ftPicRotate
    
    function trRotate(){
        var $slideInner;
        var slideWidth;
        var currentPosition;
        var $nextBtn;
        var $prevBtn;
        
        init();
        inEvent();
        
        function init(){
            $slideInner = $('#tr_slide_inner');
            slideWidth=$('#tr_slide').innerWidth();
            
            
            $nextBtn=$('#trending_now_wrap > .next_btn').children();
            $prevBtn=$('#trending_now_wrap > .prev_btn').children();
            $slideInner.css('width', slideWidth * $('.tr_column').size());

           
      $slideInner.children().last().prependTo($slideInner);
            $slideInner.css('left', -slideWidth);
        }
        function inEvent(){
            $nextBtn.off('click').bind('click focus', nextSlide);
            $prevBtn.off('click').bind('click focus', prevSlide);
        }
        function nextSlide(){
            currentPosition = $slideInner.position().left;
           //alert(currentPosition);
            $('#tr_slide_inner').stop();
            $('#tr_slide_inner').animate({'left':currentPosition-slideWidth}, function(){
               $slideInner.children().first().appendTo($slideInner);
               $slideInner.css('left',-slideWidth);
            })
            return false;
        }
        function prevSlide(){
            currentPosition=$slideInner.position().left;
             $('#tr_slide_inner').stop();
        $('#tr_slide_inner').animate({'left':currentPosition+slideWidth},function(){
                $slideInner.children().last().prependTo($slideInner);
                $slideInner.css('left',-slideWidth);
            })
        } return false;
        
    }//trRotate

    function videoPlay(){
        var vid=$('video').get(0);

        $('video').on('mouseenter', function(){
            vid.play();
        });
        $('video').on('mouseleave', function(){
            vid.pause();
        })
    }//videoPlay

   