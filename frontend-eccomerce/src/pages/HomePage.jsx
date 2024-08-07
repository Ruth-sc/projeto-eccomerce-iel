import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import "../css/Section.css";
import "../css/Gallery.css"


function HomePage  ()  {
  return (
  <><><Gallery className="gallery-image" width="1440px" height="681px" images={imageList} />


      <div className="flex-container">
        <Section title="" discount="30% OFF" buttonText="Comprar">
          <div className="image-container">
            <img src="/images/collection-1.png" alt="" />
          </div>
        </Section>

        <Section title="" discount="30% OFF" buttonText="Comprar">
          <div className="image-container">
            <img src="/images/collection-2.png" alt="" />
          </div>
        </Section>

        <Section title="" discount="30% OFF" buttonText="Comprar">
          <div className="image-container">
            <img src="/images/collection-3.png" alt="" />
          </div>
        </Section>
      </div>
      </><div><ProductListing products={products} /></div></>
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
    { "src": "/images/home-slide-1.jpeg" },
    { "src": "/images/home-slide-2.jpeg" },
    { "src": "/images/home-slide-3.jpeg" },
    { "src": "/images/home-slide-4.jpeg" },
  ]

export default HomePage