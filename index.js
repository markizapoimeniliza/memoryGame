



    var cards = document.querySelectorAll(".memory-card")
    var result = document.getElementById("points")
    var timer = document.querySelector(".cards")


    var hasFlippedCard //false
    var firstCard,secondCard
    var lockedScreen
    
    var points = 0
    var seconds = 30
    var button1 = document.getElementById("btn")
    var button2 = document.getElementById("btn2")
    var button3 = document.getElementById("btn3")

    //flag
    var off = false
    var timerON = false
  
    
    var popup = document.getElementById("text")
    
    const secondsF = setInterval(() => {
        // false AND true 
        if (off || seconds <= 0){
            clearInterval(secondsF)
            timer.innerHTML = " "
        }
        else if (!off && seconds > 0){
            --seconds
            timer.innerHTML = `<span style= "position: relative; top: -3vh; font-size: 2.7vmin" >${seconds} seconds</span>`
        }
        else{}
    }, 1000)

function flip(){
        // if (this === firstCard) return to the beginning 
        if (lockedScreen) return;
        if (this === firstCard) return;
        this.classList.add("flip");
        //! - logic reversal operator
        if (!hasFlippedCard){ //it will be false
            hasFlippedCard = true
            firstCard = this
            return
        }
        secondCard = this
        checkMatch()
        
    }
    
    function checkMatch(){
        let match = (firstCard.dataset.space === secondCard.dataset.space)
        match? blockCards() : unflipCards()
    }
    
    function blockCards(){
        //if - return else execute if (as it is an operation), then coe till the end
        points++
        result.innerHTML = points
        firstCard.removeEventListener("click",flip)
        secondCard.removeEventListener("click",flip)
        //refactoring
        reset()
    }
    
    
       
    //the second will not open! - async FOR DELAY
function unflipCards(){
        //from function to function will be saved
        lockedScreen = true
        timerON = true
        if (timerON){
        setTimeout(()=>{
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            reset()

        }
        , 1500)
    }
}

   
function reset(){
            [lockedScreen,hasFlippedCard,firstCard,secondCard,timerON] = [false,false,null,null,false]
}
        
        
        
function shuffling(){
            cards.forEach(card => {
                card.style.order = Math.floor(Math.random()*12)
            })
}
        
shuffling()
        
        
        
cards.forEach(card => card.addEventListener("click", flip))



//SEPARATED, NOT UNITED

function final(){
if(!sessionStorage.getItem('refreshed')) {
    sessionStorage.setItem('refreshed', true);
    
    setTimeout(() => {
        result.innerHTML = " "
        localStorage.clear()
        localStorage.setItem("1round", JSON.stringify(points))
        window.location.reload()
    },30000)

}
else if(!sessionStorage.getItem('refreshed2')) {
    sessionStorage.setItem('refreshed2', true);
   
    setTimeout(() => {
        result.innerHTML = " "
        localStorage.setItem("2round", JSON.stringify(points))
        window.location.reload()
    },30000)

 
    
} 
else if(!sessionStorage.getItem('refreshed3')) {
    sessionStorage.setItem('refreshed3', true);
   
    //KEY UNIQUE! VALUE CAN BE USED MANY TIMES

    setTimeout(() => {
        result.innerHTML = " "
        localStorage.setItem("3round", JSON.stringify(points))
        window.location.reload()
    },30000)


    
}
else if(sessionStorage.getItem('refreshed') && sessionStorage.getItem('refreshed2') && sessionStorage.getItem('refreshed3')){
    result.innerHTML = " ";
    timer.innerHTML = " ";
    cards.forEach(card => {
        card.removeEventListener("click",flip)
        // card.classList.remove("flip")
    });
    const nv = setInterval(() =>{
        for(let o = 0; o<nv; o++){
            clearInterval(o)
        }
    } ,0)
    // clearInterval(secondsF)
    localStorage.clear()
    sessionStorage.clear()
    //innerHTML of div is not a text
    popup.innerHTML = `The number of points is ${+localStorage.getItem("1round") + +localStorage.getItem("2round") +
    +localStorage.getItem("3round")}! 
    </br>
    </br>
    The game is over.`;
   
    setTimeout(()=> {
        //classList ONLY TO HTML ELEMENT
        popup.classList.add("pop-upOutput");
    }, 2000)

    setTimeout(()=> {
        popup.classList.remove("pop-upOutput")
    },7000)

    
}

}

final()



//window.stop() works ONLY with DOM
//debugger - stop everything after (IN THIS SCOPE)

//n - random UNTIL another button clicked -- do while

//STOP
button1.addEventListener("click",(e)=>{
     e.preventDefault();
    const highestId = setTimeout(() => {
             //BY IDS
             for (let i = highestId; i >= 0; i--) {
                 //clear Intervals and timeOuts
                 clearTimeout(i);
                }
 }, 0);
    
    cards.forEach(card => {
    //a function flip
    card.removeEventListener("click",flip);
    });
    sessionStorage.clear()

})

//continue from pause
button2.addEventListener("click",(e) =>{
        e.preventDefault();
        //from previous
        const nIn = setInterval(() => {
            if(seconds <= 0){
                clearInterval()
                timer.innerHTML = " ";
            }
            else{
                seconds--
                timer.innerHTML = `${seconds} seconds`
            }
        },1000);
        if(firstCard && secondCard){
            checkMatch()
            cards.forEach(card => card.addEventListener("click",flip));
            sessionStorage.clear()
            }
            //if they are flipped or > 1 click
        else{
            const nV = setInterval(()=>{
            },seconds = seconds) //it should slow a timer
            cards.forEach(card => card.addEventListener("click",flip))
            //prevent too many times
            sessionStorage.clear()
            //if not active  the TIMER
        };    
            final()
        
    })
    
   
//ASYNC WILL BE AFTER SYNC
button3.addEventListener("click",() => {
    return new Promise ((resolve,reject) => {
        //; - HIGHLY ESSENTIAL
        //list === array (in js)
        off = false
        timerON = true
        result.innerHTML = " ";
        timer.innerHTML = " ";
        [points] = [0];
        //let [] - declare
        sessionStorage.clear();
        localStorage.clear();
        const indexInt = setInterval(() => {
            for (let i = indexInt; i>=0; i--){
                clearInterval(i);
            }
        },0);
        cards.forEach(card => {
        card.classList.remove("flip")
        card.removeEventListener("click",flip)  
        });
    resolve()
    }
    )
    .then( () => {
        //cannot use the name AS IT IS VOLATILE
        cards.forEach(card => {
            card.addEventListener("click", flip)
        });
        shuffling()
        final()
        // shuffling()
        // final()
        seconds = 30;
        off = false
        setInterval(() => {
            if (off || seconds <= 0){
                clearInterval(secondsF)
                timer.innerHTML = " "
            }
            else if (!off && seconds > 0){
                --seconds
                timer.innerHTML = `${seconds} seconds`
            }
            else{};
        },1000);
     
    }
    )
})









 




 



