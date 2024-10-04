import React from 'react'
import CardNumber from '../components/CardNumber'

const Home = () => {
    return (
        <div className='flex  justify-around'>
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'green'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'yellow'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'indigo'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'blue'} />
        </div>

    )
}

export default Home