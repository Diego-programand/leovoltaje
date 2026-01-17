'use client';

interface CertificationLogoProps {
  name: string;
  altText: string;
}

export default function CertificationLogo({ name, altText }: CertificationLogoProps) {
  return (
    <div className="w-32 h-22 bg-white/100 backdrop-blur-sm rounded-2xl flex items-center justify-center">
      <img
        src={`/images/logo-${name.toLowerCase()}.webp`}
        alt={altText}
        className="w-full h-full object-contain p-4 scale-110"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.innerHTML = '<div class="text-white text-sm font-bold text-center">Logo<br/>Oficial</div>';
          }
        }}
      />
    </div>
  );
}