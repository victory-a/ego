import { useMediaQuery } from "react-responsive";

export const MobileScreen = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 424 });

  if (isMobile) return children;
  return null;
};

export const NonMobileScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 425 });

  if (isTablet) return children;
  return null;
};

export const TabletScreen = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 767 });

  if (isTablet) return children;
  return null;
};

export const AboveTabletScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 767 });

  if (isTablet) return children;
  return null;
};
