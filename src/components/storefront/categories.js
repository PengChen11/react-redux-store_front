import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {When} from 'react-if';
import ReactLoading from 'react-loading';

import { makeStyles } from '@material-ui/core/styles';

import {Button, ButtonGroup,Typography, Container } from '@material-ui/core';

import {active, init} from '../../store/categories_reducer.js';



const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
  activeContent: {
    padding: theme.spacing(8, 0, 6),
  },
  categoryName: {
    textTransform: 'uppercase',
  },
}));

export default function Categories () {

  const classes = useStyles();
  
  const categories = useSelector (state => state.categoryStore.categories);
  const currentCategory = useSelector( state => state.categoryStore.active);
  const isLoading = useSelector( state => state.categoryStore.isLoading);

  const dispatch = useDispatch();

  const setActive = (category) =>{
    dispatch(active(category));
  };


  useEffect (()=>{
    dispatch(init());
  },[dispatch]);

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <When condition={isLoading}>
        <ReactLoading type={'bubbles'} color={'grey'} width={150} />
      </When>
      <When condition={!isLoading}>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          {categories.map(category =>
            <Button
              key={category.name}
              color={currentCategory? (category.name === currentCategory.name ? null : 'primary') : null}
              onClick={()=>setActive(category)}
            >
              {category.name}
            </Button>
          )}
        </ButtonGroup>
        <div className={classes.activeContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" className={classes.categoryName} align="center" color="textPrimary" gutterBottom>
              {currentCategory? currentCategory.name : null}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {currentCategory? currentCategory.description : null}
            </Typography>
          </Container>
        </div>
      </When>
    </div>
  );

}