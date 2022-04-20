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
            <nav className="flex xs:justify-between px-4 md:px-8 lg:mx-24 md:mx-12  sm:mx-8   sm:justify-between items-center py-4 rounded-full ">
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

            <section id='landing' className='px-6 md:px-24 flex flex-col md:flex-row items-center justify-evenly py-44'>
                <div className='max-w-xl text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl text-[#5E42A5] font-black'>Chronicle: Unit Eight</h1>
                    <h3 className='text-xl md:text-2xl text-[#fff]'>A high action bullethell arcade-shooter with roguelike elements and destructible bullets! Blast your way through enemies and bosses to ultimately reach and attempt to take down the great Space Pirate himself.</h3>
                    <a href='https://store.steampowered.com/app/1221990/Chronicle_Unit_Eight/'><button className='font-bold text-white px-6 py-2 bg-[#5E42A5] rounded-full hover:scale-110 duration-300 my-6'>Purchase On Steam</button></a>
                </div>
                <div className='max-w-xl'>
                    <img src='/chorniclelogo.png' />
                </div>
            </section>

            <section id='games'>
                <div class="bg-indigo-900 relative overflow-hidden ">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover  border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div class="w-full flex flex-col items-center relative z-10">
                            <h1 class="font-extrabold text-3xl md:text-5xl text-center text-white leading-tight mt-4">
                                About
                            </h1>
                            <h3 class="font-extrabold text-lg md:text-xl text-left text-white leading-tight mt-4">
                                Chronicle: Unit Eight is an arcade bullethell roguelike with a sliver of RPG thrown into the mix. Mixing the combat and game feel of vertical shooter games like "Raiden" and "Ikaruga" with the roguelite progression style of "Rogue Legacy". Chronicle gives that old school space shooting genre a new flavor of life. Dodge, fire bullets, and increase in strength by finding powerups or modifications on each fun. Collect Scraps that fall off of enemy ships to use to upgrade your ship for future runs. Discover many secrets and defeat the space pirate boss that you were originally hired to destroy.

                                Chronicle is a mercenary-for-hire organization. They have dispatched one mercenary, (codenamed Atlas,) and her ship, Unit Eight to sabotage and destroy a secret weapon that a space pirate group has created to destroy planets.

                                Discover new weapon combos, defensive maneuvers, abilities, bombs, and unlocks to help manifest the perfect run.

                                After every run, explore the vast perk tree and upgrade your ship through modifications, weapons, weapon unlocks, defensive maneuvers and more!

                                Can you defeat the space pirate organization and destroy the secret weapon before all the planets that we know are eliminated for good?
                            </h3>


                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-left text-white leading-tight mt-4">
                                    Atlas
                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-left text-white leading-tight mt-4">
                                    A lethargic but talented bounty hunter, Atlas is a weather veteran in the Cronicle mercenary division. Going by the alias of unit eight, or simply eight, Atlas has completed a record number of missions despite her age. As a result she has become generally unimpressed by most things. She is constantly seeking the thrills she once had as a novice hunter.

                                    Her latest job has lead her into an obscure pocket of space to take down an infamous rogue known as Zelos, the space pirate of galaxy 9.
                                </h3>
                            </div>
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/atlas.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/o27.png' className='border-2 rounded-lg' />
                            </div>
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-right text-white leading-tight mt-4">
                                    O-27
                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-right text-white leading-tight mt-4">
                                    Although smart and talented, 27 is both mousy and lacking of backbone. She has overseen a number of missions, none more notable than Atlas'. 27 can easily be considered a pushover and will often fail to prevent Atlas from performing tasks that are outside of protocol. This will often get 27 in trouble with her superiors.
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-left text-white leading-tight mt-4">
                                    Zelos
                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-left text-white leading-tight mt-4">
                                    A classic, greedy space pirate. Zelos really has no rhyme or reason for anything other than amusement. In this way he may even be considered similar to Atlas. He is a thrill seeker. Zelos has scoured Galaxy 9, taking whatever he wants. Now, to gain more notoriety, he has begun to build a weapon that could very well bring civilizations to their knees.
                                </h3>
                            </div>
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/zelos.png' className='border-2 rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/logan.png' className='border-2 rounded-lg' />
                            </div>
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-right text-white leading-tight mt-4">
                                    Logan
                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-right text-white leading-tight mt-4">
                                    Logan is unreasonably loyal to Zelos. He was once a captain himself but during a raid his fleet was wiped out. He was consequently "saved" by Zelos who just happened to feel like raiding the same target. As a result Zelos feels he owes a debt to Zelos and eventually becomes his second hand.
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-left text-white leading-tight mt-4">
                                    Bobiscusantos (Bob)

                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-left text-white leading-tight mt-4">
                                    Bob cares about nothing but money. He is a simple man of simple needs. In fact he doesn't even want to spend the money. He just wants to have it. Bob is pretty slow and dimwitted but he's incredibly resilient. Getting this guy to give up is pretty much impossible (unless you're willing to pay a higher price than the competition of course)
                                </h3>
                            </div>
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/bob.png' className='border-2 rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-indigo-900 relative overflow-hidden">
                    <img src="/chroniclebg.png" class="absolute h-full w-full object-cover border-b-2" />
                    <div class="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40">
                        <div class="flex flex-col lg:flex-row items-center relative z-10">
                            <div className='max-w-xl mx-6 my-6 lg:my-0'>
                                <img src='/fionne.png' className='border-2 rounded-lg' />
                            </div>
                            <div className='max-w-3xl mx-6 my-6 lg:my-0'>
                                <h1 class="font-extrabold text-3xl md:text-5xl text-right text-white leading-tight mt-4">
                                    Fionne
                                </h1>
                                <h3 class="font-extrabold text-lg md:text-xl text-right text-white leading-tight mt-4">
                                    Fionne is nothing short of insane. She is a skilled engineer for Zelos but is also incredibly unpredictable. If someone disturbs her work she may even attack them like a rabid dog. She couldn't care less about the space pirates she's a part of as long as she gets her pick of scraps left behind in Zelos' wake. All she cares about is her experiments. She'll build whatever fancies her at the time, whether it be weapons, a cross-dimensional teleporter or a robotic puppy.
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section id='created'>
                <h1 class="font-extrabold text-5xl text-center text-white leading-tight my-12">
                    Created By
                </h1>
                
                <nav className="flex xs:justify-between px-8 lg:mx-24 md:mx-12  sm:mx-8 my-12   justify-center items-center py-4 rounded-full ">

                    <div className='flex items-center '>

                        <a href='https://twitter.com/VampiricGamesCo' className='mx-2 hover:scale-110 duration-300'>
                            <img src='/VG_logo.png' />
                        </a>
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


        </div>

    )
}