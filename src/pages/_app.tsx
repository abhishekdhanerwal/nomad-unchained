import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { useTheme } from '@mui/material/styles';

import { Header } from '@/components/header/header';
import { useMediaQuery } from '@mui/material';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={roboto.className}>
      <Header />
      <div style={{ marginTop: matches ? 60 : 40 }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
