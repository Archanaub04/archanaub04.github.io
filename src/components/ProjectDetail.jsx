import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/datas/ProjectsData";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Calendar,
  Users,
  Briefcase,
  Layers,
  Zap,
  Star,
  Database,
  Code,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <StarBackground />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <StarBackground />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            {/* Project Title & Description */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                {project.subtitle || project.tagline}
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap w-full mb-4">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                  <Layers className="w-4 h-4" />
                  {project.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${
                    project.status === "Completed"
                      ? "bg-green-500/10 text-green-600 border-green-500/20"
                      : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                  }`}
                >
                  {project.status === "Completed" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertTriangle className="w-4 h-4" />
                  )}
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative mb-12">
              <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Action Buttons */}
              <div className="absolute -bottom-6 right-4 flex gap-3">
                <a
                  href={project.demoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-medium"
                >
                  <Rocket className="w-4 h-4" />
                  Live Demo
                </a>
                {project.gitHubURL && (
                  <a
                    href={project.gitHubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background border border-border px-6 py-3 rounded-xl hover:bg-muted/50 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Table of Contents */}
            <nav className="mb-16">
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "#overview", label: "🚀 Overview", icon: Rocket },
                  {
                    id: "#features",
                    label: "🌟 Feature Highlights",
                    icon: Star,
                  },
                  {
                    id: "#architecture",
                    label: "🧱 Architecture & Structure",
                    icon: Database,
                  },
                  { id: "#tech-stack", label: "🧪 Tech Stack", icon: Code },
                  { id: "#results", label: "✅ Results", icon: TrendingUp },
                  {
                    id: "#challenges",
                    label: "🛠️ Challenges & Learnings",
                    icon: AlertTriangle,
                  },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={item.id}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Content Sections */}
            <div className="space-y-20">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">🚀 Overview</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.longDescription || project.description}
                  </p>
                  <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="text-base text-muted-foreground leading-relaxed italic">
                      {project.tagsDescription}
                    </p>
                  </div>
                </div>
              </section>

              {/* Feature Highlights */}
              <section id="features" className="scroll-mt-24 max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">🌟 Feature Highlights</h2>
                </div>
                <div className="grid gap-4">
                  {(project.keyDetailedFeatures || project.keyFeatures).map(
                    (feature, idx) => (
                      <div
                        key={idx}
                        className="group p-3 bg-muted/20 hover:bg-muted/30 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {feature}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* Architecture & Structure */}
              <section id="architecture" className="scroll-mt-24 max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    🧱 Architecture & Structure
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-3 bg-muted/20 rounded-xl border border-border/50"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section id="tech-stack" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">🧪 Tech Stack</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {project.tags.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group p-2 bg-muted/20 hover:bg-primary/10 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
                    >
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section id="results" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">✅ Results</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Performance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Optimized for speed with fast loading times, efficient
                      resource usage, and smooth user interactions across all
                      devices.
                    </p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                    <Globe className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Scalability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built with growth in mind using modular architecture,
                      efficient data structures, and scalable infrastructure.
                    </p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">User Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Intuitive interface design with responsive layouts,
                      accessibility features, and seamless user journeys.
                    </p>
                  </div>
                </div>
              </section>

              {/* Challenges & Learnings */}
              <section id="challenges" className="scroll-mt-24 max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    🛠️ Challenges & Learnings
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-3 bg-muted/20 rounded-xl border border-border/50"
                    >
                      <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-600 text-xs font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call to Action */}
              <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Interested in building something similar?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      I'd love to help you bring your ideas to life with modern
                      technologies and best practices. Let's discuss your
                      project requirements and create something amazing
                      together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors font-medium"
                      >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-xl hover:bg-muted/50 transition-colors font-medium"
                      >
                        View More Projects
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
