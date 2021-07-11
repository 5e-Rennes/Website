function toggleMenu() {
    var menuBox = document.getElementById('menu-box');
    var icon = document.getElementById("icon")    
    if(menuBox.style.display !== "none") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "inline-grid";
      menuBox.style.gridAutoFlow = "row"
    }
}