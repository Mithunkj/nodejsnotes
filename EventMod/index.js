const EventEmitter = require("events");

const event = new EventEmitter();

// create an event emitter instance and regiter a couple of callbacks
event.on("sayMyName", () => {
  console.log("My name is Mithun");
});
event.on("sayMyName", () => {
  console.log("this is mithun");
});
event.on("sayMyName", () => {
  console.log("What you whant");
});
event.emit("sayMyName");//call 


//callback paramiter pass 
event.on("changepage", (sc, msg) => {
  console.log(`stateus code is ${sc} and the page is ${msg}`);
});

event.emit("changepage", 200, "ok");
