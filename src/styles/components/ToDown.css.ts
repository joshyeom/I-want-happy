import { style } from '@vanilla-extract/css';

export const toDownStyle = style({
  background: 'white',
  borderRadius: '60px',
  height: '66px',
  width: '67px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  left: '50%',
  position: 'fixed',
  zIndex: 3,
  transition: 'background 0.2s ease, color 0.2s ease',
  transform: 'translate(-50%, 0) rotate(180deg)',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  '@media': {
    'screen and (max-width: 1920px)': {
      bottom: '249px',
    },
    'screen and (max-width: 1023px)': {
      bottom: '398px',
    },
    'screen and (max-width: 376px)': {
      bottom: '136px',
    },
  },
});
