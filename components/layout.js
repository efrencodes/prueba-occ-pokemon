import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
          <a>
            <i className="nes-ash"></i>
          </a>
        </Link>
        {children}
      </main>
    </>
  );
};

export default Layout;
