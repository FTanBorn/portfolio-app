import { Container, Typography, Box, Portal, Stack } from '@mui/material'
import PortfolioHeader from '../components/my-portfolio/PortfolioHeader'
import AboutSection from '../components/my-portfolio/PortfolioAbout'
import PortfolioEducation from '../components/my-portfolio/PortfolioEducation'

export default function Home() {
  return (
    <>
      <PortfolioHeader />
      <AboutSection />
      <PortfolioEducation />
    </>
  )
}
