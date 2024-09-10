document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2014-09-11');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerHTML = `<p>Seit dem 11. September 2014 fotografiere ich. Das sind mittlerweile ${diffDays} Tage.</p>`;
});
