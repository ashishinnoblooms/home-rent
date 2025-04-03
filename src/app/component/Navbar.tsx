import { Grid, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <>
    <Grid container>
        <Grid size={{xs:12,md:12}} sx={{height:"100px",width:"600px",marginBottom:"90px"}}>
            <AppBar position="fixed"  color="primary" sx={{marginTop:"50px", width:"1500px",paddingRight:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Toolbar>
                <Typography variant="h6">
                  
                </Typography>
              </Toolbar>
            </AppBar>


        </Grid>
    </Grid>
    </>
  )
}

export default Navbar