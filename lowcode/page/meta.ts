export default [
  {
    componentName: "Page",
    title: "页面",
    props: [],
    configure: {
      events: {
        supportedLifecycles: [
          {
            description: "初始化时",
            name: "constructor",
          },
          {
            description: "装载后",
            name: "componentDidMount",
          },
          {
            description: "更新时",
            name: "componentDidMount",
          },
          {
            description: "卸载时",
            name: "componentWillUnmount",
          },
        ],
      },
      component: {
        isContainer: true,
        nestingRule: {
          childWhitelist: ["GridLayout"],
          parentWhitelist: [],
        },
        disableBehaviors: "*",
      },
      advanced: {
        callbacks: { onMoveHook: () => false },
      },
    },
  },
];
