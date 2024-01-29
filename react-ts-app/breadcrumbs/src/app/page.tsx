"use client";
import { Button, Grid } from "@mui/material";
import { FC } from "react";
import withPageHeader from "../component/pageHeader/withPageHeader";

const Home: FC = () => {
  const handleLineButtonClick = () => {
    window.location.href = "/providers";
  };

  const handleBlogButtonClick = () => {
    window.location.href = "/blog";
  };

  return (
    <Grid>
      Home画面
      <Button variant="contained" onClick={handleLineButtonClick}>
        Line設定
      </Button>
      <Button variant="contained" onClick={handleBlogButtonClick}>
        ブログ
      </Button>
    </Grid>
  );
};

export default withPageHeader("Home画面", [{ title: "Home", url: "/" }])(Home);
