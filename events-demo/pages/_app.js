import Layout from '../components/layout/Layout';
import Head from 'next/head';
import '../styles/globals.css';
import Notification from '../components/UI/Notification';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Events provided by NextJS</title>
          <meta name="description" content="NextJS" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <Notification title="Test" message="This is a test" status="pending" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
