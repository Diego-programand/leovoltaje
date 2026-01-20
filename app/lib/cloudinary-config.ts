// Configuración de Cloudinary
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dw7zhnbho/image/upload';
const CLOUDINARY_VIDEO_BASE = 'https://res.cloudinary.com/dw7zhnbho/video/upload/ac_none';

// Tipo para las imágenes/videos
export interface CloudinaryAsset {
  code: string;
  ext: 'jpg' | 'png' | 'webp' | 'mp4';
  isVideo?: boolean;
}

// Imágenes del carousel (orden según SERVICES en constants.ts)
export const CAROUSEL_IMAGES: CloudinaryAsset[] = [
  { code: 'aei7je', ext: 'jpg' }, // service-1: instalaciones-electricas
  { code: 'zegcwf', ext: 'jpg' }, // service-2: domotica
  { code: 'ba07nn', ext: 'jpg' }, // service-3: planos-electricos
  { code: 'eajyac', ext: 'jpg' }, // service-4: energia-solar
  { code: 'c2k7xn', ext: 'jpg' }, // service-5: mantenimiento
  { code: 'nhykdb', ext: 'jpg' }, // service-6: retie
  { code: 'lvnssy', ext: 'jpg' }, // service-7: cctv
  { code: 'jowrsb', ext: 'jpg' }, // service-8: voz-datos
];

// Videos de hero para cada servicio
export const HERO_VIDEOS: Record<string, CloudinaryAsset> = {
  'home': { code: 'inlstq', ext: 'mp4', isVideo: true },
  'retie': { code: 'sobjbn', ext: 'mp4', isVideo: true },
  'energia-solar': { code: 'koyhpo', ext: 'mp4', isVideo: true },
  'cctv': { code: 'nckcu9', ext: 'mp4', isVideo: true },
  'voz-datos': { code: 'bbuhen', ext: 'mp4', isVideo: true },
  'instalaciones-electricas': { code: 'lwchsx', ext: 'mp4', isVideo: true },
  'domotica': { code: 'pnpd45', ext: 'mp4', isVideo: true },
  'mantenimiento': { code: 'akgadz', ext: 'mp4', isVideo: true },
};

// Galerías de imágenes por servicio
export const GALLERY_IMAGES: Record<string, CloudinaryAsset[]> = {
  'cctv': [
    { code: 'w05nom', ext: 'jpg' },
    { code: 'caas8p', ext: 'jpg' },
    { code: 'zcm4dj', ext: 'jpg' },
    { code: 'mkt8ku', ext: 'jpg' },
    { code: 'z8uvjy', ext: 'jpg' },
    { code: 'zpkcs4', ext: 'jpg' },
  ],
  'domotica': [
    { code: 'ug8rvs', ext: 'jpg' },
    { code: 't6yk32', ext: 'jpg' },
    { code: 'ata086', ext: 'jpg' },
    { code: 'hxub9o', ext: 'jpg' },
    { code: 'dwdnjm', ext: 'jpg' },
    { code: 'qdfbav', ext: 'jpg' },
  ],
  'energia-solar': [
    { code: 'm9gpo7', ext: 'jpg' },
    { code: 'zdmdsj', ext: 'jpg' },
    { code: 'c3jzht', ext: 'jpg' },
    { code: 'ljklu2', ext: 'jpg' },
  ],
  'mantenimiento': [
    { code: 'pupdad', ext: 'jpg' },
    { code: 'rubpxv', ext: 'jpg' },
    { code: 'wbnq1j', ext: 'jpg' },
    { code: 'fmpeqc', ext: 'jpg' },
    { code: 'twxsyt', ext: 'jpg' },
    { code: 'cf7aq6', ext: 'jpg' },
    { code: 'u803wu', ext: 'jpg' },
  ],
  'planos-electricos': [
    { code: 'irxw7m', ext: 'jpg' },
    { code: 'h7r5wv', ext: 'jpg' },
    { code: 'hflx9q', ext: 'jpg' },
  ],
  'voz-datos': [
    { code: 'vsjuq5', ext: 'jpg' },
    { code: 'mlq3n3', ext: 'jpg' },
    { code: 'os6hbu', ext: 'jpg' },
    { code: 'alwd4n', ext: 'jpg' },
  ],
  'instalaciones-electricas': [
    { code: 'jcc1yj', ext: 'jpg' },                  // in-el1
    { code: 'mfghsf', ext: 'jpg' },                  // in-el2
    { code: 'qc1jyj', ext: 'jpg' },                  // in-el3
    { code: 'olk7dq', ext: 'jpg' },                  // in-el4
    { code: 't2lihx', ext: 'jpg' },                  // in-el5
    { code: 'r0v4na', ext: 'jpg' },                  // in-el6
    { code: 'tp6out', ext: 'mp4', isVideo: true },                  // in-el7
    { code: 'uyatkq', ext: 'mp4', isVideo: true },   // in-el8 (video)
    { code: 'zda9ki', ext: 'jpg' },
    { code: 'fguzbd', ext: 'jpg' },                  // in-el10
    { code: 'qocu0m', ext: 'jpg' },                  // in-el11
    { code: 'qgccar', ext: 'jpg' },                  // in-el12
    { code: 'djqbu3', ext: 'jpg' },                  // in-el13
    { code: 'lk82pn', ext: 'jpg' },                  // in-el14
    { code: 'ob2vae', ext: 'jpg' },                  // in-el15
    { code: 'b2puzm', ext: 'jpg' },                  // in-el16
    { code: 'dmiycu', ext: 'jpg' },                  // in-el17
  ],
};

// Mapeo de slugs a prefijos de carpeta en Cloudinary
export const SERVICE_FOLDER_MAP: Record<string, string> = {
  'cctv': 'cctv',
  'domotica': 'domotica',
  'energia-solar': 'energia-solar',
  'instalaciones-electricas': 'instalaciones-electricas',
  'mantenimiento': 'mantenimiento',
  'planos-electricos': 'planos-electricos',
  'voz-datos': 'voz-datos',
  'retie': 'retie', // Por si acaso
};

// Mapeo de slugs a prefijos de archivo
export const FILE_PREFIX_MAP: Record<string, string> = {
  'cctv': 'cctv',
  'domotica': 'domo',
  'energia-solar': 'solar',
  'instalaciones-electricas': 'in-el',
  'mantenimiento': 'mant',
  'planos-electricos': 'planos',
  'voz-datos': 'datos',
};

/**
 * Construye la URL completa de Cloudinary para una imagen
 */
export function getCloudinaryImageUrl(
  folder: string,
  filename: string,
  code: string,
  ext: string = 'jpg'
): string {
  return `${CLOUDINARY_BASE}/${folder}/${filename}_${code}.${ext}`;
}

/**
 * Construye la URL completa de Cloudinary para un video
 */
export function getCloudinaryVideoUrl(
  folder: string,
  filename: string,
  code: string
): string {
  return `${CLOUDINARY_VIDEO_BASE}/${folder}/${filename}_${code}.mp4`;
}

/**
 * Obtiene la URL de una imagen del carousel por índice
 */
export function getCarouselImageUrl(index: number): string {
  const asset = CAROUSEL_IMAGES[index];
  if (!asset) return '';
  return `${CLOUDINARY_BASE}/service-${index + 1}_${asset.code}.${asset.ext}`;
}

/**
 * Obtiene la URL del video hero por slug de servicio
 */
export function getHeroVideoUrl(serviceSlug: string): string {
  const asset = HERO_VIDEOS[serviceSlug];
  if (!asset) return '';

  const folderName = serviceSlug === 'home' ? '' : serviceSlug;
  const fileName = serviceSlug === 'home' ? 'hero-background' : `${serviceSlug}-hero-background`;

  return `${CLOUDINARY_VIDEO_BASE}/${fileName}_${asset.code}.${asset.ext}`;
}

/**
 * Obtiene todas las URLs de la galería de un servicio
 */
export function getGalleryUrls(serviceSlug: string): Array<{ url: string, isVideo: boolean }> {
  const assets = GALLERY_IMAGES[serviceSlug];
  if (!assets) return [];

  const prefix = FILE_PREFIX_MAP[serviceSlug];

  return assets.map((asset, index) => {
    const fileName = `${prefix}${index + 1}`;
    const isVideo = asset.isVideo || asset.ext === 'mp4';

    if (isVideo) {
      return {
        url: `${CLOUDINARY_VIDEO_BASE}/${fileName}_${asset.code}.${asset.ext}`,
        isVideo: true
      };
    }

    return {
      url: `${CLOUDINARY_BASE}/${fileName}_${asset.code}.${asset.ext}`,
      isVideo: false
    };
  });
}