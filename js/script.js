let heading=document.querySelectorAll('.heading')

let convertHeading=Array.from(heading)




convertHeading.map(item=>{
    
    let count=0
    function counterjs(){
    count++
    item.innerHTML=count
    if (count==50) {
    clearInterval(stop)
    
}
}

let stop =setInterval(() => {
 
counterjs()
    
}, 100);


})


