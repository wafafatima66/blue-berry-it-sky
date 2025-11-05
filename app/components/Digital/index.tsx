import Image from "next/image";
import Link from "next/link";

const Digital = () => {
    return (

        <div className="">
            <div className='w-full min-h-[600px] sm:min-h-[700px] lg:h-screen bg-digital bg-blue relative overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-full items-center px-4 lg:px-8'>

                    {/* COLUMN-1 */}

                    <div className="lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">Digital Agency</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Transform Your Business with Intelligent Digital Solutions</h4>
                        <div className="text-white text-base font-normal mb-8 leading-relaxed text-center lg:text-start">
                            We design, develop, and deploy cutting-edge technology that drives growth. Partner with Blueberry IT Sky, your trusted full-service digital agency, and turn your vision into a thriving digital enterprise
                        </div>
                        <div className="text-center lg:text-start">
                            <Link href="/contact" prefetch className="inline-block text-xl font-semibold text-white bg-red py-4 px-12 hover:bg-darkred rounded-full">Get started</Link>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="girldoodle lg:absolute">
                            <Image src="/images/digital/berry.png" alt="girldoodle" width={815} height={591} className="w-64 sm:w-80 md:w-[600px] lg:w-[815px] h-auto mx-auto" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
