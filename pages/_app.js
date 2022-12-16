import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import wrapper, {persistor, store} from "../store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <TopBar/>
            <Component {...pageProps} />
              <Footer />
          </PersistGate>
      </Provider>
  );
}

export default wrapper.withRedux(MyApp);