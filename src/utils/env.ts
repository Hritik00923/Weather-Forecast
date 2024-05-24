import Test from "@/pages/test";
import z from "zod";

const envSchema = z.object({
  OPEN_WEATHER_API_KEY:z.string(),
});

export const ENV = envSchema.parse(process.env);