import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all"
          whileHover={{ y: -8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="space-y-6 text-white/90 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              I'm a <strong>Computer Science student</strong> at the University of Łódź,
              specializing in <strong>programming and algorithms</strong>.
            </p>

            <p>
              Currently, I work as a <strong>.NET Programmer Intern</strong>, where I develop
              and maintain <strong>business applications</strong> using{" "}
              <strong>
                C#, ASP.NET Core, Blazor, Entity Framework Core, Angular, DevExpress, WPF, MSSQL
              </strong>.
              My responsibilities include implementing new features, refactoring existing
              modules, working with databases, and collaborating closely with analysts and
              end users to deliver real business value in an{" "}
              <strong>Agile</strong> environment  (<strong>Scrum</strong> and <strong>Kanban</strong>).

            </p>

            <p>
              I enjoy building <strong>clean, maintainable software</strong> - from backend
              logic and data models to responsive, user-friendly interfaces. I focus on
              readable code, solid architecture, and practical problem-solving.
            </p>

            <p>
              In my academic projects, I use <strong>C++ and Python</strong> for algorithmic
              problem-solving, simulations, signal and data processing, and machine learning
              experiments, combining theoretical foundations with hands-on implementation.
            </p>

            <p className="italic opacity-80">
              Always curious. Always building.
            </p>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}