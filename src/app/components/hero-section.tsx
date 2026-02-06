import { motion } from "motion/react";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Name - Ultra thin and elegant */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.02em] mb-3 text-white/95 leading-tight">
            Katarzyna Stańczyk
          </h1>

          {/* Subtle divider line */}
          <motion.div
            className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Subtitle - Very subtle */}
          <motion.p
            className="text-sm md:text-base font-light tracking-[0.15em] uppercase text-white/50 mb-4 letter-spacing-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Computer Science Student
          </motion.p>

          {/* Description - Clean and minimal */}
          <motion.p
            className="text-base md:text-lg text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Software Developer · LLM · Algorithms · Data Structures
          </motion.p>

          {/* CTA Buttons - Clean glass style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="https://www.dropbox.com/scl/fi/xypoysouei31poeplrkl4/CV_KatarzynaStanczyk.pdf?rlkey=utzl4z2ff52wt2s2t1kfexq7q&st=2mnimrvw&dl=1"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2 text-sm font-light tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="size-4" />
              Download CV
            </motion.a>


            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Avuii"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="size-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/katarzyna-stanczykk/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="size-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}