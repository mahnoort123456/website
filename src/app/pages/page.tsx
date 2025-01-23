import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Featured from '../components/featured'
const SingleProductPage = () => {
  return (
    <div id='pages' className="bg-white">
      <section className="bg-white text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={require("../../../public/image/Image (2).png")}
        width={675}
        height={607}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      
        <h1 className="text-[#272343] text-4xl title-font font-bold mb-1">
        Library Stool <br/>
        Chair
        </h1>
        <br/>
        <div className="flex mb-4">
          
         
           
          
           
         
            <button className="bg-[#029FAE] hover:bg-[#029FAE] rounded-full border-0 py-2 px-3 focus:outline-non text-lg inline-flex text-white ml-3">$20.00 USD</button>
        </div>
        <hr />
        <br />
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn.
        </p>
       
          <br/>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
  
 <Image
 src={require('../../../public/image/Button (2).png')}
 alt=""
 width={180}
 className='rounded'
 height={63}/>
    
</button>

      </div>
    </div>
  </div>
</section>


<Featured/>
</div>




    
  )
}

export default SingleProductPage