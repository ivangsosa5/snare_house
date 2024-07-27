
//Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './styles.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { EffectCreative, Navigation, A11y } from 'swiper/modules';

import BrandCard from '../BrandCard/BrandCard';
import DW0 from '../../assets/img/slidersImg/DW0.png'
import Ludwig0 from '../../assets/img/slidersImg/Ludwig0.png'
import Tama0 from '../../assets/img/slidersImg/Tama0.jpg'
import Sonor0 from '../../assets/img/slidersImg/Sonor0.jpg'

export default function Slider() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation, A11y]}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
            <BrandCard imgSrc={Ludwig0} title='AN INDUSTRY STANDARD SINCE 1911' description='Often imitated, never duplicated. Ludwig Snare Drums are in a league of their own.' brand={'LUDWIG'}>
            </BrandCard>
        </SwiperSlide>
        <SwiperSlide>
            <BrandCard imgSrc={DW0} title="WE'VE GOT YOUR BACKBEAT" description='DW snares are offered with shells crafted from tone woods, alloys, and countless combinations of the two.' brand={'DW'}>
            </BrandCard>
        </SwiperSlide>
        <SwiperSlide>
            <BrandCard imgSrc={Tama0} title='THE POWER OF AN ORIENTAL BRAND' description='Crafted in Japan and using uniquely designed lugs & hoops' brand={'TAMA'}>
            </BrandCard>
        </SwiperSlide>
        {/* <SwiperSlide>
            <BrandCard imgSrc={Pearl0} title='THE BEST REASON TO PLAY DRUMS' description="Covering the complete sonic spectrum for the drummer's primary sound." brand={'PEARL'}>
            </BrandCard>
        </SwiperSlide> */}
        <SwiperSlide>
            <BrandCard imgSrc={Sonor0} title='PASSION FOR EXPRESSION' description='Every SONOR instrument is a masterpiece made to express what no other voice can say. So you instantly know: this is the drum I was born to play' brand={'SONOR'}>
            </BrandCard>
        </SwiperSlide>

      </Swiper>
    </>
      
  );
}

