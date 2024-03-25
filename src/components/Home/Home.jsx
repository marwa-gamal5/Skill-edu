import { Carousel } from "flowbite-react";
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import './Home.css'
function Home() {
    return (
        <div className='bg-baleBlue'>
            <div className='w-full h-screen '>
                <Carousel className='w-full h-full  '>

                    <div className='w-full h-full relative'>
<div>
    <div className='text-white absolute top-1/4'>
        <div className='maintext'>

            <span>Welcome </span>
            <span>to </span>
            <span>sum </span>
            <span>test</span>
            <br/>
            <div className='secandtext'>
                <span>Eewoer</span>
                <span>for</span>
                <span>thatits</span>
                <span>of</span>
                <span>That</span>
                <br/>
                <span>future</span>
                <span>the</span>
                <span>aloterandom</span>
                <span>test</span>
            </div>
        </div>

    </div>
    <img src={slider1} alt='slider1' className='w-full h-full '/>
</div>
                    </div>
                    <div className='w-full h-full'>
                        <img src={slider2} alt='slider2' className='w-full h-full '/>
                    </div>
                    <div className='w-full h-full'>
                        <img src={slider3} alt='slider3' className='w-full h-full '/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
