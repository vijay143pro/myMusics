const song = require("express").Router();
const songSchema=require('../models/songs')
// const { User } = require("../models/user");
// const { Song, validate } = require("../models/song");
// const auth = require("../middleware/auth");
// const admin = require("../middleware/admin");
// const validateObjectId = require("../middleware/validateObjectId");

// Create song
song.post("/", async (req, res) => {

	// const song = await Song(req.body).save();
	// res.status(201).send({ data: song, message: "Song created successfully" });
    var data=new songSchema({
    name:req.body.name,
    artist:req.body.artist,
    song:req.body.song,
    img:req.body.img,
    duration:req.body.duration
       })
       await data.save();
       res.json(data)
    
    })
// Get all songs
song.get("/", async (req, res) => {
 	const songs = await songSchema.find();
 	res.status(200).send({ data: songs });
 });

// // Update song
// router.put("/:id", [validateObjectId, admin], async (req, res) => {
// 	const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
// 		new: true,
// 	});
// 	res.send({ data: song, message: "Updated song successfully" });
// });

// // Delete song by ID
// router.delete("/:id", [validateObjectId, admin], async (req, res) => {
// 	await Song.findByIdAndDelete(req.params.id);
// 	res.status(200).send({ message: "Song deleted sucessfully" });
// });

// // Like song
// router.put("/like/:id", [validateObjectId, auth], async (req, res) => {
// 	let resMessage = "";
// 	const song = await Song.findById(req.params.id);
// 	if (!song) return res.status(400).send({ message: "song does not exist" });

// 	const user = await User.findById(req.user._id);
// 	const index = user.likedSongs.indexOf(song._id);
// 	if (index === -1) {
// 		user.likedSongs.push(song._id);
// 		resMessage = "Added to your liked songs";
// 	} else {
// 		user.likedSongs.splice(index, 1);
// 		resMessage = "Removed from your liked songs";
// 	}

// 	await user.save();
// 	res.status(200).send({ message: resMessage });
// });

// // Get liked songs
// router.get("/like", auth, async (req, res) => {
// 	const user = await User.findById(req.user._id);
// 	const songs = await Song.find({ _id: user.likedSongs });
// 	res.status(200).send({ data: songs });
// });

module.exports = song;
