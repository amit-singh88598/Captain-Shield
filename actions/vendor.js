import axios from "axios";

module.exports = {
  getCodes: async (vendorId, cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/keys/vendor/remaining/${vendorId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          withCredentials: true,
          mode: "no-cors",
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },
  getProfile: async (vendorId, cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/vendors/vendor/605065bcc26a4d23baac1be7`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          withCredentials: true,
          mode: "no-cors",
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },
};
