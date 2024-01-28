"use client";
import { Button, Grid } from "@mui/material";
import { FC } from "react";
import PageHeader from "../component/pageHeader";

const Home: FC = () => {
  const handleLineButtonClick = () => {
    window.location.href = "/providers";
  };

  const handleBlogButtonClick = () => {
    window.location.href = "/blog";
  };

  return (
    <Grid>
      <PageHeader
        title={"Home画面"}
        breadcrumbs={[{ title: "Home", url: "/" }]}
      />
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

export default Home;
