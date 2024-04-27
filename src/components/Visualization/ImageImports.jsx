// Імпорт зображень мобільна версія.
import imgM1 from './imgVisualization/інвент-простір-моб.jpg';
import imgM2 from './imgVisualization/кафе-моб.jpg';
import imgM3 from './imgVisualization/містошоп-моб.jpg';
// Імпорт зображень мобільна версія Retina.
import imgM1_P from './imgVisualization/інвент-простір-моб-2x.jpg';
import imgM2_P from './imgVisualization/кафе-моб-2x.jpg';
import imgM3_P from './imgVisualization/містошоп-моб-2x.jpg';
// Імпорт зображень планшетна версія.
import imgT1 from './imgVisualization/інвент-простір-планшет.jpg';
import imgT2 from './imgVisualization/кафе-планшет.jpg';
import imgT3 from './imgVisualization/містошоп-планшет.jpg';
// Імпорт зображень планшетна версія Retina.
import imgT1_P from './imgVisualization/інвент-простір-планшет-2x.jpg';
import imgT2_P from './imgVisualization/кафе-планшет-2x.jpg';
import imgT3_P from './imgVisualization/містошоп-планшет-2x.jpg';
// Імпорт зображень декстопна версія.
import imgD1 from './imgVisualization/інвент-простір-пк.jpg';
import imgD2 from './imgVisualization/кафе-пк.jpg';
import imgD3 from './imgVisualization/містошоп-пк.jpg';
// Імпорт зображень декстопна версія Retina.
import imgD1_P from './imgVisualization/інвент-простір-пк-2x.jpg';
import imgD2_P from './imgVisualization/кафе-пк-2x.jpg';
import imgD3_P from './imgVisualization/містошоп-пк-2x.jpg';
// Імпорт зображень для віртуального туру.
import visualIn from './imgVisualization/Івент-простір-Віз.jpg';
import visualK from './imgVisualization/Кафе-Віз.jpg';
import visualM from './imgVisualization/Містошоп-Віз.jpg';

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
