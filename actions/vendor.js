import axios from "axios";
import jsCookies from "js-cookies";

module.exports = {
  getCodes: async (vendorId, cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/keys/vendor/remaining/${vendorId}`
    );
    if (res && res.status == 200) {
      console.log(res.data.data);
      cb(null, res.data.data);
    } else {
      console.log(res.data.data);
      cb(res.data.message, null);
    }
  },
  getProfile: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors/profile`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      console.log(res.data);
      cb(null, res.data);
    } else {
      console.log(res.data);
      cb(res.data.message, null);
    }
  },
};
