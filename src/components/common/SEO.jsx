import { useEffect } from 'react';
import { companyConfig } from '../../data/companyInfo';

/**
 * Enterprise SEO & Document Title Manager
 * @param {{ title?: string, description?: string }} props
 */
export const SEO = ({ title, description }) => {
  useEffect(() => {
    const defaultTitle = `${companyConfig.brandName} | Professional Security & Manpower Services`;
    document.title = title ? `${title} | ${companyConfig.brandName}` : defaultTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
