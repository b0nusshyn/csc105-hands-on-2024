import React from 'react'
import Navbar from '../component/Navbar'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FFD6E9] ">
      {/* Img */}
      <div className="w-full flex justify-center">
        <img
          src="https://hellokittyislandadventure.wiki.gg/images/e/eb/Full_Character_My_Sweet_Piano.png?97d3c6"
          alt="Profile"
          className="w-80 md:w-120"
        />
      </div>

      {/* Txt */}
      <div className="w-full mt-8 ml-20 text-center text-left space-y-3">
        <h2 className="text-3xl font-bold text-[#570228]">About Me</h2>
        <p className="text-lg font-semibold text-[#EE7C99]">Shayanis Siribenjawong</p>
        <p className="text-gray-600 mt-4 pr-4 w-md  break-words">
        이렇게 좋아해 본 적이 없어요 눈만 뜨면 그대가 참 보고 싶어요 오늘은 그대 내 곁에서 그저 머물러줘요 그리고 내 손잡아 주세요 꼭 안아 줄게요 ♡
        </p>
        <button className="mt-6 p-2 w-30 bg-[#FA9EBC] text-white font-semibold rounded-4xl shadow-md hover:bg-[#ffc8d9] cursor-pointer">
          Read More
        </button>
      </div>
    </div>
    </div>
  )
}
