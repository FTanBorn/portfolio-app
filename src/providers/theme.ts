// src/theme/theme.ts
import { ThemeOptions } from '@mui/material/styles'

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Daha canlı bir mavi
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#7c3aed', // Modern bir mor
      light: '#8b5cf6',
      dark: '#6d28d9',
      contrastText: '#fff'
    },
    background: {
      default: '#f8fafc', // Daha yumuşak bir arka plan
      paper: '#ffffff'
    },
    text: {
      primary: '#0f172a', // Koyu lacivert
      secondary: '#475569' // Gri-mavi
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706'
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb'
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669'
    },
    divider: 'rgba(0, 0, 0, 0.08)' // Daha hafif ayırıcı çizgi
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Inter fontu eklendi
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8
          }
        }
      }
    }
  }
}

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Canlı mavi
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#8b5cf6', // Mor
      light: '#a78bfa',
      dark: '#7c3aed',
      contrastText: '#fff'
    },
    background: {
      // Çok daha koyu arka planlar
      default: '#030712', // Neredeyse siyah
      paper: '#111827' // Çok koyu gri
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706'
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb'
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669'
    },
    divider: 'rgba(255, 255, 255, 0.05)', // Daha subtle ayırıcı çizgi
    action: {
      active: '#f8fafc',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#f8fafc'
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#f8fafc'
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#f8fafc'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#f8fafc'
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#f8fafc'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#f8fafc'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
      color: '#e2e8f0'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#cbd5e1'
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f172a', // Biraz daha açık bir ton
          backgroundImage: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(59, 130, 246, 0.08)' // primary rengin hover efekti
          }
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.12)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b', // Biraz daha açık bir ton
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          backgroundImage: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.12)'
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6'
            }
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0f172a',
          backgroundImage: 'none'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.05)'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }
      }
    }
  }
}
