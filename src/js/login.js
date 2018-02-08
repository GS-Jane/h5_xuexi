jQuery(function($){
            $('.Login').on('click',function(){
                

                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else if(data === 'fail'){
                             alert('请输入正确的用户名和密码');
                        }
                    }
                })
                
            })
        })