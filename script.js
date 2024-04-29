const shoppingcart=document.querySelector(".cart-items-container");
const cart=document.querySelector("#cart-btn");

function togglefunction(){
    shoppingcart.classList.toggle("active");
    loginform.classList.remove("active");
}

cart.addEventListener("click",togglefunction);
    
const loginform=document.querySelector(".login-form");
const loginbtn=document.querySelector("#login-btn");

function togglelogin(){
    loginform.classList.toggle("active");                                      
    shoppingcart.classList.remove("active"); 
}
loginbtn.addEventListener("click",togglelogin);

var app =angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.email='gulatiriya20@gmail.com';
    $scope.password='...............';
    
});

