import "express";
import type { UserResponse } from "../../models/user.js";

declare module "express-serve-static-core" {
  interface Request {
    user: UserResponse;
  }
}
