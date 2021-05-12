import React from "react";
import Head from "next/head";
import Sidebar from "../Components/sidebar";
import MainBody from "../Components/body";

const Home = () => {
  return (
    <div className="home-page">
      <Head>
        <link rel="icon" href="./logo.png" />
        <title>Notion clone</title>
      </Head>

      <div className="sidebar">
        {/* Sidebar Component */}
        <Sidebar />
      </div>
      <div className="body">
        {/* Body Component */}
        <MainBody />
      </div>
    </div>
  );
};

export default Home;
