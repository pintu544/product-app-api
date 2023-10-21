import { rest } from "msw";

interface CreateProductRequestBody {
  name: string;
}

export const handlers = [
  rest.post("/api/products", (req, res, ctx) => {
    const { name } = req.body as CreateProductRequestBody; // Explicitly cast req.body to the expected type
    return res(ctx.json({ id: Math.random(), name }));
  }),
];
