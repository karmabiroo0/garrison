export type Load = {
  id: string
  pickupCity: string
  pickupState: string
  dropoffCity: string
  dropoffState: string
  equipmentType: "Dry Van" | "Reefer" | "Flatbed" | "Hotshot" | "Power Only"
  weight: number
  loadType: "Single Route" | "Dedicated Route"
  freightType: "Amazon" | "Dock-to-Dock" | "Airport Freight" | "Drayage" | "General" | "Expedited"
}

export const loadsData: Load[] = [
  { id: "GL-1001", pickupCity: "Lakewood", pickupState: "OH", dropoffCity: "Richmond", dropoffState: "IN", equipmentType: "Sprinter Van", weight: 3800, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1002", pickupCity: "Los Angeles", pickupState: "CA", dropoffCity: "Phoenix", dropoffState: "AZ", equipmentType: "Reefer", weight: 42000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1003", pickupCity: "Chicago", pickupState: "IL", dropoffCity: "Detroit", dropoffState: "MI", equipmentType: "Dry Van", weight: 35000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1004", pickupCity: "Houston", pickupState: "TX", dropoffCity: "New Orleans", dropoffState: "LA", equipmentType: "Flatbed", weight: 44000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1005", pickupCity: "Miami", pickupState: "FL", dropoffCity: "Jacksonville", dropoffState: "FL", equipmentType: "Reefer", weight: 36000, loadType: "Dedicated Route", freightType: "Expedited" },
  { id: "GL-1006", pickupCity: "Seattle", pickupState: "WA", dropoffCity: "Portland", dropoffState: "OR", equipmentType: "Dry Van", weight: 40000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1007", pickupCity: "Denver", pickupState: "CO", dropoffCity: "Salt Lake City", dropoffState: "UT", equipmentType: "Hotshot", weight: 15000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1008", pickupCity: "Nashville", pickupState: "TN", dropoffCity: "Memphis", dropoffState: "TN", equipmentType: "Dry Van", weight: 38000, loadType: "Dedicated Route", freightType: "Dock-to-Dock" },
  { id: "GL-1009", pickupCity: "Birmingham", pickupState: "AL", dropoffCity: "Montgomery", dropoffState: "AL", equipmentType: "Flatbed", weight: 46000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1010", pickupCity: "Charlotte", pickupState: "NC", dropoffCity: "Raleigh", dropoffState: "NC", equipmentType: "Dry Van", weight: 32000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1011", pickupCity: "Newark", pickupState: "NJ", dropoffCity: "Boston", dropoffState: "MA", equipmentType: "Reefer", weight: 39000, loadType: "Dedicated Route", freightType: "Airport Freight" },
  { id: "GL-1012", pickupCity: "San Francisco", pickupState: "CA", dropoffCity: "Sacramento", dropoffState: "CA", equipmentType: "Dry Van", weight: 41000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1013", pickupCity: "Las Vegas", pickupState: "NV", dropoffCity: "Los Angeles", dropoffState: "CA", equipmentType: "Power Only", weight: 43000, loadType: "Single Route", freightType: "Drayage" },
  { id: "GL-1014", pickupCity: "Philadelphia", pickupState: "PA", dropoffCity: "Pittsburgh", dropoffState: "PA", equipmentType: "Dry Van", weight: 37000, loadType: "Dedicated Route", freightType: "General" },
  { id: "GL-1015", pickupCity: "Austin", pickupState: "TX", dropoffCity: "San Antonio", dropoffState: "TX", equipmentType: "Hotshot", weight: 12000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1016", pickupCity: "Tampa", pickupState: "FL", dropoffCity: "Orlando", dropoffState: "FL", equipmentType: "Reefer", weight: 35000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1017", pickupCity: "Columbus", pickupState: "OH", dropoffCity: "Cleveland", dropoffState: "OH", equipmentType: "Dry Van", weight: 39000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1018", pickupCity: "Indianapolis", pickupState: "IN", dropoffCity: "Louisville", dropoffState: "KY", equipmentType: "Flatbed", weight: 45000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1019", pickupCity: "Kansas City", pickupState: "MO", dropoffCity: "St. Louis", dropoffState: "MO", equipmentType: "Dry Van", weight: 40000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1020", pickupCity: "Minneapolis", pickupState: "MN", dropoffCity: "Milwaukee", dropoffState: "WI", equipmentType: "Reefer", weight: 38000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1021", pickupCity: "Oklahoma City", pickupState: "OK", dropoffCity: "Tulsa", dropoffState: "OK", equipmentType: "Dry Van", weight: 36000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1022", pickupCity: "El Paso", pickupState: "TX", dropoffCity: "Albuquerque", dropoffState: "NM", equipmentType: "Power Only", weight: 42000, loadType: "Single Route", freightType: "Drayage" },
  { id: "GL-1023", pickupCity: "Tucson", pickupState: "AZ", dropoffCity: "Phoenix", dropoffState: "AZ", equipmentType: "Hotshot", weight: 18000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1024", pickupCity: "Baltimore", pickupState: "MD", dropoffCity: "Washington", dropoffState: "DC", equipmentType: "Dry Van", weight: 34000, loadType: "Dedicated Route", freightType: "Airport Freight" },
  { id: "GL-1025", pickupCity: "Savannah", pickupState: "GA", dropoffCity: "Charleston", dropoffState: "SC", equipmentType: "Reefer", weight: 37000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1026", pickupCity: "Richmond", pickupState: "VA", dropoffCity: "Norfolk", dropoffState: "VA", equipmentType: "Flatbed", weight: 44000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1027", pickupCity: "Hartford", pickupState: "CT", dropoffCity: "Providence", dropoffState: "RI", equipmentType: "Dry Van", weight: 31000, loadType: "Dedicated Route", freightType: "Dock-to-Dock" },
  { id: "GL-1028", pickupCity: "Boise", pickupState: "ID", dropoffCity: "Spokane", dropoffState: "WA", equipmentType: "Dry Van", weight: 39000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1029", pickupCity: "Fresno", pickupState: "CA", dropoffCity: "Bakersfield", dropoffState: "CA", equipmentType: "Reefer", weight: 41000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1030", pickupCity: "Omaha", pickupState: "NE", dropoffCity: "Des Moines", dropoffState: "IA", equipmentType: "Dry Van", weight: 38000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1031", pickupCity: "Little Rock", pickupState: "AR", dropoffCity: "Memphis", dropoffState: "TN", equipmentType: "Hotshot", weight: 14000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1032", pickupCity: "Jackson", pickupState: "MS", dropoffCity: "Mobile", dropoffState: "AL", equipmentType: "Flatbed", weight: 46000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1033", pickupCity: "Huntsville", pickupState: "AL", dropoffCity: "Atlanta", dropoffState: "GA", equipmentType: "Dry Van", weight: 35000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1034", pickupCity: "Knoxville", pickupState: "TN", dropoffCity: "Nashville", dropoffState: "TN", equipmentType: "Reefer", weight: 40000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1035", pickupCity: "Lexington", pickupState: "KY", dropoffCity: "Cincinnati", dropoffState: "OH", equipmentType: "Dry Van", weight: 37000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1036", pickupCity: "Long Beach", pickupState: "CA", dropoffCity: "San Diego", dropoffState: "CA", equipmentType: "Power Only", weight: 43000, loadType: "Dedicated Route", freightType: "Drayage" },
  { id: "GL-1037", pickupCity: "Reno", pickupState: "NV", dropoffCity: "San Francisco", dropoffState: "CA", equipmentType: "Dry Van", weight: 36000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1038", pickupCity: "Allentown", pickupState: "PA", dropoffCity: "Newark", dropoffState: "NJ", equipmentType: "Reefer", weight: 39000, loadType: "Single Route", freightType: "Airport Freight" },
  { id: "GL-1039", pickupCity: "Grand Rapids", pickupState: "MI", dropoffCity: "Chicago", dropoffState: "IL", equipmentType: "Dry Van", weight: 42000, loadType: "Dedicated Route", freightType: "Dock-to-Dock" },
  { id: "GL-1040", pickupCity: "Wichita", pickupState: "KS", dropoffCity: "Oklahoma City", dropoffState: "OK", equipmentType: "Flatbed", weight: 45000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1041", pickupCity: "Greensboro", pickupState: "NC", dropoffCity: "Charlotte", dropoffState: "NC", equipmentType: "Hotshot", weight: 16000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1042", pickupCity: "Columbia", pickupState: "SC", dropoffCity: "Savannah", dropoffState: "GA", equipmentType: "Dry Van", weight: 38000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1043", pickupCity: "Buffalo", pickupState: "NY", dropoffCity: "Syracuse", dropoffState: "NY", equipmentType: "Reefer", weight: 34000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1044", pickupCity: "Fort Worth", pickupState: "TX", dropoffCity: "Dallas", dropoffState: "TX", equipmentType: "Dry Van", weight: 41000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1045", pickupCity: "Tacoma", pickupState: "WA", dropoffCity: "Seattle", dropoffState: "WA", equipmentType: "Power Only", weight: 44000, loadType: "Dedicated Route", freightType: "Drayage" },
  { id: "GL-1046", pickupCity: "Worcester", pickupState: "MA", dropoffCity: "Hartford", dropoffState: "CT", equipmentType: "Dry Van", weight: 33000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1047", pickupCity: "Dayton", pickupState: "OH", dropoffCity: "Columbus", dropoffState: "OH", equipmentType: "Flatbed", weight: 47000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1048", pickupCity: "Fort Wayne", pickupState: "IN", dropoffCity: "Indianapolis", dropoffState: "IN", equipmentType: "Reefer", weight: 38000, loadType: "Dedicated Route", freightType: "Expedited" },
  { id: "GL-1049", pickupCity: "Chattanooga", pickupState: "TN", dropoffCity: "Birmingham", dropoffState: "AL", equipmentType: "Dry Van", weight: 40000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1050", pickupCity: "Pensacola", pickupState: "FL", dropoffCity: "Mobile", dropoffState: "AL", equipmentType: "Hotshot", weight: 13000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1051", pickupCity: "Shreveport", pickupState: "LA", dropoffCity: "Dallas", dropoffState: "TX", equipmentType: "Dry Van", weight: 36000, loadType: "Dedicated Route", freightType: "Amazon" },
  { id: "GL-1052", pickupCity: "Springfield", pickupState: "MO", dropoffCity: "Kansas City", dropoffState: "MO", equipmentType: "Reefer", weight: 42000, loadType: "Single Route", freightType: "Dock-to-Dock" },
  { id: "GL-1053", pickupCity: "Lubbock", pickupState: "TX", dropoffCity: "Amarillo", dropoffState: "TX", equipmentType: "Flatbed", weight: 45000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1054", pickupCity: "Madison", pickupState: "WI", dropoffCity: "Chicago", dropoffState: "IL", equipmentType: "Dry Van", weight: 39000, loadType: "Dedicated Route", freightType: "Airport Freight" },
  { id: "GL-1055", pickupCity: "Sioux Falls", pickupState: "SD", dropoffCity: "Minneapolis", dropoffState: "MN", equipmentType: "Dry Van", weight: 37000, loadType: "Single Route", freightType: "General" },
  { id: "GL-1056", pickupCity: "Billings", pickupState: "MT", dropoffCity: "Boise", dropoffState: "ID", equipmentType: "Power Only", weight: 43000, loadType: "Single Route", freightType: "Drayage" },
  { id: "GL-1057", pickupCity: "Fargo", pickupState: "ND", dropoffCity: "Sioux Falls", dropoffState: "SD", equipmentType: "Hotshot", weight: 17000, loadType: "Single Route", freightType: "Expedited" },
  { id: "GL-1058", pickupCity: "Charleston", pickupState: "WV", dropoffCity: "Lexington", dropoffState: "KY", equipmentType: "Dry Van", weight: 35000, loadType: "Dedicated Route", freightType: "Dock-to-Dock" },
  { id: "GL-1059", pickupCity: "Wilmington", pickupState: "DE", dropoffCity: "Philadelphia", dropoffState: "PA", equipmentType: "Reefer", weight: 38000, loadType: "Single Route", freightType: "Amazon" },
  { id: "GL-1060", pickupCity: "Augusta", pickupState: "GA", dropoffCity: "Columbia", dropoffState: "SC", equipmentType: "Dry Van", weight: 41000, loadType: "Single Route", freightType: "General" },
]
