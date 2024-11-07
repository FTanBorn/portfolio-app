'use client'

import React, { useState, MouseEvent } from 'react'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import { locales } from '../navigation'
import { useRouter, usePathname } from '@/src/navigation'
import { useSearchParams } from 'next/navigation'

const ChangeLanguage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (locale: string) => {
    setAnchorEl(null)
    changeLanguage(locale)
  }

  const changeLanguage = (language: string) => {
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
        <TranslateIcon htmlColor='white' />
      </IconButton>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose('')}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {locales.map(locale => (
          <MenuItem key={locale} onClick={() => handleClose(locale)}>
            <Typography sx={{ textTransform: 'uppercase' }}>{locale}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ChangeLanguage
