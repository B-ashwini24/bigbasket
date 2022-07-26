import React from 'react'
import { Menu } from 'antd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate=useNavigate()
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid" style={{color:'blue'}}>
    <img  style={{height:'50px',width:'50px'}} src="https://www.adgully.com/img/800/201808/bigbasket.jpg"/>
    <a class="navbar-brand" href="#" style={{color:'blue'}}>BigBasket</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" style={{color:'blue'}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:'blue'}} href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:'blue'}} href="/signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:'blue'}} href="/login">Login</a>
        </li>
      </ul>
    </div>
    020-345678<LocalPhoneIcon/>&nbsp;&nbsp;&nbsp;
     Pune<LocationOnIcon/>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
      </Search>
    <ShoppingCartIcon  onClick={()=>navigate("/cart")} onmouseover={()=>navigate("/cart")}/>
  </div>
</nav>
  )
}

export default Navbar