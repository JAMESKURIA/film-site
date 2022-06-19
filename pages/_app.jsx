import { Layout, SideNav } from "components";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div className="w-full min-h-[100vh] bg-film-dark text-film-accent">
        <div className="max-w-7xl mx-auto flex ">
          <SideNav />
          <div className="md:ml-32  flex items-center mx-auto md:min-h-[100vh]">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
