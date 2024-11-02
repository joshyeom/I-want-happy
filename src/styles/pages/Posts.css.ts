import { style } from '@vanilla-extract/css';

export const gridSectionStyle = style({
  padding: '150px 18px 100px 18px',
  display: 'grid',
  '@media': {
    'screen and (max-width: 2048px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '20px',
    },
    'screen and (max-width: 1668px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
    },
    'screen and (max-width: 500px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '10px',
    },
  },
});

export const mainStyle = style({
  overflow: 'hidden',
  position: 'relative',
});
