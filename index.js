let t = document.querySelector(".clock__time")
console.log(t.innerHTML)
var i = setInterval(function(){
    const now = new Date();
    
    const current = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    if (now.getHours() > 12){
        t.innerHTML = current + " PM"
    }
    else{
        t.innerHTML = current + " AM"
    }
    
},1000)