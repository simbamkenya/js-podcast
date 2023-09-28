import React from 'react'
import { FiChevronRight,FiTwitter,FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <footer class="footer footer-center  w-full p-8 sm:p-24 bg-gray-100 bg-black text-white">
      <div class="grid sm:grid-cols-2">
          <div className=''>
            <p className='text-2xl font-semibold mb-4'>Js Corner</p>
            <p>Get the raise, promotion, or new job of your dreams by building your skills, network, and personal brand using our proven method for accelerating your career.</p>
            <div className='flex mt-4 p-2'>
              <span className='mr-2 border-none px-2.5 rounded-sm  py-1 border flex justify-cennter items-center text-lg hover:bg-blue-900 duration-75'><FiTwitter/></span>
              <span className='mr-2 border-none px-2.5 rounded-sm  py-1 border flex justify-cennter items-center text-lg hover:bg-blue-900 duration-75'><FiLinkedin/></span>
              <span className='mr-2 border-none px-2.5 rounded-sm  py-1 border flex justify-cennter items-center text-lg hover:bg-blue-900 duration-75'><FiGithub /></span>
              <span className='mr-2 border-none px-2.5 rounded-sm  py-1 border flex justify-cennter items-center text-lg hover:bg-blue-900 duration-75'><FiFacebook/></span>
  
            </div>
          </div>

          <div className="grid md:grid-cols-3 mb-8">
            <div className='mb-2'>
              <p className='pb-4 text-lg'>Company</p>
               <ul  className='flex flex-col gap-2'>
                <a className='flex items-center hover:text-blue'><FiChevronRight className='mr-2'/> Podcasts</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> Blogs</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> Courses</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> Meetup</a>
               </ul>
            </div>
            <div className='mb-2'>
               <p className='pb-4 text-lg'>Useful Links</p>
               <ul  className='flex flex-col gap-2'>
                <a className='flex items-center hover:text-blue'><FiChevronRight className='mr-2'/> Privacy Policy</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> Terms of service</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> Cookie Policy</a>
                <a className='flex items-center'><FiChevronRight className='mr-2'/> One</a>
               </ul>
            </div>

            <div className='mb-2'>
            <p className='pb-4 text-lg'>Newsletter</p>
            <p>Learn how to level up your programming career every day.</p>

              <div className='flex flex-col gap-4'>
                <label htmlFor='email'>Write your email *</label>
                <input className='rounded-sm px-4 py-2' type="text" name='email'/>
                <button className='rounded-sm w-full bg-blue-400 text-base py-2 text-center'>Subscribe</button>
              </div>
              

              
            </div>
          </div>
      </div>
      <div class="text-center pt-8 border-t">
        <p>
          Copyright © 2023 -
          <a class="font-semibold" href="mailto:m.sohanemon@gmail.com">
            Js Podcast
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
