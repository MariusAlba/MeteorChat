import { Meteor } from 'meteor/meteor';


Messages = new Mongo.Collection('messages');


Meteor.startup(() => {
  // code to run on server at startup
});
