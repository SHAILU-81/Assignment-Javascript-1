const trafficLight = prompt("What color is the traffic light?");

if (trafficLight === "red") {
  console.log("Vehicles must stop.");
} else if (trafficLight === "yellow") {
  console.log("Vehicles should slow down and prepare to stop.");
} else if (trafficLight === "green") {
  console.log("Vehicles can proceed.");
} else {
  console.log("Invalid input.");
}
