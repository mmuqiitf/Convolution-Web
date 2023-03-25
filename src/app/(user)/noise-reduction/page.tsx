"use client";
import InputImage from "@/components/InputImage";
import { motion } from "framer-motion";

export default function NoiseReduction() {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				type: "spring",
				delay: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.4,
			},
		},
	};
	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible">
			<div className="container-fluid mt-3">
				<motion.h1
					className="text-title text-center fw-bold first-step"
					style={{ color: "var(--orange-primary)" }}
				>
					Reduction Noise
				</motion.h1>

				<div className="row mt-1">
					<div className="col-lg-8 order-lg-1 order-md-2 order-sm-2 order-xs-2">
						<div className="row">
							<div className="col-lg-12 mb-3">
								<InputImage />
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
