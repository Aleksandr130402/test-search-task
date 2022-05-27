import '../../styles/globals.css';
import Head from 'next/head';
import { SearchItemsProvider } from '../context/SearchItemsContext';
import { SearchPanelProvider } from '../context/SearchPanelContext';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<SearchPanelProvider>
				<SearchItemsProvider>{getLayout(<Component {...pageProps} />)}</SearchItemsProvider>
			</SearchPanelProvider>
		</>
	);
}

export default MyApp;
