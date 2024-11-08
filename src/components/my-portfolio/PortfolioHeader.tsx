'use client'

import { Box, Container, Typography, Stack, IconButton } from '@mui/material'
import { Instagram, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import ImageMe from '../../../public/images/image.png'

const HeroSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        position: 'relative',
        height: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        pb: { xs: 4, md: 0 }
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          height: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* Sol taraftaki içerik */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              zIndex: 1
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                color: 'text.primary', // Tema rengine uygun text
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'primary.main'
                }
              }}
            >
              BEN FURKAN TANDOĞAN
            </Typography>

            <Typography
              variant='h1'
              sx={{
                fontWeight: 800,
                color: 'transparent',
                WebkitTextStroke: theme =>
                  `1px ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
                mb: 3,
                textTransform: 'uppercase'
              }}
            >
              FRONT-END
              <br />
              DEVELOPER
            </Typography>

            <Stack
              direction='row'
              spacing={2}
              sx={{
                mb: 4,
                color: 'text.secondary'
              }}
              divider={
                <Box
                  component='span'
                  sx={{
                    borderLeft: '2px solid',
                    borderColor: 'divider',
                    mx: 2
                  }}
                />
              }
            >
              <Typography>REACT.JS</Typography>
              <Typography>NEXT.JS</Typography>
              <Typography>TYPESCRIPT</Typography>
            </Stack>

            <Stack direction='row' spacing={2}>
              {['instagram', 'github', 'linkedin', 'twitter'].map(social => (
                <IconButton
                  key={social}
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {social === 'instagram' && <Instagram />}
                  {social === 'github' && <GitHub />}
                  {social === 'linkedin' && <LinkedIn />}
                  {social === 'twitter' && <Twitter />}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Sağ taraftaki fotoğraf */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: '50%', md: 24 },
              bottom: 0,
              transform: { xs: 'translateX(50%)', md: 'none' },
              width: { xs: '80%', md: '45%' },
              display: { xs: 'none', md: 'block' }
            }}
          >
            {/* Dekoratif Dots Pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                left: -30,
                width: '120px',
                height: '120px',
                background: theme => `radial-gradient(${theme.palette.primary.main} 1.5px, transparent 2px)`,
                backgroundSize: '10px 10px',
                opacity: 0.5,
                zIndex: 0
              }}
            />
            {/* Fotoğraf */}
            <Box
              sx={{
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: theme =>
                    `linear-gradient(160deg, 
                      ${theme.palette.background.paper} 0%, 
                      transparent 5%)`,
                  zIndex: 1
                }
              }}
            >
              <Box
                component='img'
                src={ImageMe.src}
                alt='Profile'
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxHeight: '92vh',
                  position: 'relative',
                  zIndex: 1,
                  filter: theme =>
                    theme.palette.mode === 'dark'
                      ? 'grayscale(100%) brightness(0.8) contrast(1.2) opacity(0.85)'
                      : 'grayscale(100%) brightness(0.7) contrast(1.2) opacity(0.85)',
                  mixBlendMode: 'screen',
                  transition: 'all 0.3s ease'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
