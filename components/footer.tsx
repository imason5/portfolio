import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 flex flex-col  px-4 text-center text-gray-500">
      <small className="mb-1 text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS & Framer Motion
      </small>
      <small>
        <a className="font-semibold" href="mailto:ianmason5@gmail.com">
          ianmason5@gmail.com
        </a>
      </small>
    </footer>
  );
}
