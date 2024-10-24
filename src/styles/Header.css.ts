import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  backgroundColor: 'white',
  fontSize: '21px',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  padding: '65px 51px',
});

export const allButtons = style({
  display: 'flex',
  gap: '24px',
  position: 'absolute',
  height: '130px',
  right: '-45%',
  zIndex: 10,
});
