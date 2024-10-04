import React from 'react'

const CardNumber = ({name, number, color}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl w-44 m-12 dark:bg-gray-800 ">
    <div className="flex items-center">
        <span className={`relative w-4 h-4 p-2 bg-${color}-500 rounded-full`}>

        </span>
        <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
            {name}
        </p>
    </div>
    <div className="flex flex-col justify-start">
        <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
            S/ {number}
        </p>
        <div className="relative h-2 bg-gray-200 rounded w-28">
            <div className={`absolute top-0 left-0 w-2/3 h-2 bg-${color}-500 rounded`}>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardNumber