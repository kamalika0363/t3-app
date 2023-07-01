import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "./root";
import superjson from "superjson";
import { createTRPCContext } from "./trpc";

export function ssgHelper() {
  return createServerSideHelpers({
    router: appRouter,
    ctx: createTRPCContext({ session: null, revalidateSSG: null }),
    transformer: superjson,
  });
}