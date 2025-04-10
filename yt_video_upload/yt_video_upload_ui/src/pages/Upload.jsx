import { Description, Title } from '@mui/icons-material'
import { Box, Container, Paper, TextField, Typography,InputAdornment } from '@mui/material'
import React from 'react'

function Upload() {
  return (
    <>
      <Container maxWidth="md">
        <Paper elevation={4} 
          sx={{
            padding:4,
            marginTop:5,
            boarderRadious:3
          }}>
            <Typography variant='h5' gutterBottom align='center' fontWeight={'bold'}>Upload Here</Typography>
            <Typography align='center'>Please upload your video in MP4 format and less than 50MB in size.</Typography>
            <Box display="flex" flexDirection="column" marginTop={3} gap={3}>
              <TextField 
                label={'Video Title'}
                variant='outlined'
                fullWidth
                InputProps={{
                  startAdornment:(<InputAdornment ><Title color='primary'></Title></InputAdornment>)
                }}
              />
              <TextField 
                label={'Video Description'}
                variant='outlined'
                fullWidth
                multiline
                InputProps={{
                  startAdornment:(<InputAdornment position='start'><Description color='primary'></Description></InputAdornment>)
                }}
              />
            </Box>
        </Paper>
      </Container>
    </>
  )
}

export default Upload