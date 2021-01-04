 $(window).load(function(){
        myPage();
         gnbAction();
        goBack();
    })
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
        
    
 
    function goBack(){
        var $backBtn=$('.back_btn').children();
        var $categorySelect=$('#category').find('a');
        var $categoryList=$('#left_page');
        var $rightPage=$('#right_page');
        
          $categorySelect.css({'color':'#363636', 'text-decoration':'none'});
            $rightPage.css({'right': -800, 'opacity':0});
         $categoryList.css({'width': 1200, 'background-color':'transparent'});
        
        $backBtn.on('click focus', backMenu);
        $categorySelect.on('click focus', openMenu);
        function backMenu(){
            $categorySelect.css({'color':'#363636', 'text-decoration':'none'});
            $rightPage.stop();
            $rightPage.animate({'right': -800, 'opacity':0}, 300, "easeOutCubic", function(){
                $categoryList.stop();
                $categoryList.animate({'width': 1200, 'background-color':'transparent'}, 300, "easeOutCubic");
                
                return false;
            });
            
        }
        function openMenu(){
            $categorySelect.css({'color':'#363636', 'text-decoration':'none'});
            $(this).css({'color':'#111111','text-decoration':'underline'});
            $categoryList.stop();
            $categoryList.animate({'width': 410, 'background-color':' #0f1181','opacity':0.8}, 300, "easeOutCubic", function(){
            $rightPage.stop();
            $rightPage.animate({'right': 0, 'opacity':1}, 300, "easeOutCubic");

            return false;
            }); 
        }
    }//goback
    