"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Master Diskon Apps (Mobile Development)",
    title: "Master Diskon Apps",
    description:
      "Ticket and lodging booking application with B2B and B2C roles allows booking corporate and personal travel tickets . Providing plane, train tickets and booking hotel rooms or accommodation online.",
    stack: [
      { name: "React native" },
      { name: "Redux Toolkit" },
      { name: "Firebase-Auth" },
    ],
    image: "/assets/work/masdisTrans.png",
    live: "",
    github: "",
    playStore:
      "https://play.google.com/store/apps/details?id=com.masterdiskon&hl=id",
    ios: "https://apps.apple.com/id/app/master-diskon/id6479336724",
  },
  {
    num: "02",
    category: "Teman Cuaca (Full Stack)",
    title: "Teman Cuaca",
    description:
      "Weather Prediction application with support for the user's GPS location as well as a weather forecast feature for travel with maps guidance to make the journey always directional.",
    stack: [
      { name: "React native" },
      { name: "Zustand" },
      { name: "Express js" },
      { name: "Mongo Db" },
    ],
    image: "/assets/work/TemanCuaca.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Ngepet Run 3D (Game Development)",
    title: "Ngepet Run 3D",
    description:
      "An endless runner game with 3D animation that provides cool visual effects and is supported by story ideas with Indonesian mystical nuances that make the user experience more exciting when playing.",
    stack: [{ name: "Unity" }, { name: "C#" }],
    image: "/assets/work/NgepetRun.png",
    live: "",
    github: "",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{
        opacity: 0,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.playStore && (
                  <Link href={project.playStore} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          {/* Ganti ikon Play Store dengan ikon yang sesuai */}
                          <FaGooglePlay className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Google Play Store</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.ios && (
                  <Link href={project.ios} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          {/* Ganti ikon App Store dengan ikon yang sesuai */}
                          <FaAppStore className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>App Store</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[365px] relative group flex justify-center items-center bg-transparent">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="xl:object-contain sm:object-cover md:object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
