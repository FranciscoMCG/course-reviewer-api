"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Review = mongoose.model("Review", crmModel_1.reviewSchema);
class ReviewController {
    addNewReview(req, res) {
        let newReview = new Review(req.body);
        newReview.save((err, review) => {
            if (err) {
                res.send(err);
            }
            res.json(review);
        });
    }
    getReviews(req, res) {
        Review.find({}, (err, review) => {
            if (err) {
                res.send(err);
            }
            res.json(review);
        });
    }
    getReviewWithID(req, res) {
        Review.findById(req.params.reviewId, (err, review) => {
            if (err) {
                res.send(err);
            }
            res.json(review);
        });
    }
    deleteReview(req, res) {
        Review.deleteOne({ _id: req.params.reviewId }, (err, review) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted" });
        });
    }
}
exports.ReviewController = ReviewController;
//# sourceMappingURL=crmController.js.map