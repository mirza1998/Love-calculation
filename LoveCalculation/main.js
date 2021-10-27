
/*document.querySelector(".btn").addEventListener('focus', onfocus);
//
//function onfocus(event){
//    this.style.background = "#ddd"
//}*/

let btn_love = document.querySelector(".btn-lv");

btn_love.addEventListener("click", () => {
    document.querySelector(".fname").style.backgroundColor = "#000";
    document.querySelector(".lv_name").style.backgroundColor = "#000";

} )

btn_love.addEventListener("click", () => {
    checkper()
})

function checkper(){
    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
    let rifa = document.querySelector(".valobasa");

    if(name==""){
        alert("Please enter your name");
    } else if(name.length <= 2){
        alert ('Min length is 3');
    }else if (!isNaN(name)){
        alert ('Numbers Are Not Allowed');
    }
    else if(lname==""){
        alert("Please enter your name");
    } else if(lname.length <= 2){
        alert ('Min length is 3');
    }else if (!isNaN(lname)){
        alert ('Numbers Are Not Allowed');
    }else{
        let lovedata = Math.random()* 50 + 50;
        lovedata = Math.floor(lovedata) ;
        //document.getElementById('love').value = lovedata + "%" ;
        let heart = document.querySelector('.heart');

        heart.lovedata
        rifa.innerHTML = lovedata + "%";
        // alert ("God bless your Relatoinship"), 5000; 

    }
}
// setTimeout (function(){
    // alert ("God bless your Relatoinship"), 5000;
// )}




