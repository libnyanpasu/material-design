"use client";

import type { ExtendedCVAFunction } from "@nyanpasu/material-design-libs/utils/tcva";
import type { ComponentType } from "react";

export function VariantsTable<T>({
  config,
  component: Component,
}: {
  config: ExtendedCVAFunction<T>["config"];
  component: ComponentType<any>;
}) {
  if (!config?.variants) {
    return null;
  }

  const { variant, ...others } = config.variants;

  const renderVariants = (key: string) => {
    return Object.entries(others).flatMap(([privateKey, typeValue]) => {
      if (typeof typeValue === "object" && typeValue !== null) {
        return Object.entries(typeValue).map(([type]) => {
          if (type === "false") {
            return null;
          }

          const propValue = type === "true" ? true : type;

          return (
            <Component
              variant={key as any}
              key={`${privateKey}-${type}`}
              {...{
                [privateKey]: propValue,
              }}
            >
              {`${privateKey}: ${String(propValue)}`}
            </Component>
          );
        });
      }
      return null;
    });
  };

  return (
    variant &&
    Object.entries(variant).map(([key]) => (
      <div className="table-row" key={key}>
        <div className="table-cell min-w-12">{key}</div>

        <div className="table-cell max-w-96">
          <Component variant={key as any}>{key}</Component>

          {renderVariants(key)}
        </div>
      </div>
    ))
  );
}

export default VariantsTable;
