import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const sectionStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '24px',
  paddingBottom: '74px',
  '@media': {
    'screen and (max-width: 1920px)': {
      paddingLeft: '71px',
      justifyContent: 'center',
    },
    'screen and (max-width: 1023px)': {
      paddingLeft: '71px',
      justifyContent: 'center',
    },
    'screen and (max-width: 500px)': {
      paddingLeft: '39px',
      paddingTop: '67px',
      justifyContent: 'flex-start',
    },
  },
});

export const buttonStyle = style({
  borderRadius: '138px',
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '1000',
  backgroundColor: 'white',
  border: 'none',
  transition: 'background 0.2s ease, color 0.2s ease',
  ':hover': {
    backgroundColor: '#0b00ff',
    color: '#ffffff',
  },
  ':focus': {
    outline: 'none',
  },
  '@media': {
    'screen and (max-width: 1920px)': {
      fontSize: '100px',
      lineHeight: 'normal',
      padding: '17px 36px',
      height: '116px',
    },
    'screen and (max-width: 1023px)': {
      fontSize: '100px',
      lineHeight: 'normal',
      padding: '8px 33px',
      height: '116px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '32px',
      lineHeight: '40px',
      padding: '8px 16px',
      height: '40px',
    },
  },
});
