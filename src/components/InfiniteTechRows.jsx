import React from 'react';

const row1 = [
  '/Images/html.png',
  '/Images/css.png',
  '/Images/tailwind.png',
  '/Images/react.png',
  '/Images/nodejs.png',
  '/Images/express.png',
  '/Images/mongodb.svg',
  '/Images/mysql.png',
];

const row2 = [
  '/Images/github.png',
  '/Images/Postman.png',
  '/Images/canva.png',
  '/Images/figma.png',
  '/Images/github.png',
  '/Images/Postman.png',
];

const row3 = [
  '/Images/java.png',
  '/Images/javascript.png',
  '/Images/python.png',
  '/Images/java.png',
  '/Images/javascript.png',
  '/Images/python.png',
];

function TechRow({ images, direction = 'right' }) {
  const dirClass = direction === 'left' ? 'infinite-row--left' : 'infinite-row--right';

  return (
    <div className="infinite-row min-h-[200px] p-4">
      <div className={`infinite-row__inner ${dirClass}`}>
        <div className="infinite-row__track">
          {images.map((src, idx) => (
            <div key={`${src}-${idx}-a`} className="infinite-row__item">
              <img src={src} alt="" className="infinite-row__img" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="infinite-row__track">
          {images.map((src, idx) => (
            <div key={`${src}-${idx}-b`} className="infinite-row__item">
              <img src={src} alt="" className="infinite-row__img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfiniteTechRows() {
  return (
    <section className="mt-4 rounded-3xl bg-gradient-to-b from-brand-bgMain via-brand-bgAlt/60 to-brand-bgMain px-0 py-4 md:px-0 md:py-5 shadow-brand-soft overflow-hidden flex flex-col justify-center">
      <div className="space-y-0">
        {/* Row 1: right-to-left */}
        <TechRow images={row1} direction="left" />
        {/* Row 2: left-to-right */}
        <TechRow images={row2} direction="right" />
        {/* Row 3: right-to-left */}
        <TechRow images={row3} direction="left" />
      </div>
    </section>
  );
}

export default InfiniteTechRows;


