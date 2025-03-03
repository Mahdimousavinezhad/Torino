import Layout from "@/components/layouts/Layout";
import AuthModal from "@/contexts/authModal";
import TanstakQueryProvider from "@/providers/TanstakQueryProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TanstakQueryProvider>
        <AuthModal>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthModal>
      </TanstakQueryProvider>
    </>
  );
}
