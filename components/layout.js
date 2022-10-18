import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=optional"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
