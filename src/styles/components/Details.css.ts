import { style } from '@vanilla-extract/css';

export const detailsStyles = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const titleStyles = style({
  paddingBottom: '20px',
  fontSize: '66px',
  fontWeight: '800',
});

export const paragraphStyles = style({
  whiteSpace: 'pre-line',
  paddingBottom: '10px',
  fontSize: '23px',
});
