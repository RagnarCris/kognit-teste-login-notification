import React, { useState } from "react";
import CustomAppBar from "../Components/CustomAppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MainPage(){

    return (
        <React.Fragment>
            <CustomAppBar/>
            <Toolbar />
            <Typography>
            Conteúdo qualquer para preencher.
            </Typography>
    </React.Fragment>
    );
}
export default MainPage;