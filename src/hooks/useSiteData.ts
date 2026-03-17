import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export const useSiteData = () => {
  const [data] = useState(siteConfig);
  return { data, isLoading: false, error: null };
};
