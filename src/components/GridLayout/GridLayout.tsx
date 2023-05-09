import React, {createElement} from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import "./index.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = (props: any) => {
  let { layout = [], _leaf, children } = props;

  if (_leaf?.parent) {
    _leaf.parent.isRGLContainer = true;
  }

  if (children.length > layout.length) {
    layout.push({
      i: _.uniqueId("placeholder"),
      x: 0,
      y: 0,
      w: 3,
      h: 2,
    });
  }

  if (children[0].props.className == "lc-container-placeholder") {
    children = [];
  }

  return (
    <div style={{ minHeight: "100%", backgroundColor: "transparent" }}>
      <GridLayoutWrap layout={layout} _leaf={_leaf}>
        {children}
      </GridLayoutWrap>
    </div>
  );
};

const GridLayoutWrap = (props: any) => {
  const { layout, children, _leaf } = props;

  const onLayoutChange = (layout: any[]) => {
    _leaf?.setPropValue(
      "layout",
      layout.filter((item) => item.i)
    );
  };

  const childNodes = children.map((child: any, index: number) => {
    const item = layout[index];

    return (
      <div
        key={item.i}
        data-grid={{ w: item.w, h: item.h, x: item.x, y: item.y }}
        className="react-grid-item-wrap"
      >
        <div className="react-grid-item-scroll">{child}</div>
      </div>
    );
  });

  return (
    <ResponsiveReactGridLayout
      resizeHandles={["s", "w", "e", "n", "se"]}
      useCSSTransforms={false}
      layout={layout}
      onLayoutChange={onLayoutChange}
    >
      {childNodes}
    </ResponsiveReactGridLayout>
  );
};
