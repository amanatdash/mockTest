import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import Footer from "../components/footer";


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f3eee2] via-[#f6f3ea] to-[#ebe2cf]">
      <Header/>

      <Hero/>

      <Features/>

      <Footer/>
    </div>
  );
}
