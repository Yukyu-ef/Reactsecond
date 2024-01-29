import React, { FC } from "react";
import PageHeader from "./pageHeader";

interface BreadcrumbsType {
  title: string;
  url: string;
}

const withPageHeader = (title: string, breadcrumbs: BreadcrumbsType[]) => (
  WrappedComponent: FC
) => {
  const WithPageHeader: FC = () => {
    return (
      <>
        <PageHeader title={title} breadcrumbs={breadcrumbs} />
        <WrappedComponent />
      </>
    );
  };

  return WithPageHeader;
};

export default withPageHeader;
