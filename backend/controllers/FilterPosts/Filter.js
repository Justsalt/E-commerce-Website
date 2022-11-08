const categoriesPostSchema = require("../../schemas/Categories");
const ITEMS_PER_PAGE = 3;
module.exports = {
  GetPostsByCategory: async (req, res) => {
    const { priceOne, priceTwo, searchingOrOffer, condition, categoryName } =
      req.body;

    const maxPrice = await categoriesPostSchema
      .find({}, { _id: 0, price: 1 })
      .sort({ price: 1 });
    const LastMaximumNumber = maxPrice[maxPrice.length - 1].price;

    const filterData = {
      price: {
        $gte: Number(priceOne),
        $lte: Number(priceTwo) === 0 ? LastMaximumNumber : priceTwo,
      },
      searchingOrOffer:
        searchingOrOffer === "all" ? ["searching", "offer"] : searchingOrOffer,
      condition: condition === "all" ? ["new", "used"] : condition,
      category:
        categoryName === "allCategories"
          ? [
              "transport",
              "realEsate",
              "job",
              "houseHold",
              "computer",
              "machinery",
            ]
          : categoryName,
    };

    const filterPostCount = await categoriesPostSchema
      .find(filterData)
      .sort({ price: 1 });

    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * ITEMS_PER_PAGE;
    countLength = filterPostCount.length; // // .skip(page * booksPerPage).limit(bPage)
    const pageCount = countLength / ITEMS_PER_PAGE;
    const CategoryPostFilter = await categoriesPostSchema
      .find(filterData)
      .skip(skip)
      .sort({ price: 1 })
      .limit(3);

    return res.status(200).send({
      pagination: {
        countLength,
        pageCount,
      },
      msg: "Rastas Postas Pagal Kategorija",
      post: CategoryPostFilter,
      price: maxPrice,
    });
  },
};
