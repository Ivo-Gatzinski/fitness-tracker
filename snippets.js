const mongoose = require("mongoose");
const db = require("./models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
async function readUsersWithTotals() {
  try {
    const users = await db.User.aggregate([
      {
        $addFields: {
          totalLikes: { $sum: "$posts.likes" },
          postCount: { $size: "$posts" },
        },
      },
    ]);
    console.log(JSON.stringify(users, null, 4));
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}
readUsersWithTotals();