function diceroll()
{
    var x = (Math.ceil(Math.random()*6));
    var y = document.getElementById("result");
    var show;
    x = parseInt(x);
    if(x==1)
    {
        document.getElementById("div2").src="images/1.jpg";
    }
    else
    { y.innerHTML=x; }

}