import LayoutPrimary from "../common/LayoutPrimary"
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPrimary>
      <Component {...pageProps} />
    </LayoutPrimary>
  )

}

export default MyApp
