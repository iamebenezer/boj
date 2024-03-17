import './App.css'
import Navbar from './components/Navbar'
import logo from './assets/main-logo.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import book from './assets/boj.png'

import { IoBriefcase } from "react-icons/io5";
function App() {

 
  return (
    <>
          <section className="bg-[url('./assets/bg-1.png')] w-screen h-screen bg-cover ">
            <Navbar/>
              <div className='flex justify-center items-center p-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                  <div className="space-y-5 flex justify-center items-center flex-col">
                    <div>
                      <img src={logo} className='floating md:w-96' alt="" />
                    </div>
                    <div className='text-white text-center'>
                  <h1 className='font-head text-[25px]'>WELCOME TO BOOK OF <span className='text-purple-400 blink'>JEETS</span></h1>
                    </div>
                    <div className='text-white shadow-lg backdrop-blur-2xl p-6 rounded-3xl text-center'>
                      <p className='font-texts text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem ullam deleniti?</p>
                    </div>

                    <div className="flex space-x-8  text-white">
                    <FaTelegramPlane size={30} />
                    <FaXTwitter size={30} />

                    </div>
                  </div>
          </div>
          </section>
          
          <div className=''>
          <marquee behavior="scroll" direction="right" className="absolute md:p-8  h-12 justify-center flex items-center bg-gradient-to-r from-purple-500 to-pink-500">
            <span className='font-texts text-[15px]'>THE BOOK OF JEETS </span>
            <span className='font-texts text-[15px]'>THE BOOK OF JEETS </span>
          
          </marquee>
          </div>
       
      
          <section className="bg-[url('./assets/bg.png')] w-screen h-fit bg-cover">

          {/* <h1 className='font-head text-[25px] text-white p-12' >About</h1>
             */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center p-12 mt-3 md:p-24 space-y-8">
            
              <div>
                <img src={book} className='w-60 md:w-96 rounded-xl shadow-sm' alt="" />
              </div>
              <div className=''>
              <div className='bg-white h-fit md:text-start text-center p-4 rounded-lg shadow-gray-800 shadow-sm'>
                <p className='font-texts md:text-[20px]'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Illum et error velit!</p>
                 <p className="font-texts md:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis doloremque incidunt 
                  veniam vel cumque, cupiditate nulla labore placeat sunt soluta alias recusandae?
                 </p>
                 </div>
                 <div className="flex justify-center md:justify-start items-center">
                  <a href="" className='shadow-gray-800 shadow-sm bg-gradient-to-r from-purple-500 to-[#6fcfe7] my-3 p-4 rounded-xl font-head '>Join Community</a>
                 </div>
              </div>
            </div>
          </section>

          <section className="bg-[url('./assets/bg-1.png')] w-screen md:h-fit h-screen bg-cover">

        
<div className="grid grid-cols-1 place-items-center p-12 space-y-8">
<h1 className='font-head text-[25px] text-white'>Tokenomics</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 md:p-12">
            <div className="bg-transparent p-4 text-white backdrop-blur-md justify-center items-center flex flex-col shadow-lg text-center rounded-2xl  w-80">
            <IoBriefcase size={40} className='text-white p-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500' />
              <h1 className='font-head text-[20px]'>1,000,000</h1>
              <span className='font-texts'>TOTAL SUPPLY</span>
            </div>

            <div className="bg-transparent p-4 text-white backdrop-blur-md justify-center items-center flex flex-col shadow-lg text-center rounded-2xl  w-80">
            <IoBriefcase size={40} className='text-white p-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500' />
              <h1 className='font-head text-[20px]'>1,000,000</h1>
              <span className='font-texts'>TOTAL SUPPLY</span>
            </div>

            <div className="bg-transparent p-4 text-white backdrop-blur-md justify-center items-center flex flex-col shadow-lg text-center rounded-2xl  w-80">
            <IoBriefcase size={40} className='text-white p-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500' />
              <h1 className='font-head text-[20px]'>1,000,000</h1>
              <span className='font-texts'>TOTAL SUPPLY</span>
            </div>
              
          </div>
          <div className='flex justify-center items-center text-white font-texts'>
                  <h1>CA: TBA</h1>
                </div>
</div>


</section>
        <section className="bg-[url('./assets/bg-1.png')] w-screen h-fit bg-cover">
        <h1 className='font-head text-[25px] text-white p-8 text-center'>Roadmap</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 p-12 place-items-center gap-10">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-60 p-4 text-white backdrop-blur-md items-center flex flex-col
             shadow-lg text-center rounded-2xl  w-80 border border-blue-400">
      
              <h1 className='font-head text-[20px]'>Phase 1</h1>
           
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-60 p-4 text-white backdrop-blur-md items-center flex flex-col
             shadow-lg text-center rounded-2xl  w-80 border border-blue-400">
      
              <h1 className='font-head text-[20px]'>Phase 2</h1>
           
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-60 p-4 text-white backdrop-blur-md items-center flex flex-col
             shadow-lg text-center rounded-2xl  w-80 border border-blue-400">
      
              <h1 className='font-head text-[20px]'>Phase 3</h1>
           
        
          </div>
</div>
      </section>

      {/* <section className="bg-[url('./assets/bg-1.png')] w-screen h-fit bg-cover">
        <div className="grid grid-cols-1 place-items-center gap-10 p-8">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-fit p-4 text-white backdrop-blur-md items-center flex flex-col
             shadow-lg text-center rounded-2xl  w-[400px] border border-blue-400">
      
              <h1 className='font-head text-[20px]'>JOIN BOJ COMMUNITY</h1>
                <p className='font-texts'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <a href="" className='bg-black px-6 py-3 my-3 rounded-xl'>JOIN</a>
            </div>

            
</div>
      </section> */}

      <footer className="bg-[url('./assets/bg-4.png')] w-screen h-fit bg-cover p-6 text-white">
        <div className="flex justify-center items-center">

        <p className='text-center font-texts'>All rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App;