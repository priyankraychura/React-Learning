import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { Checkbox, Box, Fab } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <Button variant="contained">Hello world</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>
<Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  {...label}
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}
/>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
    </>
  )
}

export default App
