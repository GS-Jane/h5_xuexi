jQuery(function($){
    $('.goods').gdsZoom({
        position:'right'
    });


    //数据参数获取显示在详情页
    var params = location.search;
    params = params.substring(1).split('=')[1];
    var $doods = $('.goods')
   
    $.ajax({
       url: '../api/spxq.php',
       url: '../api/liebiao.php',
       type:'get',
       data: {
            id:params
       },
       success:function(data){
            var data = JSON.parse(data);
            data.forEach(function(item,index){
                // var minImg = new Image();
                // minImg.src = '../'+item.imgs;

                // $doods[0].append(minImg);
                $('.tuli')[0].src = '../'+item.imgs;
                $('.tuli').attr('data-big','../'+item.imgs);
                $('.neir_h1')[0].innerText = item.category + item.name;
                $('.jiage_1')[0].innerText = item.price;
                $('.jiage_qty')[0].innerText = item.promotionprice;
                
            })

       }
       
   })
   
   //隐藏购物车
        // --------------------
        $('.mbar_gouwuche').on('click',function(){
                // $('.box').slideToggle();
                $('.mbar_cart').fadeToggle();
            })
        $('.cha').on('click',function(){
            $('.mbar_cart').hide();
        })

        //飞入购物车
            $main = $('#main');
            $mbar_cart  = $('.mbar_cart ul');

            $main.on('click','.shouc-btn',function(){

                var $main_m = $(this).closest('.main_m');

                var $img = $main_m.find('.tuli');
                    console.log($img);
                // 1>复制当前商品图片(目的：用于实现动画效果)
                var $copyImg = $img.clone();
                    console.log($copyImg)
                // 设定图片样式
                $copyImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth()
                });

                // 把图片写入页面
                $('body').append($copyImg);


                // 动画
                $copyImg.animate({
                    left:1300,
                    top:200,
                    width:30
                },function(){
                    // 动画完成后

                    // 删除复制的图片
                    $copyImg.remove();

                    // 2>复制当前商品所有信息(目的：于往购物车添加)
                    var $copyLi = $main_m.clone();

                    // 删除购物车中的“添加到购物车”按钮
                    $copyLi.find('.shouc').remove();
                    $copyLi.find('.jiage_1').remove();
                    $copyLi.find('.youji').remove();
                    $copyLi.find('.fan').remove();
                    $copyLi.find('.qty').remove();

                    // 创建删除按钮
                    // $('<span/>').addClass('btn-close').html('&times;').appendTo($copyLi);

                    // $carlist.append($copyLi);
                    $copyLi.appendTo($mbar_cart);
                })

            });
    
        

        //写入cookie
            var main_m = document.querySelector(".main_m")
            var goodslist = [];
            // 获取cookie
            var cookies = document.cookie;
         
            cookies = cookies.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] === 'goodslist'){
                    goodslist = JSON.parse(arr[1]);
                }
            });


            main_m.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.tagName.toLowerCase() === 'button'){
                    var currentLi = target.parentNode.parentNode.parentNode;
                    var id = params;
                    console.log(id);


                    // 判断当前商品是否已经存在cookie当中
                    for(var i=0;i<goodslist.length;i++){
                        if(goodslist[i].id === id){
                            goodslist[i].qty++;
                            break;
                        }
                    }

                    // 如果i的值等于goodslist.length
                    // 说明循环执行完成后，无法找对应id的商品
                    console.log(currentLi.children[1].children[1].children[1].children[1].innerText)
                    if(i===goodslist.length){
                        // 通过按钮获取商品信息
                        var goods = {
                            id:id,
                            imgurl:currentLi.children[0].children[0].src,
                            name:currentLi.children[1].children[0].innerText,
                            price:currentLi.children[1].children[1].children[1].children[1].innerText,
                            qty:1
                        }

                        // 添加到数组
                        goodslist.push(goods);
                        // 写入cookie
                    document.cookie = 'goodslist='+JSON.stringify(goodslist);
                      console.log(document.cookie);
                    }
                    

                    
                       
                }
            }
    
});
