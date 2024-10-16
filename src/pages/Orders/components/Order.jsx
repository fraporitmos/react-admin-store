import moment from 'moment'
import React from 'react'
import 'moment/locale/es';  // Importar el idioma español


const Order = ({ img, names, phone, email, product, price, cantidad,weight ,fecha}) => {
    moment.lang('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      }
      );

    return (
        <tr>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                            <img alt="profil" src={img} className="mx-auto object-fit rounded-full h-24 w-24 " />
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {names}
                </p>
            </td>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {phone}
                </p>
            </td>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {email}
                </p>
            </td>
            <td className="px-5 py-5 text-xs bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {product}
                </p>
            </td>
            <td className="px-5 py-5 text-xs text-center bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {cantidad}
                </p>
            </td>
            <td className="px-5 py-5 text-xs text-center bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {weight}
                </p>
            </td>
            <td className="px-5 py-5 text-xs text-center bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    S/ {price * cantidad}
                </p>
            </td>
            <td className="px-5 py-5 text-xs text-center bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    { moment(fecha).format('MMMM Do YYYY, h:mm:ss a')}
                    
                </p>
            </td>
        </tr>
    )
}

export default Order