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
                        <a href="/" className='text-xl pl-6 text-white hover:text-gray-300'>Home</a>
                        
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

            <section id='landing' className='px-6 md:px-24 flex flex-col lg:flex-row items-center justify-evenly py-44'>
                <div className='max-w-xl'>
                    <h1 className='text-5xl text-[#5E42A5] font-black'>Life And Debt:</h1>
                    <h3 className='text-5xl text-[#fff] font-black'>A Real Life Simulator</h3>
                    <a href='https://store.steampowered.com/app/799840/Life_and_Debt_A_Real_Life_Simulator/'><button className='font-bold text-white px-6 py-2 bg-[#5E42A5] rounded-full hover:scale-110 duration-300 my-6'>Purchase On Steam</button></a>
                </div>
                <div className='max-w-xl'>
                    <img src='/game2.png' />
                </div>
            </section>

            <section id='games'>
                <div class="bg-indigo-900 relative overflow-hidden ">
                    <img src="/bg.png" class="absolute h-full w-full object-cover" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div class="w-full flex flex-col items-center relative z-10">
                            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                                About
                            </h1>
                            <h3 class="font-extrabold text-xl text-left text-white leading-tight mt-4">
                                Released to Steam on February 4th, 2018.
                                <br />
                                <br />
                                Life and Debt is a 2D pixel art life management simulator. Life & Debt focuses on the beginnings of new home ownership after moving out of your parents' house. You will have to maintain your finances and cashflow while having a really bad shopping addiction. Will you be able to furnish your house with everything or will you end up hoarding clocks or waterbottles?
                                <br />
                                <br />
                                Features:
                                <ul className='text-xl text-white font-extrabold text-left leading-tight list-disc pl-5 py-4'>
                                <li>
                                Over 30 items to collect and horde!
                                </li>
                                <li>
                                Over 60+ different jobs!
                                </li>
                                <li>
                                Over 80+ Life Events that randomize the gameplay and force you to re-strategize!
                                </li>
                                <li>
                                Multiple difficulties!
                                </li>
                                <li>
                                An Original Soundtrack composed by Christoph Gray, the composer behind Knightfall.
                                </li>
                            </ul>
                                
                            </h3>
                            


                        </div>
                    </div>
                </div>
                
            </section>


            <section id='created'>
                <h1 class="font-extrabold text-5xl text-center text-white leading-tight my-12">
                    Created By
                </h1>
                
                <nav className="flex  xs:justify-between px-8 lg:mx-24 md:mx-12  sm:mx-8 my-12   justify-center items-center py-4 rounded-full ">

                    <div className=''>

                        
                        <a href='' className='mx-2 hover:scale-110 duration-300'>
                            <img src='/logo.png' />
                        </a>

                    </div>
                </nav>
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