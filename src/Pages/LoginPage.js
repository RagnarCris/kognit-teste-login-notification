import React, {useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

function LoginPage(){

    //Styles
    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:'#40b441'};
    const btnstyle={margin:'8px 0', backgroundColor:'#40b441'};
    const inputStyle={margin:'4px 0', borderColor:'#40b441'};
    const typoStyle={marginTop:'10px'};
    
    // Attributes
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email === "admin@admin.com" && password === "admin")
        {
            navigate("/home");
        }
        else{
            setError("Email ou senha incorretos!")
        }
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2 style={{marginBottom: '15px'}}>Login</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField label='Username' placeholder='Enter username' onChange={e=>setEmail(e.target.value)} style={inputStyle} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' onChange={e=>setPassword(e.target.value)} style={inputStyle} type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Lembre de mim"
                />
                <Button type='submit' onSubmit={handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Entrar</Button>
                {error?<Typography color="error">{error}</Typography>:null}
                </form>
                <Typography style={typoStyle}>
                    <Link href="#" >
                        Esqueceu a senha ?
                </Link>
                </Typography>
                <Typography style={typoStyle} > Você tem uma conta? 
                    <span> </span>
                    <Link href="#" >
                        Criar conta
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginPage