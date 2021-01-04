  $(window).load(function(){
        myPage();
        gnbAction();
        buyOptionClick();
        itemChange();
        colorPick();
        otherItem();
        dcPay();
        asideMenu();
        itemDetail();
        //onMenuClick();
        itemDetailFold();
        fixMenu();
        boldMenu();
    })
    function myPage(){
       var $myPageMenu = $('.mypage_menu');
       var $myPageBg=$('#mypage_bg');
       var $myPage=$('.mypage_list > div > a');
    
       
       $myPageMenu.slideUp(0);
       $myPageBg.hide();
       
       $myPage.on('mouseenter focus', dropMyPage);
       $('#htop_wrap').on('mouseleave', upMyPage);
        $myPageMenu.find('a').last().on('focusout', upMyPage);
       
       
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
        $('.submenu_list > li').last().find('a').last().on('focusout', foldMenu);
        //$(".submenu_list> li:last-child a")
        $('.submenu_list > li').last().find('a').last().on('focusout', colorRemove);
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
            $('.submenu_list > li').stop();
            $(this).parents('li').animate({'background-color':'#0f1181'}, 300, "easeOutCubic");
            
        }
        
    }//gnbAction
    function buyOptionClick(){
        var $deliveryOption;
        var $carrierOption;
        var $joinOption;
        var $monthOption;
        var $payOption;
        var $dcOption;

        init();
        inEvent();

        function init(){
            $deliveryOption = $('#delivery_option').find('a');
            $carrierOption=$('#carrier').find('a');
            $joinOption=$('#join_type').find('a');   
            //alert ($deliveryOption.size());
        }//init()

        function inEvent(){
            $deliveryOption.on('click', changeDColor);
            $carrierOption.on('click', changeCColor);
            $joinOption.on('click', changeJColor);
        }

        function changeDColor(){
            $deliveryOption.parent().removeClass('on');
            $deliveryOption.removeClass('on');
            $(this).parent().addClass('on');
            $(this).addClass('on');    
            return false;
        }
        function changeCColor(){
            $carrierOption.parent().removeClass('on');
            $carrierOption.removeClass('on');
            $(this).parent().addClass('on');
            $(this).addClass('on');    
            return false;
        }
        function changeJColor(){
            $joinOption.parent().removeClass('on');
            $joinOption.removeClass('on');
            $(this).parent().addClass('on');
            $(this).addClass('on');    
            return false;
        }
        
    }//buyOptionClick
    
    
    function itemChange(){
        var $clickImg;
        var $mainImg;
        var thisImg;
        var getSrc;
        
        init();
        inEvent();
        
        function init(){
            $clickImg=$('#item_pic').find('li > a');
            $mainImg=$('.main').children();
        }
        function inEvent(){
            $clickImg.on('click', getSrc);
        }
        function getSrc(){
            thisImg=$(this).find('img');
            getSrc=thisImg.attr('src');
            
            changeToThis(getSrc);
        }
        function changeToThis(thisSrc){
            $mainImg.attr('src',thisSrc);
        }
       
        
        
    }//itemChange
    function colorPick(){
        var $colorChoice=$('#color_select').find('a');
        var colorName;
        
        $colorChoice.on('mouseenter focus', colorShow);

        function colorShow(){
            colorName=$(this).attr('title');
            nameAppear(colorName);
        }

        function nameAppear(newName){
            $('#color_name').html(newName);
        }
        
    }//colorPick
    
    function dcPay(){
   
        var $selectThis=$('.dc').find('button');
        var $selectDevice=$('.period').find('button');
        var $changeDc=$('.cal_input');
        var thisValue;
        var monthDc;
        var deviceDc;
        
        
        inEvent();
        
        
        function inEvent(){
            $selectThis.off("click").on('click focus', getVal);
            $selectThis.off("click").on('click focus', getMonth);
            $selectThis.off("click").on('click focus', price);
            $selectDevice.off("click").on('click focus', price);
            $selectDevice.off("click").on('click focus', colorButton);
            $selectThis.off("click").on('click focus', colorSelectButton);
            

            
        }
        function getVal(){
            thisValue=$(this).attr('value');
            monthDc=$(this).attr('title');
            //alert(thisValue);
            
            changeValue(thisValue);
            changeMonth(monthDc);
        }
        function getMonth(){
            deviceDc=$(this).attr('value');
            monthlyCal(deviceDc);
            
        }
        function changeValue(newVal){
            $('.cal_input').prop('value', newVal);
        }

        function changeMonth(newMonth){
            $('.dc_cal > p > span').html(newMonth);
        }

        function price(){
            var _price=$(this).val();
                $target=$(this).parents('div').hasClass('dc') ? $('.cal_input') : $('.mon_input'); //hasClass('dc')이면 : 앞 것. 아니면 뒤에 것
            $target.prop('value',_price);
            
                if($('.cal_input').val() && $('.mon_input').val()){
                    $('.total_input').prop("value",
                    parseInt($(".mon_input").val())+parseInt($('.cal_input').val()));//숫자로 못가져 오므로 parseInt넣어줘야 함
                }
        }
        function colorButton(){
            $selectDevice.removeClass('on');
            $(this).addClass('on');
        }
        function colorSelectButton(){
            $selectThis.removeClass('on');
            $(this).addClass('on');
        }
        
    }dcPay
    
    function otherItem(){
        var $nextBtn;
        var $prevBtn;
        var $itemList;
        var $itemListSize;
        var $otherItemWidth;
        var currentPosition;
        var clickNum;
        
        init();
        inEvent();
        
        function init(){
            $nextBtn=$('#oi_btn > .next_btn').children();
            $prevBtn=$('#oi_btn > .prev_btn').children();
            $itemList=$('#oi_pics');
            $itemListSize=$('#oi_pics > ul').size();
            $otherItemWidth=$('#oi_pics > ul').innerWidth();
            $itemList.css({'width':$otherItemWidth*$itemListSize});
           //alert($itemList.innerWidth());
            $itemList.children().last().prependTo($itemList);
            $itemList.css('left', -$otherItemWidth);
            clickNum=0;
        }
        function inEvent(){
            $nextBtn.off('click').on('click focus', nextSlide);
            $prevBtn.off('click').on('click focus', prevSlide);
        }
        function nextSlide(){
         $itemList.children().last().prependTo($itemList);
                $itemList.css('left', -$otherItemWidth);
            clickNum++;
            $itemList.stop();
            $itemList.animate({'left':-$otherItemWidth*clickNum}, 300, "easeOutCubic", function(){
                $itemList.children().first().appendTo($itemList);
                $itemList.css('left', -$otherItemWidth);
                //alert(clickNum);
            });
            
        }
        return false;
        
        function prevSlide(){
            clickNum--;
//            currentPosition=$itemList.position().left;
            $itemList.stop();
            $itemList.animate({'left':$otherItemWidth*clickNum}, 300, "easeOutCubic", function(){
                 $itemList.children().last().prependTo($itemList);
                $itemList.css('left', -$otherItemWidth);
            });
           
        }
        return false;
    }//otherItem
    
    
     function asideMenu(){
        var $menuAside=$('#menu_aside');
        var topPosition=$(window).outerHeight()/2;

        $(window).on("scroll", onScroll);
        onScroll();

        function onScroll(){
            var scrollHeight=$(document).scrollTop();
            $menuAside.stop();
            $menuAside.animate({'top':scrollHeight+150}, 300, "easeOutCubic");
            if(scrollHeight >= 4990)
            {
                $menuAside.stop();
            }
        }


    }//asideMenu

    function itemDetail(){
        var $detailMenu;
        var menuClickNum;
        var windowHeight;

        init();
        inEvent();
        onMenuActive(0);

        function init(){
            $detailMenu=$('#detail_menu').find('a');
            menuClickNum=0;
            windowHeight=$(window).innerHeight();
        }
        function inEvent(){
            $detailMenu.on('click', onMenuClick);
            //$(window).on('scroll', onScroll);
        }
        function onMenuActive(menuNum){
            $detailMenu.parent().removeClass('selected');
            $(this).addClass('selected');
        }
       

    }//itemDetail
    
    function fixMenu(){
        var $headerWrap=$('#header_wrap');
        var $detailMenu=$('#detail_menu');
        var scrollHeight;
        
        $(window).on('scroll', onScroll);
        
        function onScroll(){
            scrollHeight=$(document).scrollTop();
            
            if(scrollHeight >= 2400){
                $headerWrap.hide();
                $detailMenu.css('position', 'fixed');
            }else{
                $headerWrap.show();
                $detailMenu.css('position', 'relative');
            }
        }
        
    }//fixMenu

    function onMenuClick(seq){
           var offset=$('.m0'+seq).offset();
           $('html, body').animate({scrollTop : offset.top}, 300);
    }//onMenuClick

    function itemDetailFold(){
        var $foldBtn;
        var $viewBtn;
        var $itemDetailInner;
        var detailOpen=true;

        init();
        inEvent();

        function init(){
            $foldBtn=$('#fold_btn > a');
            $viewBtn=$('#detail_btn > a');
            $itemDetailInner=$('#item_detail_inner');
            //$viewBtn.parent().hide();
            $itemDetailInner.hide();
            
        }
        function inEvent(){
            
            $viewBtn.on('click focus', viewItem);
            $foldBtn.on('click focus', viewItem);
        }
       
        function viewItem(){
            if(detailOpen==false){
                $viewBtn.parent().hide();
                $('#item_detail_inner').show();
                $('#item_detail_inner').stop();
                $('#item_detail_inner').animate({'height':1419, 'opacity':1}, 300, "easeOutCubic", function(){
                    $('#item_detail_wrap').css('background-color',' #514f4f');
                });

            detailOpen=true;
            return false;
        }else if(detailOpen==true){
           
            $itemDetailInner.stop();
            $itemDetailInner.animate({'height':0, 'opacity':0}, 300, "easeOutCubic", function(){
                $('#item_detail_inner').hide();
                $('#item_detail_wrap').css('background-color','#ffffff');
                $viewBtn.parent().show();
            });
            detailOpen=false;
            return false;
        }
        }
       
    }//itemDetailFold
    
    function boldMenu(){
        var $comment;
        var $pageNum;
        
        init();
        inEvent();
        
        function init(){
            $comment=$('.comment_select').find('a');
            $pageNum=$('.page_num').find('a');
        }
        function inEvent(){
            $comment.on('click focus', changeBold);
            $pageNum.on('click focus', changeNumBold);
        }
        function changeBold(){
            $comment.removeClass('on');
            $(this).addClass('on');
            
            return false;
        }
        
        function changeNumBold(){
            $pageNum.removeClass('on');
            $(this).addClass('on');
            
            return false;
        }
    }

    