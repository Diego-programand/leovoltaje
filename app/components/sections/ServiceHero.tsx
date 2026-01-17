interface ServiceHeroProps {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  icon?: string;
}

export default function ServiceHero({ title, description, videoSrc, imageSrc, icon }: ServiceHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background - Video o Imagen */}
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-[6px]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-5/90 via-primary-4/30 to-primary-3/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {icon && (
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-bounce-slow">
            {icon}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}