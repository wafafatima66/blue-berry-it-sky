import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-white bg-red hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:bg-darkred'>DESIGN AGENCY</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-4xl lg:text-65xl font-bold text-darkpurple'>
                            Transform Your Business with Intelligent Digital Solutions
                        </h1>
                        <div className='mt-5 text-base font-normal text-lightblack'>
                            We design, develop, and deploy cutting-edge technology that drives growth. Partner with Blueberry IT Sky, your trusted full-service digital agency, and turn your vision into a thriving digital enterprise
                        </div>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <Link href='/contact' prefetch className='inline-block text-sm md:text-xl font-semibold hover:shadow-xl bg-red text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-darkred'>
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
