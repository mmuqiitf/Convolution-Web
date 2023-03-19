"use client";
import { ReactNode, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import { economica } from "@/app/fonts";

const Layout = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	return (
		<html className={economica.className} lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
};

export default Layout;
