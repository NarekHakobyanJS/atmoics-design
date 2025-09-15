// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '../../atoms/Button/Button';

type SilderPropsType = {
    products : any[]
}

export const Slider = ({products} : SilderPropsType) => {
    return (
      <Swiper
        className='a'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
            delay : 2000
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      
            {
                products?.map((product : any) => (
                    <SwiperSlide key={product.id}>
                    <img src={product.image} />
                    <Button style={'a'}>
                        View Product
                    </Button>
                    </SwiperSlide>
                ))
            }
   

      </Swiper>
    );
  };
  