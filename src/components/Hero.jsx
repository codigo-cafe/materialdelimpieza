import React, { useContext } from "react";
// import category context
import { CategoryContext } from "../contexts/CategoryContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// import framer motion
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  // get category from category context
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(CategoryContext);

  return (
    <section className="pt-20">
      <div className="container mx-auto flex h-full !p-5">
        {/* image */}
        <Swiper
          slidesPerView={7}
          spaceBetween={12}
          navigation={true}
          grabCursor={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            425: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide
              onClick={() => {
                setSelectedCategory((prevCategory) =>
                  prevCategory === category.name ? null : category.name
                );
              }}
              key={category.id}
              className="m-1"
            >
              <motion.div
                initial={false}
                animate={{
                  background:
                    selectedCategory === category.name
                      ? "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
                      : "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-pointer relative rounded-xl p-[3px] transition-all shadow-sm"
              >
                <div className="relative z-10 flex flex-col items-center justify-between overflow-hidden rounded-lg bg-white text-center md:py-2">
                  <div className="relative flex items-center justify-center w-auto my-3.5 mb-3 overflow-hidden h-28">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="rounded-sm h-full bg-cover p-4"
                    />
                  </div>
                  <span className="block px-4 pb-4 text-sm font-semibold text-heading">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
