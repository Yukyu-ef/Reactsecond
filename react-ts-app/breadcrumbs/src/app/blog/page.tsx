"use client";
import PageHeader from "@/component/pageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";

const Blog: FC = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Grid>
      <PageHeader
        title={"Blog画面"}
        breadcrumbs={[{ title: "Blog", url: "/blog" }]}
      />
      Blog
      <Button variant="contained" onClick={handleClick}>
        トップページに戻る
      </Button>
    </Grid>
  );
};

export default Blog;
