let heading=document.querySelectorAll('.heading')

let convertHeading=Array.from(heading)





convertHeading.map(item=>{
    
    let count=0
    function counterjs(){
    item.innerHTML=count
    switch (count) {
        case 1:
            item.style.color='red'
            break;
         case 2:
            item.style.color='green'
            break;
        case 3:
            item.style.color='blue'
            break;
        case 4:
            item.style.color='#c100ff'
            break;

        case 5:
            item.style.color='blue'
            break;
         
        case 6:
            item.style.color='#f3ff00'
            break;

        case 7:
            item.style.color='blue'
            break;

        case 8:
            item.style.color='#f3ff00'
            break;

        case 9:
            item.style.color='#f3ff00'
            break;

        case 10:
            item.style.color='blue'
            break;

    }


    count++
    if (count>item.dataset.number) {
    clearInterval(stop)
    
}
}

let stop =setInterval(() => {
 
counterjs()
    
},item.dataset.speed)


})


