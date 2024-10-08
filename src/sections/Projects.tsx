import darkSaasLandingPage from "@/assets/images/—Pngtree—macbook pro 16_9011850.png";
import lightSaasLandingPage from "@/assets/images/weather.png";
import aiStartupLandingPage from "@/assets/images/photoport.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Arrowup from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Foodlane",
    year: "2023",
    title: "Restaurant Management System",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
    ],
    link: "https://food-lane-puce.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "StrmFlux",
    year: "2023",
    title: "React Weather App",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
    ],
    link: "https://react-weather-six-rho.vercel.app/",
    image: lightSaasLandingPage,
  },
  // {
  //   company: "Project_3",
  //   year: "2024",
  //   title: "PostSphere",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
  {
    company: "Bhabyasight",
    year: "2024",
    title: "Photography Portfolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
    ],
    link: "https://bhabyaphotography.vercel.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text flex justify-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into enging digital experinces.
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {/*  */}
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 65}px)` }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50 mt-4"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <Arrowup className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}

          {/*  */}
        </div>
      </div>
    </section>
  );
};
