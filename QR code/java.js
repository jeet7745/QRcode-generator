let qrtext= document.getElementById("qrtext");
let qrimage= document.getElementById("qrimage");
let imgbox= document.getElementById("imgbox");

function generate(){
    if(qrtext.value.length > 0){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("show-img");
}
else{
   qrtext.classList.add("error");
   setTimeout( () => {
    qrtext.classList.remove("error")
   },1000)
}
}

