// components/image-carousel.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface Item {
  title: string;
  imageUrl: string;
}

interface CarouselProps {
  items: Item[];
}

export function ImageCarousel({ items }: CarouselProps) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      className="w-full max-w-7xl  mx-auto "
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative aspect-video  overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJp08sG7wAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
                {item.title}
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
