import React from 'react'
import Navbar from '../component/Navbar'

function Home() {
  return (
    <div className='bg-[#FFD6E9]'>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-10 ">
        <div className="space-y-2 ">
          <p className="text-lg font-semibold">bello ~</p>
          <h1 className="text-4xl font-bold ">bonusshyn</h1>
          <p className="text-lg font-semibold">Shayanis Siribenjawong</p>
          <p className="text-gray-600">sleep 24/7</p>

          {/* icon */}
          <div className="flex space-x-4 pt-6 ">
            {[
              { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png", link: "https://www.facebook.com/" },
              { img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", link: "https://www.instagram.com/" },
              { img: "https://play-lh.googleusercontent.com/Y6epalNGUKPgWyQpDCgVL621EgmOmXBWfQoJdaM8v0irKWEII5bEDvpaWp7Mey2MVg", link: "https://www.twitch.tv/" },
            ].map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.img} alt={social.icon} className="w-10 h-10 rounded-full hover:opacity-80 " />
              </a>
            ))}
          </div>

          {/* button */}
          <button className="mt-4 px-6 py-2 bg-[#FA9EBC] text-white rounded-3xl shadow-lg hover:bg-[#ffc8d9] cursor-pointer">
            My Portfolio
          </button>
        </div>

        {/* image */}
        <div>
          <img
            src="https://hellokittyislandadventure.wiki.gg/images/e/eb/Full_Character_My_Sweet_Piano.png?97d3c6" 
            alt="Photo"
            className="md:w-[500px] p-9"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
