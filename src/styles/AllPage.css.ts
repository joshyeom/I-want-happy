import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  display: 'flex',
  height: '100vh',
  justifyContent: 'space-around',
});

export const titleBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '600px',
});

export const titleStyle = style({
  fontSize: '200px',
});

export const sectionStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const cardContainerStyle = style({
  width: '600px',
  height: '95vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridAutoRows: '2fr',
  gap: '10px',
});
