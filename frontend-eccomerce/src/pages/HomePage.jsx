import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import "../css/Section.css";
import "../css/Gallery.css"


function HomePage  ()  {
  return (
  <><Gallery className="gallery-image" width="1335px" height="600px" images={imageList} />

  
<div>
      <Section title="Coleções em destaque">
        <div className="card">
          <div className="discount-badge">30% OFF</div>
          <img src="/images/collection-1.png" alt="" />
          <a href="#" className="action-button">Comprar</a>
        </div>

        <div className="card">
          <div className="discount-badge">30% OFF</div>
          <img src="/images/collection-2.png" alt="" />
          <a href="#" className="action-button">Comprar</a>
        </div>

        <div className="card">
          <div className="discount-badge">30% OFF</div>
          <img src="/images/collection-3.png" alt="" />
          <a href="#" className="action-button">Comprar</a>
          
        </div>
      </Section>
    </div>
    <Section title="Produtos em alta" titleAlign="left">
      <div><ProductListing products={products} /></div>
       </Section>
  
  
</>
    ) }


const products = [
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      price: 'R$ 200,00',
      priceDiscount: 'R$ 100,00',
      discount: '50% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'Adidas Run - Feminino',
      price: 'R$ 250,00',
      priceDiscount: 'R$ 150,00',
      discount: '40% OFF'
      
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      price: 'R$ 200,00',
      priceDiscount: 'R$ 100,00',
      discount: '50% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'Adidas Run - Feminino',
      price: 'R$ 250,00',
      priceDiscount: 'R$ 150,00',
      discount: '40% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      price: 'R$ 200,00',
      priceDiscount: 'R$ 100,00',
      discount: '50% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'Adidas Run - Feminino',
      price: 'R$ 250,00',
      priceDiscount: 'R$ 150,00',
      discount: '40% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      price: 'R$ 200,00',
      priceDiscount: 'R$ 100,00',
      discount: '50% OFF',
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'Adidas Run - Feminino',
      price: 'R$ 250,00',
      priceDiscount: 'R$ 150,00',
      discount: '40% OFF',
    },

  ];

  const imageList = [
    { src: "/images/home-slide-5.jpeg" },
    { src: "/images/home-slide-2.jpeg" },
    { src: "/images/home-slide-8.jpeg" },
    { src: "/images/home-slide-4.jpeg" },
  ]

  

export default HomePage