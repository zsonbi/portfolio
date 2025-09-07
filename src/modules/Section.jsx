import React from 'react';

const Section = ({ title, id, children }) => (
    <section id={id} className="mb-16 md:mb-20 scroll-mt-24">
      <h2 className="text-xl font-bold uppercase text-teal-300 tracking-widest mb-8 text-center">{title}</h2>
      {children}
    </section>
);

export default Section;
