import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Nutra-Gold.jpg' alt="Nutra_Gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href="http://localhost:3000">Nutra Fold Holistic Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href="http://localhost:3000" id="view_btn" className='btn btn--block'>
                            Ver detalle producto
                            </a> 
                        </div>
                    </div>
                </div>

                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Equilibiro.jpg' alt="Equilibrio"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href="http://localhost:3000">Nutra mantenimiento</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 2 reviews</span>
                            </div>
                            <p className='card-text'>$52.000</p><a href="http://localhost:3000" id="view_btn" className='btn btn--block'>
                            Ver detalle producto
                            </a> 
                        </div>
                    </div>
                </div>

                  {/*Producto 3*/}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Nutra-Nuggets Mantenimiento.jpg' alt="Nutra_Nuggets"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href="http://localhost:3000">Nutra Fold Holistic Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 12 reviews</span>
                            </div>
                            <p className='card-text'>$82.000</p><a href="http://localhost:3000" id="view_btn" className='btn btn--block'>
                            Ver detalle producto
                            </a> 
                        </div>
                    </div>
                </div>

                {/*Producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Nutra-Profesional.jpg' alt="Nutra Profesional"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href="http://localhost:3000">Nutra mantenimiento</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 8 reviews</span>
                            </div>
                            <p className='card-text'>$95.000</p><a href="http://localhost:3000" id="view_btn" className='btn btn--block'>
                            Ver detalle producto
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
