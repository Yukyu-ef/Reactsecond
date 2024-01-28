import PageHeader from "@/component/pageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Providers: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
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
