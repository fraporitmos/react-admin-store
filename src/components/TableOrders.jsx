import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Order from './Order'


const Table = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const fetchOrders = async () => {

            try {
                const resp = await axios.get("http://localhost:3000/api/orders")
                setOrders(resp.data.ventas)
            } catch (err) {
                console.log("Ocurrio un error" + err)
            }
        }

        fetchOrders()

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
                                Cliente
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Teléfono
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Correos
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Producto
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Cantidad
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Peso
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Total
                            </th>
                            <th scope="col" className="px-5 py-3 text-xs font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0
                                ?
                                orders.map((item, index) => (
                                    <Order
                                        img={item.img}
                                        names={item.names}
                                        phone={item.phone}
                                        email={item.email}
                                        product={item.product}
                                        cantidad={item.cantidad}
                                        price={item.price}
                                        weight={item.weight}
                                        fecha={item.fecha}
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

export default Table