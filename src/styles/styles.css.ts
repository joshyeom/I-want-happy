import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
  paddingLeft: '40px',
});

export const sectionStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingBottom: '88px',
});

export const buttonStyle = style({
  borderRadius: '100px',
  color: '#000000',
  fontSize: '100px',
  fontWeight: 700,
  lineHeight: '95px',
  textTransform: 'none',
  backgroundColor: 'white',
  border: 'none',
  transition: 'background 0.2s ease, color 0.2s ease',
  padding: '0 30px 7px 30px',
  ':hover': {
    backgroundColor: '#0b00ff',
    color: '#ffffff',
  },
  ':focus': {
    outline: 'none',
  },
});

export const headerStyle = style({
  WebkitAlignItems: 'center',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  left: '51px',
  top: '65px',
});

export const headerButtonStyle = style({
  paddingRight: '20px',
});

export const gridMainStyle = style({
  padding: '150px 18px 100px 18px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

export const cardStyle = style({
  position: 'relative',
  width: '19.45%',
  height: '345.61px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'rgba(245, 245, 245, 1)',
});

export const cardHoverStyle = style({
  position: 'absolute',
  height: '200px',
  width: '150.6px',
  backgroundColor: 'rgba(34, 34, 34, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  zIndex: 3,
  transition: 'opacity 0.15s ease',
});

export const cardHoverVisibleStyle = style({
  opacity: 1,
});

export const toTopStyle = style({
  background: 'rgba(0, 0, 0, 0.1)',
  borderRadius: '60px',
  color: 'rgba(0, 0, 0, 0.3)',
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '40px',
  right: '40px',
  position: 'fixed',
  zIndex: 3,
  transition: 'background 0.2s ease, color 0.2s ease',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export const ModalStyle = style({
  width: '100vw',
  height: '100vh',
  zIndex: 3,
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,0.7)',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '100px',
});
