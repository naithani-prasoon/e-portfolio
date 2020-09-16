function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function navbarFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("changeOnScroll").style.backgroundColor = "black";
      
  } else {
      document.getElementById("changeOnScroll").style.backgroundColor = "white";
  }
}

function openNav() {
    document.getElementById("contentHam").style.height = "100%";
}

function closeNav() {
   document.getElementById("contentHam").style.height = "0%";
}
