import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p> Dummy</p>
        <p>Test</p>
        <h1>Test</h1>
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
