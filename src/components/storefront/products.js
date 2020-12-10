import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {init} from '../../store/products.js';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Categories () {
  const classes = useStyles();
  
  const products = useSelector (state => state.productStore.products);
  const currentProduct = useSelector( state => state.productStore.active);
  const currentCategory = useSelector( state => state.categoryStore.active);

  console.log('current product', currentProduct);

  const dispatch = useDispatch();


  const initialize = (products) => {
    dispatch(init(products));
  };

  useEffect (()=>{
    const fakeFetchFoodProducts = [
      {
        name: 'Apples',
        category: 'food',
        description: 'The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.',
        price: 1.99,
        inStock: 100,
        img:'https://images.heb.com/is/image/HEBGrocery/000320625',
      },
      {
        name: 'Calzones',
        category: 'food',
        description: 'A type of pizza that is folded in half before cooking to contain a filling.',
        price: 5.99,
        inStock: 100,
        img:'https://www.collinsdictionary.com/images/full/calzone_183552134.jpg?version=4.0.114',
      },
    ];

    const fakeFetchElectronicsProducts = [
      {
        name: 'TV',
        category: 'electronics',
        description: 'A system for transmitting visual images and sound that are reproduced on screens, chiefly used to broadcast programs for entertainment, information, and education.',
        price: 255.99,
        inStock: 4,
        img:'https://www.collinsdictionary.com/images/full/television_160593200.jpg?version=4.0.114',
      },
    ];

    if (currentCategory){
      currentCategory.name === 'food' && initialize(fakeFetchFoodProducts);
      currentCategory.name === 'electronics' && initialize(fakeFetchElectronicsProducts);
    }
    
  },[currentCategory]);

  return (
    <>
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
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={null}>
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
    </>
  );

}