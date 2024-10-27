import { style } from '@vanilla-extract/css';

export const toDownStyle = style({
  background: 'white',
  borderRadius: '60px',
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '100px',
  left: '50%',
  position: 'fixed',
  zIndex: 3,
  transition: 'background 0.2s ease, color 0.2s ease',
  transform: 'translate(-50%, 0) rotate(180deg)',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
