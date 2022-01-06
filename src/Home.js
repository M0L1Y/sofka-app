import React from "react";
import app from "./base";
import  { Typography,Grid, Button } from "@mui/material" 
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import GavelIcon from '@mui/icons-material/Gavel';

import "./styles/styles.css"
import { width } from "@mui/system";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>BIENVENIDO </h1>
    
      <Grid container spacing={2} margin={2/5} marginBottom={2}  >
      <Grid item xs={6}>

        <Button  className="button__home button__rules" style={{background: "#FFB868", height:"100%", width:"100%"}}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <QueuePlayNextIcon style={{height:"250px", width:"250px"}}/>

              </Grid>
              <Grid item xs={12}>
                  <Typography  component="h5" variant="h5">
                    Juega y Gana!!
                  </Typography>
              </Grid>

          </Grid>

       </Button>
      </Grid>
      
      <Grid item xs={6}>
       
        <Link to="/rules" > 
        <Button  classes="button__home button__rules"  style={{background: "#A6FF68", marginRight:"15px", height:"100%", width:"100%"}}  >
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <GavelIcon style={{height:"250px", width:"250px"}}/>

              </Grid>
              <Grid item xs={12}>
              <Typography component="h5" variant="h5">
                  Ten Cuidado y mira Las Reglas
                </Typography>
              </Grid>

          </Grid>
           
          </Button>
        </Link>
       
      </Grid>
      <Grid item xs={12} justifyContent={"center"} display={"flex"}>
      <Button  variant="contained"  onClick={() => app.auth().signOut()}  >
        Cerrar sesión
        </Button>
      </Grid>
      </Grid>
    </>
  );
};

export default Home;
