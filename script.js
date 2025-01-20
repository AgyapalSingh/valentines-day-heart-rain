const rainButton = document.getElementById('rainButton');
const heartContainer = document.getElementById('heartContainer');

// Function to start heart rain
const startHeartRain = () => {
  const heartRainDuration = 5000; // 5 seconds
  const interval = 100; // Interval to create hearts

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
    heartContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 3000);
  };

  // Create hearts at intervals
  const heartInterval = setInterval(createHeart, interval);

  // Stop heart rain after specified duration
  setTimeout(() => {
    clearInterval(heartInterval);
  }, heartRainDuration);
};

// Play animation on button click
rainButton.addEventListener('click', startHeartRain);

// Play animation on first page load
window.addEventListener('load', startHeartRain);
