import commerce from '../lib/commerce'
import ProductList from '../components/ProductList'
import React from 'react';
import Head from 'next/head';

export async function getStaticProps() {
    const merchant = await commerce.merchants.about();
    const { data: products } = await commerce.products.list();
    return {
      props: {
        products, 
        merchant,
      },
    };
  }
export default function ProductsPage({products}) {
    return (
        <>
        <React.Fragment>
            <ProductList products={products} />
        </React.Fragment>
        <Head>
        <meta charset="UTF-8"/>
        <title>Produkty | Truhlice</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
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
    <div className="small-container">
        <div className="row row-2">
        <h1 className="vsechno">Všechny produkty</h1>
        </div>
        <div className="row">
                {products.map((product) => (
                    <div className="col-4">  
                    <div className={product.id}>
                    <img src={product.image?.url} alt="" /*onclick="document.location.href='product-details.html'"*//>
                    <h4>{product.name}</h4>
                    <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>{product.price.formatted_with_symbol}</p>
                    </div>
                </div>
                ))}
            <div className="col-4">
                <img src="/images/img_20211031_115330.jpg"/>
                <h4>Taška</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <p>200 Kč</p>
            </div>
            <div className="col-4">
                <img src="/images/img_20211031_122139.jpg"/>
                <h4>Lněná utěrka</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <p>120 Kč</p> 
            </div>
            <div className="col-4">
                <img src="/images/img_20211031_122040.jpg"/>
                <h4>Chlebobal</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>130 Kč</p> 
            </div>
            <div className="col-4">
                <img src="/images/img_20211031_115330.jpg" onClick="document.location.href='product-details.html'"/>
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
                <img src="/images/img_20211031_115330.jpg"/>
                <h4>Taška</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <p>200 Kč</p>
            </div>
            <div className="col-4">
                <img src="/images/img_20211031_122139.jpg"/>
                <h4>Lněná utěrka</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>120 Kč</p> 
            </div>
            <div className="col-4">
                <img src="/images/img_20211031_122040.jpg"/>
                <h4>Chlebobal</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-stroke"></i>
                </div>
                <p>130 Kč</p> 
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
        <div>
        </div>
        </body>
        </>
    )
}