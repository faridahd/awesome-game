
function startRace() {
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block"
    var time1=0, time2=0, time3=0;
    var arrWinner = [0, 0, 0];
    var ran1 = getRandom();
    var go1 = setInterval(run1, 50);

    var ran2 = getRandom();
    var go2 = setInterval(run2, 50);
    var ran3 = getRandom();
    var go3 = setInterval(run3, 50);

    function run1(){
        if(ran1 >= 1000){
            clearInt(1);
        } else {
            time1 += 1;
            ran1 += changeSpeed();
            continueInt(1);
        }
    }
    function run2(){
        if(ran2 >= 1000){
            clearInt(2);
        } else {
            time2 += 1;
            ran2 += changeSpeed();
            continueInt(2);
        }
    }
    function run3(){
        if(ran3 >= 1000){
            clearInt(3);
        } else {
            time3 += 1;
            ran3 += changeSpeed();
            continueInt(3);
        }
    }
    
    function winner(time){
        if(arrWinner[0]==0){
            arrWinner[0]=time;
            return 1;
        } else if(arrWinner[1]==0){
            arrWinner[1]=time;
            return 2;
        } else {
            arrWinner[2] = time;
            return 3;
        }
    }
    function continueInt(num){
        var temp;
        if(num == 1){
            temp = ran1;
        } else if(num==2){
            temp = ran2;
        } else {
            temp = ran3;
        }
        document.getElementById("box" + num).style.width = temp+"px";
        document.getElementById("img" + num).style.left = temp+"px";
    }
    
    function clearInt(num){
        var temp1, temp2;
        if(num==1){
            temp1 = time1;
            temp2 = go1; 
        } else if(num==2){
            temp1 = time2;
            temp2 = go2;
        } else {
            temp1 = time3;
            temp2 = go3;
        }
        clearInterval(temp2)
        document.getElementById("img" + num).src = "images/manArrive.png";
        document.getElementById("box" + num).style.width = "1000px";
        document.getElementById("result" + num).innerHTML = winner(temp1);
    }

    function getRandom(){
        return Math.floor(Math.random() * 300);
    }
    function changeSpeed(){
        return Math.floor(Math.random() * 10);
    }
}
function reset(){
    window.location.reload();
}