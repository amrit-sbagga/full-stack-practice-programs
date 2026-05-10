/**
 * PROGRAM 04 — Query Params: Filter + Sort + Paginate
 *
 * Build an Express server with a /products endpoint that supports
 * filtering, sorting, and pagination via query parameters.
 *
 * Use this in-memory data (add more items if needed):
 *   [
 *     { id: 1, name: "Apple",  category: "fruit",  price: 1.5  },
 *     { id: 2, name: "Banana", category: "fruit",  price: 0.5  },
 *     { id: 3, name: "Carrot", category: "veggie", price: 0.8  },
 *     { id: 4, name: "Mango",  category: "fruit",  price: 2.0  },
 *     { id: 5, name: "Broccoli", category: "veggie", price: 1.2 },
 *     { id: 6, name: "Grapes", category: "fruit",  price: 3.0  },
 *   ]
 *
 * Endpoint: GET /products
 *   ?category=fruit          → filter by category (case-insensitive)
 *   ?sort=price              → sort by price ascending
 *   ?sort=-price             → sort by price descending (minus = descending)
 *   ?page=1&limit=2          → paginate results (default: page=1, limit=10)
 *   All params can be combined: /products?category=fruit&sort=price&page=1&limit=2
 *
 * Response: { data: [...], total: N, page: N, limit: N }
 *
 * Run: npm run 04
 */

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const FRUITS = [
  { id: 1, name: "Apple", category: "fruit", price: 1.5 },
  { id: 2, name: "Banana", category: "fruit", price: 0.5 },
  { id: 3, name: "Carrot", category: "veggie", price: 0.8 },
  { id: 4, name: "Mango", category: "fruit", price: 2.0 },
  { id: 5, name: "Broccoli", category: "veggie", price: 1.2 },
  { id: 6, name: "Grapes", category: "fruit", price: 3.0 },
];

app.get("/products", (req, res) => {
  // category=fruit&sort=price&page=1&limit=2;

  let list = [...FRUITS];

  const category = req.query.category;
  if (category !== undefined && String(category).trim() !== "") {
    list = list.filter(
      (fruit) => fruit.category.toLowerCase() === String(category).toLowerCase(),
    );
   }

  const sortParam = req.query.sort;
  if (sortParam) {
    const raw = String(sortParam);
    const desc = raw.startsWith("-");
    const field = desc ? raw.slice(1) : raw;
    if (field === "price") {
      list = [...list].sort((a, b) => {
        const diff = a.price - b.price;
        return desc ? -diff : diff;
      });
    }
  }

  const total = list.length;

  const pageQuery = req.query.page;
  const pageNum = Math.max(1, Number.parseInt(pageQuery, 10) || 1);

  const limit = req.query.limit;
  const limitNum = Math.max(1, Number.parseInt(limit, 10) || 10);

  const start = (pageNum - 1) * limitNum;

  const data = list.slice(start, start + limitNum);

  res.json({ data, total, page: pageNum, limit: limitNum });
});

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
