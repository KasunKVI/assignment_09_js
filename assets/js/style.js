
let currentLight = 0;
let currentDirection="Right";
let lightCount = 7;
let intervalId = null;

var lightOn = {
    background: "#d11f1f", boxShadow:  "20px 20px 60px #b21a1a , 20px -20px 60px #f02424"

}

var lightOff = {
    background: "white", boxShadow:  "black"

}
var lightOn1 = {
    background: "#fc7b7b", boxShadow:  "20px 20px 60px #d66969 , -20px -20px 60px #ff8d8d"

}
var lightOn2 = {
    background: "#ffbdbd", boxShadow:  "20px 20px 60px #d9a1a1,-20px -20px 60px #ffd9d9"

}

setLight = () =>{

    $("div").css(lightOff);

    if (currentDirection==="Right") {

        currentLight++

        $("div").eq(currentLight).css(lightOn);

        if (currentLight - 1 > 0) {
            $("div").eq(currentLight - 1).css(lightOn1);
            $("div").eq(currentLight - 2).css(lightOn2);
        }

        if (currentLight===(lightCount-1)){
            currentDirection="Left";
        }
    }else {
        currentLight--
        $("div").eq(currentLight).css(lightOn);
        $("div").eq(currentLight+1).css(lightOn1);
        $("div").eq(currentLight+2).css(lightOn2)

        if (currentLight ===0){
            currentDirection="Right";
        }
    }

}

$("#start").on('click', () => {

    if (intervalId==null){
        intervalId = setInterval(setLight, 100);
        $("#audio")[0].play();
    }

});

$("#stop").on('click', () => {
    clearInterval(intervalId);
    intervalId=null;
    $("#audio")[0].pause();
});

