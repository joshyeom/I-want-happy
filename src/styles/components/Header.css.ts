import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  width: '100vw',
  backgroundColor: 'white',
  fontSize: '21px',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  padding: '65px 51px',
  zIndex: 10,
});

export const allButtons = style({
  display: 'flex',
  gap: '24px',
  position: 'absolute',
  height: '130px',
  right: '-45%',
  zIndex: 10,
});
