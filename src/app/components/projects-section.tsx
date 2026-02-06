import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

const PROJECTS = [
  {
    title: "DocuMind-AI — Invoice & Receipt Extraction",
    description:
      "Document Intelligence MVP for invoice and receipt processing. Backend built with .NET and FastAPI, OCR and ML-based data extraction, PostgreSQL database, Dockerized services, and JSON/CSV export. Designed for real business document workflows.",
    tags: [
      "C#",
      ".NET",
      "FastAPI",
      "Machine Learning",
      "OCR",
      "PostgreSQL",
      "Docker",
      "Angular",
      "REST API",
    ],
    github: "https://github.com/Avuii/DocuMind-AI",
  },
  {
  title: "AsteroidSafe — ML & .NET Data Platform",
  description:
    "Web dashboard that ingests real NASA Near-Earth Object data (NeoWs, JPL SBDB) and classifies asteroids as Potentially Hazardous (PHA). Includes data ingestion, preprocessing, ML-based classification using a pretrained TabPFN model, and inference deployed via ONNX Runtime in a .NET backend. Results are presented in an interactive web dashboard.",
  tags: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Machine Learning",
    "ONNX Runtime",
    "Data Processing",
    "NASA API",
    "Tabular Data",
    "Dashboard",
  ],
  github: "https://github.com/Avuii/AsteroidSafe",
},

  {
    title: "Conway’s Game of Life — .NET Full-Stack",
    description:
      "Full-stack web application built with C# and .NET. Blazor WebAssembly frontend communicates with an ASP.NET Core REST API. Data persistence implemented using Entity Framework Core and Microsoft SQL Server.",
    tags: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Blazor WebAssembly",
      "REST API",
      "Entity Framework Core",
      "SQL Server",
    ],
    github: "https://github.com/Avuii/ConowayGameOfLife",
  },

  {
    title: "Fourier Transform — DFT & FFT",
    description:
      "Numerical implementation of Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT) for 1D and 2D signals. Includes spectrum analysis, signal reconstruction, noise experiments, and performance comparison.",
    tags: [
      "Python",
      "NumPy",
      "Matplotlib",
      "Signal Processing",
      "DFT",
      "FFT",
      "Numerical Methods",
    ],
    github: "https://github.com/Avuii/Fourier-Transform-Signal-Processing",
  },
  {
    title: "Banknote Authentication — Logistic Regression",
    description:
      "Manual implementation of logistic regression using gradient descent, compared with scikit-learn. Includes evaluation metrics, ROC and PR curves, and probability calibration on the Banknote Authentication dataset.",
    tags: [
      "Python",
      "Machine Learning",
      "Logistic Regression",
      "Gradient Descent",
      "Scikit-learn",
      "Data Analysis",
    ],
    github: "https://github.com/Avuii/Banknote-Authentication",
  },

  {
    title: "Urban Traffic Simulator",
    description:
      "City traffic simulation based on real OpenStreetMap data. Builds a road graph from GeoJSON and models movement and congestion in a configurable simulation loop.",
    tags: ["C#", "OpenStreetMap", "GeoJSON", "Simulation"],
    github: "https://github.com/Avuii/Urban-Traffic-Simulator",
  },
  {
    title: "Self-Organizing Map — WTA vs WTM",
    description:
      "Implementation of Self-Organizing Maps using PyTorch. Comparison of Winner-Takes-All and Winner-Takes-Most learning strategies, including normalization, neuron fatigue, and visualization of decision regions.",
    tags: [
      "Python",
      "PyTorch",
      "Neural Networks",
      "Self-Organizing Maps",
      "Unsupervised Learning",
      "Visualization",
    ],
    github: "https://github.com/Avuii/SOM-WTA-WTM-PyTorch",
  },
   {
    title: "IRIS Classification — Neural Networks",
    description:
      "Neural network experiments on the IRIS dataset. Comparison of linear baseline and multilayer perceptron (MLP), analysis of hidden layer size impact, and evaluation plots.",
    tags: [
      "Python",
      "PyTorch",
      "Neural Networks",
      "MLP",
      "Classification",
      "Data Analysis",
    ],
    github: "https://github.com/Avuii/IRIS",
  },
  {
    title: "XOR Classification with MLP",
    description:
      "Educational project demonstrating how a multi-layer perceptron solves the non-linearly separable XOR problem, which cannot be solved by a single-layer perceptron.",
    tags: [
      "Python",
      "Neural Networks",
      "MLP",
      "Machine Learning Fundamentals",
    ],
    github: "https://github.com/Avuii/XOR-Classification-with-MLP",
  },
  {
    title: "A/C Letter Recognition — Perceptron",
    description:
      "Single artificial neuron (perceptron) trained to recognize binary representations of letters A and C. Focus on fundamentals of supervised learning and linear classification.",
    tags: [
      "Python",
      "Perceptron",
      "Machine Learning",
      "Pattern Recognition",
    ],
    github: "https://github.com/Avuii/AC-letter-recognition",
  },
  {
    title: "Plane & Wind Simulator",
    description:
      "C++ simulation calculating flight times between waypoints with and without wind influence. Generates wind vector fields and exports results to CSV and TXT files.",
    tags: [
      "C++",
      "Simulation",
      "Vector Fields",
      "Numerical Computing",
      "CSV Export",
    ],
    github: "https://github.com/Avuii/PlaneAndWindSimulator",
  },
   {
    title: "Huffman Text Compression",
    description:
      "Command-line C++ tool implementing lossless text compression and decompression using the Huffman coding algorithm. Focus on algorithm correctness and efficient I/O handling.",
    tags: [
      "C++",
      "Algorithms",
      "Huffman Coding",
      "Data Compression",
      "CLI",
    ],
    github: "https://github.com/Avuii/Huffman-text-compression",
  },
];

export function ProjectsSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-white mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-md h-full hover:bg-white/15 hover:border-white/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 border border-white/30 text-white hover:bg-white/35 transition-all text-sm backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}