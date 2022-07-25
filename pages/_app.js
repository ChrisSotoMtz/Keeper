
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import ("bootstrap/dist/css/bootstrap.min.css");
    import ("react-bootstrap/dist/react-bootstrap.min.js");
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
