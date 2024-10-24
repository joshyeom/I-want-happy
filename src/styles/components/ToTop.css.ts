import { style } from '@vanilla-extract/css';

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
