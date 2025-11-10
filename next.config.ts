import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* otras opciones de configuración aquí */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jhon-opt.github.io",
        pathname: "/**", // 👈 permite cualquier ruta bajo tu dominio
      },
    ],
  },
};

export default nextConfig;
