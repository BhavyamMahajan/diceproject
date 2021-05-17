function diceroll()
{
    var x = parseInt(Math.ceil(Math.random()*6));
    var y = parseInt(Math.ceil(Math.random()*6));
    var dice1 = document.querySelector('#dice1');
    var dice2 = document.querySelector('#dice2');
    var audio = document.getElementById("audio");
    audio.play();
    dice1.innerHTML = '<img src=images/'+x+'.png />'
    dice2.innerHTML = '<img src=images/'+y+'.png />'
}