import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const MicroAnalytics = () => {
  return (
    <Script
      data-host="https://microanalytics.io"
      data-dnt="false"
      src="https://microanalytics.io/js/script.js"
      id={siteMetadata.analytics.microAnalyticsId}
      async
      defer
    />
  )
}

export default MicroAnalytics
