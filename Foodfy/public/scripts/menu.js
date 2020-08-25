function menuMobile() {
  document.getElementById("menu-list-ul").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    const dropdowns = document.getElementsByClassName("menu-list-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
