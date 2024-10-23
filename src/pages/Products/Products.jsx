import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import Product from './components/Product';
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";

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
  const [actionProduct, setActionProduct] = useState("")

  const [currentProduct, setCurrentProduct] = useState({})
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  //TODO:LLEVAR A OTRO ARCHIVO LAS OPS
  const updateProduct = async (productEdited) => {
    try {
      const resp = await axios.patch(`${import.meta.env.VITE_BASE_URL}/product`, productEdited)
      if (resp.status == 200) {
        setMdoal(false)
        fetchProducts()
      }
    } catch (err) {
      console.log("Ocurrio un error" + err)
    }
  }

  const createProduct = async (productEdited) => {
    try {
      const resp = await axios.post(`${import.meta.env.VITE_BASE_URL}/product`, productEdited)
      if (resp.status == 200) {
        setMdoal(false)
        fetchProducts()
      }
    } catch (err) {
      console.log("Ocurrio un error" + err)
    }
  }

  const deleteProduct = async (id) => {
    const resp = confirm("Deseas eliminar el producto?")
    if (resp) {
      var jsonDelete = {
        id_product: id.toString()
      }
      try {
        const resp = await axios.delete(`${import.meta.env.VITE_BASE_URL}/product`, {
          headers: {
            'Content-Type': 'application/json'
          },
          data: jsonDelete
        });
        if (resp.status == 200) {
          setMdoal(false)
          fetchProducts()
        }
      } catch (err) {
        console.log("Ocurrio un error" + err)
      }
    }
  }


  const fetchProducts = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
      setProducts(resp.data.productos)
    } catch (err) {
      console.log("Ocurrio un error" + err)
    }
  }


  const onFormSubmit = data => {
    var productJson = {
      id_product: currentProduct.id,
      ...data,
    }
    if (actionProduct === "Crear producto") {
      createProduct(productJson)
    }
    if (actionProduct === "Actualizar producto") {
      updateProduct(productJson)
    }

  }


  useEffect(() => {
    fetchProducts()

  }, [])


  useEffect(() => {
    reset({
      product: currentProduct.product,
      price: currentProduct.price,
      weight: currentProduct.weight,
      stock: currentProduct.stock,
      img: currentProduct.img,
    });
  }, [currentProduct]);



  function openModalEdit() {
    setActionProduct("Editar producto")
    setMdoal(true)
  }

  function openModalCreate() {
    reset({
      product: "",
      price: "",
      weight: "",
      stock: "",
      img: "",
    });
    setActionProduct("Crear producto")
    setMdoal(true)

  }

  return (
    <div className='p-8'>
      <Modal
        isOpen={modal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel={actionProduct}>
        <div className='flex w-full justify-end  cursor-pointer' onClick={() => { setMdoal(false) }}>
          <AiFillCloseCircle color="red" size={24} />
        </div>
        <h3 className='text-xl font-bold text-center'>{actionProduct}</h3>

        <form className="flex w-full max-w-sm space-x-3" onSubmit={handleSubmit(onFormSubmit)}>

          <div className="w-full  px-5 py-10 m-auto bg-white  border-1">
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    placeholder="Producto"
                    defaultValue={currentProduct.product}
                    {...register("product")}
                    type="text"
                    className="flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    placeholder="Precio"
                    defaultValue={currentProduct.price}
                    {...register("price")}
                    type="text"
                    className="flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    placeholder="Peso"
                    defaultValue={currentProduct.weight}
                    {...register("weight")}
                    type="text"
                    className="flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    placeholder="Stock"
                    defaultValue={currentProduct.stock}
                    {...register("stock")}
                    type="text"
                    className="flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className=" relative ">
                  <input
                    placeholder="Imagen"
                    defaultValue={currentProduct.img}
                    {...register("img")}
                    type="text"
                    className="flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                </div>
              </div>
              <div className="col-span-2 text-right">
                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   ">
                  {actionProduct}
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      <div className="container overflow-hidden px-20">

        <div className='flex w-full justify-end m-4'>
          <button onClick={() => openModalCreate()} type="button" class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">

            Nuevo Producto
          </button>

        </div>

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
                products === undefined ?
                  <></> :
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
                        onClickEdit={() => {
                          setCurrentProduct(item)
                          openModalEdit()
                        }}
                        onClickDelete={() => {
                          setCurrentProduct(item)
                          deleteProduct(item.id)
                        }}
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