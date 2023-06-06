import CTA from "../components/cta/CTA";
import Navbar from "../components/navbar/Navbar";
import Blog from "../containers/blog/blog";
import Footer from "../containers/footer/footer";
import Header from "../containers/header/header";
import Posibility from "../containers/posibility/posibility";
import WhatGPT3 from "../containers/whatGPT3/whatGPT3";
import Features from "../containers/features/features";
import Brand from "../components/brand/Brand";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
