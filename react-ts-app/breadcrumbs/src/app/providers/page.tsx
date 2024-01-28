"use client";
import PageHeader from "@/component/pageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";

const Providers: FC = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Grid>
      <PageHeader
        title={"LINE設定"}
        breadcrumbs={[{ title: "プロバイダ設定", url: "/providers" }]}
      />
      LINE設定
      <Button variant="contained" onClick={handleClick}>
        トップページに戻る
      </Button>
    </Grid>
  );
};

export default Providers;
