import { motion } from "motion/react";
import { Badge } from "./ui/badge";

const SKILLS = {
  "Core Languages": ["C#", "Python", "C++"],

  Backend: [
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "REST API",
    "Swagger",
    "SQL"
  ],

  Frontend: [
    "Blazor",
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "DevExpress",
    "Node.js",
    "Vite",
    "npm",
    "Three.js"
  ],
  "Version Control & Dev Tools": [
    "Git",
    "GitHub",
    "Bitbucket",
    "Docker",
    "Jira",
    "Visual Studio",
    "Visual Studio Code",
    "Rider",
    "PyCharm",
    "CLion",
    "PowerShell",
    "Bash",
    "WSL"
  ],
  Databases: [
    "Microsoft SQL Server",
    "PostgreSQL",
    "Oracle SQL"
  ],

  "Data & ML": [
    "PyTorch",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "NetworkX"
  ],



  "Operating Systems": [
    "Windows",
    "Linux"
  ],

  "Creative & 3D": [
    "Figma",
    "Three.js",
    "3ds Max",
    "AutoCAD",
    "Photoshop",
    "Canva",
    "Aseprite",
    "GIMP"
  ]
};



export function SkillsSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-white mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies I use in professional and academic projects across backend,
          frontend, and data-focused work.

        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <motion.div
              key={category}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl text-white font-medium mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}