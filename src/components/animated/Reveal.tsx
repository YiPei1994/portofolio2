"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
type RevealProps = {
  children: ReactNode;
  width?: "w-fit" | "w-full";
  type: "text" | "block";
  className?: string;
};

function Reveal({ children, width, type, className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className={cn(
        `relative overflow-hidden  ${width ? "w-fit" : width}`,
        className
      )}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {" "}
        {children}
      </motion.div>
      {type === "text" && (
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={sideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute top-1 bottom-1 left-0 right-0 bg-primary z-20"
        ></motion.div>
      )}
    </div>
  );
}

export default Reveal;
