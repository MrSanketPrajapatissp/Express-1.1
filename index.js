const express = require("express");

const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  var ans = sum(n);
  res.send("Hii your ans is : " + ans.toString());
});

app.listen(2444, () => {
  console.log("Server is running on port 2444");
});
