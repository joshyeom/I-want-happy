import { useNavigate } from 'react-router-dom';

export const useNavigateToEncodedUrl = (url: string) => {
  const navigate = useNavigate();
  const encodedUrl = encodeURIComponent(url);
  return () => navigate(`/post/${encodedUrl}`);
};
