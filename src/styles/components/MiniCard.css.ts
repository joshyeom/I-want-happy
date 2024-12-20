import { style } from '@vanilla-extract/css';

export const miniCardStyle = style({
  position: 'absolute', // 부모 요소 안에서 절대 위치
  top: 0,
  left: 0,
  objectFit: 'fill',
  zIndex: 1, // 스켈레톤 뒤에 배치
  width: '100%',
  height: '100%',
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '64px',
      height: '91px',
    },
    'screen and (max-width: 1668px)': {
      width: '100%',
      height: '100%',
    },
    'screen and (max-width: 500px)': {
      width: '28px',
      height: '41px',
    },
  },
});

export const miniHoverStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'black',
  transition: '0.2s ease',
  zIndex: 3,
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '64px',
      height: '91px',
    },
    'screen and (max-width: 1668px)': {
      width: '100%',
      height: '100%',
    },
    'screen and (max-width: 500px)': {
      width: '28px',
      height: '41px',
    },
  },
});
