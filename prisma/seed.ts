import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  let count = 0;
    while (50 > count++) {
  await prisma.product.upsert({
    where: { id: count },
    update: {},
    create: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: 1.1,
      imageUrl: faker.image.imageUrl(),
    },
  });
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
