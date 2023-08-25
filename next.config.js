/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["skillicons.dev"],
    formats: ["image/avif", "image/webp"],
    loaders: "default",
    path: "/_next/image",
    dangerouslyAllowSVG: true,
  },
};
