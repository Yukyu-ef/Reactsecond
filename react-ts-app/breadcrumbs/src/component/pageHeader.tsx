import { BreadCrumbsTypes } from "@/types/breadCrumbsTypes";
import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { uuid } from "uuidv4";

interface Props {
  title: string;
  breadcrumbs: BreadCrumbsTypes[];
}

const PageHeader: FC<Props> = ({ title, breadcrumbs }) => {
  return (
    <>
      <Typography>{title}</Typography>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={uuid()}>
          <Link color="inherit" title={breadcrumb.title} href={breadcrumb.url}>
            {breadcrumb.title}
          </Link>
          {index < breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </>
  );
};

export default PageHeader;
