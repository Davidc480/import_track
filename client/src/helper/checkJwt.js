import jwt from "jsonwebtoken";
import { JWTSECRET } from "@/env";

const checkJwt = token => {
  try {
    const claveSecreta = JWTSECRET;
    const decoded = jwt.verify(token, claveSecreta);
    return decoded;
  } catch (error) {
    return null;
  }
};

export default checkJwt;
