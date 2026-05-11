/**
 * PROGRAM 11 — Event Emitter
 *
 * This is a plain Node.js script (no Express). Run with: npm run 11
 *
 * Tasks:
 *
 * Task 1 — Basic EventEmitter
 *   - Create an EventEmitter instance
 *   - Listen for a "greet" event that logs: "Hello, <name>!"
 *   - Emit the event with name "Alice" and then "Bob"
 *
 * Task 2 — Once listener
 *   - Listen for a "connect" event using .once() (fires only one time)
 *   - Emit "connect" twice — verify it only logs once
 *
 * Task 3 — Custom EventEmitter class
 *   - Create a class OrderSystem that extends EventEmitter
 *   - Method placeOrder(item) → emits "orderPlaced" with { item, time: new Date() }
 *   - Method shipOrder(item) → emits "orderShipped" with { item, time: new Date() }
 *   - Listen to both events and log the details
 *   - Place 2 orders then ship them
 *
 * Task 4 — Error event
 *   - EventEmitters have a special "error" event
 *   - If "error" is emitted and no listener exists → Node crashes
 *   - Add an error listener that logs: "Error caught: <message>"
 *   - Emit an error and verify it's caught gracefully
 */

import { EventEmitter } from "node:events";

// ----- Task 1 -----
console.log("\n--- Task 1: greet ---");

const greeter = new EventEmitter();
greeter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});
greeter.emit("greet", "Alice");
greeter.emit("greet", "Bob");

// ----- Task 2 -----
console.log("\n--- Task 2: connect (once) ---");
const connector = new EventEmitter();
let connectLogCount = 0;
connector.once("connect", () => {
  connectLogCount += 1;
  console.log("Connect event fired (should appear only once)");
});
connector.emit("connect");
connector.emit("connect");
console.log(`connect handler ran ${connectLogCount} time(s)`);

// ----- Task 3 -----
console.log("\n--- Task 3: OrderSystem ---");
class OrderSystem extends EventEmitter {
  placeOrder(item) {
    this.emit("orderPlaced", { item, time: new Date() });
  }

  shipOrder(item) {
    this.emit("orderShipped", { item, time: new Date() });
  }
}

const orders = new OrderSystem();

orders.on("orderPlaced", (payload) => {
  console.log("orderPlaced:", payload);
});

orders.on("orderShipped", (payload) => {
  console.log("orderShipped:", payload);
});

orders.placeOrder("Keyboard");
orders.placeOrder("Mouse");
orders.shipOrder("Keyboard");
orders.shipOrder("Mouse");

// ----- Task 4 -----
console.log("\n--- Task 4: error ---");
const safe = new EventEmitter();
safe.on("error", (err) => {
  console.log(`Error caught: ${err.message}`);
});
safe.emit("error", new Error("demo failure"));

console.log("\nDone.\n");