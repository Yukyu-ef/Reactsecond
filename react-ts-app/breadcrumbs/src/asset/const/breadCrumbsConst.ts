import { PageHeaderTypes } from "@/types/breadCrumbsTypes";

export const BreadCrumbs: PageHeaderTypes[] = [
  {
    title: "LINE設定",
    breadcrumbs: [{ title: "プロバイダ設定", url: "/providers" }],
  },
  {
    title: "Blog",
    breadcrumbs: [{ title: "blog", url: "/blog" }],
  },
];

export const HomeBreadCrumbsConst: PageHeaderTypes = {
  title: "Home画面",
  breadcrumbs: [{ title: "Home", url: "/" }],
};

export const ProviderBreadCrumbsConst: PageHeaderTypes = {
  title: "LINE設定",
  breadcrumbs: [{ title: "プロバイダ設定", url: "/providers" }],
};

export const BlogBreadCrumbsConst: PageHeaderTypes = {
  title: "Blog画面",
  breadcrumbs: [{ title: "Blog", url: "/blog" }],
};
