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
    'screen and (max-width: 2048px)': {
      fontSize: '21px',
      padding: '65px 51px',
    },
    'screen and (max-width: 500px)': {
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
  right: '-24%',
  zIndex: 10,
});

export const allHeaderStyle = style({
  width: '100vw',
  backgroundColor: 'white',
  fontSize: '21px',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  padding: '65px 51px',
  zIndex: 10,
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '50vw',
      fontSize: '21px',
      padding: '65px 51px',
    },
    'screen and (max-width: 1025px)': {
      width: '100vw',
      fontSize: '21px',
      padding: '65px 51px',
    },
    'screen and (max-width: 500px)': {
      width: '100vw',
      fontSize: '11px',
      padding: '29px 31px',
    },
  },
});
