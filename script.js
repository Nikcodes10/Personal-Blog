var clapper = document.getElementsByClassName("claps")[0];
var count=0;
clapper.onclick=function() {
    count++;
    console.log(count);
};
var mymode=document.getElementById("mode");
var mybody=document.getElementById("changemode");
mymode.onclick=function() {
    if(mymode.className=="mode1")
        {
            mymode.className="mode2";
            mymode.innerHTML="Light mode";
            mybody.className="dark";
        }
     else
        {
        mymode.className="mode1";
        mymode.innerHTML="Dark mode";
        mybody.className="light";
        }
};

