import { BreadCrumbsTypes } from "@/types/breadCrumbsTypes";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  breadcrumbs: BreadCrumbsTypes[];
}

const PageHeader: FC<Props> = ({ title, breadcrumbs }) => {
  return (
    <Breadcrumbs>
      <Typography>{title}</Typography>
      {breadcrumbs.map((breadcrumb) => (
        <Link
          key={uuidv4()}
          color="inherit"
          title={breadcrumb.title}
          href={breadcrumb.url}
        >
          {breadcrumb.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default PageHeader;
