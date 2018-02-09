jQuery(function($){
      //数据生成商品
    var splb = document.querySelector('.splb');
    var $page = $('.page');
    
    // let arr_status = [200,304];
        
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 4 && arr_status.includes(xhr.status)){
    //         var data = JSON.parse(xhr.responseText);
    //         splb.innerHTML = data.map(function(item){
    //             return `
    //                 <li class="splb-li" data-id="${item.id}">
    //                             <a href="javascript:0;">
    //                                 <img src= '../${item.imgs}'>
    //                                 <h4>${item.category}</h4>
    //                                 <h3>${item.name}</h3>
    //                             </a>
    //                             <div class="main_sp_button clearfix">
    //                                 <span class="xj fl">${item.promotionprice}</span>
    //                                 <p class="yj fl">
    //                                     <span class="yj_1"><del>${item.price}</del></span><br />
    //                                     <span class="yj_2">${item.lishen}</span>
    //                                 </p>
    //                                 <button class="main-btn fl">加入购物车</button> 
    //                             </div>
    //                 </li>`
    //         }).join('');
            
    //     }
    // };
    // xhr.open('get','../api/liebiao.php',true);
    // xhr.send();
    let pageNo = 1; 
    let qty = 6;
    function getajax(){
        $.ajax({
            url: '../api/liebiao.php',
            type: 'GET',
            data: {
                pageNo: pageNo,
                qty: qty

            },
            success: function(data){
                var total = JSON.parse(data).total;
                var data = JSON.parse(data).data;
                console.log(total,data)
                splb.innerHTML = data.map(function(item,index){

                    return `<li class="splb-li" data-id="${item.id}">
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
                }).join('')
            
                let pageQty = Math.ceil(total/qty);
                $page[0].innerText = '';
                for(let i=1;i<=pageQty;i++){

                    let span = document.createElement('span');
                    span.innerText = i;
                    if(i == pageNo){
                        console.log(666)
                        span.className = 'active';
                    }
                    $page[0].appendChild(span);
                }
            }
           
        })
    }
    
    getajax()
    $page.on('click','span',function(){
        pageNo = $(this).text();

        getajax()
    })

    
    $('.splb').on('click','li',function(){
        var $sp = $(this).attr('data-id')
        location.href = 'spxq.html?id=' + $sp;  
    })
})