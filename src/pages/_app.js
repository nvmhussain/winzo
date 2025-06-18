import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/plugins/animate.css";
import "@/plugins/font-awesome.min.css";
import "@/plugins/nonid-icon/style.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
