import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <section className="mt-5">
      <div className="flex items-center justify-center">
        <div className="relative h-48 w-48 rounded-full border-[0.35rem] border-white shadow-xl">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Ian Mason"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <span className="absolute bottom-0 right-0 text-5xl">⌨️</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
