import axios from "axios";
import jsCookies from "js-cookies";

module.exports = {
  getCodes: async (vendorId, cb) => {
    try {
      const res = await axios.get(
        `${process.env.BASE_URL}/keys/vendor/remaining/${vendorId}`,
        {
          headers: {
            auth: jsCookies.getItem("auth"),
          },
        }
      );
      if (res && res.status == 200) {
        cb(null, res.data.data);
      } else {
        cb(res.data.message, null);
      }
    } catch (error) {
      console.log(error);
    }
  },
  getProfile: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors/profile`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      console.log(jsCookies.getItem("auth"));
      cb(null, res.data);
    } else {
      console.log(res.data);
      cb(res.data.message, null);
    }
  },
  getUsersProfile: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors/all/users`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      console.log(jsCookies.getItem("auth"));
      cb(null, res.data);
    } else {
      console.log(res.data);
      cb(res.data.message, null);
    }
  },
  getVendors: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      console.log(jsCookies.getItem("auth"));
      cb(null, res.data);
    } else {
      console.log(res.data);
      cb(res.data.message, null);
    }
  },
};
