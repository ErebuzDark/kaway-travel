import React from "react";
import { motion, AnimatePresence } from "motion/react";

import { Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// icons
import { IoMdClose } from "react-icons/io";

const SlideModal = ({ isSlideModalOpen, handleOpenSlideModal, placeInfo }) => {
  return (
    <div
      onClick={handleOpenSlideModal}
      className="bg-slate-800/30 w-full fixed top-0"
    >
      <AnimatePresence>
        {isSlideModalOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col top-0 w-full  max-w-[600px] h-[100vh] overflow-auto scrollbar bg-white shadow-2xl"
          >
            <button
              onClick={handleOpenSlideModal}
              className="absolute hidden sm:block top-0 w-fit right-0 z-50 hover:bg-slate-900/30 duration-300 p-3 m-2 rounded-full"
            >
              <IoMdClose className="size-7 text-white" />
            </button>
            <button
              onClick={handleOpenSlideModal}
              className="absolute flex sm:hidden  top-0 w-fit right-0 z-50 hover:bg-slate-900/30 duration-300 p-2 m-2 rounded-full"
            >
              <p className="text-white text-lg">
                Close
              </p>
              <IoMdClose className="size-7 text-white" />
            </button>
            <div className="sticky flex -top-[150px] sm:-top-[260px] md:-top-[260px] lg:-top-[240px] h-fit z-10">
              <div className="absolute flex flex-col items-baseline sm:flex-row bottom-1 md:bottom-3 left-6 z-50 text-white">
                <h1 className="text-[1.9rem] sm:text-[2.3rem] md:text-5xl font-semibold mb-5 leading-none">
                  {placeInfo.placeName}
                </h1>
                <p className="text-xs md:text-lg -mt-5 sm:ml-2">
                  {placeInfo.placeLocation}
                </p>
              </div>
              <div className="relative w-full">
                <img
                  src={placeInfo.placeImageURL}
                  alt="Boracay"
                  className="w-full sm:h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div>
                <p className="slide-modal-subtitle">{placeInfo.placeTitle}</p>
                <p className="slide-modal-detail">{placeInfo.placeDetails}</p>
              </div>
              <div>
                <p className="slide-modal-subtitle">Interesting Spot</p>
                <p className="slide-modal-detail">
                  {placeInfo.placeInterestingSpot}
                </p>
                <Swiper
                  modules={[A11y]}
                  grabCursor={true}
                  spaceBetween={25}
                  slidesPerView={2.3}
                  breakpoints={{
                    300: {
                      spaceBetween: 8,
                      slidesPerView: 1.5,
                    },
                    520: {
                      spaceBetween: 8,
                      slidesPerView: 2.3,
                    },
                  }}
                  // scrollbar={{ draggable: true }}
                  className="my-4"
                >
                  {placeInfo.placeSpotDetails.map((placeDetail) => (
                    <SwiperSlide
                      key={placeDetail.id}
                      className="swiper-slide mb-7"
                    >
                      <img
                        className="w-72 h-32 md:h-36 lg:h-40 rounded-xl"
                        src={placeDetail.imageURL}
                        alt={placeDetail.spotName}
                      />
                      <div className="p-2">
                        <div className="flex justify-between flex-wrap items-center">
                          <p className="swiper-title">{placeDetail.spotName}</p>
                          <p className="swiper-rating">
                            Ratings {placeDetail.rating}
                          </p>
                        </div>

                        <p className="swiper-detail">
                          {placeDetail.spotDetails}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="max-w-4xl mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
                <h2 className="slide-modal-subtitle">Travel Information</h2>

                <div className="mb-6">
                  <h3 className="slide-modal-subtitle-info">
                    How to Get There
                  </h3>
                  {placeInfo?.howTogetThere &&
                  placeInfo.howTogetThere.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-600">
                      {placeInfo.howTogetThere.map((how, index) => (
                        <li key={index}>
                          <strong>{how.how}</strong> {how.howDescription}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No available guide</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="slide-modal-subtitle-info">
                    Transportation Options
                  </h3>
                  {placeInfo?.transportOptions &&
                  placeInfo.transportOptions.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-600">
                      {placeInfo?.transportOptions?.map((transport, index) => (
                        <li key={index}>{transport}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No available guide</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="slide-modal-subtitle-info">
                    Tour & Accommodation Services
                  </h3>
                  {placeInfo?.accomServices &&
                  placeInfo.accomServices.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-600">
                      {placeInfo.accomServices.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No available guide</p>
                  )}
                </div>

                <div>
                  <h3 className="slide-modal-subtitle-info">
                    Best Time to Visit
                  </h3>
                  {placeInfo?.bestTimeToVisit &&
                  placeInfo.bestTimeToVisit.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-600">
                      {placeInfo.bestTimeToVisit.map((time, index) => (
                        <li key={index}>
                          <strong>{time.when}</strong> {time.why}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No available guide</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="slide-button-book">Book Now</button>
                <button className="slide-button-reserve">Reserve</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideModal;
