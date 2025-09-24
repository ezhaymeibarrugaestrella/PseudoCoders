function showSection(sectionName, event) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  
  // Show selected section
  document.getElementById(sectionName).classList.remove('hidden');
  
  // Update navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active-nav'));
  event.currentTarget.classList.add('active-nav');
}

// Auto-update metrics simulation
function updateMetrics() {
  const revenue = document.querySelector('.metric-card:nth-child(1) .text-2xl');
  const orders = document.querySelector('.metric-card:nth-child(2) .text-2xl');
  
  setInterval(() => {
    const currentRevenue = parseInt(revenue.textContent.replace('$', '').replace(',', ''));
    const newRevenue = currentRevenue + Math.floor(Math.random() * 50);
    revenue.textContent = `$${newRevenue.toLocaleString()}`;
    
    const currentOrders = parseInt(orders.textContent);
    const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const newOrders = Math.max(0, currentOrders + change);
    orders.textContent = newOrders;
  }, 5000);
}

// Initialize
updateMetrics();
