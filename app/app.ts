import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";

import { Routes } from "./routes/crmRoutes";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = "mongodb://localhost/CRMdb";

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true
    });
  }
}

export default new App().app;
