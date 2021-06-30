import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
	<Head>
		<title>MyTop = our best top</title>
		<link key={1} rel="icon" href="/favicon2.ico" />
	</Head>
	<Component {...pageProps} />
  </>
  ;
}

export default MyApp;