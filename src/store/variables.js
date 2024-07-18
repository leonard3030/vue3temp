let API_URL = "";
if (process.env.NODE_ENV === "development") {
  API_URL = process.env.VUE_APP_DEV_API_URL;
} else {
  API_URL = process.env.VUE_APP_API_URL;
}
export const BACKEND = API_URL;
let uploadurl = "";
if (process.env.NODE_ENV === "development") {
  uploadurl = process.env.VUE_APP_DEV_UPLOAD_URL;
} else {
  uploadurl = process.env.VUE_APP_UPLOAD_URL;
}
export const UPLOAD_URL = uploadurl;
