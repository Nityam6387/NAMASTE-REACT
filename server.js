const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// ----------------------
// YOUR SWIGGY COOKIES
// ----------------------
const SWIGGY_COOKIES = "__SW=N8FHD__MoRHoEctqp49W63Qo71-8dT9I; _device_id=8af127e0-19d3-dc75-99f3-235a51af467d; _guest_tid=98624419-8a59-44ab-993c-5b0d160c88de; _sid=ochc7031-f304-4004-8caa-bc1d2e073205; aws-waf-token=9c5d3d50-c728-433d-a11c-5a64ed6070d6:HgoAfeZS5cgKAAAA:3/iSmgf/e+hGxCe4eAJ0inNQkYZxbx3zgkcjHqKssUWYp1T6/to4JYqxIlEmtHeir6CCVrYvDHo1VVnRAOjqbVDsXc8fZxkfpIulE7vnye16jSmZcy64MUZXhYkO+7y+runzzKv3SsSnjQTuvE6XuSq72IXDgoR0ink3DVBELr0JriIU4SslnBdE8ZKeILZlBR+CXu0BeZmS;";


// ------------------------------------------------------
// 1️⃣ GET ALL RESTAURANTS (Card list on home page)
// ------------------------------------------------------
app.get("/api/restaurants", async (req, res) => {
  const swiggyAPI =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355&lng=77.3910&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await axios.get(swiggyAPI, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/json",
        Cookie: SWIGGY_COOKIES,
      },
    });

    console.log("🔥 Restaurants list fetched.");
    res.json(response.data);

  } catch (err) {
    console.log("❌ Restaurants list fetch failed:", err.message);
    res.status(500).json({
      error: "Failed to fetch restaurants list",
      details: err.message,
    });
  }
});


// ------------------------------------------------------
// 2️⃣ GET RESTAURANT MENU (Single Restaurant Details)
// ------------------------------------------------------
app.get("/api/restaurant/:id", async (req, res) => {
  const id = req.params.id;

  const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.85&lng=80.95&restaurantId=${id}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/json",
        Cookie: SWIGGY_COOKIES,
      },
    });

    console.log("🔥 Menu fetched using AXIOS.");
    res.json(response.data);

  } catch (err) {
    console.log("❌ MENU FETCH FAILED:", err.message);
    res.status(500).json({
      error: "Failed to fetch menu",
      details: err.message,
    });
  }
});


// ------------------------------------------------------
// START SERVER
// ------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
