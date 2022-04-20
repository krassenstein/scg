import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const TwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})



export default function Home() {
  return (
    <div className='bg-[#151515] py-6'>
      <Head>
        <title>Static City Games</title>
        <meta name="description" content="Static City Games LLC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='navbar' className=''>
        <nav className="flex xs:justify-between px-8 lg:mx-24 md:mx-12  sm:mx-8   sm:justify-between items-center py-4 rounded-full ">
          <div className="flex text-white ">
            <h1 className='text-xl font-bold text-white hover:scale-110 duration-300 cursor-pointer	'>Static City Games</h1>
          </div>
          <div className="flex py-auto hidden sm:flex">
            <a href="#home" className='text-xl pl-6 text-white hover:text-gray-300'>Home</a>
            <a href="#games" className='text-xl pl-6 text-white hover:text-gray-300'>Games</a>
            <a href="#team" className='text-xl pl-6 text-white hover:text-gray-300'>Team</a>
          </div>
          <div className='flex items-center'>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/twitter.svg' />
            </a>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/twitch.svg' />
            </a>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/steam.svg' />
            </a>
          </div>
        </nav>
      </section>

      <section id='landing' className='px-6 md:px-24 flex items-center justify-evenly py-44'>
        <div className='max-w-xl'>
          <h1 className='text-4xl md:text-5xl text-[#5E42A5] font-black'>Static City Games</h1>
          <h3 className='text-xl md:text-2xl text-[#fff]'>We are a video game publisher and development company based in Philadelphia, PA.</h3>
          <a href='#games'><button className='font-bold text-white px-6 py-2 bg-[#5E42A5] rounded-full hover:scale-110 duration-300 my-6'>Our Games</button></a>
        </div>
        <div className='max-w-xl'>

        </div>
      </section>

      <section id='games'>
        <div className="bg-indigo-900 relative overflow-hidden my-24">
          <img src="/bg.png" className="absolute h-full w-full object-cover" />
          <div className="inset-0 bg-black opacity-25 absolute">
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full flex flex-col items-center relative z-10">
              <h1 className="font-extrabold text-4xl md:text-5xl text-center text-white leading-tight mt-4">
                Our Games
              </h1>
              <h3 className="font-extrabold text-xl md:text-2xl text-center text-white leading-tight mt-4">
                We are constantly working on new releases, check out some of our current games below.
              </h3>
              <h3 className="font-extrabold text-xl md:text-2xl text-center text-white leading-tight mt-4">
                Released Games
              </h3>
              <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6 mb-24'>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="/games/chronicle" className="w-full block h-full">
                    <img alt="blog photo" src="/game1.png" className="max-h-40 w-full object-cover" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Chronicle: Unit Eight
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        Chronicle: Unit Eight is a high-action arcade bullethell roguelike where you can destroy the enemies' bullets. Become a mercenary hired to take down a gluttonous space pirate and his fleet!
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href='/games/chronicle'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                        <a href='https://store.steampowered.com/app/1221990/Chronicle_Unit_Eight/'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300' >Steam Page</button></a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="/games/lifeanddebt" className="w-full block h-full">
                    <img alt="blog photo" src="/game2.png" className="max-h-40 w-full object-cover" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Life & Debt
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        Life & Debt: A Real Life Simulator is a 2D pixel art life management simulator. Life & Debt focuses on the beginnings of new home ownership after moving out of your parents' house.
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href='/games/lifeanddebt'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                        <a href='https://store.steampowered.com/app/799840/Life_and_Debt_A_Real_Life_Simulator/'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300' >Steam Page</button></a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="/games/stopdrop" className="w-full block h-full">
                    <img alt="blog photo" src="/stopdrop.png" className="max-h-40 w-full object-cover" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        stopDrop.
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      stopDrop. is a minimalistic survival-puzzle indie game. stopDrop. has 30 handmade levels where you must reach the exit while being the last person standing.                        </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href='/games/stopdrop'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                        <a href='https://store.steampowered.com/app/1221990/Chronicle_Unit_Eight/'><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300' >Steam Page</button></a>
                      </div>
                    </div>
                  </a>
                </div>


              </div>
              <h3 className="font-extrabold text-2xl text-center text-white leading-tight mt-4">
                In Development
              </h3>
              <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6 mb-24'>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="/games/chronicle" className="w-full block h-full bg-[#151515] ">
                    <img alt="blog photo" src="/svs.png" className="max-h-40 w-full  py-12 px-6" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        SVS Castlevania game
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        Chronicle: Unit Eight is a high-action arcade bullethell roguelike where you can destroy the enemies' bullets. Become a mercenary hired to take down a gluttonous space pirate and his fleet!
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img alt="blog photo" src="/game2.png" className="max-h-40 w-full object-cover" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      Project Cozywild
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        Life & Debt: A Real Life Simulator is a 2D pixel art life management simulator. Life & Debt focuses on the beginnings of new home ownership after moving out of your parents' house.
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-90  md:w-80 cursor-pointer m-auto">
                  <a href="/games/stopdrop" className="w-full block h-full">
                    <img alt="blog photo" src="/stopdrop.png" className="max-h-40 w-full object-cover" />
                    <div className="bg-[#151515] w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      stopDrop. - Steam Edition
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        Life & Debt: A Real Life Simulator is a 2D pixel art life management simulator. Life & Debt focuses on the beginnings of new home ownership after moving out of your parents' house.
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Learn More</button></a>
                      </div>
                    </div>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='twitch' className=' px-2 md:px-24 flex flex-col items-center justify-evenly py-44'>

        <h1 className="font-extrabold text-4xl md:text-5xl text-center text-white leading-tight mt-4">
          Development Streams
        </h1>
        <h3 className="font-extrabold text-xl md:text-2xl text-center text-white leading-tight mt-4 mb-16">
        Static City Games broadcasts their development of any current projects live on Twitch. <br/> <br></br>You can view the stream schedule below.
        </h3>
        {/* <div className='hidden xl:flex '>
          <TwitchEmbedVideo
            channel="krassenstein"
            onPlay={function noRefCheck() { }}
            onReady={function noRefCheck() { }}
            width='1280'
          />
        </div> */}
        <div className='hidden lg:flex'>
          <TwitchEmbedVideo
            channel="krassenstein"
            width={'800'}
          />
        </div>
        <div className='flex lg:hidden'>
          <a href=''><button className='bg-[#5E42A5] text-white px-8 py-2 rounded-full mx-2 hover:scale-110 duration-300 text-xl'>Twitch</button></a>

        </div>

        
        

      </section>

      <section id='team'>
        <div className="bg-indigo-900 relative overflow-hidden mt-24">
          <img src="/bg.png" className="absolute h-full w-full object-cover rotate-180" />
          <div className="inset-0 bg-black opacity-25 absolute">
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full flex flex-col items-center relative z-10">
              <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                Our Team
              </h1>
              <h3 className="font-extrabold text-2xl text-center text-white leading-tight mt-4">
                The Static City Team is dedicated to providing the best game creation experience for your needs.
              </h3>
              <div className='grid md:grid-cols-2 gap-6 my-12'>

                <div className="overflow-hidden  h-90 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img alt="blog photo" src="/krass.jpg" className="mx-auto mb-4 w-3/4 object-cover rounded-full border-[#151515] border-8" />
                    <div className="bg-[#151515] w-full p-4 shadow-lg rounded-lg text-center">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Krassenstein
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        This will be a description, i need you to send me whatever you want me to put here, ive also added another team member for demo as you mentioned you had a few others but mainly contractors.
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Twitch</button></a>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300' >Twitter</button></a>
                      </div>
                    </div>
                  </a>
                </div>
                

                <div className="overflow-hidden  h-90 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img alt="blog photo" src="/krass.jpg" className="mx-auto mb-4 w-3/4 object-cover rounded-full border-[#151515] border-8" />
                    <div className="bg-[#151515] w-full p-4 shadow-lg rounded-lg text-center">
                      <p className="text-indigo-500 text-md font-medium">
                      </p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Krassenstein
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        This will be a description, i need you to send me whatever you want me to put here, ive also added another team member for demo as you mentioned you had a few others but mainly contractors.
                      </p>
                      <div className='flex my-4 justify-center items-center'>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300'>Twitch</button></a>
                        <a href=''><button className='bg-[#5E42A5] text-white px-4 py-2 rounded-full mx-2 hover:scale-110 duration-300' >Twitter</button></a>
                      </div>
                    </div>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='footer'>
        <nav className="flex xs:justify-between px-8 lg:mx-24 md:mx-12  sm:mx-8 my-6  sm:justify-between items-center py-4 rounded-full ">
          <div className="flex text-white ">
            <h1 className='text-xl font-bold text-white hover:scale-110 duration-300 cursor-pointer	'>© 2017-2021</h1>
          </div>
          <div className="flex text-white ">
            <h1 className='text-xl font-bold text-white hover:scale-110 duration-300 cursor-pointer	'>Static City Games</h1>
          </div>
          <div className='hidden md:flex items-center'>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/twitter.svg' />
            </a>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/twitch.svg' />
            </a>
            <a href='' className='mx-2 hover:scale-110 duration-300'>
              <img src='/steam.svg' />
            </a>
          </div>
        </nav>
      </section>


    </div>

  )
}
