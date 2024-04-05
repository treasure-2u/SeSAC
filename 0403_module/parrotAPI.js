const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/parrot", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=parrot&per_page=1",
      {
        headers: {
          Authorization: "Bearer 43208144-73048ce45902aa1d20f2e475e",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching parrot image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
