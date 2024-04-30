export const heroData = [
  {
    imgPng1: '/src/assets/hero/hero1.png',
    imgPng2: '/src/assets/hero/hero1@2x.png 2x',
    imgWebP1: '/src/assets/hero/hero1.webp',
    imgWebP2: '/src/assets/hero/hero1@2x.webp 2x',
    alt: 'Kitchen 1',
  },
  {
    imgPng1: '/src/assets/hero/hero2.png',
    imgPng2: '/src/assets/hero/hero2@2x.png 2x',
    imgWebP1: '/src/assets/hero/hero2.webp',
    imgWebP2: '/src/assets/hero/hero2@2x.webp 2x',
    alt: 'Kitchen 2',
  },
  {
    imgPng1: '/src/assets/hero/hero3.png',
    imgPng2: '/src/assets/hero/hero3@2x.png 2x',
    imgWebP1: '/src/assets/hero/hero3.webp',
    imgWebP2: '/src/assets/hero/hero3@2x.webp 2x',
    alt: 'Kitchen 3',
  },
  {
    imgPng1: '/src/assets/hero/hero4.png',
    imgPng2: '/src/assets/hero/hero4@2x.png 2x',
    imgWebP1: '/src/assets/hero/hero4.webp',
    imgWebP2: '/src/assets/hero/hero4@2x.webp 2x',
    alt: 'Kitchen 4',
  },
  {
    imgPng1: '/src/assets/hero/hero5.png',
    imgPng2: '/src/assets/hero/hero5@2x.png 2x',
    imgWebP1: '/src/assets/hero/hero5.webp',
    imgWebP2: '/src/assets/hero/hero5@2x.webp 2x',
    alt: 'Kitchen 5',
  },
];

function fillSlidesWithData() {
  const swiperContainer = document.querySelector('.swiper-container');
  const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');

  heroData.forEach((data) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const picture = document.createElement('picture');
    picture.classList.add('hero-img');

    const source1 = document.createElement('source');
    source1.srcset = `${data.imgPng1} 1x, ${data.imgPng2} 2x`;
    source1.type = 'image/png';

    const source2 = document.createElement('source');
    source2.srcset = `${data.imgWebP1} 1x, ${data.imgWebP2} 2x`;
    source2.type = 'image/webp';

    const img = document.createElement('img');
    img.src = data.imgPng1;
    img.alt = data.alt;

    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(img);

    swiperSlide.appendChild(picture);
    swiperWrapper.appendChild(swiperSlide);
  });
}

window.addEventListener('DOMContentLoaded', fillSlidesWithData);
