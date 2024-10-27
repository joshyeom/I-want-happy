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
  '@media': {
    'screen and (max-width: 1920px)': {
      flexDirection: 'row',
      gap: '93px',
    },
    'screen and (max-width: 1025px)': {
      flexDirection: 'row',
      gap: '27px',
    },
    'screen and (max-width: 376px)': {
      paddingTop: '95px',
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
    'screen and (max-width: 1920px)': {
      width: '595px',
      height: '842px',
    },
    'screen and (max-width: 1025px)': {
      width: '450px',
      height: '636px',
    },
    'screen and (max-width: 376px)': {
      width: '265px',
      height: '376px',
    },
  },
});
