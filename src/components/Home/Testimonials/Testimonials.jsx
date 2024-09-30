"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center">
            <blockquote className="flex h-full flex-col justify-between p-6 sm:p-8 lg:py-12 lg:px-24">
              <div>
                <div className="">
                  <Image 
                    src="/Avatar.png"
                    width={90}
                    height={90}
                    alt="profile"
                    className="mx-auto w-24 h-24 rounded-full p-1 bg-[#0098A8] hover:shadow-2xl"
                  />
                </div>

                <div className="mt-4">
                  <p className="mt-4 max-w-[85%] sm:max-w-[80%] mx-auto leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                <p className="text-2xl font-bold text-[#0098A8] sm:text-3xl">
                  Umme Rufaida
                </p>
                &mdash; Markazul Quran Madrasha
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <blockquote className="flex h-full flex-col justify-between p-6 sm:p-8 lg:py-12 lg:px-24">
              <div>
                <div className="">
                  <Image 
                    src="/Avatar.png"
                    width={90}
                    height={90}
                    alt="profile"
                    className="mx-auto w-24 h-24 rounded-full p-1 bg-[#0098A8] hover:shadow-2xl"
                  />
                </div>

                <div className="mt-4">
                  <p className="mt-4 max-w-[85%] sm:max-w-[80%] mx-auto leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                <p className="text-2xl font-bold text-[#0098A8] sm:text-3xl">
                  Umme Rufaida
                </p>
                &mdash; Markazul Quran Madrasha
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <blockquote className="flex h-full flex-col justify-between p-6 sm:p-8 lg:py-12 lg:px-24">
              <div>
                <div className="">
                  <Image 
                    src="/Avatar.png"
                    width={90}
                    height={90}
                    alt="profile"
                    className="mx-auto w-24 h-24 rounded-full p-1 bg-[#0098A8] hover:shadow-2xl"
                  />
                </div>

                <div className="mt-4">
                  <p className="mt-4 max-w-[85%] sm:max-w-[80%] mx-auto leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                <p className="text-2xl font-bold text-[#0098A8] sm:text-3xl">
                  Umme Rufaida
                </p>
                &mdash; Markazul Quran Madrasha
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <blockquote className="flex h-full flex-col justify-between p-6 sm:p-8 lg:py-12 lg:px-24">
              <div>
                <div className="">
                  <Image 
                    src="/Avatar.png"
                    width={90}
                    height={90}
                    alt="profile"
                    className="mx-auto w-24 h-24 rounded-full p-1 bg-[#0098A8] hover:shadow-2xl"
                  />
                </div>

                <div className="mt-4">
                  <p className="mt-4 max-w-[85%] sm:max-w-[80%] mx-auto leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                <p className="text-2xl font-bold text-[#0098A8] sm:text-3xl">
                  Umme Rufaida
                </p>
                &mdash; Markazul Quran Madrasha
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <blockquote className="flex h-full flex-col justify-between p-6 sm:p-8 lg:py-12 lg:px-24">
              <div>
                <div className="">
                  <Image 
                    src="/Avatar.png"
                    width={90}
                    height={90}
                    alt="profile"
                    className="mx-auto w-24 h-24 rounded-full p-1 bg-[#0098A8] hover:shadow-2xl"
                  />
                </div>

                <div className="mt-4">
                  <p className="mt-4 max-w-[85%] sm:max-w-[80%] mx-auto leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                <p className="text-2xl font-bold text-[#0098A8] sm:text-3xl">
                  Umme Rufaida
                </p>
                &mdash; Markazul Quran Madrasha
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
