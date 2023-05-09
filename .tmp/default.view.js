

export { default } from '/home/patrick/code/github/lowcode-rgl-demo/src/index.tsx';

import * as componentInstances from '/home/patrick/code/github/lowcode-rgl-demo/src/index.tsx';

import '/home/patrick/code/github/lowcode-rgl-demo/src/index.scss'

export * from '/home/patrick/code/github/lowcode-rgl-demo/src/index.tsx';

const coveredComponents = {};

const library = 'rgl-demo';
const execCompile = !!true;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}