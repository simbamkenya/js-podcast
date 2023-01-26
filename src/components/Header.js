import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="h-48 py-12 bg-cover bg-bottom bg-blend-screen bg-fixed bg-no-repeat" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" + ")"}}>
       <div className="container mx-auto flex items-center justify-between">
            <div className="flex-shrink-0">
               <a href="https://cdnlogo.com/logo/javascript_36689.html">
                <img className="h-24 w-24" src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg"></img>
               </a>
            </div>
             
            <nav className="ml-12">
              <ul className="flex">
                <li className="mr-2">
                    <Link to="/" className="text-white text-base font-semibold no-underline">Podcasts</Link>
                </li>
                <li className="mr-2">
                    <Link to="/login" className="text-white text-base font-semibold no-underline">Login/sign Up</Link>
                </li>
              </ul>
            </nav>
       </div>
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-white whitespace-no-wrap">JavaScript Podcast</h1>
        </div>

    </header>
  )
}

export default Header