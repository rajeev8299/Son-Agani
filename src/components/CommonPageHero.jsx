import React from 'react';
import PageHeader from './PageHeader';

/**
 * CommonPageHero - Backward compatible wrapper routing to PageHeader.
 */
const CommonPageHero = ({
  title,
  description,
  bgImage,
  accentLabel
}) => {
  return (
    <PageHeader
      title={title}
      description={description}
      bgImage={bgImage}
      accentLabel={accentLabel}
    />
  );
};

export default CommonPageHero;
