import { createTheme } from "@nyanpasu/material-design-libs";
import { useMount } from "ahooks";

export const useTheme = () => {
  useMount(() => {
    createTheme("#005cbb");
  });
};
