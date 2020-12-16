import { When } from 'react-if';
import { makeStyles } from '@material-ui/core/styles';
import { removeItem } from '../../store/cart_reducer.js';
import { increaseStockQty } from '../../store/products_reducer.js';
import {useDispatch, useSelector} from 'react-redux';
import './simplecart.css';

const useStyles = makeStyles((theme) => ({
  
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remove: {
    'cursor': 'pointer',
    color: '#eee',
    width: '15px',
    height: '15px',
    background: '#800',
    lineHeight: '13px',
    borderRadius: '50%',
    padding: '0 4px',
    fontSize: '15px',
  },

}));


export default function SimpleCart () {

  const classes = useStyles();

  const itemsInCart = useSelector (state => state.cartStore.itemsInCart);

  const dispatch = useDispatch();

  const removeItemFromCart = item =>{
    dispatch(removeItem(item.product._id));
    dispatch(increaseStockQty(item));
  };

  return (
    <When condition={itemsInCart}>
      <When condition={itemsInCart && itemsInCart.length > 0}>
        <div className="simple-cart">
          <ul>
            {itemsInCart.map(item =>
              <li key={item.product._id} className={classes.item}>
                <span>{item.product.name}</span>
                <span>Qty: {item.quantity}</span>
                <span className={classes.remove} onClick={() => removeItemFromCart(item)}>x</span>
              </li>
            )}
          </ul>
          <div className="footer"></div>
        </div>
      </When>
    </When>

  );
}

