"use client";

import { MDProvider } from "@libnyanpasu/material-design-react";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MDProvider>{children}</MDProvider>;
}
