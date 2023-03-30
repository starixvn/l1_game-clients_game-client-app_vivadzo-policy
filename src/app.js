import express from "express";
import minify from "express-minify";

const port = 5000;
const app = express();
app.use(minify());
app.use(
    express.static("public", {
        etag: true,
    })
);
app.get("/", (req, res)=>{
    res.send("OK!");
});
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
