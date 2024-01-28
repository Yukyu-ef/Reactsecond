import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";
import AppRouter from "./router/appRouter";

const Home: FC = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Current Page</Typography>
      </Breadcrumbs>
      {/* AppRouterを追加 */}
      <AppRouter />
    </>
  );
};

export default Home;
