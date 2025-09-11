// src/pages/AllCoursesPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RetroCards from '../components/RetroCards'; 

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
    link: "https://edu-quest-iota.vercel.app/jungle",
    tags: ['Beginner', 'Animals'],
    category: 'Animals',
  },
  {
    id: 3,
    image: "/image/origbig3.png",
    title: "ZooTopia",
    description: "Step into the wild and explore the fascinating world of animals, their habitats in a fun, interactive way.",
    link: "https://edu-quest-iota.vercel.app/zoo",
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
      <div className="min-h-screen relative z-10 flex flex-col items-center bg-black">

        <div className="mt-10 w-full max-w-5xl relative"> 
          {/* Header and Search Container */}
          <div className="flex items-center justify-between gap-4">
            <div className="bg-yellow-400 border-4 border-yellow-600 rounded-lg p-3 mb-2 text-center shadow-lg flex-1">
              <h1 className="text-4xl uppercase" style={{ fontFamily: "heading" }}>
                Explore All Quests
              </h1>
            </div>
            
            {/* Search Bar */}
            <div className="absolute left-[70%] -top-[12px]">
              <SearchBar 
                courses={CourseItems} 
                setSearchTerm={setSearchTerm}
              />
            </div>
          </div>

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

          {/* Course Grid with RetroCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-30 px-4">
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
                    target="_blank"
                    className="bg-pink-300 hover:bg-blue-700 text-white font-pixel px-4 py-2 rounded mt-2 inline-block"
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
        <div className="absolute top-1/4 left-1/4 animate-pulse text-yellow-300 text-3xl">✨</div>
        <div className="absolute top-1/2 right-1/4 animate-pulse text-yellow-300 text-3xl">✨</div>
        <div className="absolute bottom-1/4 left-3/4 animate-pulse text-yellow-300 text-3xl">✨</div>
      </div>
    </div>
  );
};

export default AllCourses;
