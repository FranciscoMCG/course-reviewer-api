import * as mongoose from "mongoose";
import { reviewSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Review = mongoose.model("Review", reviewSchema);

export class ReviewController {
  public addNewReview(req: Request, res: Response) {
    let newReview = new Review(req.body);

    newReview.save((err, review) => {
      if (err) {
        res.send(err);
      }
      res.json(review);
    });
  }

  public getReviews(req: Request, res: Response) {
    Review.find({}, (err, review) => {
      if (err) {
        res.send(err);
      }
      res.json(review);
    });
  }

  public getReviewWithID(req: Request, res: Response) {
    Review.findById(req.params.reviewId, (err, review) => {
      if (err) {
        res.send(err);
      }
      res.json(review);
    });
  }

  public deleteReview(req: Request, res: Response) {
    Review.deleteOne({ _id: req.params.reviewId }, (err, review) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted" });
    });
  }
}
