import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const HomePage = () => {
    return (
        <><Gallery className="custom-gallery" width="1440px" height="681px" images={imageList} /><div>

<div>
      <Section title="Coleções em destaque" titleAlign="center" link>
        <p>Este é o conteúdo da seção 1.</p>
      </Section>
      
      
    </div>
            <ProductListing products={products} />
        </div></>

    ) 
}

const products = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'K-Swiss V8 - Masculino',
      price: 'R$ 200,00',
      priceDiscount: 'R$ 100,00',
      discount: '50% OFF',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Adidas Run - Feminino',
      price: 'R$ 250,00',
      priceDiscount: 'R$ 150,00',
      discount: '40% OFF',
    },
    // Adicione mais produtos conforme necessário
  ];

  const imageList = [
    { src: '/images/home-slide-1.jpeg' },
    { src: '/images/home-slide-2.jpeg' },
    { src: '/images/home-slide-3.jpeg' },
    { src: '/images/home-slide-4.jpeg' },
  ]
export default HomePage;