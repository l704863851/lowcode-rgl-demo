import { ComponentMetadata, Snippet } from "@alilc/lowcode-types";

const GridLayoutMeta: ComponentMetadata = {
  componentName: "GridLayout",
  title: "GridLayout",
  docUrl: "",
  screenshot: "",
  devMode: "proCode",
  configure: {
    props: [],
    component: {
      isContainer: true,
      nestingRule: {
        descendantBlacklist: ["GridLayout"],
      },
      disableBehaviors: "*",
    },
    advanced: {
      // isAbsoluteLayoutContainer: true,
      callbacks: { onMoveHook: () => false },
    },
    supports: {
      loop: false,
    },
  },
};

const snippets: Snippet[] = [
  {
    title: "GridLayout",
    screenshot: "",
    schema: {
      componentName: "GridLayout",
      props: {},
    },
  },
];

export default {
  ...GridLayoutMeta,
  snippets,
};
