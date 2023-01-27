// const getCardData = () => Promise.resolve([
//     {
//         card: {
//             name: "Tigers",
//             sport: "Hockey",
//             city: "Orlando",
//             state: "Fl"
//         }
//     },

//     {
//         card: {
//             name: "Panthers",
//             sport: "Baseball",
//             city: "Tampa",
//             state: "Fl"
//         }
//     },

//     {
//         card: {
//             name: "Lions",
//             sport: "Soccer",
//             city: "Miami",
//             state: "Fl"
//         }
//     },

//     {
//         card: {
//             name: "Badgers",
//             sport: "Tennis",
//             city: "Fort Lauderdale",
//             state: "Fl"
//         }
//     },

//     {
//         card: {
//             name: "Dragons",
//             sport: "Football",
//             city: "Ocala",
//             state: "Fl"
//         }
//     }
// //];
// ]);

// const cardMiddleware = async (req, res, next) => {
//     if (!res.locals.partials) res.locals.partials = {}
//     res.locals.partials.cardContext = await getCardData()
//     next()
// };

// module.exports = cardMiddleware;