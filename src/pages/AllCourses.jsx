// src/pages/AllCoursesPage.jsx
import React, { useState } from 'react';
import CourseArcadeCabinet from '../components/CourseArcadeCabinet';

const coursesData = [
  {
    id: 1,
    title: 'Our Planet, Our Home',
    image: 'https://via.placeholder.com/150/8a2be2/ffffff?text=Planet', // Replace with your image
    description: 'Explore the fundamentals of our environment, its ecosystems.',
    tags: ['Beginner', 'Ecosystems'],
    category: 'Ecosystems',
  },
  {
    id: 2,
    title: 'Jungle Detectives',
    image: 'https://via.placeholder.com/150/20b2aa/ffffff?text=Jungle', // Replace with your image
    description: 'Dive into the world of wildlife and ecosystems, learning to observe.',
    tags: ['Intermediate', 'Wildlife'],
    category: 'Wildlife',
  },
  {
    id: 3,
    title: 'ZooTopia',
    image: 'https://via.placeholder.com/150/6a5acd/ffffff?text=Zootopia', // Replace with your image
    description: 'Step into the wild and explore the fascinating world of animals.',
    tags: ['Advanced', 'Wildlife'],
    category: 'Wildlife',
  },
  {
    id: 4,
    title: 'Ocean Mysteries',
    image: 'https://via.placeholder.com/150/4169e1/ffffff?text=Ocean', // Replace with your image
    description: 'Uncover the secrets of the deep blue sea and its amazing creatures.',
    tags: ['Beginner', 'Ocean'],
    category: 'Ocean',
  },
  {
    id: 5,
    title: 'Climate Guardians',
    image: 'https://via.placeholder.com/150/3cb371/ffffff?text=Climate', // Replace with your image
    description: 'Learn about climate change and how you can become a guardian of our planet.',
    tags: ['Advanced', 'Conservation'],
    category: 'Conservation',
  },
  // Add more courses here
];

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Ecosystems', 'Wildlife', 'Conservation', 'Ocean'];

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' ||
                            course.category.toLowerCase() === activeCategory.toLowerCase() ||
                            course.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-6 relative z-10 flex flex-col items-center">
      {/* Optional: Navigation Bar (placeholder) */}
      <nav className="w-full flex justify-between items-center px-4 py-2 text-white absolute top-0 left-0 z-20">
        <div className="font-pixel text-2xl">EduQuest</div>
        <div className="flex gap-4 font-pixel text-lg">
          <a href="#" className="hover:text-gray-400">Learn</a>
          <a href="#" className="hover:text-gray-400">Practice</a>
          <a href="#" className="hover:text-gray-400">Community</a>
          <a href="#" className="hover:text-gray-400">About</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-pixel py-2 px-4 rounded text-lg">
          Sign In
        </button>
      </nav>

      <div className="mt-20 w-full max-w-5xl"> {/* Adjusted top margin for nav */}
        {/* Explore All Quests Marquee */}
        <div className="bg-yellow-400 border-4 border-yellow-600 rounded-lg p-3 mb-8 text-center shadow-lg marquee-banner">
          <h1 className="font-pixel text-gray-900 text-4xl uppercase tracking-wider">
            Explore All Quests
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search for a Quest..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white font-pixel text-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseArcadeCabinet key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Placeholder for the "Ask AI" chat bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-purple-600 text-white font-pixel py-3 px-5 rounded-full shadow-lg flex items-center gap-2 hover:bg-purple-700">
          <span className="text-xl">🤖</span> Ask AI
        </button>
      </div>

      {/* Pixelated Sparkle/Star elements (optional) */}
      <div className="absolute top-1/4 left-1/4 animate-pulse text-yellow-300 text-3xl">✨</div>
      <div className="absolute top-1/2 right-1/4 animate-pulse text-yellow-300 text-3xl">✨</div>
      <div className="absolute bottom-1/4 left-3/4 animate-pulse text-yellow-300 text-3xl">✨</div>

    </div>
  );
};

export default AllCourses;