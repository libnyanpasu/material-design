import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";
import {
  dropdownMenuContentVariants,
  dropdownMenuLabelVariants,
} from "../dropdown-menu";

export const selectTriggerVariants = tcva(
  [
    "group relative box-border inline-flex w-full flex-auto items-baseline",
    "cursor-pointer",
    "px-4 py-4 outline-hidden",
    // TODO: size variants, fix this
    "flex items-center justify-between h-14",
    "dark:text-surface",
  ],
  {
    variants: {
      variant: {
        filled: ["rounded-t", "bg-surface-variant dark:bg-on-surface-variant"],
        // outlined use selectValuePlaceholderFieldsetVariants
        outlined: "",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;

export const selectLineVariants = tcva([], {
  variants: {
    variant: {
      filled: [
        "absolute inset-x-0 bottom-0 w-full border-b border-on-primary-container",
        "transition-all duration-200",
        // pseudo elements be overlay parent element, will not affect the box size
        "after:absolute after:inset-x-0 after:bottom-0 after:z-10",
        "after:scale-x-0 after:border-b-2 after:opacity-0 after:content-['']",
        "after:transition-all after:duration-200",
        "after:border-primary dark:after:border-on-primary-container",
        // sync parent group state, state from radix-ui
        "group-data-[state=open]:border-b-0",
        "group-data-[state=open]:after:scale-x-100",
        "group-data-[state=open]:after:opacity-100",
      ],
      // hidden line for outlined variant
      outlined: "hidden",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export type SelectLineVariants = VariantProps<typeof selectLineVariants>;

export const selectLabelVariants = tcva([
  dropdownMenuLabelVariants.base,
  "text-primary dark:text-inverse-primary",
]);

export type SelectLabelVariants = VariantProps<typeof selectLabelVariants>;

export const selectValueVariants = tcva(["pointer-events-none"], {
  variants: {
    variant: {
      filled: "",
      outlined: "",
    },
    haveValue: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      haveValue: true,
      className: "mt-3",
    },
  ],
  defaultVariants: {
    variant: "filled",
    haveValue: false,
  },
});

export type SelectValueVariants = VariantProps<typeof selectValueVariants>;

export const selectValuePlaceholderVariants = tcva(
  [
    "absolute",
    "left-4 top-4",
    "pointer-events-none",
    "text-base select-none",
    // TODO: only transition position, not text color
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        filled: [
          "group-data-[state=open]:top-2 group-data-[state=open]:dark:text-surface",
          "group-data-[state=open]:text-xs group-data-[state=open]:text-primary",
        ],
        outlined: [
          "group-data-[state=open]:-top-2",
          "group-data-[state=open]:text-sm",
          "group-data-[state=open]:text-primary",

          "dark:group-data-[state=open]:text-inverse-primary",
          "dark:group-data-[state=closed]:text-primary-container",

          // "before:absolute before:inset-0 before:content-['']",
          // "before:-z-10 before:-mx-1",
          // "before:bg-transparent ",
          // "before:inline-block",
        ],
      },
      focus: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        focus: true,
        className: "top-2 text-xs",
      },
      {
        variant: "outlined",
        focus: true,
        className: "-top-2 text-sm",
      },
    ],
    defaultVariants: {
      variant: "filled",
      focus: false,
    },
  },
);

export type SelectValuePlaceholderVariants = VariantProps<
  typeof selectValuePlaceholderVariants
>;

export const selectValuePlaceholderFieldsetVariants = tcva([], {
  variants: {
    variant: {
      // only for outlined variant
      filled: "hidden",
      outlined: [
        "absolute inset-0 text-left",
        "rounded transition-all duration-200",
        // may open border width will be 1.5, idk
        "group-data-[state=closed]:border",
        "group-data-[state=open]:border-2",
        // different material web border color, i think this looks better
        "group-data-[state=closed]:border-primary-container",
        "group-data-[state=open]:border-primary",
        // dark must be prefixed
        "group-dark:data-[state=closed]:border-primary-container",
        "group-dark:data-[state=open]:border-inverse-primary",
      ],
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export type SelectValuePlaceholderFieldsetVariants = VariantProps<
  typeof selectValuePlaceholderFieldsetVariants
>;

export const selectValuePlaceholderLegendVariants = tcva([], {
  variants: {
    variant: {
      // only for outlined variant
      filled: "hidden",
      outlined: "invisible ml-2 px-2 text-sm h-0",
    },
    haveValue: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "outlined",
      haveValue: false,
      className: "group-data-[state=closed]:hidden",
    },
  ],
  defaultVariants: {
    variant: "filled",
    haveValue: false,
  },
});

export type SelectValuePlaceholderLegendVariants = VariantProps<
  typeof selectValuePlaceholderLegendVariants
>;

export const selectIconVariants = tcva(["absolute right-4"]);

export type SelectIconVariants = VariantProps<typeof selectIconVariants>;

export const selectContentVariants = tcva([dropdownMenuContentVariants.base], {
  variants: {
    variant: {
      filled: "rounded-t-none",
      outlined: "",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export type SelectContentVariants = VariantProps<typeof selectContentVariants>;

export const selectItemVariants = tcva([
  dropdownMenuLabelVariants.base,
  "cursor-pointer",
  "hover:bg-surface-variant data-[state=checked]:bg-primary-container",
  "dark:hover:bg-on-surface-variant dark:data-[state=checked]:bg-on-primary-container",
]);

export type SelectItemVariants = VariantProps<typeof selectItemVariants>;
