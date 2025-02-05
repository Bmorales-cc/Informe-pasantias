document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
  
    // Aplicar el tema guardado al cargar la página
    document.body.setAttribute('data-theme', savedTheme);
  
    // Cambiar el ícono del botón según el tema actual
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
  
    // Manejar el clic en el botón de cambio de tema
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
      // Cambiar el tema y actualizar el ícono del botón
      document.body.setAttribute('data-theme', newTheme);
      themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
  
      // Guardar el tema en localStorage
      localStorage.setItem('theme', newTheme);
    });
  });