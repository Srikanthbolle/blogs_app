import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
<div>
    <h1 className='text-7xl'>Srikanth Daily Blogs</h1>
    <h2 className='mt-5 md:mt-0'>Welcome to{" "} <span className='underline decoration-4 decoration-[#F7AB0A]'>Every developers</span>{" "} favourite blog in the devopsher</h2>
</div>
<p>New Product features | the latest in technology | The weekly debugging nightmares & more!</p>
    </div>
  )
}

export default Banner