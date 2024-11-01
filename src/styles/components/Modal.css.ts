import { style } from '@vanilla-extract/css';

export const ModalStyle = style({
  width: '100vw',
  height: '100vh',
  zIndex: 15,
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,0.7)',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  '@media': {
    'screen and (max-width: 2048px)': {
      flexDirection: 'row',
      gap: '93px',
    },
    'screen and (max-width: 1025px)': {
      flexDirection: 'row',
      gap: '27px',
    },
    'screen and (max-width: 500px)': {
      paddingTop: '150px',
      flexDirection: 'column',
      gap: '14px',
    },
  },
});

export const ModalContentsStyle = style({
  position: 'relative',
});

export const ModalImageStyle = style({
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '595px',
      height: '842px',
    },
    'screen and (max-width: 1025px)': {
      width: '450px',
      height: '636px',
    },
    'screen and (max-width: 500px)': {
      width: '265px',
      height: '376px',
    },
  },
});

export const oneModalImageStyle = style({
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '595px',
      height: '842px',
    },
    'screen and (max-width: 1025px)': {
      width: '595px',
      height: '842px',
    },
    'screen and (max-width: 500px)': {
      width: '343px',
      height: '487px',
    },
  },
});
