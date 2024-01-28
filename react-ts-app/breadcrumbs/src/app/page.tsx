import { Breadcrumbs, Grid } from "@mui/material";
import { FC } from "react";
import PageHeader from "../component/pageHeader";
import { BreadCrumbs } from "../asset/const/breadCrumbsConst";
import { uuid } from "uuidv4";

const Home: FC = () => {
  return (
    <Grid>
      <Breadcrumbs aria-label="breadcrumb">
        {BreadCrumbs.map((n) => {
          return (
            <PageHeader
              key={uuid()}
              title={n.title}
              breadcrumbs={n.breadcrumbs}
            />
          );
        })}
        {/* {固有のコンポーネント} */}
      </Breadcrumbs>
    </Grid>
  );
};

export default Home;
