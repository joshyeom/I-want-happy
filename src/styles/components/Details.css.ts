import { style } from '@vanilla-extract/css';

export const detailsStyles = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const titleBoxStyle = style({
  fontWeight: '800',
  display: 'flex',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 2048px)': {
      fontSize: '66px',
      height: '133px',
      paddingBottom: '41px',
    },
    'screen and (max-width: 1284px)': {
      fontSize: '54px',
      height: '133px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '18px',
      height: '40px',
      paddingBottom: '0px',
    },
  },
});

export const paragraphBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '400',
  '@media': {
    'screen and (max-width: 2048px)': {
      height: '170px',
      width: '972px',
      fontSize: '23px',
      lineHeight: '40px',
    },
    'screen and (max-width: 1284px)': {
      width: '885px',
      height: '172px',
      fontSize: '21px',
      lineHeight: '40px',
    },
    'screen and (max-width: 500px)': {
      width: '346px',
      height: '90px',
      lineHeight: '18px',
      fontSize: '10px',
    },
  },
});
