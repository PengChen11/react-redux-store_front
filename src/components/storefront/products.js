import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {When} from 'react-if';
import ReactLoading from 'react-loading';

import {init, reduceStockQty, loading} from '../../store/products_reducer.js';
import {addItem} from '../../store/cart_reducer.js';

import {Button,Card,CardActions,CardContent, CardMedia,Grid, Typography,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', 
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Categories () {
  const classes = useStyles();

  const products = useSelector (state => state.productStore.products);
  const currentCategory = useSelector( state => state.categoryStore.active);
  const isLoading = useSelector( state => state.productStore.isLoading);
  const pendingAddToCart = useSelector( state => state.productStore.pendingAddToCart);
  
  const dispatch = useDispatch();

  const addItemToCart = product => {
    dispatch(loading());
    dispatch(addItem(product));
    dispatch(reduceStockQty(product));
  };

  useEffect (()=>{

    currentCategory && dispatch(init(currentCategory.name));

  },[currentCategory, dispatch]);


  return (
    <>
      <When condition={isLoading}>
        <ReactLoading type={'bubbles'} color={'grey'} width={150} />
      </When>
      <When condition={!isLoading}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.img}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" display='inline'>
                      {product.name}
                    </Typography>
                    <Typography align = 'right'>
                      Qty:{product.inStock}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>addItemToCart(product)} disabled={(product.inStock===0) || pendingAddToCart ? true: false}>
                      Add To Cart
                    </Button>
                    <Button size="small" color="primary" component={Link} to={`/product/${product._id}`}>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </When>
    </>
  );

}