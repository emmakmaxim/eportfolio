function animatePortfolioTabs(activeElem){
  displayContents(activeElem);
  if(sessionStorage.getItem("expandedTab") == "none"){
    sessionStorage.setItem("expandedTab", activeElem.id);
    animatePortfolioTab(document.getElementById("ps1"), activeElem);
    animatePortfolioTab(document.getElementById("ps2"), activeElem);
    animatePortfolioTab(document.getElementById("ps3"), activeElem);
    }
  else{
    //sessionStorage.setItem("expandedTab", activeElem.id);
    changeTabs(activeElem);
  }
}

function adjustLinkedInSize(){
  var width = 100;
  var LIcontainer = document.getElementById("linkedin-container");
  console.log(LIcontainer.offsetWidth);
  if(LIcontainer.offsetWidth > width && screen.width > 500){
    LIcontainer.style.width = width + 'px';
  }
}

function changeTabs(activeElem){
  var expandedTab = sessionStorage.getItem("expandedTab");
  activeElem.style.zIndex = 2;
  document.getElementById(expandedTab).style.zIndex = 0;
  var id = setInterval(frame, 1);
  var activeWidth = 2.5;
  var nonActiveWidth = 5.0;
  function frame(){
    if(activeWidth == 5 || activeElem.style.width == '5%'){
      clearInterval(id);
    } else{
      activeWidth+=0.05;
      nonActiveWidth-=0.05;
      if(activeWidth <= 5)
        {activeElem.style.width = activeWidth + '%';}
      if(document.getElementById(expandedTab) != activeElem && nonActiveWidth >= 2.5)
        {document.getElementById(expandedTab).style.width = nonActiveWidth + '%';}
    }
  }
  sessionStorage.setItem("expandedTab", activeElem.id);
}

function displayContents(activeElem){
  if(activeElem == document.getElementById("ps1")){
    document.getElementById("development-container").style.display = 'none';
    document.getElementById("design-container").style.display = 'block';
    document.getElementById("research-container").style.display = 'none';
  }
  else if(activeElem == document.getElementById("ps2")){
    document.getElementById("development-container").style.display = 'block';
    document.getElementById("design-container").style.display = 'none';
    document.getElementById("research-container").style.display = 'none';
  }
  else{
    document.getElementById("development-container").style.display = 'none';
    document.getElementById("design-container").style.display = 'none';
    document.getElementById("research-container").style.display = 'block';
  }

}

function animatePortfolioTab(elem, activeElem) {
    var width = 33.33333;
    var height = elem.clientHeight;
    var section = elem.parentNode;
    var endHeight = elem.clientHeight / 3;
    var id = setInterval(frame, 10);
    var left = 0;
    var top = 112;
    var endTop;
    activeElem.style.zIndex = 2;
    var text = elem.childNodes[0];
    text.style.fontSize = 0 + "px";
    if(elem == document.getElementById("ps2")){
      left = 33.33333;
      endTop = endHeight + 112;
      text.innerText = "DEVELOPMENT"
    } else if (elem == document.getElementById("ps3")) {
        left = 66.66666;
        endTop = endHeight * 2 + 112;
        text.innerText = "RESEARCH"
    } else{
      text.innerText = "DESIGN";
    }
    function frame() {
      if (width == 2.5) {
        clearInterval(id);
      } else {
        width-=0.977;
        height-=5;
        if(elem == activeElem){
          top++;
          if(width >= 5)
            {elem.style.width = width + '%';}
        }
        else{
          if(width >= 2.5)
            {elem.style.width = width + '%';}
        }
        if(height > endHeight)
          {elem.style.height = height + 'px';}
      }
      if(top < endTop)
        {elem.style.top = endTop + "px";}
        if(elem == document.getElementById("ps2")){
          left-=0.33333;
        }
        if(elem == document.getElementById("ps3")){
          left-=0.66666;
        }
        if(left > 0)
          {elem.style.left = left + "%";}
    }
    elem.style.padding = 0;
    styleText(text, elem, endHeight, width);
}


function styleText(text, elem, height, width){
  text.style.fontSize = "14px";
  text.style.margin = "0 auto";
  text.style.marginTop = "20%";
  //var leftPadding = width / 2;
  //var topPadding = height / 2;
  //text.style.paddingLeft =  leftPadding+ "px";
  //text.style.paddingTop =  topPadding+ "px";
  text.style.color = "white";
  text.style.fontFamily = "Helvetica";
  text.style.writingMode = "vertical-rl";
  text.style.textOrientation = "upright";
}

function animatePortfolioMenu() {
  if (screen.width > 500){
     var elem1 = document.getElementById("ps1");
     var elem2 = document.getElementById("ps2");
     var elem3 = document.getElementById("ps3");
     var pos = -100.0;
     var id = setInterval(frame, 0.1);
     function frame() {
       if (pos == 67.0) {
         clearInterval(id);
       } else {
         pos+=0.33333;
         if (pos <= 0.0)
          {elem1.style.left = pos + '%';}
        if (pos <= 33.33333)
          {elem2.style.left = pos + '%';}
        if (pos <= 66.66666)
         {elem3.style.left = pos + '%';}
       }
     }
     sessionStorage.setItem("expandedTab", "none");
    }
}

function validateForm() {
    console.log("function called");
    var x = document.forms["contact-form"]["name"].value;
    var y = document.forms["contact-form"]["organisation"].value;
    var z = document.forms["contact-form"]["email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (y == ""){
      alert("Organisation must be filled out");
      return false;
    }
    else if (z == ""){
      alert("Email must be filled out");
      return false;
    }
    else {
      alert("Form has been submitted. Thanks for getting in touch!");
      return true;
    }
}

function openApp(){
  console.log("B" + document.getElementById("my-recipes").style.display);
  document.getElementById("development-container").style.display = 'none';
  document.getElementById("my-recipes").style.display = 'block';
  console.log("C" + document.getElementById("my-recipes").style.display);
}

function clearApp(){
  document.getElementById("my-recipes").style.display = 'none';
  console.log("A" + document.getElementById("my-recipes").style.display);
}

/*function configureTabs(){
  var $ps1Tab = $('#ps1-tab');
  var $ps2Tab = $('#ps2-tab');
  var $ps3Tab = $('#ps3-tab');
  var vh = $(window).height();
  var tabHeight = (vh - 112) / 3;
  var ps2TabTop = tabHeight + 112;
  var ps3TabTop = tabHeight + tabHeight + 112;
  $ps2Tab.css({ top: ps2TabTop + 'px' });
  $ps3Tab.css({ top: ps3TabTop + 'px' });
  $ps1Tab.css({ height: tabHeight + 'px' });
  $ps2Tab.css({ height: tabHeight + 'px' });
  $ps3Tab.css({ height: tabHeight + 'px' });
  console.log($ps2Tab.position().top);
}*/

$(document).ready(function(){
    $.fn.configureTabs = function(){
      var $ps1Tab = $('#ps1-tab');
      var $ps2Tab = $('#ps2-tab');
      var $ps3Tab = $('#ps3-tab');
      var vh = $(window).height();
      var tabHeight = (vh - 112) / 3;
      var ps2TabTop = tabHeight + 112;
      var ps3TabTop = tabHeight + tabHeight + 112;
      $ps2Tab.css({ top: ps2TabTop + 'px' });
      $ps3Tab.css({ top: ps3TabTop + 'px' });
      $ps1Tab.css({ height: tabHeight + 'px' });
      $ps2Tab.css({ height: tabHeight + 'px' });
      $ps3Tab.css({ height: tabHeight + 'px' });
      console.log($ps2Tab.position().top);
    }
});
