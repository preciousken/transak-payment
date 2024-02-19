const express = require("express");
const { getCryptoCurrencies } = require("../currencies/getCryptoCurrencies");
const { getFiatCurrencies } = require("../currencies/getFiatCurrencies");
const router = express.Router();

// countries

// currencies
router.get("/getCrptoCurrencies",getCryptoCurrencies )
router.get("/getFiatCurrencies",getFiatCurrencies )

// partners


module.exports = router;