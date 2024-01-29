"use client";
import { BlogBreadCrumbsConst } from "@/asset/const/breadCrumbsConst";
import withPageHeader from "@/component/pageHeader/withPageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";

const Blog: FC = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Grid>
      Blog
      <Button variant="contained" onClick={handleClick}>
        トップページに戻る
      </Button>
    </Grid>
  );
};

export default withPageHeader(
  BlogBreadCrumbsConst.title,
  BlogBreadCrumbsConst.breadcrumbs
)(Blog);
