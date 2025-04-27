// Replace "Guest" with the stored user name from login
const storedUser = localStorage.getItem('userid');
if (storedUser) {
  document.getElementById('userName').textContent = storedUser;
}

function filterAppliances() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const appliances = document.querySelectorAll('.box');

  appliances.forEach(appliance => {
    const category = appliance.getAttribute('data-category').toLowerCase();
    if (category.includes(searchInput)) {
      appliance.style.display = 'block';
    } else {
      appliance.style.display = 'none';
    }
  });
}
