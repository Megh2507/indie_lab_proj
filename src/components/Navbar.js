import React, { Fragment ,useState } from 'react'
import { Container,Paper,Box, Avatar, Typography, TextField, Button ,AppBar,Toolbar,IconButton,Menu,MenuItem} from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const useStyles = makeStyles(theme=>({
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")]:{
            display:"flex",
        }
    },
    sectionMobile : {
        display:"flex",
        [theme.breakpoints.up("md")]:{
            display:"none",
        }
    }
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '',
    width:'100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })); 
const Navbar = () => {

const classes = useStyles();
const [mobileMenuAnchorEl,setMobileMenuAnchorEl] = useState(null)
const isMobileMenuOpen = Boolean(mobileMenuAnchorEl)
const openMobileMenu =(event) =>{
    setMobileMenuAnchorEl(event.currentTarget)
}
const closeMobileMenu = () =>{
    setMobileMenuAnchorEl(null)
}
const mobileMenu=(
    <Menu anchorEl={mobileMenuAnchorEl} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
    <MenuItem component={Link} to="/about" onClick={closeMobileMenu}>About</MenuItem>
    <MenuItem component={Link} to="#" onClick={closeMobileMenu}>Workshops<ArrowDropDownIcon/></MenuItem>
    <MenuItem component={Link} to="#" onClick={closeMobileMenu}>Webiners<ArrowDropDownIcon/></MenuItem>
    <MenuItem component={Link} to="/community" onClick={closeMobileMenu}>Community</MenuItem>
    <MenuItem component={Link} to="/blog" onClick={closeMobileMenu}>Blog</MenuItem>
    <MenuItem component={Link} to="#" onClick={closeMobileMenu}>Student Login</MenuItem>
    </Menu>
    
)
    return (
 <Fragment>
            <div>
            <AppBar  style={{ background: '#B3E3FD'}}> 
                <Toolbar >
                    <Typography variant="h5" style={{color:"black",flexGrow:1}}>
                        Indie Labs
                    </Typography>
                    <Search>
            <SearchIconWrapper>
              <SearchIcon style={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         

                    <div className={classes.sectionDesktop}>
                    
                        <Button component={Link} to="/about"> <Typography style={{ textTransform: 'none' }}>About</Typography></Button>
                        <Button> <Typography style={{ textTransform: 'none' }}>Workshops</Typography> <ArrowDropDownIcon/></Button>
                        <Button> <Typography style={{ textTransform: 'none' }}>Webiners</Typography><ArrowDropDownIcon/></Button>
                        <Button component={Link} to="/community"> <Typography style={{ textTransform: 'none' }}>Community</Typography></Button>
                        <Button component={Link} to="/blog"> <Typography style={{ textTransform: 'none' }}>Blog</Typography></Button>
                        <Button style={{
                            height:"30px",
                            backgroundColor:"#FAAB00",
                            borderRadius:"15px"
                        }}>
                        <AccountCircle/> <Typography style={{ textTransform: 'none' }}>Student Login</Typography>
                        </Button>
                       
                    </div>
                    <div className={classes.sectionMobile}>
                    <IconButton onClick={openMobileMenu}>
                        <MoreVertOutlinedIcon/>
                    </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            {mobileMenu}

            
        </div>
 </Fragment>
    );
}

export default Navbar
