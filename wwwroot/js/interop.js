window.scrollToSection = (elementId) => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const header = document.querySelector('.portfolio-header');
    const headerHeight = header ? header.offsetHeight : 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
};

window.copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
};

window.initScrollSpy = (dotNetHelper, sectionIds) => {
    const handler = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSection = 'home';

        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollPosition) {
                currentSection = id;
            }
        }

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            currentSection = sectionIds[sectionIds.length - 1];
        }

        dotNetHelper.invokeMethodAsync('SetActiveSection', currentSection);
    };

    handler();
    window.addEventListener('scroll', handler);

    return {
        dispose: () => window.removeEventListener('scroll', handler)
    };
};

const _scrollStateListeners = new Map();

window.initScrollState = (dotNetHelper, elementRef) => {
    const check = () => {
        const hasOverflow = elementRef.scrollWidth > elementRef.clientWidth;
        const canScrollLeft = hasOverflow && elementRef.scrollLeft > 5;
        const canScrollRight = hasOverflow && elementRef.scrollLeft < elementRef.scrollWidth - elementRef.clientWidth - 5;
        dotNetHelper.invokeMethodAsync('UpdateScrollState', canScrollLeft, canScrollRight);
    };

    check();
    elementRef.addEventListener('scroll', check);

    const observer = new ResizeObserver(check);
    observer.observe(elementRef);

    _scrollStateListeners.set(elementRef, { check, observer });
};

window.disposeScrollState = (elementRef) => {
    const entry = _scrollStateListeners.get(elementRef);
    if (!entry) return;
    elementRef.removeEventListener('scroll', entry.check);
    entry.observer.disconnect();
    _scrollStateListeners.delete(elementRef);
};

window.initDragScroll = (elementRef) => {
    if (!elementRef) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    elementRef.addEventListener('mousedown', (e) => {
        isDown = true;
        elementRef.classList.add('dragging');
        startX = e.pageX - elementRef.offsetLeft;
        scrollLeft = elementRef.scrollLeft;
    });

    elementRef.addEventListener('mouseleave', () => {
        isDown = false;
        elementRef.classList.remove('dragging');
    });

    elementRef.addEventListener('mouseup', () => {
        isDown = false;
        elementRef.classList.remove('dragging');
    });

    elementRef.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - elementRef.offsetLeft;
        const walk = (x - startX) * 1;
        elementRef.scrollLeft = scrollLeft - walk;
    });
};

window.scrollContainer = (elementRef, direction) => {
    if (!elementRef) return;
    const card = elementRef.querySelector(':scope > *');
    if (!card) return;
    const scrollAmount = (card.offsetWidth + 32) * (direction === 'right' ? 1 : -1);
    elementRef.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};
