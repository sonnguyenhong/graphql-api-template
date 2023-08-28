import { startServer } from "./app";

import connectDB from "./config/db";

async function main() {

  await connectDB();

  const app = await startServer();

  app.listen({ port: 3000 }, (): void =>
    console.log(`\n🚀GraphQL is now running on http://localhost:3000/graphql `)
  );
}
main();