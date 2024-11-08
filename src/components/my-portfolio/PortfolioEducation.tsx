'use client'

import { Box, Container, Typography, Grid, Card, Chip, Stack } from '@mui/material'
import { School, Code, LocationOn, Email, Phone, Language } from '@mui/icons-material'

const PortfolioEducation = () => {
  const skills = [
    'React',
    'TypeScript',
    'Vue',
    'JavaScript',
    'HTML',
    'CSS',
    'Next.js',
    'Flutter',
    'Material UI',
    'Tailwind CSS'
  ]

  const contactInfo = [
    { icon: Email, text: 'furkantandogan81@gmail.com' },
    { icon: Phone, text: '(531) 986 14 40' },
    { icon: LocationOn, text: 'İstanbul, Türkiye' }
  ]

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 8
      }}
    >
      <Container maxWidth='xl'>
        {/* Başlık */}
        <Typography
          variant='h2'
          sx={{
            mb: 6,
            fontWeight: 700,
            color: 'text.primary',
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
          Özgeçmiş
        </Typography>

        {/* İletişim Bilgileri */}
        <Card sx={{ mb: 4, p: 3, bgcolor: 'background.paper' }}>
          <Stack direction='row' spacing={3} flexWrap='wrap'>
            {contactInfo.map((info, index) => (
              <Stack key={index} direction='row' spacing={1} alignItems='center'>
                <info.icon color='primary' />
                <Typography>{info.text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Card>

        <Grid container spacing={4}>
          {/* Sol Kolon */}
          <Grid item xs={12} md={8}>
            {/* Deneyim Kartı */}
            <Card sx={{ mb: 4, p: 3, bgcolor: 'background.paper' }}>
              <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
                İş Deneyimi
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    title: 'Front-End Geliştirici',
                    company: 'Milkiile.com',
                    date: '05/2024 - Present',
                    description:
                      'MUI, Next.js, React ve TypeScript teknolojileri kullanılarak kullanıcı dostu ve yüksek performanslı arayüzler geliştirildi.',
                    icon: Code
                  },
                  {
                    title: 'Front-End Geliştirici',
                    company: 'Apply.askuni.com',
                    date: '02/2022 - Present',
                    description: 'Vue, JavaScript, Next.js ve React kullanılarak uygulama izleme sistemi geliştirildi.',
                    icon: Code
                  }
                ].map((job, index) => (
                  <Box key={index}>
                    <Stack direction='row' spacing={2} alignItems='flex-start'>
                      <Box
                        sx={{
                          p: 1,
                          bgcolor: 'primary.main',
                          borderRadius: 1,
                          color: 'white',
                          lineHeight: 0
                        }}
                      >
                        <job.icon />
                      </Box>
                      <Box>
                        <Typography variant='h6'>{job.title}</Typography>
                        <Typography color='text.secondary' gutterBottom>
                          {job.company} | {job.date}
                        </Typography>
                        <Typography variant='body2'>{job.description}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Card>

            {/* Eğitim Kartı */}
            <Card sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
                Eğitim
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    school: 'Anadolu Üniversitesi',
                    degree: 'Yönetim Bilişim Sistemleri',
                    date: '2022 - Devam Ediyor'
                  },
                  {
                    school: 'İstanbul Gelişim Üniversitesi',
                    degree: 'Bilgisayar Programcılığı',
                    date: '2018 - 2021'
                  }
                ].map((edu, index) => (
                  <Box key={index}>
                    <Stack direction='row' spacing={2} alignItems='flex-start'>
                      <Box
                        sx={{
                          p: 1,
                          bgcolor: 'primary.main',
                          borderRadius: 1,
                          color: 'white',
                          lineHeight: 0
                        }}
                      >
                        <School />
                      </Box>
                      <Box>
                        <Typography variant='h6'>{edu.school}</Typography>
                        <Typography color='text.secondary'>
                          {edu.degree} | {edu.date}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>

          {/* Sağ Kolon */}
          <Grid item xs={12} md={4}>
            {/* Yetenekler Kartı */}
            <Card sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
                Yetenekler
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color='primary'
                    variant='outlined'
                    sx={{
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  />
                ))}
              </Box>
            </Card>

            {/* Dil Kartı */}
            <Card sx={{ p: 3, mt: 4, bgcolor: 'background.paper' }}>
              <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
                Diller
              </Typography>
              <Stack spacing={2}>
                {[
                  { lang: 'Türkçe', level: 'Anadil' },
                  { lang: 'İngilizce', level: 'Acemi' }
                ].map((lang, index) => (
                  <Stack key={index} direction='row' spacing={1} alignItems='center'>
                    <Language color='primary' />
                    <Typography>
                      {lang.lang} - {lang.level}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PortfolioEducation
