import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';

export function CardProducts({ product }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)} />
    </Container>
  );
}

CardProducts.propTypes = {
  product: PropTypes.object,
};
