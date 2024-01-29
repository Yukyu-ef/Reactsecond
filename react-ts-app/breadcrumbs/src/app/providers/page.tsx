"use client";
import { ProviderBreadCrumbsConst } from "@/asset/const/breadCrumbsConst";
import withPageHeader from "@/component/pageHeader/withPageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";

const Providers: FC = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Grid>
      LINE設定
      <Button variant="contained" onClick={handleClick}>
        トップページに戻る
      </Button>
    </Grid>
  );
};

export default withPageHeader(
  ProviderBreadCrumbsConst.title,
  ProviderBreadCrumbsConst.breadcrumbs
)(Providers);
