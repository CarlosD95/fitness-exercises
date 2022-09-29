import React from 'react'
import { Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' backgroundColor='#FFF3F4'>
      <Stack 
        gap='40px'
        alignItems='center'
        px='40px'
        pt='24px'
      >
        <img src={Logo} alt='Logo' width='200px' height='40px' />
        <Typography
          variant='h5'
          color='textPrimary'
          align='center'
          mt='40px'
          mb='25px'
        >
          Made with ❤️ by CarlosDa95
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer