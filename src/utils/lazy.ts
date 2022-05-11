import React, { ComponentType, createElement } from 'react';

type PreloadableComponent<T extends ComponentType<any>> = T & {
  preload: () => Promise<void>;
};

const lazy = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) => {
  let LoadedComponent: T | undefined;
  let factoryPromise: Promise<void> | undefined;

  const LazyComponent = React.lazy(factory);

  const loadComponent = () =>
    factory().then((module) => {
      LoadedComponent = module.default;
    });

  const Component = ((props) =>
    createElement(
      LoadedComponent || LazyComponent,
      props,
    )) as PreloadableComponent<T>;

  Component.preload = () => factoryPromise || loadComponent();

  return Component;
};

export default lazy;
