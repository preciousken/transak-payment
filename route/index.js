const express = require("express");
const { getCryptoCurrencies } = require("../currencies/getCryptoCurrencies");
const router = express.Router();

// countries

// currencies
router.get("/getCrptoCurrencies",getCryptoCurrencies )

// partners


module.exports = router;