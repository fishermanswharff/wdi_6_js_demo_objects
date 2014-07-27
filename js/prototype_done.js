var record = {media_type: 'vinyl'};
var theBottle = {title: "The Bottle"};

debugger;
// Look a the song object's prototype, __proto__. It should be a object literal, {}.

// set a prototype of theBottle to record. Making it a record.
theBottle.__proto__ = record;

// Look a the song object's prototype, __proto__. It should be the record
console.log(theBottle.title + "media type is " + theBottle.media_type);

