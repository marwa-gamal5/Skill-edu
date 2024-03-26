import { Carousel } from "flowbite-react";
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import { RiGraduationCapLine } from "react-icons/ri";
import './MainSlider.css'

function MainSlider() {
    return (
        <div className='bg-baleBlue'>
            <div className='w-full h-screen '>
                <Carousel className='w-full h-full  '>


                    <div className='w-full h-full relative'>


                        <div className='text-white absolute md:top-1/4 top-1/4 md:ps-20 ps-2 '>

                            <div className='md:text-6xl text-4xl font-bold leading-snug maintext'>Welcome to sum test
                            </div>
                            <div className='md:text-3xl text-xl font-bold leading-snug maintext'>
                                Ewoer for thatits take of that <br/>
                                Future aloterandom test
                            </div>

                        </div>
                        <img src={slider1} alt='slider1' className='w-full h-full '/>
                    </div>
                    <div className='w-full h-full relative'>
                        {/* Container for the circles */}
                        <div className='text-white absolute md:top-1/4 right-20 top-1/4 md:ps-40 ps-2  '>

                            {/* First circle */}
                            <div className="w-36 h-36  flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full bg-white border-4 border-white absolute z-10">
                                <style jsx>{`
                                    .bg-white  {
                                        background-color: rgba(255, 255, 255, 0.3);
                                        backdrop-filter: blur(0.2px);
                                    }
                                `}</style>
                                <RiGraduationCapLine className='text-white text-5xl hover:text-6xl ' />
                            </div>

                            {/* Second circle */}
                            <div className="w-36 h-36  flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4  items-center justify-center rounded-full bg-white border-4 border-white absolute z-10 mt-[160px]">
                                <style jsx>{`
                                    .bg-white  {
                                        background-color: rgba(255, 255, 255, 0.3);
                                        backdrop-filter: blur(0.2px);
                                    }
                                `}</style>
                                <RiGraduationCapLine className='text-white text-5xl hover:text-6xl ' />
                            </div>

                            {/* Third circle */}
                            <div className="w-36 h-36  flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4  items-center justify-center rounded-full bg-white border-4 border-white absolute z-10 mt-[320px]">
                                <style jsx>{`
                                    .bg-white  {
                                        background-color: rgba(255, 255, 255, 0.3);
                                        backdrop-filter: blur(0.2px);
                                    }
                                `}</style>
                                <RiGraduationCapLine className='text-white text-5xl hover:text-6xl' />
                            </div>

                            {/* Fourth circle */}
                            <div className="w-36 h-36  flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4  items-center justify-center rounded-full bg-white border-4 border-white absolute z-10 mt-[480px]">
                                <style jsx>{`
                                    .bg-white  {
                                        background-color: rgba(255, 255, 255, 0.3);
                                        backdrop-filter: blur(0.2px);
                                    }
                                `}</style>
                                <RiGraduationCapLine className='text-white text-5xl hover:text-6xl' />
                            </div>
                        </div>
                        <div className=' md:block hidden text-white absolute md:top-1/4 top-1/4 md:ps-20 ps-2 '>
                            <div className='md:text-6xl text-4xl font-bold leading-snug maintext'>Welcome to sum test
                            </div>
                            <div className='md:text-3xl text-xl font-bold leading-snug maintext'>
                                Ewoer for thatits take of that <br/>
                                Future aloterandom test
                            </div>

                        </div>
                        <img src={slider2} alt='slider2' className='w-full h-full '/>
                    </div>
                    <div className='w-full h-full relative'>

                        <div className='text-white absolute md:top-1/4 top-1/4 md:ps-20 ps-2 '>
                            <div className='md:text-6xl text-4xl font-bold leading-snug maintext'>Welcome to sum test
                            </div>
                            <div className='md:text-3xl text-xl font-bold leading-snug maintext'>
                                Ewoer for thatits take of that <br/>
                                Future aloterandom test
                            </div>

                        </div>
                        <img src={slider3} alt='slider3' className='w-full h-full '/>
                    </div>
                </Carousel>
            </div>
        </div>

    );
}

export default MainSlider;
