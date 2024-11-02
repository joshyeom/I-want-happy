import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  display: 'flex',
  height: '100vh',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 2048px)': {
      overflow: 'hidden',
      flexDirection: 'row',
    },
    'screen and (max-width: 1668px)': {
      overflowY: 'scroll',
      flexDirection: 'column',
    },
    'screen and (max-width: 500px)': {
      overflowY: 'scroll',
      flexDirection: 'column',
    },
  },
});

export const titleBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  lineHeight: '1',
});

export const titleStyle = style({
  whiteSpace: 'pre-line',
  fontWeight: '700',
  '@media': {
    'screen and (max-width: 2048px)': {
      fontSize: '268px',
      paddingLeft: '51px',
      paddingBottom: '45px',
    },
    'screen and (max-width: 1668px)': {
      fontSize: '320px',
      marginTop: '200px',
      paddingLeft: '23px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '138px',
      marginTop: '300px',
      paddingLeft: '18px',
    },
  },
});

export const sectionStyle = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 2048px)': {
      padding: '45px',
    },
    'screen and (max-width: 1668px)': {
      padding: '0 30px 13px 30px',
    },
    'screen and (max-width: 500px)': {
      padding: '0 30px 13px 30px',
      margin: '65px 0 30px 0',
    },
  },
});

export const cardContainerStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridAutoRows: '2fr',
  '@media': {
    'screen and (max-width: 2048px)': {
      width: '766px',
      height: '1009px',
      gap: '10px',
    },
    'screen and (max-width: 1668px)': {
      width: '964px',
      height: '1176px',
      gap: '15px',
    },
    'screen and (max-width: 500px)': {
      width: '346px',
      height: '628px',
      gap: '10px',
    },
  },
});
