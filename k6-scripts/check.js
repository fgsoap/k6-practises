import { check } from "k6";
import http from "k6/http";

export default function () {
  let res = http.get("http://localhost:8000");
  console.log(res.body.length);
  check(res, {
    "is status 200": (r) => r.status === 200,
    "body size is 16 bytes": (r) => r.body.length == 16,
  });
}
