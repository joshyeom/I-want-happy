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
  '@media': {
    'screen and (max-width: 1920px)': {
      fontSize: '21px',
      padding: '65px 51px',
    },
    'screen and (max-width: 376px)': {
      fontSize: '11px',
      padding: '29px 31px',
    },
  },
});

export const allButtons = style({
  display: 'flex',
  gap: '24px',
  position: 'absolute',
  height: '130px',
  right: '-45.5%',
  zIndex: 10,
});
