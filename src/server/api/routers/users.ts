import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({

    sayHi: publicProcedure.query(()=>{
        return "Hi";
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

});
