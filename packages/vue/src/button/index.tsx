import {
  buttonVariants,
  ButtonVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "radix-vue";
import { ButtonHTMLAttributes, defineComponent } from "vue";

export interface ButtonProps
  extends ButtonVariantsProps,
    Omit<ButtonHTMLAttributes, "disabled"> {
  asChild?: boolean;
}

export const Button = defineComponent({
  setup({ asChild, variant, disabled, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        v-bind="$attrs"
        class={cn(buttonVariants({ variant, disabled }))}
        {...props}
      />
    );
  },
});
