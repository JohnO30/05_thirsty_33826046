// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Disco Drinks",
                productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
}


// Handle our routes
router.get('/',function(req,res){
    res.render('index.ejs', { ...shopData, path: '/' })
 });


router.get("/about", (req, res) => {
    res.render("about.ejs", { ...shopData, path: '/about' })
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", { ...shopData, path: '/search' })
});

router.get('/search_result', function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

router.get("/register", (req,res) => {
    res.render("register.ejs", { ...shopData, path: '/register' }); 
}); 
 
router.post("/registered", (req, res) => {
    res.send("Hello " + req.body.first + " " + req.body.last + " you have now registered!"
         + "We will send an email to you at: " + req.body.email);
});

// Survey routes
router.get("/survey", (req, res) => {
    res.render("survey.ejs", { ...shopData, path: '/survey' });
});

router.post("/survey-results", (req, res) => {
    // Combine shop data with form data for the results template
    const viewData = {
        ...shopData,
        ...req.body,
        path: '/survey',
        // Ensure checkbox value is handled properly
        isStudent: req.body.isStudent || 'no'
    };
    res.render("survey-results.ejs", viewData);
});

// Export the router object so index.js can access it
module.exports = router;
