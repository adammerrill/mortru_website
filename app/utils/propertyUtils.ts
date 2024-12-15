interface Property {
  id: number;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

/**
 * Calculates the price per square foot for a given property.
 * 
 * @param {Property} property - The property object containing price and square footage.
 * @returns {number} The calculated price per square foot, rounded to two decimal places.
 * @throws {Error} Throws an error if the square footage is zero or negative.
 * 
 * @example
 * const property = {
 *   id: 1,
 *   address: '123 Main St',
 *   price: 300000,
 *   bedrooms: 3,
 *   bathrooms: 2,
 *   sqft: 1500
 * };
 * const pricePerSqFt = calculatePricePerSqFt(property);
 * console.log(pricePerSqFt); // Output: 200.00
 */
export function calculatePricePerSqFt(property: Property): number {
  if (property.sqft <= 0) {
    throw new Error('Square footage must be a positive number');
  }
  return Number((property.price / property.sqft).toFixed(2));
}

/**
 * Formats the price of a property as a string with commas and dollar sign.
 * 
 * @param {number} price - The price of the property.
 * @returns {string} The formatted price string.
 * 
 * @example
 * const formattedPrice = formatPrice(1234567);
 * console.log(formattedPrice); // Output: "$1,234,567"
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

/**
 * Filters an array of properties based on specified criteria.
 * 
 * @param {Property[]} properties - An array of property objects to filter.
 * @param {Object} criteria - An object containing filter criteria.
 * @param {number} [criteria.minPrice] - The minimum price of properties to include.
 * @param {number} [criteria.maxPrice] - The maximum price of properties to include.
 * @param {number} [criteria.minBedrooms] - The minimum number of bedrooms required.
 * @param {number} [criteria.minBathrooms] - The minimum number of bathrooms required.
 * @returns {Property[]} An array of properties that match the specified criteria.
 * 
 * @example
 * const properties = [
 *   { id: 1, address: '123 Main St', price: 300000, bedrooms: 3, bathrooms: 2, sqft: 1500 },
 *   { id: 2, address: '456 Elm St', price: 500000, bedrooms: 4, bathrooms: 3, sqft: 2000 },
 *   { id: 3, address: '789 Oak St', price: 400000, bedrooms: 3, bathrooms: 2.5, sqft: 1800 }
 * ];
 * const filteredProperties = filterProperties(properties, { minPrice: 350000, minBedrooms: 3 });
 * console.log(filteredProperties); // Output: [{ id: 2, ... }, { id: 3, ... }]
 */
export function filterProperties(properties: Property[], criteria: {
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
}): Property[] {
  return properties.filter(property => {
    if (criteria.minPrice && property.price < criteria.minPrice) return false;
    if (criteria.maxPrice && property.price > criteria.maxPrice) return false;
    if (criteria.minBedrooms && property.bedrooms < criteria.minBedrooms) return false;
    if (criteria.minBathrooms && property.bathrooms < criteria.minBathrooms) return false;
    return true;
  });
}

