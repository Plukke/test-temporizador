window.onload=function(){
	let work = document.getElementById("init");
	work.addEventListener("click", handler);
}


function handler() {

    let time1 = document.getElementById('time').value;
    let pieces = time1.split(":");

    let hours = pieces[0];
    let minutes = pieces[1];
    let seconds = pieces[2];
    let time = {
        hours: hours * 1,
        minutes: minutes * 1,
        seconds: seconds * 1
    };


    let timer = setInterval(countdown, 1000);

    function countdown() {
        let container = document.getElementById('count');

        if (time.seconds > 0) {
            time.seconds--;
        }
        else {
            if (time.minutes > 0) {
                time.minutes--;
                time.seconds = 60;
            }
            else {
                time.minutes = 60;
                time.seconds = 60;
                time.hours--;
            }
        }

        if (time.hours >= 0) {
            container.innerHTML =  time.hours + '</b> horas, <b>' + time.minutes + '</b> minutos, <b>' + time.seconds + '</b> segundos';
        }else if(time.hours >= 61){
            container.innerHTML = time.minutes + '</b> minutos, <b>' + time.seconds + '</b> segundos'
        }else if(time.minutes >= 61){
            container.innerHTML =time.seconds + '</b> segundos'

        }
        else {
            container.innerHTML = 'Se termino el tiempo!';
            // clearInterval(timer);
            
    }  
    document.getElementById("int").addEventListener("click", clearInt);

    function clearInt() {
       return container.innerHTML = clearInterval(timer)
    }
    }       
}
 

