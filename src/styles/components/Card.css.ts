import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  position: 'relative',
  width: '100%',
  height: '456px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'rgba(245, 245, 245, 1)',
});

export const cardHoverStyle = style({
  position: 'absolute',
  width: '219px',
  height: '310px',
  backgroundColor: 'rgba(34, 34, 34, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  zIndex: 3,
  transition: 'opacity 0.15s ease',
});

export const cardHoverVisibleStyle = style({
  opacity: 1,
});
