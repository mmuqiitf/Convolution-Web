"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ImageBanner2 from "@/images/image-banner-2.png";
import LogoItenas from "@/images/logo-itenas-2.png";
import { motion } from "framer-motion";
import { Poppins } from "@next/font/google";
import { economica, poppins } from "@/app/fonts";

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: "spring",
			delay: 0.3,
			when: "beforeChildren",
			staggerChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: { opacity: 0 },
	visible: {
		rotate: 360,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
};

export default function Home() {
	return (
		<motion.div
			className="hero"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div
				className="container-fluid"
				style={{ paddingLeft: 0 + "px", paddingRight: 0 + "px" }}
			>
				<div className="row justify-content-between no-gutters">
					<div className="col-lg-6 col-md-12 intro">
						<div className="mt-3 ms-5">
							<Image
								src={LogoItenas}
								width={200}
								alt="Logo Itenas"
								className="img-fluid"
								priority={true}
							/>
						</div>
						<div className="d-flex">
							<div className="hero-caption" style={{ marginTop: 30 + "px" }}>
								<h1
									className={`${economica.className} fw-bold text-center text-o-primary font-weight-bold my-4 aos-init aos-animate`}
									data-aos="fade-up"
									data-aos-delay="0"
								>
									Image Convolution Simulation
								</h1>
								<p
									className={economica.className}
									style={{ letterSpacing: 1.7 + "px", lineHeight: 1.7 }}
								>
									Do you want to know how image convolution works in a more
									interesting way? So let's start.
								</p>
								<div className="row">
									<div className="col-md-12 col-lg-6 mt-5">
										<motion.div
											variants={childVariants}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<Link
												href="/noise-reduction"
												className={`${economica.className} btn btn-lg btn-primary`}
												style={{ letterSpacing: 1.7 + "px" }}
											>
												GET STARTED
											</Link>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-red-light col-lg-5 col-md-12 d-none d-sm-none d-md-none d-lg-block vh-100">
						<div
							className="d-flex align-items-center vh-100"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<Image
								src={ImageBanner2}
								alt="Image"
								className="w-75"
								width={460}
								height={407}
								style={{ marginLeft: -120 + "px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
