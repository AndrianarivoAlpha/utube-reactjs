import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <Stack textAlign={ "center" }>
        <Typography variant="h4">
          Fastest Youtube Downloader
        </Typography>
        <Typography variant="p">
          Convert and download Youtube videos in MP3, MP4 for free.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Header