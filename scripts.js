const vehicles = [
    { name: 'Sedan', price: 23.79 },
    { name: 'SUV', price: 25 },
    { name: 'Hatchback', price: 20 },
    { name: 'Compact SUV', price: 21 },
    { name: 'Compact Sedan', price: 19 },
    { name: 'MUV', price: 30},
    { name: 'Convertible', price: 35},
    { name: 'Coupe', price: 40 },
    { name: 'Station Wagon', price: 48 },
    { name: 'Minivan', price: 50 },
    { name: 'Truck', price: 60 }
];

const vehicleList = document.getElementById('vehicle-list');
const conversionRate = 83; // 1 USD = 83 INR (replace this with the actual rate if needed)

vehicles.forEach(vehicle => {
    const li = document.createElement('li');
    const priceInINR = (vehicle.price * conversionRate).toFixed(2); // Convert price to INR and round to 2 decimals
    li.textContent = `${vehicle.name} - ₹${priceInINR}/day`;
    vehicleList.appendChild(li);
   
});
document.getElementById('rating').addEventListener('input', function () {
    const ratingValue = this.value;

    // Make sure the value is between 1 and 5
    if (ratingValue < 1 || ratingValue > 5) {
        return;
    }

    // Reset all stars
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
    });

    // Highlight the stars based on the rating value
    for (let i = 0; i < ratingValue; i++) {
        document.querySelectorAll('.star')[i].classList.add('active');
    }
});
// Function to toggle between Login and Sign-Up forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    } else {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    }
}


