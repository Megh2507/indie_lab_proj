import React from 'react'
import {Box,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
    
    blogsContainer: {
      paddingTop: theme.spacing(4)
    },
    blogTitle: {
      fontWeight: 800,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      textAlign:"center"
    },
    subt:{
      fontWeight: 100,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      textAlign:"center"
    },
    card: {
      maxWidth: "100%",

    },
   
    crdcntnt:{
        paddingTop:"60px",
        paddingBottom:"60px"
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center"
    }
  }));
const Blog = () => {
    const classes = useStyles();
    return (
    //     <Box py={20} textAlign="center">
    //     <Typography variant="h1">blog page</Typography>
    // </Box>
    
    <Container maxWidth="lg" className={classes.blogsContainer} py={20}>
    <Typography variant="h4" className={classes.blogTitle} > 
      Blogs
    </Typography>
    <Typography variant="h6" className={classes.subt} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nullam at scelerisque eget neque nam.
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.crdcntnt}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
In netus cras quis velit.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
           
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                Author
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Oct 9, 2021
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button component={Link} to="#" style={{color:"#3067F0"}}>Read More</Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.crdcntnt}>
              <Typography gutterBottom variant="h5" component="h2">
              Heading
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
In netus cras quis velit.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                Author
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                Oct 9, 2021
                </Typography>
              </Box>
            </Box>
            <Box>
             
              <Button component={Link} to="#" style={{color:"#3067F0"}}>Read More</Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.crdcntnt}>
              <Typography gutterBottom variant="h5" component="h2">
              Heading
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
In netus cras quis velit.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
         
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Author
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                Oct 9, 2021
                </Typography>
              </Box>
            </Box>
            <Box>
        
              <Button component={Link} to="#" style={{color:"#3067F0"}}>Read More</Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.crdcntnt}>
              <Typography gutterBottom variant="h5" component="h2">
              Heading
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet,
consectetur adipiscing elit. 
In netus cras quis velit.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
     
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
               Author
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                Oct 9, 2021
                </Typography>
              </Box>
            </Box>
            <Box>
            
              <Button component={Link} to="#" style={{color:"#3067F0"}}>Read More</Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    {/* <Box my={4} className={classes.paginationContainer}>
      <Pagination count={10} />
    </Box> */}
  </Container>
    )
}

export default Blog
