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

  <link
        rel="preload"
        href="/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf"
        as="font"
        crossOrigin=""
        type="font/ttf"
      />

      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Regular.ttf"
        as="font"
        crossOrigin=""
        type="font/ttf"
      />

      <link
        rel="preload"
        href="/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"
        as="font"
        crossOrigin=""
        type="font/ttf"
      />

      <link
        rel="preload"
        href="/images/backgrounds/jumbotron/jumbotron.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/jumbotron/jumbotron-tablet.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/jumbotron/jumbotron-mobile.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/hero/hero.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/hero/hero-tablet.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/hero/hero-mobile.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />
      <link
        rel="preload"
        href="/images/backgrounds/thank-you.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/thank-you-tablet.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

      <link
        rel="preload"
        href="/images/backgrounds/thank-you-mobile.webp"
        as="image"
        crossOrigin=""
        type="webp"
      />

    </Head>
  )
}

export default CustomHead;