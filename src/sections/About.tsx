import Sec_Header from "@/components/Sec_Header";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";

import MapImage from "@/assets/images/map.png";
import SmileImage from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolboxItem";

const toolboxItems = [
  {
    title: "JavaScript",
    IconType: JavascriptIcon,
  },
  {
    title: "HTML3",
    IconType: HtmlIcon,
  },
  {
    title: "CSS3",
    IconType: CssIcon,
  },
  {
    title: "React",
    IconType: ReactIcon,
  },
  {
    title: "Github",
    IconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    icon: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    icon: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    icon: "👢",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    icon: "🎹",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    icon: "🏋🏻",
    left: "5%",
    top: "65%",
  },
  {
    title: "reading",
    icon: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <Sec_Header
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perpectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="" className="" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2" >
              <div>
                <CardHeader
                  title="My Toolbox"
                  description=" Explore the technologies and tools I use to craft exceptional
                digital experinces."
                  className=""
                />
              </div>

              <ToolBoxItems items={toolboxItems} className="" />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName=" -translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital relem."
                  className="px-6 py-6"
                />
              </div>
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.icon}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt=""
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={SmileImage} alt="" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
