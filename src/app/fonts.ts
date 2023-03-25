import { Economica, Poppins } from "next/font/google";

export const economica = Economica({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-economica",
});

export const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-poppins",
});
