'use client'

import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import { locales } from '../navigation'
import { useRouter, usePathname } from '@/src/navigation'
import { useSearchParams } from 'next/navigation'

const ChangeLanguage = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (local: any) => {
    setAnchorEl(null)
    changeLanguage(local)
  }

  const changeLanguage = (language: string) => {
    debugger
    const newSearchParams = new URLSearchParams(searchParams)
    router.push(`${pathname}?${newSearchParams.toString()}`, { locale: language })
  }

  return (
    <>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {<TranslateIcon htmlColor='white' />}
      </IconButton>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {locales.map((locale: any) => (
          <MenuItem key={locale} onClick={() => handleClose(locale)}>
            <Typography sx={{ textTransform: "uppercase"}}>
            {locale}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ChangeLanguage
