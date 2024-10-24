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
  paddingLeft: '71px',
  paddingBottom: '74px',
});

export const buttonStyle = style({
  borderRadius: '138px',
  height: '116px',
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '100px',
  fontStyle: 'normal',
  fontWeight: '1000',
  backgroundColor: 'white',
  border: 'none',
  transition: 'background 0.2s ease, color 0.2s ease',
  padding: '0 36px',
  ':hover': {
    backgroundColor: '#0b00ff',
    color: '#ffffff',
  },
  ':focus': {
    outline: 'none',
  },
});
