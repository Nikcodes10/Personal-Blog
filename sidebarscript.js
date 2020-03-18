var myToggle = document.getElementsByClassName("toggle")[0];
var mySidebar=document.getElementById("sidebar");

myToggle.onclick=function () {
  if (mySidebar.className===("open"))
    {
    mySidebar.className="closed"; 
    myToggle.className="toggle"
    } 
  else
     {
    mySidebar.className="open";
    myToggle.className="toggleopen";
    }
    
};