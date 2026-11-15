import React from 'react';
import PageHeader from './PageHeader';

/**
 * PremiumPageHero - Adapter forwarding to the new unified PageHeader component.
 * Ensures complete compatibility for any direct references across inner pages.
 */
const PremiumPageHero = ({
  title,
  description,
  bgImage,
  visualTheme, // Deprecated: Extra shield/emblem removed per redesign specification
  accentLabel,
  className
}) => {
  return (
    <PageHeader
      title={title}
      description={description}
      bgImage={bgImage}
      accentLabel={accentLabel}
      className={className}
    />
  );
};

export default PremiumPageHero;
