import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

import { navItems } from './constants';
import style from './header.module.css';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <header className={style.header}>
      {matches ? (
        navItems.map((item) => (
          <span
            key={item.name}
            className={`${style.navItems} ${
              router.pathname === item.url ? style.activeNavItem : ''
            }`}
            onClick={() => router.push(item.url)}
          >
            {item.name}
          </span>
        ))
      ) : (
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor='right'
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <List>
          {navItems.map((item) => (
            <Link href={item.url} key={item.name}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    style={router.pathname === item.url ? { color: '#FA6E02' } : {}}
                    primary={item.name}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </header>
  );
}
