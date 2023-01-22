const getCardData = () => Promise.resolve([
    {
        card: {
            url: "",
            title: "First Card",
            text: "This is the first card"
        }
    },

    {
        card: {
            url: "",
            title: "Second Card",
            text: "This is the second card"
        }
    },

    {
        card: {
            url: "",
            title: "Third Card",
            text: "This is the third card"
        }
    },

    {
        card: {
            url: "",
            title: "Fourth Card",
            text: "This is the fourth card"
        }
    },

    {
        card: {
            url: "",
            title: "Fifth Card",
            text: "This is the fifth card"
        }
    },
]);

const cardMiddleware = async (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.cardContext = await getCardData()
    next()
};

module.exports = cardMiddleware;