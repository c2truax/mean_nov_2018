// views.py in Django
// Controller - Export functions for our routes.js file to use.
module.exports = {

    cats: function (req, res) {
        var cats = [{
                name: "Erica",
                fav_food: "Spaghetti",
                age: 2,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Kazuky",
                fav_food: "Spaghetti",
                age: 3,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Kote",
                fav_food: "Spaghetti",
                age: 1,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Raoul",
                fav_food: "Spaghetti",
                age: 4,
                sleep_spots: ["under the bed", "in a sunbeam"],
            }
        ];
        res.render('cats', {
            cats: cats
        });
    },


    //*-------------------------- Details --------------------------*//
    details: function (req, res) {
        console.log("req.params.cat_name: " + req.params.cat_name);
        console.log("req.cat_name: " + req.cat_name);
        var cats = [{
                name: "Erica",
                fav_food: "Spaghetti",
                age: 2,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Kazuky",
                fav_food: "Spaghetti",
                age: 3,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Kote",
                fav_food: "Spaghetti",
                age: 1,
                sleep_spots: ["under the bed", "in a sunbeam"],
            },
            {
                name: "Raoul",
                fav_food: "Spaghetti",
                age: 4,
                sleep_spots: ["under the bed", "in a sunbeam"],
            }
        ];
        var cat = cats.find(function (cat) {
            return cat.name === req.params.cat_name;
        });
        console.log("cat: " + cat);
        res.render('details', {
            cat: cat
        });
    }
};
