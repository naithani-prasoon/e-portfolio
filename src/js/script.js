let defaultTab = "defaultOpen"
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

    // let url = "/"+ tabName;
    // let stateID = {id:'100'};

    // if(tabName !== 'aboutMe'){
    //   window.history.pushState(stateID,tabName,url);
    // }
    // else{
    //   window.history.pushState(stateID,tabName,'/')
    // }

    evt.currentTarget.className += " active";
}

document.getElementById(defaultTab).click();

function openSkillTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabDetails");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("skillsTab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";

}

document.getElementById("defaultSkillOpen").click();


function openNav() {
    document.getElementById("contentHam").style.height = "60%";
}

function closeNav() {
   document.getElementById("contentHam").style.height = "0%";
}

function closeCurrentWork(){
  document.getElementById("currentProject").style.display = "none"
}


