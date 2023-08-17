'use client';
import Link from 'next/link'

import Image from 'next/image';

export default function SlidingInterval() {
  return (
<section
  class="relative bg-[url(/slider-1.webp)] bg-cover bg-left bg-no-repeat"
>
  <div
    class="absolute"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
  >
    <div class="max-w-md ltr:sm:text-left rtl:sm:text-right">
      <h2 class="slider-main-heading text-5xl font-bold md:text-7xl">
      Trendy <br/>
      <span className='me-2 inline-flex gap-2'><svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7833 16.9446C25.0874 14.9693 23.0564 5.57264 20.6905 0.0373383C17.0077 12.715 12.6553 17.0562 0 20.7278C12.6776 24.3994 17.0189 28.7517 20.6905 41.4182C24.3621 28.7406 28.7144 24.3994 41.3808 20.7278L31.7833 16.9446Z" fill="#ECB854"/>
</svg>
<svg width="32" height="32" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.4667 17.3878C25.7708 15.4125 23.7397 6.0159 21.3738 0.480606C17.6911 13.1582 13.3387 17.4994 0.68335 21.171C13.361 24.8426 17.7022 29.195 21.3738 41.8614C25.0454 29.1838 29.3977 24.8426 42.0642 21.171L32.4667 17.3878Z" fill="white"/>
</svg>


<svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7833 16.9446C25.0874 14.9693 23.0564 5.57264 20.6905 0.0373383C17.0077 12.715 12.6553 17.0562 0 20.7278C12.6776 24.3994 17.0189 28.7517 20.6905 41.4182C24.3621 28.7406 28.7144 24.3994 41.3808 20.7278L31.7833 16.9446Z" fill="#ECB854"/>
</svg>

</span>
      jewellery <br/>
      your personal <br/>
      designing
      </h2>

      <p class="slider-text mt-4 max-w-lg sm:text-lg/relaxed">
      Discover a new essential collection of wedding
jewelry for the 2023 season.
      </p>
    </div>
  </div>
</section>
  )
}


