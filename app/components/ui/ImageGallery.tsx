'use client';

interface ImageGalleryProps {
  basePath: string;
  count: number;
  altPrefix: string;
}

export default function ImageGallery({ basePath, count, altPrefix }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {Array.from({ length: count }, (_, i) => i + 1).map((num) => (
        <div 
          key={num}
          className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <img
            src={`${basePath}/${num}.jpg`}
            alt={`${altPrefix} ${num}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/600x400/1c0e91/white?text=Proyecto+${num}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-5/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
}