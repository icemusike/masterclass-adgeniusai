import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL", "postgres://bd5e034e68299285b850936a88536aa02b86eedc6400bb6b9ad1791aac349dbb:sk_AxgNz_E2wm3DlkwxSEvgg@db.prisma.io:5432/postgres?sslmode=require"),
  },
});
