import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const testimonialRouter = createTRPCRouter({
  getTestimonials: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.testimonials.findMany();
  }),
});
