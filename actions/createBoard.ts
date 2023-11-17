'use server'

import { db } from "@/lib/db";
import { z } from 'zod';
import { revalidatePath } from 'next/cache'

const CreateBoardSchema = z.object({
    title: z.string()
});

export async function create(formData: FormData) {

    const { title } = CreateBoardSchema.parse({
        title: formData.get('title')
    });

    await db.board.create({
        data: {
            title,
        },
    });
    revalidatePath("/organization/org_2YJAz8X65FwMT2ToL1iVBr6BBEt")
}