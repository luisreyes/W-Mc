if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
}


//Global Helpers
Template.registerHelper("loggedIn", function() {
  return Meteor.userId();
});