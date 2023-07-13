function openTab(event, tabId) {
    // Ocultar todo el contenido de las pestañas
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    
    // Eliminar la clase "active" de todos los botones
    var navLinks = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    
    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(tabId).style.display = "block";
    
    // Agregar la clase "active" al botón seleccionado
    event.currentTarget.classList.add("active");
  }