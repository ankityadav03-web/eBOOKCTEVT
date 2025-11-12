// When user clicks on any faculty button in index.html
document.querySelectorAll('.card-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faculty = button.getAttribute('data-faculty');
    localStorage.setItem('selectedFaculty', faculty);
  });
});

// When notes.html loads
document.addEventListener('DOMContentLoaded', () => {
  const faculty = localStorage.getItem('selectedFaculty');
  if (faculty) {
    const target = document.getElementById(faculty);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.style.backgroundColor = "#fff3cd"; // highlight
      setTimeout(() => target.style.backgroundColor = "transparent", 2000);
    }
    localStorage.removeItem('selectedFaculty');
  }
});