// updateAnalytics.js — stub for restaurant analytics updates
// Called from booking, cancellation, guest, and special request routes

const updateRestaurantAnalytics = async ({ items = [], amount = 0, prepTime = 0, barDrinks = [] }) => {
  // No-op: analytics tracking placeholder
  // Implement actual analytics logic here if needed
  console.log('Analytics update:', { itemCount: items.length, amount, prepTime, barDrinksCount: barDrinks.length });
};

module.exports = updateRestaurantAnalytics;
