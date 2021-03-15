// export const regxUserName = /^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
// export const regxEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// export const regxPhoneNumber = /^\d{10}$/;
// //password validation for Minimum six characters, at least one letter and one number:
// export const regxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

module.exports = {
  regxFirstName: /^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/,
  regxLastName: /^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/,
  regxEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  regxPrimaryNumber: /^\d{10}$/,
  // regxSecondaryNumber: /^\d{10}$/,
  regxPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
