import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RetroCards from '../components/RetroCards'; 
import Gridlines from 'react-gridlines';

const CourseItems = [
  {
    id: 1,
    image: "/image/origbig1.png",
    title: "Our Planet, Our Home",
    description: "Explore the fundamentals of our environment, its ecosystems, and the importance of protecting our planet.",
    link: "https://edu-quest-iota.vercel.app/zoo",
    category: 'Beginner',
    tags: ['Beginner', 'Environment'],  
  },
  {
    id: 2,
    image: "/image/origbig2.png",
    title: "Jungle Detectives",
    description: "Dive into the world of wildlife and ecosystems, learning to observe and understand nature around us.",
    link: "/courses/jungle",
    tags: ['Intermediate', 'Animals'],
    category: 'Animals',
  },
  {
    id: 3,
    image: "/image/origbig3.png",
    title: "ZooTopia",
    description: "Step into the wild and explore the fascinating world of animals, their habitats in a fun, interactive way.",
    link: "/courses/zoo",
    tags: ['Beginner', 'Animals'],
    category: 'Animals',
  },
  {
    id: 4,
    title: 'Ocean Mysteries',
    image: '/image/origbig4.png', 
    description: 'Uncover the secrets of the deep blue sea and its amazing creatures.',
    link: "https://edu-quest-iota.vercel.app/ocean",
    tags: ['Beginner', 'Ocean'],
    category: 'Ocean',
  },
  {
    id: 5,
    title: 'Climate Guardians',
    image: '/image/origbig5.png', 
    description: 'Learn about climate change and how you can become a guardian of our planet.',
    link: "https://edu-quest-iota.vercel.app/climate",
    tags: ['Advanced', 'Conservation'],
    category: 'Conservation',
  },
  {
    id:6,
    title: 'Plastic Pirates',
    image: '/image/origbig6.png', 
    description: 'Join the fight against plastic pollution and discover ways to reduce waste.',
    link: "https://edu-quest-iota.vercel.app/plastic",
    tags: ['Intermediate', 'Pollution'],
    category: 'Pollution',
  }
];

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = CourseItems.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' ||
      course.category?.toLowerCase() === activeCategory.toLowerCase() ||
      course.tags?.some(tag => tag.toLowerCase() === activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />

      {/* Banner with overlay content */}
      <div 
        className="relative w-full h-[20rem] bg-cover bg-center"
        style={{ backgroundImage: `url('/image/banner3.gif')` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <div className="bg-yellow-400 border-4 border-yellow-600 rounded-lg p-4 shadow-lg mb-4">
            <h1 className="text-4xl uppercase text-center" style={{ fontFamily: "heading" }}>
              Explore The World Of EduQuest
            </h1>
          </div>

          <SearchBar    
            courses={CourseItems} 
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      {/* Courses Section with Gridlines */}
      <div className="min-h-screen relative flex flex-col items-center bg-[#01091b]">
        
        {/* Gridlines visible only here */}
        <Gridlines
          cellWidth={25}
          cellHeight={30}
          lineColor="rgba(255,255,255,0.08)"
          className="absolute inset-0 pointer-events-none z-10"
        />

        <div className="mt-10 w-full max-w-5xl relative z-20"> 
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 text-white" style={{ fontFamily: 'regular' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-pixel px-4 py-2 rounded-full text-sm uppercase ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-30 px-4">
            {filteredCourses.map(course => (
              <RetroCards
                key={course.id}
                title={course.title}
                desc={course.description}
                source={course.image}
                tags={course.tags}
              >
                {course.link && (
                  <a
                    href={course.link}
                    className="bg-pink-300 hover:bg-pink-600 text-white font-pixel px-4 py-2 rounded mt-2 inline-block"
                    style={{ fontFamily: "button_text" }}
                  >
                    Start Quest
                  </a>
                )}
              </RetroCards>
            ))}
          </div>
        </div>  

        {/* Sparkles */}
        <div className="absolute top-[10%] left-[10%] animate-pulse text-yellow-300 text-3xl">✨</div>
        <div className="absolute top-[10%] right-[10%] animate-pulse text-yellow-300 text-3xl">✨</div>
      </div>
    </div>
  );
};

export default AllCourses;
