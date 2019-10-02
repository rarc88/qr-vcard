import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import vCardJS from 'vcards-js';
import { saveSvgAsPng } from 'save-svg-as-png';

import { FormVcard } from '../../components/form-vcard';
import { QR }  from '../../components/qr';

import { MyAnchor } from './styles'

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: '20px',
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    center: {
        textAlign: 'center',
    },
}));

export const Vcard = () => {

    const classes = useStyles();

    const [vcard, setVcard] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
    
        const data = new FormData(e.target);

        const vCard = vCardJS();

        vCard.firstName = data.get('firstName');
        vCard.lastName = data.get('lastName');
        vCard.cellPhone = data.get('cellPhone');
        vCard.homePhone = data.get('homePhone');
        vCard.homeFax = data.get('homeFax');
        vCard.email = data.get('email');
        vCard.organization = data.get('organization');
        vCard.title = data.get('job');
        vCard.homeAddress.street = data.get('address');
        vCard.homeAddress.city = data.get('city');
        vCard.homeAddress.postalCode = data.get('postalCode');
        vCard.homeAddress.stateProvince = data.get('state');
        vCard.homeAddress.countryRegion = data.get('country');
        vCard.url = data.get('website');

        setVcard(vCard.getFormattedString());
    
    }

    const downloadQR = (e) => {

        e.preventDefault();

        const qr = document.getElementById('qr');
        
        saveSvgAsPng(qr, 'qr-vcard.png', {scale: 5});

    }

    return (

        <Grid container justify="center" className={classes.root} spacing={2}>

            <Grid item xs={12} md={8} lg={6}>

                <Paper className={classes.paper}>

                    <FormVcard handleSubmit={handleSubmit} />

                </Paper>

            </Grid>

            <Grid item xs={12} md={4} lg={3} xl={2}>

                <Paper className={classes.paper}>

                    <div className={classes.center}>

                        <QR value={vcard} />

                    </div>

                    <MyAnchor href="/" onClick={downloadQR}> Descargar QR </MyAnchor>

                </Paper>

            </Grid>

        </Grid>

    )

}