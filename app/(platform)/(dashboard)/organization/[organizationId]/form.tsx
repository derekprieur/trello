"use client";

import { Button } from "@/components/ui/button";
import { create } from "@/actions/createBoard";
import { useAction } from "@/hooks/useAction";

export const Form = () => {
  const { execute, fieldErrors } = useAction(create, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error, "ERROR");
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error: string) => (
              <p key={error} className="text-rose-500"></p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
