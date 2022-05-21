import Head from 'next/head'
//import commerce from '../lib/commerce.js'
import React from 'react';
//import ProductList from '../components/ProductList';
import Link from 'next/link';
import Image from 'next/image';

/* export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products, 
      merchant,
    },
  };
} */

export default function Home({merchant, products}) {
  //  const { products } = props; 
    return (
    <>
      <Head>
          <meta charset="UTF-8"/>
          <title>Hlavní stránka | Truhlice</title>
          <meta httpEquiv="content-type" content="text/html; charset=ISO-8859-1"/>
          <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name="viewport"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"/>
      </Head>
      <body width="device-width">
      <div id="root"></div>
      <div id="main">
          <div className="header">
              <div className="navbar">
                  <div className="logo">
                    <Image alt="" src="/images/matince-ver.png" width={175  } height={100} />
                  </div>
                  <nav>
                      <ul id="MenuItems">
                          <li><Link href="/">Úvod</Link></li>
                          <li><Link href="/products">Produkty</Link></li>
                          <li><Link href="/about-me.html">O mě</Link></li>
                          <li><Link href="/contact.html">Kontakt</Link></li>
                      </ul>
                  </nav>
                  <Image alt="" src="/images/cart.png" width="30px" height="30px" onClick="document.location.href='cart.html'" className="rocket"/>
                  <Image alt="" src="/images/menu.png" className="menu-icon" onClick="menutoggle()" width={28} height={28} />
              </div>
          <div className="container">
              <div className="row">
                  <div className="col-2">
                      <h1>Ručně šité produkty</h1>
                      <p>Ručně šité tašky, utěrky, zástěry a spoustu dalších produktů<br/>přímo z dílny až k Vám!</p>
                      <Link href="/products" className="btn">Prohlédnout &#10140;</Link>
                  </div>
                  <div className="col-2">
                    <Image src="/images/img_20211031_115634done.png" alt='Knihobal' width={910} height={910}/>
                  </div>
              </div>
          </div>  
      </div>
          <div className="categories">
              <div className="small-container">
                  <div className="row">
                      <div className="col-3">
                          <Image alt="" src="/images/img_20211031_120823.jpg" width={910} height={910}/>
                      </div>
                      <div className="col-3">
                          <Image alt="" src="/images/img_20211031_121216.jpg" width={910} height={910}/>
                      </div>
                      <div className="col-3">
                          <Image alt="" src="/images/img_20211031_121504.jpg" width={910} height={910}/>
                      </div>
                  </div>
              </div>
          </div>
      <div className="small-container">
          <h2 className="title">Oblíbené produkty</h2>
          <div className="row">
              <div className="col-4">
                  <Image alt="" src="/images/img_20211031_115330.jpg" width={910} height={910}/>
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
                  <Image alt="" src="/images/img_20211031_122139.jpg" width={910} height={910}/>
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
                  <Image alt="" src="/images/img_20211031_122040.jpg" width={910} height={910}/>
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
          <div className="offer">
              <div className="small-container">
                  <div className="row">
                      <div className="col-2">
                          <Image alt="" src="/images/img_20211031_120917.jpg" width="960px" height="100vw"/>
                      </div>
                      <div className="col-2">
                          <p>Nejoblíbenější!</p>
                          <h1>Plátěná šitá taška</h1>
                          <small>V dnešní době se řeší ekologie, plasty atd.
                              Co kdyby jste místo kupování plastových tašek ze supermarketu měli tašku, která se dá použít znovu a znovu? Pokud by se Vám tohle líbilo, 
                              můžete zvolit tuto tašku!<br/>
                          </small>
                          <Link href="" className="btn">Koupit &#8594;</Link>
                      </div>
                  </div>
              </div>
          </div>
          <div className="testimonial">
              <div className="small-container">
                  <div className="row">
                      <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <p>Mamáááá... svéééé... věř</p>
                          <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </div>
                          <Image alt="" src="/images/NvHRPgxe_400x400.png" width={80} height={80}/>
                          <h3>Vojta Hojgr</h3>
                      </div>
                      <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <p>Upřímně tě sleduju moc dlouho a tvé produkty se mi líbí.
                               Pošlu ti chleba a dej Vojtíškovi prosím tě i těch 5000kč které jsem poslala s tím, děkuji 🥰</p>
                          <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </div>
                          <Image alt="" src="/images/NvHRPgxe_400x400.png" width={80} height={80} margin-top="20px"  border-radius="50%"/>
                          <h3>Chlebodar</h3>
                      </div>
                      <div className="col-3">
                          <i className="fa fa-quote-left"></i>
                          <p>Koupila jsem a balík je na cestě. Objednala jsem to až na ostrov Pipiland tam, kde se světla dotýkají země 🤩</p>
                          <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </div>
                          <Image alt="" src="/images/NvHRPgxe_400x400.png" width={80} height={80} />
                          <h3>Moje Pipi ❤️</h3>
                      </div>
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
                          <Link href="https://www.facebook.com/Truhlice" className="facebook" target="_blank">Facebook</Link><br/>
                          <Link href="https://www.instagram.com/truhlice/" className="instagram" target="_blank">Instagram</Link><br/>
                          <Link href="https://www.instagram.com/vojtahojgr/" className="programmer" target="_blank">Instagram (programátor)</Link>  
                      </ul>
                  </div>
              </div>
              <hr/>
              <p className="copyright">Copyright 2021 - Truhlice</p>
          </div>
        </div>
      </body>
      </>
    )
  }