import React from "react";
import { Button } from "../components/button";
import { auth } from "../firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import Header from "../components/layout/Header";
import HomeBanner from "../components/module/home/HomeBanner";
import Layout from "../components/layout/Layout";
import HomeFeature from "../components/module/home/HomeFeature";
import HomeNewest from "../components/module/home/HomeNewest";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
