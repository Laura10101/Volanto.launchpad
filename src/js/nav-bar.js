//Modified from W3 School's Responsive Topnav Example: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav
function toggleNavMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.className === "nav-menu") {
      menu.className += " responsive";

      var navItems = menu.getElementsByClassName("nav-item");
      for (i = 0; i < navItems.length; i++) navItems[i].className += " responsive";
    } else {
      menu.className = "nav-menu";
      
      var navItems = menu.getElementsByClassName("nav-item responsive");
      while (navItems.length > 0) navItems[0].className = "nav-item";
    }
}