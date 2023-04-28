const express = require("express");
const adsSchema = require("./models/ads");
const router = express.Router();

router.route("/data/:searchData").get(async (req, res) => {
  let searchData = req.params.searchData;
  adsSchema
    .aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "companyName",
        },
      },
      {
        $unwind: "$companyName",
      },
      {
        $match: {
          $or: [
            { "companyName.name": { $regex: `${searchData}`, $options: "i" } },
            { primaryText: { $regex: `${searchData}`, $options: "i" } },
            { headline: { $regex: `${searchData}`, $options: "i" } },
            { description: { $regex: `${searchData}`, $options: "i" } },
          ],
        },
      },
    ])
    .then(function (response) {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
