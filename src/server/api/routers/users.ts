import { any, z } from "zod";
import { sendMail } from "~/app/nodeMailer";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const mailSchema = z.object({ email: z.any()})

const categorySchema = z.object({
  email: z.any(),
  category: z.any()
});

export const userRouter = createTRPCRouter({
  
  addUser: publicProcedure.input(userSchema)
  .mutation(async ({ input, ctx }) => {
    return ctx.db.user.create({
      data: input
    })
  }),

  updateUserDetails: publicProcedure.input(categorySchema).mutation(async ({input, ctx})=>{
    return ctx.db.user.update({
      where: {
        email: input.email
      },
      data: input
    })
  }),

  findUser: publicProcedure.input(mailSchema).query(({input, ctx})=>{
    return ctx.db.user.findFirst({ where: mailSchema.parse(input)})
  }),

  getAllUser: publicProcedure.query(({input, ctx})=>{
    return ctx.db.user.findMany({});
  }),

  getAllCategory: publicProcedure.query(({input, ctx})=>{
    return ctx.db.category.findMany({});
  }),

  getSixCategory: publicProcedure.input(z.number()).query(({input, ctx})=>{
    return ctx.db.category.findMany({
      skip: input,
      take: 6
    });
  })
});
