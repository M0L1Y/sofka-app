import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {


    const rulesPlay = [
        "El jugador comenzará sin dinero acumuldo",
        "E jugador al avanzar tendra opcion de retirarse y quedarse con el dinero ganado hasta el momento ",
        "Podrá jugar cuantas veces quiera si no ha acumulado dinero",
        "Si la respuesta es incorrecta el jugador perderá todo"
    ]

    return (
        <>
              
               <Grid container spacing={12}>

                   <Grid item xs={12} justifyContent="center" display="flex">
                   <h1>Jugador estas son las reglas del juego !!NUNCA LAS OLVIDES!! </h1>
                   </Grid>

                   

                  { rulesPlay.map((elmenet,index) =>
                  
                  {
                  
                    return (
                    
                        <Grid item xs={12} justifyContent="center" display="flex">

                            <Typography  component="h5" variant="h5"  style={index % 2 !== 0 ? {background:"#2f8ea5"} : {background:"#c94e4e"} }>
                                {`${(index+1)}- ${elmenet}` }
                            </Typography>  
                        </Grid>  
                    )
                  }
                  )
                    }
               </Grid>

               <Grid item xs={12} justifyContent={"center"} display={"flex"} style={{marginTop:"15px"}}>
                   <Link to="/" >
                        <Button  variant="contained" >
                            Atras
                        </Button>
                   </Link>
                </Grid>
        
        </>
    )
}

export default Rules


