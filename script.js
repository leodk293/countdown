const deadline = new Date("Jan 1, 2024 00:00:00").getTime();
const message = document.querySelector("h1")

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("countdown").innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR";
        message.style.display = "none";
    }
}, 1000);