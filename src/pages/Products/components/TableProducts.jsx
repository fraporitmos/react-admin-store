import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Produc'


const TableProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
                setProducts(resp.data.productos)
            } catch (err) {
                console.log("Ocurrio un error" + err)
            }
        }

        fetchProducts()

    }, [])



    return (

        <div className="container overflow-hidden px-20">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800    uppercase bg-white border-b border-gray-200">
                                Imagen
                            </th>
                       
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Producto
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Stock
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Peso
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Precio
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0
                                ?
                                products.map((item, index) => (
                                    <Product
                                        img={item.img}
                                        product={item.product}
                                        cantidad={item.cantidad}
                                        price={item.price}
                                        stock={item.stock}
                                        weight={item.weight}

                                    />
                                ))
                                : <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TableProducts