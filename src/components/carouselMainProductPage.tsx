import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react"

export const CarouselProducId = () => {
  const slides = [
    {
      url: '../../../img/image6.png',
    },
    {
      url: '../../../img/image13.png',
    },
    {
      url: '../../../img/image14.png',
    },
  ];

  const [currentIndex, setCurrentIndex ] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const Change = () => {
    const SlidesOne = slides[currentIndex].url;
   setCurrentIndex(SlidesOne);
  }
  return (
    <div className=' relative max-md:h-[350px] group max-sm:h-[160px] flex flex-col items-center p2'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-[400px] h-[400px] rounded-2xl bg-center bg-cover duration-500'>
        </div>
        <div className="flex flex-row gap-8 items-center justify-center mt-10 max-sm:grid max-sm:grid-cols-2">
          <img onClick={Change} className="hover:scale-150"   src="../img/image 5.png" alt="" />
          <img className="hover:scale-150 "  src="../img/image13.png" alt="" />
          <img className="hover:scale-150"  src="../img/image14.png" alt="" />
        </div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 traslate-y-[-20%] left-0 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 traslate-y-[-50%] right-0 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowRight onClick={nextSlide} size={30}/>
      </div>
    </div>
  );
}


