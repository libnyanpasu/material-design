"use client";

import { Button, buttonVariants } from "@libnyanpasu/material-design-react";
import { Container } from "@/components/container";
import VariantsTable from "@/components/variants-table";

export default function Page() {
  return (
    <Container>
      <VariantsTable config={buttonVariants.config} component={Button} />
    </Container>
  );
}
