import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './Logo.css';

interface LogoProps {
  className?: string;
  href?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  showTitle?: boolean;
  title?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  href = '/',
  alt = 'AI Robotics Textbook Logo',
  width = 32,
  height = 32,
  showTitle = true,
  title = 'AI Robotics Textbook',
  onClick,
}) => {
  const logoPath = useBaseUrl('/img/logo.png');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={`navbar__brand ${className}`}
      {...(onClick ? { onClick: handleClick } : {})}
    >
      <img
        src={logoPath}
        alt={alt}
        width={width}
        height={height}
        className="navbar__logo"
      />
      {showTitle && <strong className="navbar__title">{title}</strong>}
    </Link>
  );
};

export default Logo;