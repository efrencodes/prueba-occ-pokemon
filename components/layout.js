import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Search Pokemon</title>
        <meta
          name="description"
          content="A website built on Next.js to search pokemon from pokeapi.co based on name or number."
        />
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
        <meta property="og:title" content="Search Pokemon" />
        <meta
          property="og:description"
          content="A website built on Next.js to search pokemon from pokeapi.co based on name or number."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/efrencodes/image/upload/v1666212100/efrencodes.ts/work/proyecto-pokemon-app.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@efrencodes" />
        <meta name="twitter:title" content="Search Pokemon" />
        <meta
          name="twitter:description"
          content="A website built on Next.js to search pokemon from pokeapi.co based on name or number."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/efrencodes/image/upload/v1666212100/efrencodes.ts/work/proyecto-pokemon-app.png"
        />
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
