import React from 'react'
import RetroButton from './RetroButton'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
        <header className="text-white text-center bg-black flex items-center justify-between px-8 py-3 font-extrabold">
        <Link to="/" className="flex items-center">
        <img src="/forest.svg" alt="logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold pl-4" style={{ fontFamily: "heading" }}>
          EduQuest
        </h1>
        </Link>
            <nav className="flex items-center gap-6 text-base" style={{ fontFamily: "regular" }}>
                <a href="https://edu-quest-iota.vercel.app/jungle">Learn</a>
                <a href="https://edu-quest-iota.vercel.app/zoo">Practice</a>
                <a href="">Community</a>
                <a href="#desc">About</a>
            </nav>

            <RetroButton text="Sign In" onClick={() => navigate("/")} />
        </header>
  )
}

export default Header