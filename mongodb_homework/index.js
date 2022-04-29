import mongodb from 'mongodb';

//TODO: add your mongo URL
//Remove URL when uploading to github 
const client = new mongodb.MongoClient('mongodb+srv://admin:Password@cluster0.bfg4u.mongodb.net?retryWrites=true&w=majority');

await client.connect();

const db = client.db('Video_Games_Homework');
const videoGames = db.collection('Video Games');

// await videoGames.insertOne({
//     Name: "Call of Duty",
//     Console: "PS4",
//     ReleaseDate: "2019",
//     Rateing: "8",
// });

// await videoGames.insertOne({
//     Name: "Assassins Creed",
//     Console: "PS4",
//     ReleaseDate: "2012",
//     Rateing: "9",
// });

// const displayArr = videoGames.find({});
// const results = await displayArr.toArray();
// console.log(results)



// videoGames.updateOne({Rateing: "8"}, {$set: {Rateing: "7.5"}});




// var ObjectId = mongodb.ObjectId;
// videoGames.deleteOne({ _id: ObjectId ("6269ebb0ff2f9ae8f949fa88")});

// Below also works for deleting one  
// videoGames.deleteOne({ _id: mongodb.ObjectId("6269ebb0ff2f9ae8f949fa88")});

// console.log("Updated")

// await client.close()