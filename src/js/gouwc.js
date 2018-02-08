document.addEventListener('DOMContentLoaded',function(){
        var oCarList = document.getElementById('carList');
        var oSubPrice = oCarList.nextElementSibling;
        var btnClear = document.getElementById('btnClear');

        var goodslist = Cookie.get('goodslist');
        console.log(goodslist)
        if(goodslist.length===0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }
        

        render();

        function render(){

            var total = 0;

            // 根据数据生成html结构
            var ul = document.createElement('ul');
                ul.innerHTML = goodslist.map(function(item){
                console.log(item);
                total += item.price*item.qty;
                return '<li data-id="'+item.id+'">'+
                    '<img src="'+item.imgurl+'">'+
                    '<h4>'+item.name+'</h4>'+
                    '<p class="price"><span>'+item.price+'&times;'+item.qty+'</span></p>'+
                    '<span class="btn-close">&times;</span>'+'<p class="gui">--</p>'+'<p class="jia">'+item.price+'</p>'+'<p class="jin">'+item.price+'</p>'
                '</li>';
            }).join('');

            // 添加到页面
            oCarList.innerHTML = '';
            oCarList.appendChild(ul);

            // 写入总价
            oSubPrice.innerHTML = '总计：' + total.toFixed(2);
        }


        // 清空购物车
        btnClear.onclick = function(){
            var now = new Date();
            now.setDate(now.getDate()-10);

            // 清除cookie：利用设置过期时间达到删除效果
            document.cookie = 'goodslist=null;expires='+now.toUTCString();
            

            render();
        }

        // 删除单个商品
        // 利用事件委托
        oCarList.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            if(target.className === 'btn-close'){
                // goodslist
                // 找到数组中对应的id，并删除
                // 重新写入cookie

                // 获取当前商品对应的id
                var id = target.parentNode.getAttribute('data-id');

                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist.splice(i,1);
                        break;
                    }
                }

                // 重新写入cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                render();
            }
        }
})