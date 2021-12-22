const day = document.querySelector('#days');
const hr = document.querySelector('#hours');
const min = document.querySelector('#minute');
const sec = document.querySelector('#second');
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();


let x =setInterval(()=>{
    var now= new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     
        if(days>=10){
            day.innerHTML = days + " Days ";
        }
        else{
            day.innerHTML = "0" + days + " Day ";
        }
      hr.innerHTML = hours + " Hours";
        min.innerHTML = minutes + " Minutes";
        sec.innerHTML = seconds + " Seconds";
      if (distance < 0) {
    clearInterval(x);
    document.getElementById("p").innerHTML = "Happy New Year 2022";
  }
 
} , 1000);


const dark= document.querySelector('#switch');
const change = document.querySelector('.change');

dark.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        change.innerHTML = 'Switch to Light Mode';
    }
    else{
       change.innerHTML = 'Switch to Dark Mode';
    }
}
);