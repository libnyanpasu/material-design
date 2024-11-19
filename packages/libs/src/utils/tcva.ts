import { cva, type VariantProps } from "class-variance-authority";

export type CVAReturnType<T> = ReturnType<typeof cva<T>>;

export interface CVAProps<T> extends Parameters<typeof cva<T>> {}

export type ExtendedCVAFunction<T> = CVAReturnType<T> & {
  base: CVAProps<T>[0];
  config: CVAProps<T>[1];
};

export const tcva = <T>(...args: CVAProps<T>): ExtendedCVAFunction<T> => {
  const result = cva<T>(...args) as ExtendedCVAFunction<T>;

  result.base = args[0];

  result.config = args[1];

  return result;
};

export type { VariantProps };
