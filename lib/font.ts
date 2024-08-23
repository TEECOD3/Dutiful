import localFont from "next/font/local";

const RecoletaAlt = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta_Alt_Bold.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-recoleta-alt",
});

const Circular_std = localFont({
  src: [
    {
      path: "../public/fonts/circular-std-medium-500.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-Circular-std",
});

export { RecoletaAlt, Circular_std };
