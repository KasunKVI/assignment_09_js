
let currentLight = 0;
let currentDirection="Right";
let lightCount = 7;
let intervalId = null;

var lightOn = {
    background: "#d11f1f",
    boxShadow:  "20px 20px 60px #b21a1a,20px -20px 60px #f02424"
}
setLight = () =>{

    $("div").css("background", "white");

    if (currentDirection==="Right") {

        currentLight++

        $("div").eq(currentLight).css("background", "red");

        if (currentLight - 1 > 0) {
            $("div").eq(currentLight - 1).css("background", "#fc7b7b" , "box-shadow", "20px 20px 60px #d66969 -20px -20px 60px #ff8d8d");
            $("div").eq(currentLight - 2).css("background", "#ffbdbd");
        }

        if (currentLight===(lightCount-1)){
            currentDirection="Left";
        }
    }else {
        currentLight--
        $("div").eq(currentLight).css("background", "red");
        $("div").eq(currentLight+1).css("background", "#fc7b7b");
        $("div").eq(currentLight+2).css("background", "#ffbdbd")

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
    intervalId==null;
    $("#audio")[0].pause();
});

