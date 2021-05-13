import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Sidebar from "../Components/sidebar";
import MainBody from "../Components/body";
import Notify from "../Components/Notify/Notify";
import { DataContext } from "../store/GlobalState";

const Home = () => {
  const [state, dispatch] = useContext(DataContext);
  const { pages } = state;
  useEffect(() => {
    getPages();
  }, []);

  async function getPages() {
    const res = await fetch("/api/pages", {
      method: "GET",
    });
    const data = await res.json();

    dispatch({ type: "NOTIFY", payload: { loading: true } });
    dispatch({ type: "GET_PAGES", payload: data.pages });
    dispatch({ type: "NOTIFY", payload: { loading: false } });
  }

  return (
    <div className="home-page">
      <Head>
        <link rel="icon" href="./logo.png" />
        <title>Notion clone</title>
      </Head>
      <Notify />
      <div className="sidebar">
        {/* Sidebar Component */}
        <Sidebar pages={pages} />

      </div>
      <div className="body">
        {/* Body Component */}
        <MainBody />
      </div>
    </div>
  );
};

export default Home;
