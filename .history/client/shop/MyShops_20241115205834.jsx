/*import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'
import auth from '../lib/auth-helper'
import {listByOwner} from './api-shop.js'
import {Navigate, Link} from 'react-router-dom'
import DeleteShop from './DeleteShop'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px` ,
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  addButton:{
    float:'right'
  },
  leftIcon: {
    marginRight: "8px"
  }
}))

export default function MyShops(){
  const classes = useStyles()
  const [shops, setShops] = useState([])
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listByOwner({
      userId: jwt.user._id
    }, {t: jwt.token}, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true)
      } else {
        setShops(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  const removeShop = (shop) => {
    const updatedShops = [...shops]
    const index = updatedShops.indexOf(shop)
    updatedShops.splice(index, 1)
    setShops(updatedShops)
  }

    if (redirectToSignin) {
      return <Navigate to='/signin'/>
    }
    return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Your Shops
          <span className={classes.addButton}>
            <Link to="/seller/shop/new">
              <Button color="primary" variant="contained">
                <Icon className={classes.leftIcon}>add_box</Icon>  New Shop
              </Button>
            </Link>
          </span>
        </Typography>
        <List dense>
        {shops.map((shop, i) => {
            return   <span key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                </ListItemAvatar>
                <ListItemText primary={shop.name} secondary={shop.description}/>
                { auth.isAuthenticated().user && auth.isAuthenticated().user._id == shop.owner._id &&
                  (<ListItemSecondaryAction>
                    <Link to={"/seller/shop/edit/" + shop._id}>
                      <IconButton aria-label="Edit" color="primary">
                        <Edit/>
                      </IconButton>
                    </Link>
                    <DeleteShop shop={shop} onRemove={removeShop}/>
                  </ListItemSecondaryAction>)
                }
              </ListItem>
              <Divider/>
            </span>})}
        </List>
      </Paper>
    </div>)
}


*/


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import auth from '../lib/auth-helper';
import { listByOwner } from './api-shop.js';
import { Navigate, Link } from 'react-router-dom';
import DeleteShop from './DeleteShop';

const useStyles = makeStyles((theme) => ({

  paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      
  /root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px`,
    color: theme.palette.protectedTitle,
    fontSize: '1.2em',
  },
  addButton: {
    float: 'right',
  },
  leftIcon: {
    marginRight: '8px',
  },
}));

export default function MyShops() {
  const classes = useStyles();
  const [shops, setShops] = useState([]);
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Fetch the shops list for the logged-in user
    listByOwner(
      {
        userId: jwt.user._id,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data.error) {
        setRedirectToSignin(true); // Redirect if there's an error (e.g. no shops found or unauthorized)
      } else {
        setShops(Array.isArray(data) ? data : []); // Ensure data is an array
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [jwt.user._id, jwt.token]);

  const removeShop = (shop) => {
    const updatedShops = shops.filter((s) => s._id !== shop._id); // Filter out the deleted shop
    setShops(updatedShops); // Update state
  };

  if (redirectToSignin) {
    return <Navigate to='/signin' />;
  }

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type='title' className={classes.title}>
          Your Shops
          <span className={classes.addButton}>
            <Link to='/seller/shop/new'>
              <Button color='primary' variant='contained'>
                <Icon className={classes.leftIcon}>add_box</Icon> New Shop
              </Button>
            </Link>
          </span>
        </Typography>
        <List dense>
          {Array.isArray(shops) && shops.length > 0 ? (
            shops.map((shop, i) => (
              <span key={i}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      src={`/api/shops/logo/${shop._id}?${new Date().getTime()}`}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={shop.name} secondary={shop.description} />
                  {auth.isAuthenticated().user &&
                    auth.isAuthenticated().user._id === shop.owner._id && (
                      <ListItemSecondaryAction>
                        <Link to={`/seller/shop/edit/${shop._id}`}>
                          <IconButton aria-label='Edit' color='primary'>
                            <Edit />
                          </IconButton>
                        </Link>
                        <DeleteShop shop={shop} onRemove={removeShop} />
                      </ListItemSecondaryAction>
                    )}
                </ListItem>
                <Divider />
              </span>
            ))
          ) : (
            <Typography variant='h6' align='center'>
              No shops found.
            </Typography>
          )}
        </List>
      </Paper>
    </div>
  );
}
