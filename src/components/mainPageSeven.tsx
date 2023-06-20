import { useState, useEffect, useRef } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProductsDiv } from './productsDiv';
import { products } from './products';


// importe de imagens:
import img1 from '../../public/img/img-1.png';
import img2 from '../../public/img/img-2.png'
import img3 from '../../public/img/Inserir um título (4) 1.png'
import { motion } from 'framer-motion';

const images = [img1, img2, img3];


export const MainPageSeven = () => {
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[]);

  return (
    <main className="w-full mb-mB max-sm:mb-mB" >
      <div className='w-full flex'>
        <motion.div ref={carousel} className='cursor-pointer
        overflow-hidden'>
          <motion.div className='flex' drag="x"
          dragConstraints={{ right: 0, left: -width}}>
            {images.map((item, k) => (
              <motion.div className='min-w-full' key={k}>
                <img className='w-full pointer-events-none' src={item} alt='Texto alt'/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      <div className='flex flex-row items-center justify-center p-4 gap-4'>
        <div className='rounded-full border-2 w-3 h-3'></div>
        <div className='rounded-full border-2 w-3 h-3 bg-button'></div>
        <div className='rounded-full border-2 w-3 h-3'></div>
        <div className='rounded-full border-2 w-3 h-3'></div>
        <div className='rounded-full border-2 w-3 h-3'></div>
        <div className='rounded-full border-2 w-3 h-3'></div>
        <div className='rounded-full border-2 w-3 h-3'></div>
      </div>
    <section className="w-full flex flex-col items-center justify-start mt-16 p-16 gap-36">
      <h1 className="text-4xl font-bold text-white">Destaques</h1>
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
          <a href="#">
            <ArrowLeft className="max-sm:opacity-0"  size={35}/>
          </a>
          {products && products.map((p, k) => {
            return(
              <ProductsDiv
              name={p.name}
              imgUrl={p.imgUrl}
              description={p.description}
              valor={p.valor}
              key={k}
              />
            )
          })}
          <a href="#">
            <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
          </a>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-6 max-md:flex-col">
        <img src="../public/img/a.png" alt="" />
        <img src="../public/img/a (1).png" alt="" />
      </div>

      <h1 className="text-4xl font-bold text-white">Promoções</h1>
      {/* PROMOÇÕES */}
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
        <a href="#">
          <ArrowLeft className="max-sm:opacity-0"  size={35}/>
        </a>
        {products && products.map((p, k) => {
            return(
              <ProductsDiv
              name={p.name}
              imgUrl={p.imgUrl}
              description={p.description}
              valor={p.valor}
              key={k}
              />
            )
          })}
          <a href="#">
            <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
          </a>
        </div>
      </div>

        <div className=" flex flex-row items-center justify-center  max-sm:w-full bg-black">
          <img className="w-full rounded-md  h-72 max-sm:h-36" src="../public/img/Inserir um título (4) 1.png" alt="" />
        </div>
    </section>
  </main>
  );
}
