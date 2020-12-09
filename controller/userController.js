return await db.User.find({
  userId: user._id,
});


// find always gets an array
// findOne always get an object