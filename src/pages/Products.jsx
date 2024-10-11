import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import Product from '../components/Produc';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Products = () => {
  const [modal, setMdoal] = useState(false);
  const [products, setProducts] = useState([])
  const [edit, setEdit] = useState({})

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/api/products")
        setProducts(resp.data.productos)
      } catch (err) {
        console.log("Ocurrio un error" + err)
      }
    }

    fetchProducts()

  }, [])


  function handleEventEdit(product) {
    setEdit(product)
    setMdoal(true)
  }


  return (
    <div className='p-8'>
      <Modal
        isOpen={modal}
        style={customStyles}
        contentLabel="Editar Producto">

        <form class="flex w-full max-w-sm space-x-3">
          <div class="w-full  px-5 py-10 m-auto mt-10 bg-white ">
           
            <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input type="text" id="contact-form-name" value={edit.product} class="  border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Producto" />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input type="text" id="contact-form-email"  value={edit.price}  class="  border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Precio" />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input type="text" id="contact-form-name" value={edit.weight}   class="  border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Peso" />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input type="text" id="contact-form-email"  value={edit.stock}  class="  border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Stock" />
                </div>
              </div>
              <div class="col-span-2 text-right">
                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   ">
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>

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
                      key={index}
                      img={item.img}
                      product={item.product}
                      cantidad={item.cantidad}
                      price={item.price}
                      stock={item.stock}
                      weight={item.weight}
                      onClickEdit={() => handleEventEdit(item)}
                    />
                  ))
                  : <></>
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Products