import { PrismaClient } from "@prisma/client";

const usersData: any = {
  1: { id: 1, firstName: "Ralph", lastName: "Woods" },
  2: { id: 2, firstName: "Ronnie", lastName: "Moore" },
  3: { id: 3, firstName: "Koko", lastName: "Kennedy" },
};

const prisma = new PrismaClient();

const getProduct = (req: any, res: any, next: any) => {
  const id = req.params.productId;
  if (id && usersData[id]) {
    res.json(usersData[id]);
    res.status(200).send();
  } else {
    res.status(404).send();
  }
};

const getAll = (req: any, res: any, next: any) => {
  prisma.product.findMany().then((data) => {
    res.json(data);
  });
};

const createProduct = (req: any, res: any, next: any) => {
  res.json(req.body).status(200).send();
};
export { getProduct, getAll, createProduct };
