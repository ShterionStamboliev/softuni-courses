function tickets(arr, criteria) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = +price;
      this.status = status;
    }
  }
  const flights = [];
  arr.forEach((x) => {
    const [dest, price, status] = x.split("|");
    const ticket = new Ticket(dest, price, status);
    flights.push(ticket);
  });
  if (criteria === 'destination') {
    flights.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria === 'price') {
    flights.sort((a, b) => a.price - b.price);
  } else if (criteria === 'status') {
    flights.sort((a, b) => a.status.localeCompare(b.status));
  }
  return flights;
}
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
