const searchInput = document.getElementById('searchInput');
const table = document.getElementById('applianceTable');
const rows = table.getElementsByTagName('tr');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();
  
  for (let i = 1; i < rows.length; i++) { 
    const cells = rows[i].getElementsByTagName('td');
    const applianceName = cells[0] ? cells[0].textContent.toLowerCase() : '';
    
    if (applianceName.includes(filter)) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});
