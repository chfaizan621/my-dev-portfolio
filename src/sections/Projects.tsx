import { ArrowUpRight } from "lucide-react";
import { useInViewOnce } from "../hooks/useInViewOnce";
const projects = [
  {
    title: "1st Choice Delivery",
    description:
      "A modern delivery platform designed to streamline the process of ordering and delivering goods, with real-time tracking, seamless user experience and order management.",
    image: "/projects/project1.png",
    tags: [
      "Next.js",
      "Supabase",
      "Azure Queue",
      "Docker",
      "DigitalOcean",
      "SendGrid",
      "Twilio",
      "Tailwind",
    ],
    link: "https://1stchoicedelivery.com/",
  },
  {
    title: "FamilyCentral",
    description:
      "A standalone software system that allows families to enter applications directly into your agency’s eligibility list and subsidy management system.",
    image: "/projects/project2.png",
    tags: [
      "MERN",
      "TypeScript",
      "Cosmos DB",
      "SurveyJS",
      "Material UI",
      "Azure DevOps,",
      "Okta SSO",
    ],
    link: "https://familycentral.ldoecc.com/",
  },
  {
    title: "AgriTech Pakistan",
    description:
      "A standalone software solution for the agricultural sector in Pakistan, providing farmers with tools and insights to improve productivity and decision-making.",
    image: "/projects/project3.png",
    tags: [
      "DotNet",
      "Flutter",
      "Next.js",
      "WebRTC",
      "Azure",
      "SSMS",
      "Hugging Face",
      "AWS S3",
    ],
  },
  {
    title: "Marine Design Consultancy",
    description:
      "A Marine Design Company that provides design services for marine and offshore industries.",
    image: "/projects/project4.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    link: "https://www.marinedesignc.com/",
  },
];

export const Projects = () => {
  const { ref, isInView } = useInViewOnce();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-32 relative overflow-hidden section-reveal ${
        isInView ? "in-view" : ""
      }`}
    >
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
