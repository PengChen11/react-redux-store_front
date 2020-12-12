import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: '#f5f5f5',
    color: '#111',
  },
  cartLink: {
    alignSelf: 'center',
    textAlign: 'right',
  },
  appBar: {
    zIndex: 1000,
  },
}));
export default function Header (){

  const classes = useStyles();
  const items = useSelector(state => state.cartStore.itemsInCart);

  let itemsCount = 0;
  items.forEach(item=>{
    itemsCount += item.quantity;
  });


  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs>
            <Button component={Link} to="/">
              <Typography variant="h4">
                Our Store
              </Typography>
            </Button>
          </Grid>
          <Grid item xs className={classes.cartLink} >
            <Button component={Link} to="/">Cart ({itemsCount})</Button>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
}