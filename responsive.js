function myFunction() {
    var a = document.getElementById("navBar");
    if (a.className === "nav-bar") {
        a.className += " responsive";
    } else {
        a.className = "nav-bar";
    }
}