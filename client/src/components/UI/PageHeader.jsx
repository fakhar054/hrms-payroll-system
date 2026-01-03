import React from 'react'

function PageHeader() {
  return (
     <div className="flex flex-col">
        <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none">
          Hello <span className="text-orange-600">Shahzaib</span>
        </h1>
        <p className="font-clash-medium text-gray-700">
          Hope you're having a <span className="">productive</span> day :)
        </p>
      </div>
  )
}

export default PageHeader