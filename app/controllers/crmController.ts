import * as mongoose from "mongoose";
import { ReviewSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Review = mongoose.model("Review", ReviewSchema);

export class ReviewController {
  public getReviews(req: Request, res: Response) {
    Review.find({}, (err, review) => {
      if (err) {
        res.send(err);
      }
      res.json(review);
    });
  }
}
