"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.reviewController = new crmController_1.ReviewController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "GET request successfull"
            });
        });
        app
            .route("/review")
            .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.reviewController.getReviews)
            .post(this.reviewController.addNewReview);
        app
            .route("/review/:reviewId")
            .get(this.reviewController.getReviewWithID)
            .delete(this.reviewController.deleteReview);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map