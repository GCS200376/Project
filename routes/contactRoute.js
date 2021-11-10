var fs = require("fs");
const express = require("express");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", 
    (req, res) => {

        res.writeHead(200);
        var data = fs.readFileSync("./views/contact.html");
        res.end(data.toString());
});

//////////////////////////////////////////
module.exports = router;