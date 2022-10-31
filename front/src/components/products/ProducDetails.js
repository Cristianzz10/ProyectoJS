import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProducDetails = () => {
  return (
    <Fragment>
        <MetaData title="Alimento humedo para gatos"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                <img src="../../images/productos/felix.jpg" alt="Imagen_producto" height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>ALimento humedo Felix para gatos</h3>
                <p id="product_id">product #3253252</p>
            </div>

        </div>


    </Fragment>

  )
}
