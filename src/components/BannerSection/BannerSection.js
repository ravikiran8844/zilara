import Link from 'next/link'
import React from 'react'

const BannerSection = () => {
  return (

<section
  class="relative bg-[url(https://res.cloudinary.com/dsx4e64gf/image/upload/v1688961990/banner-bg_juemoe.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
  >
    <div class="max-w-xl ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-3xl font-bold sm:text-5xl">
      Engagement Ring
      </h2>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
      Crafted with exquisite detail, our lab grown diamond engagement rings are a unique expression of your commitment and a timeless reminder of your love story.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="#"
          class="block w-fit flex items-center rounded dark-bg-color px-12 py-3 text-sm font-medium text-white shadow dark-bg-color focus:outline-none focus:ring active:dark-bg-color sm:w-auto"
        >
          GET HELP <span className='ms-3'><svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7341 6.3266L24.0353 0.271812C23.9526 0.185673 23.8539 0.11755 23.7451 0.0708481C23.6362 0.0241462 23.5194 0 23.4014 0C23.2834 0 23.1666 0.0241462 23.0578 0.0708481C22.9489 0.11755 22.8503 0.185673 22.7675 0.271812C22.6031 0.454241 22.5117 0.693291 22.5117 0.941463C22.5117 1.18963 22.6031 1.42868 22.7675 1.61111L26.9528 6.04798H0.92713C0.681259 6.04798 0.445455 6.148 0.271599 6.32592C0.0977418 6.50384 0 6.74532 0 6.99693C0 7.24855 0.0977418 7.48935 0.271599 7.66727C0.445455 7.84518 0.681259 7.94521 0.92713 7.94521H26.9528L22.7675 12.3821C22.6031 12.5645 22.5117 12.8036 22.5117 13.0517C22.5117 13.2999 22.6031 13.5389 22.7675 13.7214C22.8492 13.8094 22.9474 13.8792 23.0564 13.9271C23.1654 13.975 23.2828 14 23.4014 14C23.52 14 23.6374 13.975 23.7464 13.9271C23.8554 13.8792 23.9537 13.8094 24.0353 13.7214L29.7341 7.66659C29.9046 7.48736 30 7.2471 30 6.99693C30 6.74677 29.9046 6.50583 29.7341 6.3266Z" fill="white"/>
                </svg>
                </span>
        </Link>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default BannerSection
