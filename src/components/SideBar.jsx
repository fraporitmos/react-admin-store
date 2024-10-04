import React from 'react'
import { MdHome } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdSpeakerGroup } from "react-icons/md";
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="h-screen w-72 bg-gray-800">
            <nav className="">

                <div>
                    <div class="flex items-center justify-center p-8">
                        <img class="h-10" src={Logo} />
                        <span class="text-gray-600 dark:text-gray-300 ml-4 text-1xl font-bold">
                            ReactAdmin
                        </span>
                    </div>
                    <Link to={`home`}>
                        <a className="flex items-center justify-start p-2  font-thin text-white  transition-colors duration-200 hover:text-gray-300  gray:text-gray-400  hover:bg-gray-600  gray:hover:text-white gray:hover:bg-gray-600 " href="#">

                            <MdHome size={24} />
                            <span className="mx-2 font-normal text-md">
                                Home
                            </span>

                        </a>
                    </Link>
                    <Link to={`orders`}>
                        <a className="flex items-center justify-start p-2  font-thin text-white  transition-colors duration-200 hover:text-gray-300  gray:text-gray-400  hover:bg-gray-600  gray:hover:text-white gray:hover:bg-gray-600 " href="#">
                            <MdShoppingCart size={24} />
                            <span className="mx-2 font-normal text-md">
                                Pedidos
                            </span>
                        </a>
                    </Link>
                    <Link to={`products`}>

                        <a className="flex items-center justify-start p-2  font-thin text-white  transition-colors duration-200 hover:text-gray-300  gray:text-gray-400  hover:bg-gray-600  gray:hover:text-white gray:hover:bg-gray-600 " href="#">
                            <MdSpeakerGroup size={24} />
                            <span className="mx-2 font-normal text-md">
                                Products
                            </span>
                        </a>
                    </Link>
                    <Link to={`users`}>

                        <a className="flex items-center justify-start p-2  font-thin text-white  transition-colors duration-200 hover:text-gray-300  gray:text-gray-400  hover:bg-gray-600  gray:hover:text-white gray:hover:bg-gray-600 " href="#">
                            <MdGroup size={24} />
                            <span className="mx-2 font-normal text-md">
                                Users
                            </span>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default SideBar