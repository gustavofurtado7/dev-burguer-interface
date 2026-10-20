import { useState } from 'react';
import { api } from '../../services/api.js';
import { useEffect } from 'react';
import CarouselPackage from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './styles.js';
import { CardProduct } from '../CardProducts/index.jsx';

const Carousel = CarouselPackage.default;

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data.filter( product => product.offer)

      setOffers(onlyOffers)
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="offer-item"
      >
        {offers.map((product) => (
          <CardProduct key={product.id} product={product}/>
        ))}
      </Carousel>
    </Container>
  );
}
