import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function ImageSlide() {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1598927847550-929c52974be3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1601351841251-766245326eee?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1686397139775-4391d3e2e6b6?q=80&w=3596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const previousSlide =() => {
        const isFirstSlide = currentSlide === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex)
    }
    const nextSlide =() => {
        const isLastSlide = currentSlide === slides.length - 1
        const newIndex = isLastSlide? 0 : currentSlide + 1;
        setCurrentSlide(newIndex)
    }

    const dotSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <div 
            style={{backgroundImage: `url(${slides[currentSlide].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30} onClick={previousSlide}/>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={nextSlide}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => dotSlide(slideIndex)} className='text-3xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlide; 