import React from 'react';
import commerce from '../../lib/commerce'
import Head from 'next/head';
import { useCartDispatch } from '../../context/cart';

export async function getStaticProps({params}) {
    const {permalink} = params;
    const product = await commerce.products.retrieve(permalink, {
        type: "permalink",
    });

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const {data: products} = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    };
}

export default function ProductPage({product}) {
    const {setCart} = useCartDispatch;
    const addToCart = () => commerce.cart.add(product.id).then(({cart}) => setCart(cart))
    return (
        <React.Fragment>
        <Head>
        <meta charset="UTF-8"/>
        <title>Produkty | Truhlice</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        <meta httpEquiv="content-type" content="text/html; charset=ISO-8859-1"/>
        <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name="viewport"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </Head>
        <body width="device-width">
        <div id="root"></div>
        <div className="main">
        <div className="navigation-bar">
            <div className="logo">
                <img src="/images/matince-ver.png" alt="45" layout="fill" width="125px"/>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="/">Úvod</a></li>
                        <li><a href="/products">Produkty</a></li>
                        <li><a href="/about-me.html">O mě</a></li>
                        <li><a href="/contact.html">Kontakt</a></li>
                    </ul>
                </nav>
                <img src="/images/cart.png" width="30px" height="30px" onClick="document.location.href='cart.html'" alt="45" layout="fill" className="rocket"/>
                <img src="/images/menu.png" className="menu-icon" alt="45" layout="fill" onClick="menutoggle()"/>
            </div>
    <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <div className="image">
                    <div className={product.id}>
                <img src={product.image?.url} layout="fill"/>
                <div className="slider">
                    <a onclick="nextimg(-1)" className="prev-1">&#10094;</a>
                    <a onclick="nextimg(1)" className="prev-2">&#10095;</a>
                </div>
                </div>    
                </div>                                 
            </div>
            <div className="col-2 bookobal">
                   <h1>{product.name}</h1>
                    <h4 className="priceValue" id="prod_BkyN5YV2Yel0b6">{product.price.formatted_with_symbol}</h4>
                <select>
                    <option selected>-- Vyberte motiv --</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                </select>
                <input type="number" value="1" className="opt" max="10" min="1" onkeyup="if(parseInt(this.value)>10){ this.value =10; return false; }" oninput="if(this.value<0){this.value= this.value * -1}"/>
                <a className="btn addToCart" onClick={addToCart}>Přidat do košíku</a>
                <h3>Detaily produktu <i className="fa fa-indent"></i></h3> 
                <p>Chtěli jste někdy obal na knížku, aby se nepoškodila etiketa?
                    Potom je tento produkt právě pro vás! Knihobal ochrání knihu před poničení etikety (například před dětmi). Už nikdy víc se nebudete muset 
                    cítit trapně, když na veřejnosti čtete Kama Sutru!
                </p>
            </div>
        </div>
    </div>
    <div className="small-container">
        <div className="row row-2">
            <div className="col-4">
                <img src="/images/IMG_20211031_115330.jpg"/>
                <h4>Knihobal</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>180 Kč</p>
            </div>
            <div className="col-4">
                <img src="/images/IMG_20211031_122139.jpg"/>
                <h4>Knihobal</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>180 Kč</p> 
            </div>
            <div className="col-4">
                <img src="/images/IMG_20211031_122040.jpg"/>
                <h4>Knihobal</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>180 Kč</p> 
            </div>
        </div>
    </div>
        <div className="footer">
                <div className="row">
                    <div className="footer-col-1">
                    <h3>Užitečné odkazy</h3>
                    <ul>
                        <li className="space-fix">Zásady vrácení peněz</li>
                    </ul>
                </div>
                <div className="footer-col-2">
                    <h3>Sleduj mě na</h3>
                    <ul>
                        <li className="facebook">Facebook</li>
                        <li>Instagram</li>
                        <li>Instagram (programátor)</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copyright">Copyright 2021 - Truhlice</p>
        </div>
    </div>
    </body>
        </React.Fragment>
    )
}