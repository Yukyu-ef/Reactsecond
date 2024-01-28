import PageHeader from "@/component/pageHeader";
import { Button, Grid } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Blog: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
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
