"use client";

import { Container, Stack } from "styled-system/jsx";
import { ComboboxDemo } from "./combobox";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Container py={8} maxW="4xl">
      <Stack>
        <h1>Page</h1>

        <ComboboxDemo />

        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Go to main page
        </Button>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Go to main page
        </Button>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Go to main page
        </Button>
      </Stack>
    </Container>
  );
}
