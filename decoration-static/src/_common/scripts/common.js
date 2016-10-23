/**
 * Created by hywanliyuan on 16/9/11.
 */
$(function(){
    var $loginBtn = $("#login-btn");
    var $alertLogin = $("#alert-login");

    //登录
    $loginBtn.hover(function(){
        $alertLogin.show();
    },function(){
        $alertLogin.hide();
    })
})