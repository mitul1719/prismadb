import express from "express";
import "dotenv/config";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(cors());

const prisma = new PrismaClient();

app.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    res.status(200).json({ result: posts });
  } catch (error) {
    res.status(500).json({ result: error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
