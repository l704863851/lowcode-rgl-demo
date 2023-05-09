import { ComponentMetadata, Snippet } from "@alilc/lowcode-types";

const ButtonMeta: ComponentMetadata = {
  componentName: "Button",
  title: "Button",
  docUrl: "",
  screenshot: "",
  devMode: "proCode",
  configure: {
    props: [
      {
        title: "功能",
        display: "block",
        type: "group",
        items: [
          {
            name: "children",
            title: {
              label: "内容",
              tip: "children | 内容",
            },
            propType: {
              type: "oneOfType",
              value: ["node", "string"],
            },
            setter: ["SlotSetter", "StringSetter", "VariableSetter"],
          },
          {
            name: "htmlType",
            title: {
              label: "原生类型",
              tip: "htmlType | 设置 `button` 原生的 `type` 值",
            },
            propType: {
              type: "oneOf",
              value: ["submit", "reset", "button"],
            },
            setter: [
              {
                componentName: "RadioGroupSetter",
                props: {
                  options: [
                    {
                      title: "Submit",
                      value: "submit",
                    },
                    {
                      title: "Reset",
                      value: "reset",
                    },
                    {
                      title: "Button",
                      value: "button",
                    },
                  ],
                },
              },
              "VariableSetter",
            ],
            defaultValue: "button",
          },
          {
            name: "href",
            title: {
              label: "跳转地址",
              tip: "href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致",
            },
            propType: "string",
            setter: ["StringSetter", "VariableSetter"],
          },
          {
            name: "target",
            title: {
              label: "Target",
              tip: "target | 相当于 a 链接的 target 属性，href 存在时生效",
            },
            propType: {
              type: "oneOf",
              value: ["_self", "_blank", "_parent", "_top"],
            },
            setter: [
              {
                componentName: "SelectSetter",
                props: {
                  options: [
                    {
                      title: "本窗口跳转",
                      value: "_self",
                    },
                    {
                      title: "打开新标签页",
                      value: "_blank",
                    },
                    {
                      title: "父窗口跳转",
                      value: "_parent",
                    },
                    {
                      title: "顶层窗口跳转",
                      value: "_top",
                    },
                  ],
                },
              },
              "StringSetter",
              "VariableSetter",
            ],
            condition: {
              type: "JSFunction",
              value:
                'target => !!target.getProps().getPropValue("href")?.trim()',
            },
          },
        ],
      },
    ],
    supports: {
      loop: false,
      condition: false
    },
  },
};
const snippets: Snippet[] = [
  {
    title: "Button",
    screenshot: "",
    schema: {
      componentName: "Button",
      props: {
        children: '按钮'
      },
    },
  },
];

export default {
  ...ButtonMeta,
  snippets,
};
