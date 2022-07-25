import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    import ("../styles/globals.css");
  }, []);
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
