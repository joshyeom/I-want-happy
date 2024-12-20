const textMotion = [
  'Text Based Motion Graphic Design',
  '텍스트 기반의 모션그래픽 디자인을 지속적으로 노출함으로써',
  '사람들의 정서 상태에 미치는 영향을 분석하고,',
  (
    <>
      <strong>모션 그래픽이 시각적 자극을 통해 심리적 반응에 미치는 영향을 검증</strong>한다. 
    </>
  )
];

const abstractMotion = [
  'Abstract Motion Graphic Design',
  '참가자들에게 텍스트 없이 추상적인 시각 요소와 움직임으로',
  '구성된 모션 그래픽 디자인을 전송한다.',
  (
    <>
      이를 통해 <strong>추상적인 시각적 자극이 정서적 반응에 미치는 영향</strong>을 파악한다.
    </>
  )
]

export const fetchDetails = (path: string) => {
  return path === 'happy' ? textMotion : abstractMotion;
};
