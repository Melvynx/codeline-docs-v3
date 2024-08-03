import { pageTree } from "@/app/source";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { type DocsLayoutProps } from "fumadocs-ui/layout";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Codeline",
    enableSearch: true,
  },

  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
