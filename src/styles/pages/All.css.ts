import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  overflow: 'hidden',
  display: 'flex',
  height: '100vh',
  justifyContent: 'space-between',
});

export const titleBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  lineHeight: '1',
});

export const titleStyle = style({
  whiteSpace: 'pre-line',
  fontSize: '268px',
  fontWeight: '700',
  paddingLeft: '51px',
});

export const sectionStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '45px',
});

export const cardContainerStyle = style({
  width: '600px',
  height: '95vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridAutoRows: '2fr',
  gap: '10px',
});
