"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ramadheayudhistira@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bogor,Indonesia",
  },
];

const Kontak = () => {
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    emailSaya: "ramadheayudhistira@gmail.com",
    namaSaya: "Rama Dhea Yudhistira",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setForm({
      ...form,
      service: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://ser.ramdhey.tech/profile/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();
      if (response.ok) {
        MySwal.fire({
          title: "Success",
          text: "Email sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        MySwal.fire({
          title: "Error",
          text: result.error,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        title: "Error",
        text: "An error occurred while sending the email",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's Collaborate</h3>
              <p className="text-white/60">Contact me for more</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstName"
                  placeHolder="First Name"
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  name="lastName"
                  placeHolder="Last Name"
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeHolder="Email Address"
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeHolder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <Select name="service" onValueChange={handleSelectChange}>
                <SelectTrigger className="-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Developer">Web Developer</SelectItem>
                    <SelectItem value="Mobile Apps Developer">
                      Mobile Apps Developer
                    </SelectItem>
                    <SelectItem value="Full Web & Mobile Apps Developer">
                      Full Web & Mobile Apps Developer
                    </SelectItem>
                    <SelectItem value="Back End Programmer">
                      Back End Programmer
                    </SelectItem>
                    <SelectItem value="Front End Web Programmer">
                      Front End Web Programmer
                    </SelectItem>
                    <SelectItem value="Front End Mobile Apps Programmer">
                      Front End Mobile Apps Programmer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40 p-3 items-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Kontak;
