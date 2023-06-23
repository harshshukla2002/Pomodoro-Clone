import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../CSS/Carosel.css";

const Carousel = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    {
      title: "What is it?",
      paragraph:
        "The StudyTracker Technique is a time management method that can be used for any task. For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.",

      bulletPoints: [
        "The aim of the StudyTracker Technique is to use time as a valuable ally in accomplishing what we want to do in the way we want to do it, and to enable us to improve continually the way we work or study.",
      ],
    },
    {
      title: "The Goals",
      paragraph:
        "The Pomodoro Technique will provide a simple tool/process for improving productivity (your own and that of your team members) which can do the following:",
      bulletPoints: [
        "Alleviate anxiety linked to beginning",
        "Enhance focus and concentration by cutting down on interruptions",
        "Increase awareness of your decisions",
        "Boost motivation and keep it constant",
        "Bolster the determination to achieve your goals",
        "Refine the estimation process, both in qualitative and quantitative terms",
        "Improve your work or study process",
        "Strengthen your resolve to keep on applying yourself in the face of complex situations",
      ],
    },
    {
      title: "The Basics",
      paragraph:
        "At the beginning of each day select the tasks you need to complete and put them on the TODO list above.Keep on working, task after task, until the task at hand is finished. Every 4 take a longer break, (15–30 minutes).",
      bulletPoints: [
        "Start the StudyTracker timer",
        "Work until the timer runs out",
        "Take a short break (3-5 minutes)",
      ],
    },
    {
      title: "Rules & Tips",
      paragraph: "Use these to improve Productivity",
      bulletPoints: [
        "If a task takes more than 5–7 StudyTracker, break it down",
        "If it takes less than one StudyTracker, add it up, and combine it with another task",
        "Once a StudyTracker begins, it has to end",
        "The next StudyTracker will go better",
        "Login to the service and track your progress",
        "The StudyTracker Technique shouldn’t be used for activities you do in your free time. Enjoy free time!",
      ],
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentSection((prevSection) =>
      prevSection === 0 ? sections.length - 1 : prevSection - 1
    );
  };

  const handleNext = () => {
    setCurrentSection((prevSection) =>
      prevSection === sections.length - 1 ? 0 : prevSection + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-buttons">
          <button className="prev-button" onClick={handlePrevious}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="carousel-content">
          <h2>{sections[currentSection].title}</h2>
          <p>{sections[currentSection].paragraph}</p>
          <ul className="bullet-points">
            {sections[currentSection].bulletPoints.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
        </div>
        <div className="carousel-buttons">
          <button className="next-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
