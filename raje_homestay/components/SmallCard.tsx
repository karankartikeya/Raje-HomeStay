import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Amenities } from '../typing'

type Props = {
    amenities: Amenities[]
}

function SmallCard({amenities }: Props) {
    return (
        <>
            
            {amenities.map((amenity)=>(
                    <div key={amenity._id} className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className='relative h-16 w-16'>
                        <Image
                            src={urlFor(amenity.image).url()}
                            alt="card Image"
                            layout="fill"
                            className='rounded-lg'
                        />
                    </div>
                    <div>
                        <h2>
                            {amenity.title}
                        </h2>
                    </div>
                </div>
            ))}
            
            

        </>
    )
}

export default SmallCard