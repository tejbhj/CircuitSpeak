const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  try {
    const query = event.queryStringParameters.q;

    if (!query) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing search query" }),
      };
    }

    const data = {
      ebay: null,
      rakuten: null,
      specs: null,
      gsm: null,
      reddit: null,
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data,
      }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
