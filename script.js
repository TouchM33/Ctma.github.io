function updateCountdown() {
    const eventDate = new Date("March 30, 2025 17:30:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "Acara sudah dimulai!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `⏳ ${days} hari, ${hours} jam, ${minutes} menit lagi`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function confirmAttendance() {
    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("confirmation").innerHTML = `✅ Terima kasih, ${name}! Kehadiranmu sudah dikonfirmasi.`;
        animateConfirmation();
    }
}

function animateConfirmation() {
    const confirmation = document.getElementById("confirmation");
    confirmation.style.opacity = 0;
    confirmation.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        confirmation.style.opacity = 1;
    }, 100);
}
