import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import MicroAnalytics from './MicroAnalytics'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

// TODO Handle views
// ? Mungkin leerob.io boleh membantu
// ! LMAO Lah, selama ni aku letak senarai domain kat tempat salah ke bongok betul

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
      {isProduction && siteMetadata.analytics.microAnalyticsId && <MicroAnalytics />}
    </>
  )
}

export default Analytics
