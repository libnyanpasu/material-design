"use client";

import { Button, buttonVariants } from "@nyanpasu/material-design-react";
import { Container } from "@/components/container";

const VariantsCode = () => {
  if (!buttonVariants.config?.variants) {
    return null;
  }

  const { variant, ...others } = buttonVariants.config.variants;

  Object.entries(others).map(([key, typeValue]) => {
    Object.entries(typeValue).map(([type]) => {
      return (
        <Button
          {...{
            [key]: type,
          }}
        >
          {key}
        </Button>
      );
    });
  });

  return (
    <div>
      {variant &&
        Object.entries(variant).map(([key]) => {
          return (
            <div className="table-row" key={key}>
              <div className="table-cell min-w-12">{key}</div>

              <div className="table-cell max-w-96">
                <Button variant={key as any}>{key}</Button>

                {Object.entries(others).map(([privateKey, typeValue]) => {
                  if (typeof typeValue === "object" && typeValue !== null) {
                    return Object.entries(typeValue).map(([type]) => {
                      return (
                        <Button
                          variant={key as any}
                          key={`${privateKey}-${type}`}
                          {...{
                            [privateKey]: type,
                          }}
                        >
                          {`${privateKey}: ${type}`}
                        </Button>
                      );
                    });
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default function Page() {
  return (
    <Container>
      {/* <div className="flex gap-2">
        <Button>Button</Button>
        <Button variant="raised">Button</Button>
        <Button variant="stroked">Button</Button>
        <Button variant="flat">Button</Button>
        <Button variant="fab">Button</Button>
      </div>

      <div className="flex gap-2">
        <Button disabled>Button</Button>
        <Button disabled variant="raised">
          Button
        </Button>
        <Button disabled variant="stroked">
          Button
        </Button>
        <Button disabled variant="flat">
          Button
        </Button>
        <Button disabled variant="fab">
          Button
        </Button>
      </div> */}

      <VariantsCode />
    </Container>
  );
}
