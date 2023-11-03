const router = require("express").Router();
const Booking = require("../models/Booking");
const verifyToken = require("../middlewares/verify");

router.get("/", (req, res) => {
    res.send("Booking Route is working");
});

router.get("/all", verifyToken, async (req, res) => {
    try {
        const data = await Booking.find();
        res.json({ users: data });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

router.post("/add", verifyToken, async (req, res) => {
    try {
        const data = await Booking.create(req.body);
        res.json({ msg: "Ticket Booked" });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
    try {
        const data = await Booking.findByIdAndDelete(req.params.id);
        res.json({ msg: "Ticket Cancel Successful" });
    } catch (error) {
        
    }
});

module.exports = router;