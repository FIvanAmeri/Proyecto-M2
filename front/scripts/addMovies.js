window.submitForm = async () => {
  const movieData = {
    title: document.getElementById('title').value.trim(),
    director: document.getElementById('director').value.trim(),
    year: document.getElementById('year').value.trim(),
    genre: Array.from(document.querySelectorAll('input[name="options"]:checked')).map(cb => cb.value).join(', '),
    duration: document.getElementById('duration').value.trim(),
    poster: document.getElementById('poster').value.trim(),
    rate: document.getElementById('rate').value.trim()
  };

  if (Object.values(movieData).some(value => !value)) {
    alert('Todos los campos son obligatorios.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:3003/movies', movieData);
    if (response.status >= 200 && response.status < 300) {
      alert('Película agregada exitosamente');
      window.clearForm(); 
    } else {
      throw new Error(`Código de estado inesperado: ${response.status}`);
    }
  } catch (error) {
    console.error('Error al agregar película:', error);
    alert('Error al agregar película.');
  }
};

window.clearForm = () => {
  const form = document.getElementById('movieForm');
  if (form) {
    form.reset();
    window.clearSelection(); 
  } else {
    console.error('Formulario no encontrado');
  }
};

window.saveSelection = () => {
  const checkboxes = document.querySelectorAll('input[name="options"]');
  const selectedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  localStorage.setItem('selectedOptions', JSON.stringify(selectedValues));
  console.log('Selection saved!');
};

window.clearSelection = () => {
  localStorage.removeItem('selectedOptions');
  document.querySelectorAll('input[name="options"]').forEach(checkbox => checkbox.checked = false);
  console.log('Selection cleared!');
};

window.loadSelection = () => {
  const savedSelection = JSON.parse(localStorage.getItem('selectedOptions')) || [];
  document.querySelectorAll('input[name="options"]').forEach(checkbox => checkbox.checked = savedSelection.includes(checkbox.value));
};

document.addEventListener('DOMContentLoaded', () => {
  window.loadSelection();

  document.getElementById('duration').addEventListener('input', event => {
    let value = event.target.value.replace(/[^0-9:]/g, '');
    const [hours, minutes] = value.split(':');
    if (minutes && minutes.length > 2) {
      value = `${hours}:${minutes.slice(0, 2)}`;
    }
    event.target.value = value;
  });
});