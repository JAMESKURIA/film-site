import { Footer, Header } from "components";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Film Site</title>
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto bg-film-dark min-h-[90vh] text-film-light">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
