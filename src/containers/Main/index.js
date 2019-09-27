import React from "react";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import { requestJson } from "../../input/request";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Header service={requestJson.service} id={requestJson.id} />
      <Content requestJson={requestJson} />
      <Footer />
    </div>
  );
}
