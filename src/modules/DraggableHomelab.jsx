import React from 'react';
import { useGesture } from '@use-gesture/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const DraggableHomelab = ({ homelab }) => {
    const sliderRef = React.useRef(null);
    const [showScrollHintRight, setShowScrollHintRight] = React.useState(true);
    const [showScrollHintLeft, setShowScrollHintLeft] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);

    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const checkOverflow = () => {
            const hasOverflow = slider.scrollWidth > slider.clientWidth;
            const isAtStart = slider.scrollLeft < 5;
            const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5;

            setShowScrollHintRight(hasOverflow && !isAtEnd);
            setShowScrollHintLeft(hasOverflow && !isAtStart);
        };

        checkOverflow();
        slider.addEventListener('scroll', checkOverflow);
        const resizeObserver = new ResizeObserver(checkOverflow);
        resizeObserver.observe(slider);

        return () => {
            slider.removeEventListener('scroll', checkOverflow);
            resizeObserver.disconnect();
        };
    }, []);

    const handleArrowScroll = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;
        const card = slider.querySelector(':scope > div');
        if (!card) return;
        const scrollAmount = (card.offsetWidth + 32) * (direction === 'right' ? 1 : -1);
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const bind = useGesture(
        {
            onDragStart: () => setIsDragging(true),
            onDragEnd: () => setIsDragging(false),
            onDrag: ({ movement: [x], first, last }) => {
                if (!sliderRef.current) return;
                if (first) {
                    sliderRef.current.dataset.startScroll = sliderRef.current.scrollLeft;
                }
                if (!last) {
                    const startScroll = parseFloat(sliderRef.current.dataset.startScroll || '0');
                    sliderRef.current.scrollLeft = startScroll - x;
                }
            },
        },
        {
            drag: {
                filterTaps: true,
                threshold: 5,
            },
        }
    );

    return (
        <div className="relative group">
            <div
                ref={sliderRef}
                {...bind()}
                className={`flex overflow-x-scroll pb-6 -mx-6 px-6 hide-scroll-bar space-x-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ userSelect: 'none', touchAction: 'none' }}
            >
                {homelab.map((item) => (
                    <div key={item.name} className="flex-shrink-0 w-80 md:w-96">
                        <div className="flex h-full flex-col rounded-md transition-all bg-slate-800/50 hover:bg-slate-800/80 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
                            <img src={item.image} alt={item.name} className="rounded-t-md object-cover w-full h-48" />
                            <div className="p-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    {item.name}
                                </h3>
                                <p className="mt-2 text-sm leading-normal flex-grow">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => handleArrowScroll('left')}
                aria-label="Scroll left"
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-full text-slate-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!showScrollHintLeft && 'invisible'}`}
                disabled={!showScrollHintLeft}
            >
                <MdChevronLeft size={24} />
            </button>

            <button
                onClick={() => handleArrowScroll('right')}
                aria-label="Scroll right"
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-full text-slate-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!showScrollHintRight && 'invisible'}`}
                disabled={!showScrollHintRight}
            >
                <div className="relative">
                    <MdChevronRight size={24} />
                    {showScrollHintRight && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 top-0 left-0"></span>}
                </div>
            </button>
        </div>
    );
};

export default DraggableHomelab;