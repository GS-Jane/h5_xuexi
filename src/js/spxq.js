jQuery(function($){
    $('.goods').gdsZoom({
        position:'right'
    });

    var params = location.search;
    params = params.substring(1).split('=')[1];
    var $doods = $('.goods')
   
    $.ajax({
       url: '../api/spxq.php',
       type: 'get',
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
   
   
});
