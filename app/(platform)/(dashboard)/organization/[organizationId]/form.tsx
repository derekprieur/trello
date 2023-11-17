"use client";

import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";

export const Form = () => {
  return (
    <form action={create}>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border border-black p-1"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
