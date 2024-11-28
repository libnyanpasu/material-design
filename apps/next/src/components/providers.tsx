"use client";

import { MDProvider } from "@nyanpasu/material-design-react";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MDProvider>{children}</MDProvider>;
}
