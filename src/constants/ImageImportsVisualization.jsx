// Імпорт зображень мобільна версія.
import imgM1 from '../assets/images/visualization/event-space-mob.jpg';
import imgM2 from '../assets/images/visualization/cafe-mobile.jpg';
import imgM3 from '../assets/images/visualization/city​-shop-mobile.jpg';
// Імпорт зображень мобільна версія Retina.
import imgM1_P from '../assets/images/visualization/event-space-mob-2x.jpg';
import imgM2_P from '../assets/images/visualization/cafe-mobile-2x.jpg';
import imgM3_P from '../assets/images/visualization/city​-shop-mobile-2x.jpg';
// Імпорт зображень планшетна версія.
import imgT1 from '../assets/images/visualization/event-space-tablet.jpg';
import imgT2 from '../assets/images/visualization/cafe-tablet.jpg';
import imgT3 from '../assets/images/visualization/city​-shop-tablet.jpg';
// Імпорт зображень планшетна версія Retina.
import imgT1_P from '../assets/images/visualization/event-space-tablet-2x.jpg';
import imgT2_P from '../assets/images/visualization/cafe-tablet-2x.jpg';
import imgT3_P from '../assets/images/visualization/city-shop-tablet-2x.jpg';
// Імпорт зображень декстопна версія.
import imgD1 from '../assets/images/visualization/event-space-desktop.jpg';
import imgD2 from '../assets/images/visualization/cafe-desktop.jpg';
import imgD3 from '../assets/images/visualization/city​-shop-desktop.jpg';
// Імпорт зображень декстопна версія Retina.
import imgD1_P from '../assets/images/visualization/event-space-desktop-2x.jpg';
import imgD2_P from '../assets/images/visualization/cafe-desktop-2x.jpg';
import imgD3_P from '../assets/images/visualization/city​-shop-desktop-2x.jpg';
// Імпорт зображень для віртуального туру.
import visualIn from '../assets/images/visualization/event-space-Viz.jpg';
import visualK from '../assets/images/visualization/cafe-Viz.jpg';
import visualM from '../assets/images/visualization/city​-shop-Viz.jpg';

export const images = [
  {
    src: { mobile: imgM1, tablet: imgT1, desktop: imgD1 },
    srcSet: { mobile: imgM1_P, tablet: imgT1_P, desktop: imgD1_P },
    title: 'Івент-простір',
    tourImage: visualIn,
  },
  {
    src: { mobile: imgM2, tablet: imgT2, desktop: imgD2 },
    srcSet: { mobile: imgM2_P, tablet: imgT2_P, desktop: imgD2_P },
    title: 'Кафе',
    tourImage: visualK,
  },
  {
    src: { mobile: imgM3, tablet: imgT3, desktop: imgD3 },
    srcSet: { mobile: imgM3_P, tablet: imgT3_P, desktop: imgD3_P },
    title: 'Містошоп',
    tourImage: visualM,
  },
];

export default images;
