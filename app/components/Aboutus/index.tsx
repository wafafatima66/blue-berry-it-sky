import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={486} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/featured/feat1.jpg" alt="man-icon" width={516} height={750} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">About Us</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                            At Blueberry IT Sky, we're not just an IT agency—we're your digital transformation partner. Based in Dhaka and serving clients globally, we specialize in creating seamless digital experiences that drive measurable business results. Whether you're a fast-growing startup or an established enterprise, our team of experts works collaboratively with you to design, develop, and maintain technology solutions that elevate your competitive advantage and position you as an industry leader
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Aboutus;
