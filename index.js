document.addEventListener('DOMContentLoaded', function () {
    const newsletter = document.querySelector('.container__newsletter');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkVisibility = () => {
        if (isElementInViewport(newsletter)) {
            newsletter.classList.add('visible');
        }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Перевірити видимість при завантаженні сторінки
});