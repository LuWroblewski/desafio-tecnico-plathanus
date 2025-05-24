'use client';

import React, { useState, useEffect } from 'react';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { LuDownload } from 'react-icons/lu';

function ThumbnailPlugin(mainRef: React.RefObject<KeenSliderInstance | null>): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ProductGallery() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );

  return (
    <>
      <div ref={sliderRef} className='keen-slider'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className='keen-slider__slide number-slide'>
            <Image
              src={`/images/product/ortese_product${num}.jpg`}
              alt={`Slide ${num}`}
              width={600}
              height={400}
              priority
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className='keen-slider thumbnail'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className='keen-slider__slide number-slide'>
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
