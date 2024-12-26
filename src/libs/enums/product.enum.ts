export enum ProductSize {
  SINGLE = "SINGLE", // For single items like one chair, one table, etc.
  DOUBLE = "DOUBLE", // For items like two-seaters or double beds
  MULTI = "MULTI", // For multi-item sets or large modular furniture
  FULL_SET = "FULL_SET", // For complete furniture sets (e.g., dining table + chairs)
}

export enum ProductVolume {
  LIGHTWEIGHT = 0.3, // Lightweight items like small stools or wall shelves
  STANDARD = 1, // Regular-sized furniture items
  HEAVY = 2, // Heavier items like large wardrobes or dining tables
  EXTRA_HEAVY = 3, // Very heavy items like king-size beds or sectional sofas
}

export enum ProductStatus {
  PAUSE = "PAUSE",
  PROCESS = "PROCESS",
  DELETE = "DELETE",
}

export enum ProductCollection {
  CHAIRS = "CHAIRS", // Includes various types of chairs
  TABLES = "TABLES", // Includes dining tables, coffee tables, etc.
  STORAGE = "STORAGE", // Includes wardrobes, shelves, cabinets, etc.
  BEDS = "BEDS", // Includes beds, mattresses, and bed frames
  OTHER = "OTHER", // Miscellaneous items or uncategorized furniture
}
