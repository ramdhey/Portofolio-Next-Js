"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description:
      "Building a web with React Js or Next Js from the front end side and using Express Js as well as managing SQL databases such as Postgre SQL and non-SQL such as Monggo Db to adjust the user's website needs on the backend side to suit the user's mobility.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Developer",
    description:
      "Building applications with React Native from a front end perspective and using Express Js and SQL or non-SQL databases as support to adapt to user application needs that are fast and efficient.",
    href: "",
  },
  {
    num: "03",
    title: "Odoo ERP Developer",
    description:
      "Building comprehensive enterprise resource planning (ERP) solutions using Odoo. Specializing in the customization and integration of various modules to streamline business processes, improve operational efficiency, and provide scalable solutions tailored to client needs. Expertise in Python, PostgreSQL, and the Odoo framework, ensuring robust and flexible ERP implementations.",
    href: "",
  },
  {
    num: "04",
    title: "Unity Game Developer",
    description:
      "Developing engaging and immersive video games using Unity. Proficient in C# programming and Unity’s comprehensive suite of tools, focusing on creating interactive gameplay, realistic graphics, and smooth performance across multiple platforms. Dedicated to pushing the boundaries of game development to deliver high-quality gaming experiences.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
