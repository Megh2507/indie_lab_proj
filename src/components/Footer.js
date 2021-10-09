import React from 'react'
import {Container,Grid,Box,Link,Typography} from '@material-ui/core'

const Footer = () => {
    return (
        <div>
            <footer>
                <Box
                px={{xs:3,sm:10}}
                py={{xs:5,sm:10}}
                style={{marginTop:"100%",
                border: "3px solid black"
            }}
                >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box><Typography variant="h4">Indie Labs</Typography></Box>
                    </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant="h5">HELP</Typography></Box>
                            <Box><Link href="" color="inherit">Contact Us</Link></Box>
                            <Box><Link href="/about" color="inherit">About Us</Link></Box>
                            <Box><Link href="" color="inherit">Tutorials</Link></Box>
                            <Box><Link href="" color="inherit">Our Values</Link></Box>
                            <Box><Link href="" color="inherit">Terms of use</Link></Box>
                            <Box><Link href="" color="inherit">Give us feedback</Link></Box>
                            <Box><Link href="" color="inherit">Privacy Policy</Link></Box>


                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant="h5">YOUR ACCOUNT</Typography></Box>
                            <Box><Link href="" color="inherit">Sign In</Link></Box>
                            <Box><Link href="/about" color="inherit">Register</Link></Box>
                            <Box><Link href="" color="inherit">Learning Path</Link></Box>
                        </Grid>
                    

                    </Grid>

                </Container>
                    
                </Box>
            </footer>
            
        </div>
    )
}

export default Footer
