"use client";
import Image from "next/image";

type Props = { title: string; image: string; category: string };

export default function ProductGallery({ images }: { images?: Props[] | null }) {
  const items = images && images.length ? images : null;
  return (
    <>
        <div className="mx-auto grid grid-cols-3 gap-20">
          {items && items.map((images, index) => (
              <div key={index} className="w-70 h-70 relative">
                <Image
                  src={`/uploads/${images.category}/${images.image}`}
                  alt={`thumb-${images.category}-${index + 1}-${images.image}`}
                  fill
                  className="object-fill rounded-sm"
                  priority={index === 0}
                />
              </div>
          ))}
        </div>
    </>
  );
}
