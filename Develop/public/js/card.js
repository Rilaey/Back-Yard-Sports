const getCardData = () => Promise.resolve([
    {
        card: {
            url: "",
            name: "Tigers",
            sport: "Hockey",
            city: "Orlando",
            state: "Fl"
        }
    },

    {
        card: {
            url: "",
            name: "Panthers",
            sport: "Baseball",
            city: "Tampa",
            state: "Fl"
        }
    },

    {
        card: {
            url: "",
            name: "Lions",
            sport: "Soccer",
            city: "Miami",
            state: "Fl"
        }
    },

    {
        card: {
            url: "",
            name: "Bangles",
            sport: "Tennis",
            city: "Fort Lauderdale",
            state: "Fl"
        }
    },

    {
        card: {
            url: "",
            name: "Tigers",
            sport: "Hockey",
            city: "Orlando",
            state: "Fl"
        }
    },
]);

const cardMiddleware = async (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.cardContext = await getCardData()
    next()
};

module.exports = cardMiddleware;