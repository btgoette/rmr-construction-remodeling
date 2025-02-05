import React from "react";
import App from "next/app";
import { addBackToTop } from "vanilla-back-to-top";
import AOS from "aos";

// CSS Libraries
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Components
import PageLayout from "components/PageLayout";

// Custom Styles
import "scss/app.scss";

export default class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    AOS.init({
      offset: 0,
      duration: 500,
      easing: 'linear',
      delay:0,
    });
    addBackToTop({
      diameter: 50,
      backgroundColor: "#68140f;",
      textColor: "#fff",
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </React.Fragment>
    );
  }
}