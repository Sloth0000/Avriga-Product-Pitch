// Progress bar scroll indicator
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
});
// Countdown Timer for July 1, 2025, 2:30 AM GMT+5:30
function updateCountdown() {
    // Target: July 1, 2025, 2:30 AM GMT+5:30 (Asia/Kolkata)
    // Get current time and target time in the same timezone
    const now = new Date();
    // Target time in IST (GMT+5:30)
    const target = new Date('2025-07-01T02:30:00+05:30');
    const diff = target - now;
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById('countdown').textContent =
            (days > 0 ? days + 'd ' : '') +
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').textContent = '00:00:00';
    }
}
setInterval(updateCountdown, 1000);
updateCountdown(); 