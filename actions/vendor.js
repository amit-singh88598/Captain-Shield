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
      cb("error occure", null);
    }
  },
  // getProfile: async (vendorId, cb) => {
  //   const res = await axios.get(
  //     `${process.env.BASE_URL}/vendors/profile/${vendorId}`,
  //     {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //         withCredentials: true,
  //         mode: "no-cors",
  //       },
  //     }
  //   );
  //   if (res && res.status == 200) {
  //     cb(null, res.data);
  //   } else {
  //     cb("error occure", null);
  //   }
  // },
};
