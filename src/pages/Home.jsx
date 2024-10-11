import React from 'react'
import CardNumber from '../components/CardNumber'
import Table from '../components/TableOrders'

const Home = () => {
    return (
        <>


   
        <div className='flex  justify-around'>
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'orange'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'green'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'indigo'} />
           <CardNumber name={"Ventas del mes"} number={"2599"} color={'blue'} />
        </div>
        <Table/>
        

        </>
        
    )
}

export default Home