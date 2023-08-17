import Image from 'next/image'
import React from 'react'


const stats = [
    { id: 1, name: 'Nuturing Community', image: '/logo_1.png' },
    { id: 2, name: 'Love your Layers', image: '/logo_2.png' },
    { id: 3, name: 'Feeling Creativity', image: '/logo_3.png' },
  ]

const LogoTextSection = () => {
  return (
     <div className="mb-20">
    <div className="mx-auto logos-section-bg max-w-5xl py-6 px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-start md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto logo-section-item flex items-center max-w-xs gap-x-4 gap-y-4">
            <div>
            <Image className='w-100 h-auto' width={50} height={50} alt='logo' src={stat.image} />
            </div>
            <div className="w-3/5">
                <div className='text-lg text-white'>
                {stat.name}
                </div>
            </div>
          </div>
        ))}
      </dl>
    </div>
  </div>
  )
}

export default LogoTextSection
