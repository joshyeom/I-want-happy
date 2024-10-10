import { useNavigate } from 'react-router-dom';

export const useNavigateToEncodedUrl = () => {
  const navigate = useNavigate();

  const navigateToEncodedUrl = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    navigate(`/post/${encodedUrl}`);
    window.scrollTo(0, 0); // 페이지 이동 후 스크롤을 맨 위로 초기화
  };

  return navigateToEncodedUrl;
};
