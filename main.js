function diceroll()
{
    var x = (Math.ceil(Math.random()*6));
    var showBox = document.querySelector('#div2');
    x = parseInt(x);

    showBox.innerHTML = '<img src=images/'+x+'.jpg />'
}