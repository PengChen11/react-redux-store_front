import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {active, init} from '../../store/categories.js';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

  const dispatch = useDispatch();

  const setActive = (category) =>{
    dispatch(active(category));
  };

  const initialize = useCallback((categories) => {
    dispatch(init(categories));
  },[dispatch]);

  useEffect (()=>{
    const fakeFetchData = [
      {
        name: 'food',
        description: 'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.',
      },
      {
        name: 'electronics',
        description: 'Electronic components, devices, or equipment',
      },
    ];

    initialize(fakeFetchData);

  },[initialize]);

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
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
    </div>
  );

}