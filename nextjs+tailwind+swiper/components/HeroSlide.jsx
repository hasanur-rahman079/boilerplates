import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay } from "swiper";
import Link from "next/link";
import BodyText from "./BodyText";

const HeroSlide = ({ info }) => {
  // console.log(info);
  return (
    <div className="w-full max-h-[60vh]">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{
          delay: 5000,
        }}
        className="mySwiper"
        effect="fade"
      >
        {info.blogs.length ? (
          info.blogs.map((obj) => {
            return (
              <div key={obj.id}>
                <SwiperSlide className="relative">
                  <>
                    <div className="absolute top-4 tablet:top-24 left-12 tablet:left-4 bg-neutral-700 z-10 px-4 py-2 font-light tablet:text-sm tracking-wider">
                      <span>Featured Article</span>
                    </div>

                    <Link
                      href={`/blog/${obj.slug}`}
                      className="absolute bottom-8 w-3/6 tablet:w-[93%] left-[22%] tablet:left-4 rounded p-4 bg-neutral-700 z-10"
                    >
                      <h1 className="text-2xl tablet:text-xl font-bold tracking-wide">
                        {obj.title}
                      </h1>
                      <div className="mt-4 pText tablet:max-h-[6.3rem] overflow-y-clip">
                        <BodyText text={obj.excerpt} />
                      </div>
                    </Link>

                    <div className="h-[60vh] overflow-hidden object-cover object-center">
                      <Image
                        className="rounded object-cover"
                        src={obj.image}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        alt={obj.title}
                      />
                    </div>
                  </>
                </SwiperSlide>
              </div>
            );
          })
        ) : (
          <div className="h-60 flex items-center justify-center">
            <h3 className="text-gray-100">No Featured Items added yet</h3>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
