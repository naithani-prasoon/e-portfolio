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
    if(tabName === 'experience'){
      defaultTab = "secondaryExp" ;
      console.log(defaultTab)
    }
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

  let url = "/"+ toString(tabName);

  if(tabName !== 'aboutMe'){
    let stateID = {id:'100'};
    window.history.pushState(stateID,tabName,url);
  }

}

document.getElementById("defaultSkillOpen").click();


function openNav() {
    document.getElementById("contentHam").style.height = "60%";
}

function closeNav() {
   document.getElementById("contentHam").style.height = "0%";
}


