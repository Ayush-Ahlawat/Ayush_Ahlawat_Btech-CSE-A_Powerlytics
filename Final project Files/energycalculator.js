document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('energyForm');
  const dailyCostEl = document.getElementById('dailyCost');
  const monthlyCostEl = document.getElementById('monthlyCost');
  const yearlyCostEl = document.getElementById('yearlyCost');

  const saveDialog = document.getElementById('saveDialog');
  const saveButton = document.getElementById('saveButton');
  const closeDialog = document.getElementById('closeDialog');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const wattage = parseFloat(document.getElementById('wattage').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    const dailyKWh = (wattage * hours) / 1000;
    const dailyCost = dailyKWh * rate;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;

    dailyCostEl.textContent = `Daily Cost: ₹${dailyCost.toFixed(2)}`;
    monthlyCostEl.textContent = `Monthly Cost: ₹${monthlyCost.toFixed(2)}`;
    yearlyCostEl.textContent = `Yearly Cost: ₹${yearlyCost.toFixed(2)}`;

    
    saveDialog.showModal();
  });

  saveButton.addEventListener('click', () => {
    saveDialog.close();
    alert('Data Saved!');
  });

  closeDialog.addEventListener('click', () => {
    saveDialog.close();
  });
});
