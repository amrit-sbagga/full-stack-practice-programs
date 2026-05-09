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
