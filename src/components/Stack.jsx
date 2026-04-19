import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Technologies } from "../data/tech";

const Stack = () => {
  return (
    <section className="px-6 pb-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="tech-marquee-shell w-full">
          <Marquee autoFill speed={40} pauseOnHover className="tech-marquee-track">
            {Technologies.map((tech) => (
              <div key={tech.id} className="tech-marquee-item">
                <Image src={tech.icon} alt={tech.alt} width={50} height={50} />
                <span>{tech.lang}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Stack;
