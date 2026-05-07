import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import Quiz from "../../components/course-componets/Quiz";
import courseData from "./courseData";
import "../courses.css";

const ExtendedCourse = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return <Navigate to="/all-courses" replace />;
  }

  return (
    <div>
      <Header />

      <div
        className="relative w-full min-h-[24rem] md:min-h-[30rem] bg-cover bg-center flex items-end md:items-center"
        style={{ backgroundImage: `url('${course.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl px-8 md:px-24 pb-10 md:pb-0 ml-4 md:ml-10">
          <div
            className="text-3xl md:text-6xl text-white mb-5 leading-tight"
            style={{ fontFamily: "heading", textShadow: "4px 4px 0 #000" }}
          >
            {course.title}
          </div>
          <div
            className="text-base md:text-3xl text-white max-w-3xl leading-relaxed"
            style={{ fontFamily: "regular" }}
          >
            {course.subtitle}
          </div>
        </div>
      </div>

      <section className="bg-[#020617] text-white px-6 md:px-20 pt-14 pb-24">
        <div className="max-w-6xl mx-auto">
        <div className="text-2xl md:text-3xl mb-10 text-center mt-20" style={{ fontFamily: "heading" }}>
          [ Mission Briefing ]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 mt-20">
          {course.lessons.map((lesson, idx) => (
            <div key={idx} className="border-2 border-slate-600 rounded-xl p-6 md:p-7 bg-[#12122b] shadow-lg">
              <h3 className="text-2xl md:text-3xl mb-5 text-[#B4E50D] leading-snug" style={{ fontFamily: "heading" }}>
                {lesson.heading}
              </h3>
              <p className="text-base md:text-xl leading-relaxed text-gray-100" style={{ fontFamily: "regular" }}>
                {lesson.content}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <div className="bg-[#020617] pb-10 md:pb-16">
        <Quiz ques={course.questions} quizType={course.quizType} />
      </div>
      <Footer />
    </div>
  );
};

export default ExtendedCourse;
