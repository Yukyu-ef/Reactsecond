"use client";
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

export default withPageHeader("LINE設定", [
  { title: "プロバイダ設定", url: "/providers" },
])(Providers);
