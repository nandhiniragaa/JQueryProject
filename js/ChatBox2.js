$(document).ready(function()
{
    $("#btn1").click(function()

    {        
        var bala=document.getElementById("msg1").value
        if(bala!="")
        {        
        $("#one").append("<p style=\"float:right;color:black;font-family:cursive;margin:-5px;font-size:20px\">"+bala+"</p><br>").append("<br>")
        $("#two").append("<p style=\"float:left ;color:black;font-family:cursive;margin:-5px;font-size:20px\">"+bala+"</p><br>").append("<br>")
       scrolfunction();}

    })
    $("#btn2").click(function()
    {
        var bala1=document.getElementById("msg2").value        
        $("#one").append("<p style=\"float:left ;color:black;font-family:cursive;margin:-5px;font-size:20px\">"+bala1+"</p><br>").append("<br>")
        $("#two").append("<p style=\"float:right;color:black;font-family:cursive;margin:-5px;font-size:20px\">"+bala1+"</p><br>").append("<br>")
       
     scrolfunction1();
    })
})
function scrolfunction()
{
    var elemnt1= document.getElementById("one")
    elemnt1.scrollTop=elemnt1.scrollHeight
}

function scrolfunction1()
{
    var element2=document.getElementById("two")
    element2.scrollTop=element2.scrollHeight
// element2.scrollTop=element2.scrollHeight
}