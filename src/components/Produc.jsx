import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";



const Product = ({ img, product, price, stock, weight, id, onClickEdit }) => {


    return (
        <tr>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src={img} className="mx-auto object-fit rounded-full h-24 w-24 " />
                        </a>
                    </div>
                </div>
            </td>

            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {product}
                </p>
            </td>
            <td className="px-5 py-5 text-xs  bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {stock} unidades
                </p>
            </td>
            <td className="px-5 py-5 text-xs  bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {weight} kg
                </p>
            </td>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    S/ {price}
                </p>
            </td>

            <td className="px-5 py-5 text-xs bg-white border-b text-center border-gray-200">
                <span className="flex gap-2 px-3 py-1 font-semibold leading-tight text-green-900">


                    <button type="button"  onClick={onClickEdit}  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <AiFillEdit />

                    </button>

                    <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <AiFillDelete />

                    </button>
                </span>
            </td>


        </tr>
    )
}

export default Product