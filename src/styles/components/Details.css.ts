import { style } from '@vanilla-extract/css';

export const detailsStyles = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const titleStyle = style({
  fontSize: '66px',
  fontWeight: '800',

  '@media': {
    'screen and (max-width: 1920px)': {
      fontSize: '66px',
    },
    'screen and (max-width: 1024px)': {
      fontSize: '54px',
    },
    'screen and (max-width: 376px)': {
      fontSize: '18px',
    },
  },
});

export const paragraphStyles = style({
  whiteSpace: 'pre-line',
  fontWeight: '400',
  lineHeight: '40px',
  fontSize: '23px',
  '@media': {
    'screen and (max-width: 1921px)': {
      fontSize: '23px',
    },
    'screen and (max-width: 1025px)': {
      fontSize: '21px',
    },
    'screen and (max-width: 376px)': {
      fontSize: '10px',
    },
  },
});
