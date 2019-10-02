import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { MyInputBase } from './styles';
import { MyButton } from '../my-button';

const useStyles = makeStyles(theme => ({
  separator: {
    paddingTop: '20px',
  },
}));

export const FormVcard = ({ handleSubmit }) => {
  const classes = useStyles();

  return (

    <form noValidate autoComplete="off" onSubmit={handleSubmit}>

      {/* Titulo */}

      <Grid item xs={12}>

        <Typography variant="h5" component="h3">
          Código QR vCard
        </Typography>

      </Grid>

      {/* Nombre */}

      <Grid item container className={classes.separator}>

        <Grid item xs={12} md={2}>Tu Nombre:</Grid>

        <Grid item container xs={12} md={10} justify="space-between" spacing={2}>
          
          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="firstName" placeholder="Nombre" />

          </Grid>

          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="lastName" placeholder="Apellido" />

          </Grid>

        </Grid>

      </Grid>

      {/* Números */}

      <Grid item container className={classes.separator}>

        <Grid item xs={12} md={2}>Números:</Grid>

        <Grid item container xs={12} md={10} justify="space-between" spacing={2}>
          
          <Grid item xs={12}>

            <MyInputBase defaultValue="" name="cellPhone" placeholder="Teléfono móvil" />

          </Grid>

          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="homePhone" placeholder="Teléfono fijo" />

          </Grid>

          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="homeFax" placeholder="Fax" />

          </Grid>

        </Grid>

      </Grid>

      {/* Email */}

      <Grid item container className={classes.separator} xs={12} spacing={2}>

        <Grid item xs={12} md={2}>Email:</Grid>

        <Grid item xs={12} md={10}>

          <MyInputBase defaultValue="" name="email" placeholder="tu@email.com" />

        </Grid>

      </Grid>

      {/* Empresa */}

      <Grid item container className={classes.separator}>

        <Grid item xs={12} md={2}>Empresa:</Grid>

        <Grid item container xs={12} md={10} justify="space-between" spacing={2}>
          
          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="organization" placeholder="Empresa" />

          </Grid>

          <Grid item xs={12} md={6}>

            <MyInputBase defaultValue="" name="job" placeholder="Puesto" />

          </Grid>

        </Grid>

      </Grid>

      {/* Dirección */}

      <Grid item container className={classes.separator} xs={12} spacing={2}>

        <Grid item xs={12} md={2}>Dirección:</Grid>

        <Grid item xs={12} md={10}>

          <MyInputBase defaultValue="" name="address" placeholder="" />

        </Grid>

      </Grid>

      {/* Ciudad */}

      <Grid item container className={classes.separator}>

        <Grid item xs={12} md={2}>Tu Ciudad:</Grid>

        <Grid item container xs={12} md={10} justify="space-between" spacing={2}>
          
          <Grid item xs={12} md={8}>

            <MyInputBase defaultValue="" name="city" placeholder="" />

          </Grid>

          <Grid item xs={12} md={4}>

            <MyInputBase defaultValue=""  name="postalCode" placeholder="C.P." />

          </Grid>

        </Grid>

      </Grid>

      {/* Estado */}

      <Grid item container className={classes.separator} xs={12} spacing={2}>

        <Grid item xs={12} md={2}>Estado:</Grid>

        <Grid item xs={12} md={10}>

          <MyInputBase defaultValue="" name="state" placeholder="" />

        </Grid>

      </Grid>

      {/* País */}

      <Grid item container className={classes.separator} xs={12} spacing={2}>

        <Grid item xs={12} md={2}>País:</Grid>

        <Grid item xs={12} md={10}>

          <MyInputBase defaultValue="" name="country" placeholder="" />

        </Grid>

      </Grid>

      {/* Sitio web */}

      <Grid item container className={classes.separator} xs={12} spacing={2}>

        <Grid item xs={12} md={2}>Sitio web:</Grid>

        <Grid item xs={12} md={10}>

          <MyInputBase defaultValue="" name="website" placeholder="www.tu-sitio-web.com" />

        </Grid>

      </Grid>

      {/* Boton */}

      <Grid item xs={12} className={classes.separator}>

        <MyButton title="CREAR CÓDIGO QR" />

      </Grid>

    </form>

  );
  
}
