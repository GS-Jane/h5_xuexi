// document.addEventListener('DOMContentLoaded',function(){
//         jQuery(function($){
//                     $('.box').yjCarousel({
//                         imgs:['img/bn1.jpg','img/bn2.jpg','img/bn3.jpg','img/bn4.jpg'],
//                     }).show()

//                 })
//          //返回顶部
//     var fanhui = document.querySelector('.fanhui');
//     fanhui.onclick = function(){
//         var timer = setInterval(function(){

//             var scrollTop = window.scrollY;

//             var speed = Math.floor(scrollTop/10);

//             if(scrollTop<=10 || speed === 0){
//                 clearInterval(timer);
//                 window.scrollTo(0,0);
//             }
//             window.scrollBy(0,-speed);
//         },30);
//     };

//      //数据生成商品
//     var splb = document.querySelector('.splb');
    
//     let arr_status = [200,304];
        
//     let xhr = new XMLHttpRequest();
//      xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && arr_status.includes(xhr.status)){
//             var data = JSON.parse(xhr.responseText);
//             splb.innerHTML = data.map(function(item){
//                 return `
//                     <li class="splb-li" data-id="${item.id}">
//                                 <a href="javascript:0;">
//                                     <img src= '${item.imgs}'>
//                                     <h4>${item.category}</h4>
//                                     <h3>${item.name}</h3>
//                                 </a>
//                                 <div class="main_sp_button clearfix">
//                                     <span class="xj fl">${item.promotionprice}</span>
//                                     <p class="yj fl">
//                                         <span class="yj_1"><del>${item.price}</del></span><br />
//                                         <span class="yj_2">${item.lishen}</span>
//                                     </p>
//                                     <button class="main-btn fl">加入购物车</button> 
//                                 </div>
//                     </li>`
//             }).join('');
            
//         }
//     };
//     xhr.open('get','../api/index.php',true);
//     xhr.send();


    
//     $('.splb').on('click','li',function(){
//         var $sp = $(this).attr('data-id')
//         location.href = 'html/spxq.html?id=' + $sp;  
//     })
    
//       $('.mbar_gouwuche').on('click',function(){
//                 // $('.box').slideToggle();
//                 $('.mbar_cart').fadeToggle();
//             })
//         $('.cha').on('click',function(){
//             $('.mbar_cart').hide();
//         })
// });
require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery','carousel'],function($,ca){

                jQuery(function($){
                            $('.box').yjCarousel({
                                imgs:['img/bn1.jpg','img/bn2.jpg','img/bn3.jpg','img/bn4.jpg'],
                            }).show()

                        })
                 //返回顶部
            var fanhui = document.querySelector('.fanhui');
            fanhui.onclick = function(){
                var timer = setInterval(function(){

                    var scrollTop = window.scrollY;

                    var speed = Math.floor(scrollTop/10);

                    if(scrollTop<=10 || speed === 0){
                        clearInterval(timer);
                        window.scrollTo(0,0);
                    }
                    window.scrollBy(0,-speed);
                },30);
            };

             //数据生成商品
            var splb = document.querySelector('.splb');
            
            let arr_status = [200,304];
                
            let xhr = new XMLHttpRequest();
             xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && arr_status.includes(xhr.status)){
                    var data = JSON.parse(xhr.responseText);
                    splb.innerHTML = data.map(function(item){
                        return `
                            <li class="splb-li" data-id="${item.id}">
                                        <a href="javascript:0;">
                                            <img src= '${item.imgs}'>
                                            <h4>${item.category}</h4>
                                            <h3>${item.name}</h3>
                                        </a>
                                        <div class="main_sp_button clearfix">
                                            <span class="xj fl">${item.promotionprice}</span>
                                            <p class="yj fl">
                                                <span class="yj_1"><del>${item.price}</del></span><br />
                                                <span class="yj_2">${item.lishen}</span>
                                            </p>
                                            <button class="main-btn fl">加入购物车</button> 
                                        </div>
                            </li>`
                    }).join('');
                    
                }
            };
            xhr.open('get','../api/index.php',true);
            xhr.send();


            
            $('.splb').on('click','li',function(){
                var $sp = $(this).attr('data-id')
                location.href = 'html/spxq.html?id=' + $sp;  
            })
            
              $('.mbar_gouwuche').on('click',function(){
                        // $('.box').slideToggle();
                        $('.mbar_cart').fadeToggle();
                    })
                $('.cha').on('click',function(){
                    $('.mbar_cart').hide();
                })

    })

});
