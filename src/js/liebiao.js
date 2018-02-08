jQuery(function($){
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
                                    <img src= '../${item.imgs}'>
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
    xhr.open('get','../api/liebiao.php',true);
    xhr.send();


    
    $('.splb').on('click','li',function(){
        var $sp = $(this).attr('data-id')
        location.href = 'html/spxq.html?id=' + $sp;  
    })
})