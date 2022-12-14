import Image from 'next/image'
import React from 'react'

type Props = {
}

function LargeCard({ }: Props) {
    return (
        <section className='relative py-16 cursor-pointer mt-10'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    priority
                    src="https://links.papareact.com/4cj"
                    alt="card Image"
                    layout="fill"
                    className='rounded-2xl'
                />
            </div>

            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>
                    The Corbett Luxury
                </h3>

                <p>
                    Get going to the woods in Corbett
                </p>

                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>Get Inspired</button>

            </div>
        </section>
    )
}

export default LargeCard