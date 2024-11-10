
function goToLogin(){
    window.location.href="login.html";
  }
  function goToHome(){
    window.location.href="proekt1.html";
  }

 function first(){
    document.getElementById("image").setAttribute("src", "sliki/new-cars//new-car1.jpg");
 }
 function second(){
    document.getElementById("image").setAttribute("src", "sliki/new-cars//new-car2.jpg");
 }

 function third(){
    document.getElementById("image").setAttribute("src", "sliki/new-cars//new-car3.jpg");
 }

 function start(){
    likes();
    quantity();
    addImg();
    removeImg();
    comment();
 }
function likes(){
    
    var likebtn= document.getElementById("like");
    var likes=document.getElementById("number");
    likebtn.addEventListener("click" ,change,false);
    function change(){
        number.innerHTML=parseInt(likes.innerHTML)+1;
    }
}
function quantity(){
    var plus=document.getElementById("plus");
    var quantity=document.getElementById("quantity");
    var total=document.getElementById("total");
    var price=document.getElementById("price");
    var minus=document.getElementById("minus");
    plus.addEventListener("click",more,false);
    minus.addEventListener("click",less,false);
    function more(){
        quantity.innerHTML=parseInt(quantity.innerHTML)+1;
        total.innerHTML=parseInt(quantity.innerHTML)*parseInt(price.innerHTML);
    }
    function less(){
        if(parseInt(quantity.innerHTML)>0){
        quantity.innerHTML=parseInt(quantity.innerHTML)-1;
        total.innerHTML=parseInt(quantity.innerHTML)*parseInt(price.innerHTML);
        }
    }
}

function addImg(){
    var ul=document.getElementById("prodcut-images");
    var input=document.getElementById("input-img");
    input.onchange= function(){
    
        var li=document.createElement("li");
        var src=URL.createObjectURL(input.files[0]);
        li.innerHTML='<a href="#" class="change"><img src='+src+' style="width:70px; height:70px"  onclick=showImg(src)></a>';
        li.classList.add("item");
        ul.appendChild(li);

    }
   
}
function showImg(src){
    document.getElementById("image").setAttribute("src", src);
 }

function removeImg(){
    var btn=document.getElementById("remove-img");
    btn.addEventListener("click",removeit,false);
    function removeit(){
        var ul=document.getElementById("prodcut-images");
        ul.removeChild(ul.lastChild);
    }
}


function comment(){
    var btn=document.getElementById("commentBtn");
    btn.addEventListener("click" , postComment, false);
    function postComment(){
        var ul=document.getElementById("comment-ul");
        var text=document.getElementById("textarea");
        var li=document.createElement("li");
        var numComment=ul.childNodes.length;
        if(text.value!=""){
        var comment="<span style='font-weight:bold'>Comment "+numComment+": </span>"+text.value;
        text.value=comment;
        li.innerHTML=comment;
        text.value="";
        ul.appendChild(li);
        }
    }
}

 window.addEventListener("load" , start, false);