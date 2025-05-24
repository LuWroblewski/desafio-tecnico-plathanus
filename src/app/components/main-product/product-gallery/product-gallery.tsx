'use client';

import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { LuDownload } from 'react-icons/lu';
import InnerImageZoom from 'react-inner-image-zoom';
import 'keen-slider/keen-slider.min.css';
import 'react-inner-image-zoom/lib/styles.min.css';

const images = [1, 2, 3, 4, 5, 6];

export default function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // URLs das imagens para pré-carregar
  const imageUrls = images.map((num) => `/images/product/ortese_product${num}.jpg`);

  // Pré-carregamento das imagens
  useEffect(() => {
    let loadedCount = 0;
    imageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true); // Todas carregadas!
        }
      };
      img.onerror = () => {
        // mesmo que erro, contar pra evitar travar loading
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 10,
    },
  });

  if (!isLoaded) {
    return <p>Carregando imagens...</p>; // pode personalizar um spinner ou algo do tipo
  }

  return (
    <>
      <div className='w-full '>
        <InnerImageZoom
          src={`/images/product/ortese_product${images[currentImage]}.jpg`}
          zoomSrc={`/images/product/ortese_product${images[currentImage]}.jpg`}
          zoomType='hover'
          zoomPreload
        />
      </div>

      <div ref={thumbnailRef} className='keen-slider thumbnail mt-4'>
        {images.map((num, idx) => (
          <div
            key={num}
            className={`keen-slider__slide cursor-pointer border-2 rounded ${
              currentImage === idx ? 'border-[#E57200]' : 'border-transparent'
            }`}
            onClick={() => setCurrentImage(idx)}
          >
            <Image
              src={`/images/product/ortese_product${num}.jpg`}
              alt={`Thumbnail ${num}`}
              width={100}
              height={75}
              priority
            />
          </div>
        ))}
      </div>

      <div className='flex space-x-2 text-[#E57200] items-center mt-5'>
        <p>Baixar Folder do Produto</p>
        <LuDownload />
      </div>
    </>
  );
}
