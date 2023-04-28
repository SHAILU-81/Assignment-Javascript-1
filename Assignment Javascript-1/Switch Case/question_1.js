function daysUntilWeekend(dayOfWeek) {
    switch (dayOfWeek()) {
      case 'monday':
        return 5;
      case 'tuesday':
        return 4;
      case 'wednesday':
        return 3;
      case 'thursday':
        return 2;
      case 'friday':
        return 1;
      case 'saturday':
      case 'sunday':
        return 0;
      default:
        return -1; // error: invalid day of week
    }
  }
  
  // Example usage:
  console.log(daysUntilWeekend('Monday')); // Output: 5
  console.log(daysUntilWeekend('Wednesday')); // Output: 3
  console.log(daysUntilWeekend('Sunday')); // Output: 0
  console.log(daysUntilWeekend('invalid')); // Output: -1 (error)
  