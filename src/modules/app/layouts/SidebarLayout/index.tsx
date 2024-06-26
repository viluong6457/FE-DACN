import { FC, ReactNode, useContext, useEffect } from 'react';
import { Box, alpha, lighten, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './Sidebar';
import Header from './Header';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Footer from './Footer';
import { useResponsive } from 'src/utils/responsive';

interface SidebarLayoutProps {
  children?: ReactNode;
  showSideBar?: boolean;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ showSideBar = true }) => {
  const theme = useTheme();
  const { isMobile } = useResponsive();
  const isShowSideBar = isMobile || showSideBar;

  return (
    <>
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          height: '100%',
          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[5]
                : theme.colors.alpha.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        <Header showSideBar={isShowSideBar} />
        {isShowSideBar && <Sidebar />}
        <Box
          sx={{
            zIndex: 5,
            display: 'block',
            position: 'relative',
            height: '100%',
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: isShowSideBar ? `${theme.sidebar.width}` : undefined
            }
          }}
        >
          <Box display="block" minHeight={'100%'}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
