import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import * as React from "react";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	initialY?: number;
	endY?: number;
}

export const RevealVertical = ({
								   children,
								   className,
								   delay = 0,
								   duration = 1,
								   initialY = 150,
								   endY = 0,
							   }: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ y: endY, opacity: 1 });
		}
	}, [isInView, endY, controls]);

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ y: initialY, opacity: 0 }}
			animate={controls}
			transition={{ duration, delay, ease: "easeOut" }}
			style={{ opacity: 1 }}
		>
			{children}
		</motion.div>
	);
};
