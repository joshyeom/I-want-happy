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
  position: 'absolute',
  height: '130px',
  zIndex: 10,
  '@media': {
    'screen and (max-width: 2048px)': {
      gap: '24px',
      flexDirection: 'row',
      right: '-24%',
    },
    'screen and (max-width: 1668px)': {
      gap: '16px',
      flexDirection: 'row',
    },
    'screen and (max-width: 500px)': {
      gap: '12px',
      flexDirection: 'column',
      top: '30px',
      right: '-7.5%',
    },
  },
});

export const rangeButton = style({
  '@media': {
    'screen and (max-width: 500px)': {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
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
    'screen and (max-width: 1668px)': {
      width: '50vw',
      fontSize: '16px',
      padding: '30px 51px',
    },
    'screen and (max-width: 500px)': {
      width: '50vw',
      fontSize: '11px',
      padding: '29px 31px',
    },
  },
});
