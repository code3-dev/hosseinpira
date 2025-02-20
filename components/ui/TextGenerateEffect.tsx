"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  let wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <motion.div
          className="dark:text-white text-black leading-snug tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`${idx > 3 ? 'text-purple' : 'dark:text-white text-black'}`}
              variants={{
                hidden: { opacity: 0, filter: filter ? "blur(10px)" : "none" },
                visible: { opacity: 1, filter: "blur(0px)", transition: { duration } },
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
