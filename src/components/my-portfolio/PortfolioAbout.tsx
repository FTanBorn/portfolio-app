'use client'

import { Box, Container, Typography, Grid, Card } from '@mui/material'
import { Code, Briefcase, GraduationCap, Coffee } from 'lucide-react'

const AboutSection = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 8,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth='xl'>
        {/* Başlık */}
        <Typography
          variant='h2'
          sx={{
            mb: 6,
            fontWeight: 700,
            background: theme =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff, #94a3b8)'
                : 'linear-gradient(45deg, #0f172a, #334155)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hakkımda
        </Typography>

        {/* Ana içerik */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant='body1'
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Front-end geliştirici olarak modern web teknolojileri ile çalışmaktan keyif alıyorum. React ve Next.js
                ekosisteminde uzmanlaşmış olmakla birlikte, TypeScript kullanarak tip güvenli ve ölçeklenebilir
                uygulamalar geliştiriyorum.
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.primary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Kullanıcı deneyimini ön planda tutarak, performanslı ve erişilebilir web uygulamaları geliştirmeyi
                hedefliyorum. Material UI ve Tailwind CSS gibi modern UI kütüphaneleri ile çalışma konusunda
                deneyimliyim.
              </Typography>
            </Box>
          </Grid>

          {/* Bilgi Kartları */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    bgcolor: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <Code size={24} style={{ marginBottom: '1rem' }} />
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Teknolojiler
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    React, Next.js, TypeScript, Material UI, Tailwind CSS
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    bgcolor: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <Briefcase size={24} style={{ marginBottom: '1rem' }} />
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Deneyim
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    3+ yıl profesyonel geliştirme deneyimi
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    bgcolor: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <GraduationCap size={24} style={{ marginBottom: '1rem' }} />
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Eğitim
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Bilgisayar Mühendisliği
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    bgcolor: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <Coffee size={24} style={{ marginBottom: '1rem' }} />
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    İlgi Alanları
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    UI/UX, Web Performance, Accessibility
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection
