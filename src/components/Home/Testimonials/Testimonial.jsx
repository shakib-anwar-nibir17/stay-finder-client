import SvgFile1 from "./SvgFile/SvgFile1";
import SvgFile2 from "./SvgFile/SvgFile2";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/swiper.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="container mx-auto pt-16">
        <h1 className="text-custom-color-2 font-extrabold xl:text-6xl text-3xl mb-4 text-center md:text-center lg:text-center">
          Hear From Our Customers
        </h1>
        <p className="text-center md:text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto text-custom-color-2 mb-12">
          You made it so simple. My new site is so much faster and easier to
          work with than my old site. I just choose the page, make the change
          and click save.
        </p>
      </div>
      <div className="w-full bg-custom-color-2 py-16">
        <div className="container relative mx-auto">
          <div className="absolute -mt-16 top-0">
            <SvgFile1 />
          </div>
          <div className="absolute -mb-16 bottom-0 right-0">
            <SvgFile2 />
          </div>

          <section className="px-8" id="carousel">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <figure>
                  <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                    <div className="flex items-center justify-between pb-8">
                      <div className="xl:flex md:flex lg:flex sm:flex items-center">
                        <div className="h-20 w-20">
                          <img
                            src="https://cdn.tuk.dev/assets/photo-1544817747-b11e3e3b6ac2.jfif"
                            alt=""
                            className="rounded-full object-cover h-full w-full shadow"
                          />
                        </div>
                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                          <p className="text-xl text-custom-color-2 font-bold">
                            Jane Doe
                          </p>
                          <p className="sm:text-xl text-sm text-custom-color-2">
                            VP Operations, AlphaSquad
                          </p>
                        </div>
                      </div>
                      <svg
                        width="85"
                        height="65"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          transform="rotate(-180 475.5 56.5)"
                          fill="#00B98E"
                          fillRule="evenodd"
                          fontFamily="ProximaNova-Extrabld, Proxima Nova"
                          fontSize="200"
                          fontWeight="600"
                          letterSpacing="1.667"
                        >
                          <tspan x="860" y="184">
                            “
                          </tspan>
                        </text>
                      </svg>
                    </div>
                    <p className="text-base text-custom-color-2 pb-6 w-full sm:w-10/12">
                      I just wanted to share a quick note and let you know that
                      you guys do a really good job. I’m glad I decided to work
                      with you. It’s really great how easy your websites are to
                      update and manage. I never have any problem at all.
                    </p>
                    <p className="text-base text-custom-color-2 w-full sm:w-10/12">
                      My new site is so much faster and easier to work with than
                      my old site. It used to take me an hour or more to update
                      a page and I would still sometimes screw things up.
                    </p>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure>
                  <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                    <div className="flex items-center justify-between pb-8">
                      <div className="xl:flex md:flex lg:flex sm:flex items-center">
                        <div className="h-20 w-20">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_15.png"
                            alt=""
                            className="rounded-full object-cover h-full w-full shadow"
                          />
                        </div>
                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                          <p className="text-xl text-custom-color-2 font-bold">
                            Richard Stark
                          </p>
                          <p className="sm:text-xl text-sm text-custom-color-2">
                            UX Strategy
                          </p>
                        </div>
                      </div>
                      <svg
                        width="85"
                        height="65"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          transform="rotate(-180 475.5 56.5)"
                          fill="#00B98E"
                          fillRule="evenodd"
                          fontFamily="ProximaNova-Extrabld, Proxima Nova"
                          fontSize="200"
                          fontWeight="600"
                          letterSpacing="1.667"
                        >
                          <tspan x="860" y="184">
                            “
                          </tspan>
                        </text>
                      </svg>
                    </div>
                    <p className="text-base text-custom-color-2 pb-6 w-full sm:w-10/12">
                      The company really helped me with my personal branding.
                      Everything from conception to execution was extremely
                      awesome and really professional. I enjoyed the services
                      they offered. Their design is impeccable.
                    </p>
                    <p className="text-base text-custom-color-2 w-full sm:w-10/12">
                      I truly value the relationship they created with me. I
                      will always think first about them while starting any
                      projects in the future. They are definitely my go-to for
                      any design or services. Excellent communication and I
                      always feel that I am their first priority.
                    </p>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure>
                  <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                    <div className="flex items-center justify-between pb-8">
                      <div className="xl:flex md:flex lg:flex sm:flex items-center">
                        <div className="h-20 w-20">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_18.png"
                            alt=""
                            className="rounded-full object-cover h-full w-full shadow"
                          />
                        </div>
                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                          <p className="text-xl text-custom-color-2 font-bold">
                            Thomas Clark
                          </p>
                          <p className="sm:text-xl text-sm text-custom-color-2">
                            Maintenance
                          </p>
                        </div>
                      </div>
                      <svg
                        width="85"
                        height="65"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          transform="rotate(-180 475.5 56.5)"
                          fill="#00B98E"
                          fillRule="evenodd"
                          fontFamily="ProximaNova-Extrabld, Proxima Nova"
                          fontSize="200"
                          fontWeight="600"
                          letterSpacing="1.667"
                        >
                          <tspan x="860" y="184">
                            “
                          </tspan>
                        </text>
                      </svg>
                    </div>
                    <p className="text-base text-custom-color-2 pb-6 w-full sm:w-10/12">
                      It is not just a pretty face but I am also thrilled by the
                      quality of support. It is fast reliable and has no
                      complications at all. It has completely changed the way I
                      develop a website . It lets you create anything you
                      envision and it does so easily and flawlessly.
                    </p>
                    <p className="text-base text-custom-color-2 w-full sm:w-10/12">
                      Undoubtedly working with them was just like playing. It
                      was so easy editing your content, so fast getting perfect
                      results and so easy customizing based on your own brand.
                    </p>
                  </div>
                </figure>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
