import React from 'react'

const Footer = () => {
  const handleStoreClick = () => {
    window.open('https://maps.app.goo.gl/iQLkZYq7gjUU1S9x9', '_blank');
  }

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Existing footer content */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h5 className="font-bold text-2xl mb-2">Offline Store</h5>
          <p className="text-sm">
            <button className="text-white underline" onClick={handleStoreClick}>
              Find Stores Near Me
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h5 className="font-bold text-2xl mb-2">Get To Know Us</h5>
          <ul className="list-none">
            <li>
              <a className="text-white hover:underline" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                FAQ'S
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h5 className="font-bold text-2xl mb-2">Track Or Return/Exchange</h5>
          <ul className="list-none">
            <li>
              <a className="text-white hover:underline" href="#">
                TRACK ORDER
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                PLACE RETURN/EXCHANGE REQUEST
              </a>
            </li>
            <li>
              <a className="text-white hover:underline" href="#">
                RETURNS/EXCHANGE POLICY
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h5 className="font-bold text-2xl mb-2">Customer Care</h5>
          <ul className="list-none">
            <li>
              <a className="text-white hover:underline">
                <b>Timings:</b> 10 AM-10 PM (Mon-Sun)
              </a>
            </li>
            <li>
              <a className="text-white hover:underline">
               <b> Whatsapp: </b>+91 9589795848
              </a>
            </li>
            <li>
              <a className="text-white hover:underline">
              <b>Instagram:</b> hummingbird.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center pt-4">
        <p className="text-center text-xs">© 2024   HUMMINGBIRD</p>
        <p className="text-center text-xs pt-1">Made in India, for the World</p>
      </div>
    </footer>
  )
}

export default Footer