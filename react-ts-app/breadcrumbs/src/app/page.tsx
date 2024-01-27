import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/blog">
        Blog
      </Link>
      <Typography color="text.primary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};

export default Home;
