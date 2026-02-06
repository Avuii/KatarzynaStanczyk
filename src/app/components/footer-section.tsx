import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function FooterSection() {
  return (
    <footer className="relative px-6 py-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always interested in hearing about new projects and opportunities.<br></br>
            Feel free to reach out if you'd like to collaborate.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/Avuii"
              target="_blank"
              rel="noopener noreferrer"
              className="size-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="size-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/katarzyna-stanczykk/"
              target="_blank"
              rel="noopener noreferrer"
              className="size-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="size-5" />
            </motion.a>
            <motion.a
              href="mailto:kstanczyk.contactme@gmail.com?subject=Portfolio%20contact"
              className="size-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="size-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-white/50 text-sm">
              © 2026 Katarzyna Stańczyk
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}