import React, { useState } from "react";
import HEADERBG from "../assets/header-background.jpg";
import Footer from "./Footer";
import { AboutUsPageData } from "../data/AboutUsPageData.js";

export default function AboutUsPageComp() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="relative">
        <img
          src={HEADERBG}
          alt="Background"
          className="mt-30 w-full h-[60vh] object-cover object-[center_25%]"
        />

        <div className="absolute inset-0 z-10">
          <div className="px-10 max-sm:px-4 pt-[22vh]">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              ABOUT US
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="text-3xl font-bold block text-center">
            ABOUT <span className="text-red-500">US</span>
          </span>

          <hr className="w-16 mx-auto mt-2 mb-10 border-0 h-1 bg-red-500" />

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img
              src={AboutUsPageData.image}
              alt="About Tru Projects"
              className="w-full md:w-1/2 max-w-md rounded-lg shadow"
            />

            <div className="md:w-1/2 space-y-6">
              <p className="font-bold">
                Welcome to Tru Projects. Tru Projects are being introduced to
                make a long way from its beginnings. We are the one source and
                efficient student oriented service provider for IT projects.
              </p>

              <p>
                We expertise and are the best mutually proclaimed in Platform
                for Academic Live Projects, for students of B.Tech, M.Tech, MBA,
                MCA. We are dedicated to giving you the best of IT projects,
                with a focus on Quality, Dependability, Structure and much more.
              </p>

              <p>
                Tru Projects is applying its way through, to help with the best
                of service for students in Implementing CSE Projects in skill
                sets – Data Sciences, Machine Learning, Artificial Intelligence,
                Deep Learning, Android, Big Data, Block Chain and Java Related
                Technologies with the best equipment which drives them to
                inspiration.
              </p>

              <p>
                We serve students with Implementing in Students self ideas /
                Abstracts / Thoughts, and we are thrilled to be a part of the
                Student Faternity.We hope you appreciate our IT Projects, as
                much as we enjoy offering them to you. And for any questions and
                guidance on our projects, please do revert to us.
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-full space-y-6">
            {AboutUsPageData.paragraphs.map((para, index) => (
              <p
                key={index}
                className={
                  !isExpanded && index === 0
                    ? "line-clamp-3"
                    : !isExpanded
                      ? "hidden"
                      : ""
                }
              >
                {para}
              </p>
            ))}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white bg-blue-500 p-2 hover:cursor-pointer focus:outline-none"
            >
              {isExpanded ? "Close" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* <YouTubeVideos /> */}

      <Footer />
    </>
  );
}
