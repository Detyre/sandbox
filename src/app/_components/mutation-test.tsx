"use client";

import { api } from "~/trpc/react";

export function MutationTest() {
  const mutation = api.post.test.useMutation({
    onSuccess(data, variables, context) {
      console.log("Lo saque hpta", { data, variables, context });
    },
  });

  const onClick = () => {
    console.log("wipiti");

    mutation.mutate({
      username: "123",
      password: "123",
    });
  };

  return (
    <button
      onClick={onClick}
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
    >
      Test
    </button>
  );
}
