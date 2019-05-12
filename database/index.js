const mongoose = require('mongoose');
// require('dotenv').config();
mongoose.connect('mongodb://localhost/chatbot');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});

let rsvpSchema = ({
  fullName: String,
  agent: String,
  guests: Number,
});

let Rsvp = mongoose.model('RSVP', rsvpSchema)

function save(e) {
  let obj = new Rsvp({
    fullName: e.name,
    agent: e.agent,
    guests: e.guests,
  });
  obj.save()
}


let funcs = { Rsvp, save }
module.exports = funcs;
