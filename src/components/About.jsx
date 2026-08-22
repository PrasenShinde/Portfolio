import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    id: 1,
    side: 'left',
    label: '01',
    title: "Hello 👋",
    description: "I'm a Computer Science undergrad from Pune, currently deep diving into the world of Web and App development and GenAI. With a strong eye for design and usability, I love building clean, responsive, and user-friendly websites using modern stacks like MERN ",
    image: './Images/my_photo.jpeg',
    hasImage: true
  },
  {
    id: 2,
    side: 'right',
    label: '02',
    title: 'Intern at Tellis',
    description: "Developed and deployed full-stack features using Next.js, TypeScript, Express, and MongoDB, improving application performance and scalability. Built cross-platform mobile features in React Native, ensuring seamless UI and functionality across Android and iOS devices.",
    linkedinUrl: 'https://www.linkedin.com/posts/prasen-shinde-482666320_internship-fullstackdevelopment-tellistechnologies-activity-7339938877740134400-p-EF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFBWSIBxzDx9P0mf9LIs7BYSnrpkjWlb8I'
  },
  {
    id: 3,
    side: 'left',
    label: '03',
    title: 'Intern at Sankalp Technologies',
    description: "Built 2 production-ready full-stack cross-platform mobile apps using React Native, Express.js, PostgreSQL & Prisma with scalable REST APIs. Developed an OTT platform featuring adaptive HLS video streaming (360p–1080p), live streaming, signed URL access, Dockerized microservices, and RBAC. Integrated Cashfree & Paystack payment gateways, virtual coin-based unlocking, reels, coursework, and daily rewards. Also built an EdTech platform with course management, video lectures, quizzes, assignments, student enrollment, and an admin panel for content & teacher management. Used JWT + OAuth for authentication.",
    linkedinUrl: 'https://lnkd.in/p/gwepAaju'
  },
  {
    id: 4,
    side: 'right',
    label: '04',
    title: 'Hackathons',
    description: 'I’ve been part of many hackathons over the last few years — each one pushing me to think faster and build better. Won the AISSMS National Hackathon and the PICT Hackathon, and also participated in few hackathons like NL Dalmia Hackathon and SIH 😭. These events taught me how to work under pressure, build practical solutions quickly and collaborate like a real-world team.'
  },
  {
    id: 5,
    side: 'left',
    label: '05',
    title: 'DSA',
    description: 'Alongside development, I actively practice Data Structures and Algorithms on platforms like LeetCode , GFG Practice. Trying to build strong problem-solving skills that translate directly into better system design and cleaner implementation in real projects. My leetcode profile :',
    leetcodeImage: './Images/leetcode.png',
    leetcodeLink: 'https://leetcode.com/u/Prasen_812/'

  },
  {
    id: 6,
    side: 'right',
    label: '06',
    title: 'Beyond the screen : things I enjoy ',
    description: "When I’m not coding , you’ll probably find me playing chess or table tennis , I love playing sports. I also like to explore ideas that broaden the way I think . Anything that challenges my perspective and helps me bring more clarity, creativity, and depth into whatever I build.",
  }
];

function DontQuitSection() {
  const sectionRef = useRef(null);
  const middleRef = useRef(null); // n't qu
  const itRef = useRef(null);     // it
  const glowRef = useRef(null);   // glowing wipe

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !middleRef.current || !itRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top 40%",
        scrub: 1,
      },
    });

    // 1) Blur + fade out the middle part
    tl.to(
      middleRef.current,
      {
        opacity: 0,
        filter: "blur(18px)",
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    // 2) Slide "it" left
    tl.to(
      itRef.current,
      {
        xPercent: -350,
        duration: 1,
        ease: "power3.out",
      },
      0
    );

    // 3) A glowing streak wipes across text
    tl.to(
      glowRef.current,
      {
        x: "120%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.1
    ).to(
      glowRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      ">-0.2"
    );
  }, []);

  return (
    <section ref={sectionRef} className="dontquit-section">
      <div className="dontquit-inner">
        <p className="dontquit-tagline">A reminder to myself</p>

        <div className="dq-wrapper">
          {/* Glow beam */}
          <div className="dq-glow" ref={glowRef} />

          <h2 className="dontquit-text">
            <span className="dq-part dq-do">Do</span>

            {/* erase part */}
            <span ref={middleRef} className="dq-part dq-middle">
              n't qu
            </span>

            {/* sliding part */}
            <span ref={itRef} className="dq-part dq-it">
              it
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}


function About() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const glow = glowRef.current;
    if (!section || !line) return;

    // Animate the timeline line growing as user scrolls
    gsap.fromTo(
      line,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      }
    );

    // Animate the glow line to track scroll progress
    if (glow) {
      gsap.fromTo(
        glow,
        { opacity: 0, height: 0 },
        {
          opacity: 0.8,
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        }
      );
    }

    // Animate each card
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const isLeft = journeySteps[index].side === 'left';
      const initialX = isLeft ? -80 : 80;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          x: initialX
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <section id="about" className="journey-section" ref={sectionRef}>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-brand-primary justify-center items-center flex mb-20">
        <pre><span class="opacity-90">About </span></pre>
        <span class="text-brand-primarySoft">Me.</span>
      </h1>


      <div className="journey-container">
        {/* Vertical Timeline Line */}
        <div className="timeline-line-wrapper">
          <div className="timeline-line" ref={lineRef}></div>
          <div className="timeline-line-glow" ref={glowRef}></div>
        </div>

        {/* Journey Cards */}
        <div className="journey-cards">
          {journeySteps.map((step, index) => {
            const isLast = index === journeySteps.length - 1;

            if (isLast) {
              // Last card + DontQuit section side by side
              // DontQuit is on LEFT, "Beyond the screen" card is on RIGHT
              return (
                <div key={step.id} className="journey-last-row">
                  <div className="dontquit-wrapper">
                    <DontQuitSection />
                  </div>
                  <div
                    className={`journey-card journey-card-right`}
                    ref={el => (cardRefs.current[index] = el)}
                  >
                    {/* Step Indicator Dot */}
                    <div className="step-indicator"></div>
                    <div className="journey-card-content">
                      <span className="journey-label">{step.label}</span>
                      <h2 className="journey-title">{step.title}</h2>
                      <p className="journey-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={step.id}
                className={`journey-card journey-card-${step.side}`}
                ref={el => (cardRefs.current[index] = el)}
              >
                {/* Step Indicator Dot */}
                <div className="step-indicator"></div>
                <div className="journey-card-content">
                  <span className="journey-label">{step.label}</span>
                  <h2 className="journey-title">{step.title}</h2>
                  <p className="journey-description">{step.description}</p>

                  {step.hasImage && step.image && (
                    <div className="journey-image-wrapper">
                      <img
                        src={step.image}
                        alt="Prasen Shinde"
                        className="journey-image"
                      />
                    </div>
                  )}
                  {step.linkedinUrl && (
                    <a
                      href={step.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mt-3 w-fit px-4 py-2 rounded-full border border-[#0A66C2]/50 bg-[#0A66C2]/10 text-[#0A66C2] text-sm font-medium hover:bg-[#0A66C2]/20 transition-all duration-200"
                    >
                      <Linkedin size={15} />
                      View on LinkedIn
                    </a>
                  )}
                  {step.leetcodeImage && (
                    <a
                      href={step.leetcodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leetcode-img-wrapper"
                    >
                      <img
                        src={step.leetcodeImage}
                        alt="LeetCode Profile"
                        className="leetcode-img"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
