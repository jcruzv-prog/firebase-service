'use client'
import { CssBaseline } from "@mui/material";
import Container from "@mui/system/Container";
import { Box } from "@mui/system";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {TextField} from '@mui/material'
import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from "next/image";
import Link from "next/link";
export default function Login(){
    let hStyle={'fontSize':'4rem', 'color':'azure' };
    let pstyle = {'fontSize':'1.5rem','color':'#CCFFFF',};
    let bigpStyle = {'fontSize':'2rem', 'fontWeight':'700', 'font-family':'"sans-serif"'  };
    let textFieldStyle = {'marginBottom':'1em', backgroundColor:'white', backgroundRepeat:'no-repeat', borderRadius:'7px'}
    return (
        <Container component='main' maxWidth='xs' >
        <CssBaseline />
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop:8,
            
        }}>
            <Image 
              src={'/support.svg'}
              alt="Support client picture"
              width='70'
              height='70'
            />
        <Typography component='h1' variant='h5' sx={{mt:2}}>Sign in to Resolver</Typography>
        <Box component='form' sx={{mt:1, background:'#f6f8fa', px:'15px', borderRadius:5, borderWidth:'2px', borderColor:'silver', borderStyle:'solid'}}>
            <TextField 
            label='Email'
            margin="normal"
            id='email'
            name='email'
            autoComplete="email"
            autoFocus
            required
            fullWidth
            sx={{background:'white'}}
            />
           <TextField
            label='Password'
            margin="normal"
            id='password'
            name='password'
            autoComplete="current-password"
            required
            fullWidth
            type='password'
            sx={{background:'white'}}
            />
            <FormControlLabel 

                control={<Checkbox value='remember' 
                sx={{'&.MuiCheckbox-root':{color:'red', }}}
                />}
                
                label='Remember me'
            />
            <Button 
            type='submit'
            fullWidth
            variant="contained"
            sx={{my:3}}
            >
             Sign in
            </Button>
        </Box>

            <Grid container xs={11}>
                <Grid xs>
                    <Link href='#' variant='body2'>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid >
                    <Link href='#' variant='body2'>
                        Sign up 
                    </Link>
                </Grid>
            </Grid>
     
        </Box>
    </Container>
    )
}