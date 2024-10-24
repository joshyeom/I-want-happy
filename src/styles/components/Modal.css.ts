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
  gap: '100px',
});

export const ModalContentsStyle = style({
  position: 'relative',
});
