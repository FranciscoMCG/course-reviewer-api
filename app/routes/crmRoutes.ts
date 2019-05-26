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

    // Review
  }
}
