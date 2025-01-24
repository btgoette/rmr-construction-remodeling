/* Head Component */

// React Components
import Head from 'next/head'

const CustomHead = ({head}) => {
  return (
    <Head>
      <title>{head.title}</title>
      <meta property="og:title" content={head.title} />
      <meta property="og:url" content={head.href} />
      <meta property="og:description" content={head.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={head.image} />
      <meta property="og:image:secure_url" content={head.image} />
      <meta property="og:image:type" content={head.imageType} />
      <meta name="geo.placename" content={head.location} />
      <meta name="geo.region" content={head.region} />
      <meta name="description" content={head.description} />
      <meta name="keywords" content={head.keywords} />
      <link rel="canonical" href={head.href}></link>
      <meta name="robots" content={head.robots} />
      <meta name="googlebot" content={head.robots} />
      <meta name="revist-after" content="7 days"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    </Head>
  )
}

export default CustomHead;