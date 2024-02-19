import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate =useNavigate();
    return (
        <Box sx={{ backgroundColor: "#d99898", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "50px", fontFamily: "Lucida Handwriting" }}>Please forgive me 😔</Typography>
            <Button
                variant='contained'
                onClick={()=>{ navigate("/Next1")}}
                sx={{
                    mt: 3, backgroundColor: "white",
                    color: 'black',
                    "&:hover": {
                        backgroundColor: 'rgb(7, 177, 77, 0.42)',
                        color:"white"
                    }
                }}>Click here if you not want to forgive</Button>
        </Box>
    )
}

export default Home;
