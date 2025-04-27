document.getElementById('energyForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const wattage = parseFloat(document.getElementById('wattage').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const days = parseFloat(document.getElementById('days').value);
  const rate = parseFloat(document.getElementById('rate').value);

  const annualEnergy = (wattage * hours * days) / 1000; // kWh
  const annualCost = annualEnergy * rate;

  document.getElementById('annualEnergy').textContent = `Annual Energy Consumption: ${annualEnergy.toFixed(2)} kWh`;
  document.getElementById('annualCost').textContent = `Annual Cost: ₹${annualCost.toFixed(2)}`;
});

const toggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');

  // Save theme preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});