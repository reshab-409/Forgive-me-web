import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Next1 = () => {

    const [state, setState] = useState(false)
    const Clicked = () => {
        setState(true)
    }
    const arr = [];
    for (let i = 0; i <= 10000 - 1; i++) {
        arr.push(i)
    };
    return (
        <Box sx={{ backgroundColor: 'rgb(7, 177, 77, 0.42)', height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Button
                onClick={Clicked}
                sx={{
                    mb: 3,
                    mt: 2
                    , backgroundColor: "white",
                    color: 'black',
                    "&:hover": {
                        backgroundColor: '#efc1c1',
                        color: "black"
                    }
                }}>
                Press to run the forgiving slogan
            </Button>
            <Box sx={{ minHeight: "300px", minWidth: { xs: "400px", xl: "500px" }, backgroundColor: "white", overflow: "scroll" }}>
                {state && <Box>
                    {arr.map((user) => (
                        <Typography>Please forgive me 😔</Typography>
                    ))}
                </Box>}
                <img src='https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif' alt='img'/>
            </Box>
        </Box>
    )
}

export default Next1
