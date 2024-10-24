const textMotion = {
  title: 'Text Based Motion Graphic Design',
  first:
    '본 연구는 모션 그래픽 디자인이 감정과 심리적 반응에 미치는 영향을 탐구하는 것을 목적으로 한다.',
  second:
    '이를 위해, 시각적 요소가 사람들의 정서 상태에 미치는 영향을 분석하고,\n모션 그래픽이 시각적 자극을 통해 심리적 반응에 미치는 영향을 검증한다',
};

const abstractMotion = {
  title: 'Abstract Motion Graphic Design',
  first:
    '본 연구는 모션 그래픽 디자인이 감정과 심리적 반응에 미치는 영향을 탐구하는 것을 목적으로 한다.',
  second:
    '이를 위해, 시각적 요소가 사람들의 정서 상태에 미치는 영향을 분석하고,\n모션 그래픽이 시각적 자극을 통해 심리적 반응에 미치는 영향을 검증한다',
};

export const fetchDetails = (path: string) => {
  return path === 'happy' ? textMotion : abstractMotion;
};
