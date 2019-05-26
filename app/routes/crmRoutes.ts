import { Request, Response, NextFunction } from "express";
import { ReviewController } from "../controllers/crmController";

export class Routes {
  public reviewController: ReviewController = new ReviewController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfull"
      });
    });

    app
      .route("/reviews")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, this.reviewController.getReviews)
      .post(this.reviewController.addNewReview);

    app
      .route("/reviews/:reviewId")
      .get(this.reviewController.getReviewWithID)
      .delete(this.reviewController.deleteReview);
  }
}
