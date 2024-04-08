"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
  <span className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 hover:bg-green-500 text-transparent bg-clip-text">
    Hello, I'm{" "}
  </span>
  <br />
  <TypeAnimation
    sequence={[
      "Nanthan",
      1000,
      "Web Dev",
      1000,
      "Flutter Dev",
      1000,
      "ML Explorer",
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-l">
          Experienced in programming,Flutter app development, 
          and full-stack development. Enthusiastic about 
          implementing Machine Learning solutions, with a track record of 
           projects showcasing technical skills.
          </p>
          <div>
  <Link
    href="https://github.com/Nanthan-s-Nair"
    className="px-6 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-red-500 to-blue-500 hover:bg-slate-200 text-white"
    target="_blank" rel="noopener noreferrer"
  >
    Git Hub
  </Link>
  <Link
    href="https://drive.google.com/file/d/1noEjsT1Bmn0nyxd0o_Z8vC2ecrf2jfRv/view?usp=sharing"
    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 hover:bg-green-500 text-transparent bg-clip-text text-white mt-3"
    target="_blank" rel="noopener noreferrer"
  >
    <span className="block bg-grey-900 hover:bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-full px-5 py-2">
      Download CV
    </span>
  </Link>
</div>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/8e816222-4adb-452d-af20-e57403cc6fea-removebg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
