'use client'

import { useState } from 'react'
import { AppBar, Box, IconButton, Typography, Menu, Container, Button, MenuItem, Stack } from '@mui/material'
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'
import { useTheme } from '@/src/providers/ThemeProvider'
import { alpha } from '@mui/material/styles'

const Header = () => {
  const { toggleTheme, mode } = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)

  const pages = ['Anasayfa', 'Hizmetler']

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: theme => alpha(theme.palette.divider, 0.1)
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2
          }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <Typography
              noWrap
              sx={{
                mr: 1,
                fontWeight: 600,
                fontSize: 20,
                color: 'text.primary'
              }}
            >
              FURKAN TANDOĞAN /
            </Typography>
            <Typography
              variant='subtitle2'
              noWrap
              sx={{
                fontWeight: 400,
                color: 'text.secondary'
              }}
            >
              Front-End Developer
            </Typography>
          </Stack>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {pages.map(page => (
              <Button
                key={page}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {page}
              </Button>
            ))}
            <IconButton onClick={toggleTheme} color='default'>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton size='large' onClick={handleOpenMenu} color='default'>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} sx={{ mt: 1 }}>
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
              <IconButton onClick={toggleTheme} color='default'>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
