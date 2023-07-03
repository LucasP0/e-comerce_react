import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';


export const DivCaroulsel = () => {
  const slides = [
    {
      url: '../../../img/img-1.png',
      link: 'https://www.youtube.com/watch?v=0NKUpo_xKyQ&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1'
    },
    {
      url: '../../../img/img-2.png'
    },
    {
      url: '../../../img/controle.png.png'
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
  return (
    <div className='max-w-[full] h-[500px] w-full relative max-md:h-[350px] group max-sm:h-[160px]'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowRight onClick={nextSlide} size={30}/>
      </div>
    </div>
  );
}