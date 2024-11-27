// Highlight the current day's schedule
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay(); // Sunday = 0, Monday = 1, etc.
    const rows = document.querySelectorAll('.schedule-table tbody tr');

    if (today >= 1 && today <= 5) { // Only highlight weekdays (Monday to Friday)
        rows[today - 1].style.backgroundColor = '#d1ecf1';
        rows[today - 1].style.color = '#0c5460';
    }
});
