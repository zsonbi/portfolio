import React from 'react';

const ChevronLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const DraggableProjects = ({ projects }) => {
  const sliderRef = React.useRef(null);
  const dragged = React.useRef(false);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [showScrollHintRight, setShowScrollHintRight] = React.useState(true);
  const [showScrollHintLeft, setShowScrollHintLeft] = React.useState(false);

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

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    dragged.current = false;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
    setTimeout(() => dragged.current = false, 50);
  };

  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX);
    if (Math.abs(walk) > 5) {
        dragged.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeft - walk * 2;
  };

  const handleArrowScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector(':scope > div');
    if (!card) return;
    const scrollAmount = (card.offsetWidth + 32) * (direction === 'right' ? 1 : -1);
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleClick = (e, link) => {
    if (dragged.current) {
      e.preventDefault();
      return;
    }
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative group">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-scroll pb-6 -mx-6 px-6 cursor-grab hide-scroll-bar space-x-8 ${isDown ? 'cursor-grabbing' : ''}`}
        style={{ userSelect: 'none' }}
      >
        {projects.map(project => (
          <div key={project.name} className="flex-shrink-0 w-80 md:w-96">
            <a
              href={project.link}
              onClick={(e) => handleClick(e, project.link)}
              onDragStart={(e) => e.preventDefault()}
              className="block h-full"
            >
              <div className="flex h-full flex-col rounded-md p-6 transition-all bg-slate-800/50 hover:bg-slate-800/80 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
                <h3 className="font-medium leading-snug text-slate-200 inline-flex items-baseline group-hover:text-teal-300">
                  {project.name}
                  {project.link && <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-1.5 translate-y-px" />}
                </h3>
                <p className="mt-2 text-sm leading-normal flex-grow">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                  {project.tags.map(tag => (
                    <li key={tag} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tag}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => handleArrowScroll('left')}
        aria-label="Scroll left"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-full text-slate-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!showScrollHintLeft && 'invisible'}`}
        disabled={!showScrollHintLeft}
      >
        <ChevronLeftIcon className="h-6 w-6"/>
      </button>

      <button
        onClick={() => handleArrowScroll('right')}
        aria-label="Scroll right"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-full text-slate-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!showScrollHintRight && 'invisible'}`}
        disabled={!showScrollHintRight}
      >
        <div className="relative">
          <ChevronRightIcon className="h-6 w-6"/>
          {showScrollHintRight && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 top-0 left-0"></span>}
        </div>
      </button>
    </div>
  );
};

export default DraggableProjects;
