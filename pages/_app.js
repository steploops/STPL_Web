import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
