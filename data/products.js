// Thompson Station Depot inventory.
// To add or remove items for sale, edit this list and redeploy.
// price is in CENTS (e.g. 4500 = $45.00). image paths live in /public/products/.

const products = [
  {
    id: 'tsd-001',
    sku: 'TSD-001',
    name: 'Reclaimed Oak Farm Table',
    category: 'Furniture',
    price: 42500,
    condition: 'Good — light wear',
    description:
      'Solid oak farmhouse table, seats six. Sourced from a Franklin County estate sale. Sturdy joinery, minor surface scratches consistent with age.',
    image: '/products/coffee_table.png',
    inStock: true,
  },
  {
    id: 'tsd-002',
    sku: 'TSD-002',
    name: 'Industrial Steel Shelving Unit',
    category: 'Equipment',
    price: 18000,
    condition: 'Excellent',
    description:
      '5-tier commercial steel shelving, 72" tall. Great for garage, warehouse, or shop storage. Some surface rust spot-treated.',
    image: '/products/storage_cabinet.png',
    inStock: true,
  },
  {
    id: 'tsd-003',
    sku: 'TSD-003',
    name: 'Vintage Leather Wingback Chair',
    category: 'Furniture',
    price: 32000,
    condition: 'Good — patina',
    description:
      'Genuine leather wingback with brass nailhead trim. Deep, worn-in patina.',
    image: '/products/wingback_leather_chair.png',
    inStock: true,
  },
  {
    id: 'tsd-004',
    sku: 'TSD-004',
    name: 'DEWALT Table Saw, 10"',
    category: 'Tools',
    price: 27500,
    condition: 'Used — tested working',
    description:
      'Jobsite table saw with rolling stand. Blade recently replaced. Powers on and cuts true — tested before listing.',
    image: '/products/table_saw.png',
    inStock: true,
  },
  {
    id: 'tsd-005',
    sku: 'TSD-005',
    name: 'Mid-Century Walnut Dresser',
    category: 'Furniture',
    price: 38500,
    condition: 'Very good',
    description:
      'Six-drawer walnut dresser, original brass pulls, smooth-gliding drawers. A clean example of the era.',
    image: '/products/oak_dresser.png',
    inStock: true,
  },
  {
    id: 'tsd-006',
    sku: 'TSD-006',
    name: 'Commercial Espresso Machine',
    category: 'Equipment',
    price: 65000,
    condition: 'Used — fully serviced',
    description:
      '2-group commercial espresso machine, pulled from a closed cafe. Fully descaled and serviced, ready to run.',
    image: '/products/espresso_maker.png',
    inStock: true,
  },
  {
    id: 'tsd-007',
    sku: 'TSD-007',
    name: 'Cast Iron Wood Stove',
    category: 'Outdoor',
    price: 47500,
    condition: 'Good',
    description:
      'Freestanding cast iron wood stove, good seal on the door gasket, chimney pipe included.',
    image: '/products/photo-9.jpg',
    inStock: true,
  },
  {
    id: 'tsd-008',
    sku: 'TSD-008',
    name: 'Rolling Tool Chest, 26"',
    category: 'Tools',
    price: 22000,
    condition: 'Very good',
    description:
      'Ball-bearing drawer slides, keyed lock, minor cosmetic scuffs on the base. Empty, ready to fill.',
    image: '/products/tool_cabinet.png',
    inStock: true,
  },
  {
    id: 'tsd-009',
    sku: 'TSD-009',
    name: 'Antique Brass Floor Lamp',
    category: 'Antiques',
    price: 14500,
    condition: 'Good — working',
    description:
      'Adjustable brass floor lamp, rewired for modern use, original patina intact. Tested and working.',
    image: '/products/floor_lamp.png',
    inStock: true,
  },
  {
    id: 'tsd-010',
    sku: 'TSD-010',
    name: 'Bobcat S70 Compact Skid Steer',
    category: 'Equipment',
    price: 1450000,
    condition: 'Good — runs strong, some hour wear',
    description:
      'Compact skid steer, low hours, recently serviced. Great for site cleanup and small grading jobs.',
    image: '/products/placeholder-equipment.svg',
    inStock: true,
  },
  {
    id: 'tsd-011',
    sku: 'TSD-011',
    name: 'Honda Backup Generator, 7000W',
    category: 'Equipment',
    price: 62000,
    condition: 'Excellent',
    description:
      'Gas-powered portable generator, electric start. Handles a full job trailer or home backup.',
    image: '/products/placeholder-equipment.svg',
    inStock: true,
  },
  {
    id: 'tsd-012',
    sku: 'TSD-012',
    name: 'Towable Air Compressor, 185 CFM',
    category: 'Equipment',
    price: 385000,
    condition: 'Good — working condition',
    description:
      'Diesel towable compressor for jackhammers and pneumatic tools. Road-ready with trailer hitch.',
    image: '/products/heavyduty_compressor_pullbehind.jpg',
    inStock: true,
  },
  {
    id: 'tsd-013',
    sku: 'TSD-013',
    name: 'DEWALT 20V Cordless Drill/Driver Kit',
    category: 'Tools',
    price: 12000,
    condition: 'Excellent',
    description:
      'Cordless drill kit with two batteries, charger, and case. Barely used.',
    image: '/products/placeholder-tools.svg',
    inStock: true,
  },
  {
    id: 'tsd-014',
    sku: 'TSD-014',
    name: 'Milwaukee Reciprocating Saw',
    category: 'Tools',
    price: 9500,
    condition: 'Good — light wear',
    description:
      'Corded reciprocating saw, tool-free blade change. Great for demo work.',
    image: '/products/placeholder-tools.svg',
    inStock: true,
  },
  {
    id: 'tsd-015',
    sku: 'TSD-015',
    name: 'Snap-on Rolling Tool Chest, 5-Drawer',
    category: 'Tools',
    price: 300000,
    condition: 'Good',
    description:
      'Heavy-gauge steel rolling tool chest with ball-bearing drawer slides. Empty, ready to fill.',
    image: '/products/Snapon_Large_Toolbox.jpg',
    inStock: true,
  },
  {
    id: 'tsd-016',
    sku: 'TSD-016',
    name: 'Solid Wood Dresser, 6-Drawer',
    category: 'Furniture',
    price: 27500,
    condition: 'Good — minor scuffs',
    description:
      'Sturdy solid wood dresser, six drawers with working glide tracks. Refinish-ready or use as-is.',
    image: '/products/placeholder-furniture.svg',
    inStock: true,
  },
  {
    id: 'tsd-017',
    sku: 'TSD-017',
    name: 'Mid-Century Walnut Bookshelf',
    category: 'Furniture',
    price: 18500,
    condition: 'Good — patina',
    description:
      'Tall walnut bookshelf with tapered legs, five adjustable shelves.',
    image: '/products/placeholder-furniture.svg',
    inStock: true,
  },
  {
    id: 'tsd-018',
    sku: 'TSD-018',
    name: 'Outdoor Teak Patio Set (4-Piece)',
    category: 'Furniture',
    price: 65000,
    condition: 'Excellent',
    description:
      'Weather-treated teak table and four chairs. Stored indoors, minimal wear.',
    image: '/products/placeholder-furniture.svg',
    inStock: true,
  },
  {
    id: 'tsd-019',
    sku: 'TSD-019',
    name: 'Commercial Reach-In Refrigerator, 2-Door',
    category: 'Equipment',
    price: 145000,
    condition: 'Good — working',
    description:
      'Stainless steel two-door reach-in cooler on casters. Holds temp, pulled from a closed kitchen.',
    image: '/products/stainless_steel_refridgerator.jpg',
    inStock: true,
  },
  {
    id: 'tsd-020',
    sku: 'TSD-020',
    name: 'Washer and Dryer Set with Pedestals',
    category: 'Equipment',
    price: 85000,
    condition: 'Good — tested working',
    description:
      'Front-load washer and dryer set with matching storage pedestals. Both tested and running.',
    image: '/products/stainless_steel_washer_and_dryer.jpg',
    inStock: true,
  },
  {
    id: 'tsd-021',
    sku: 'TSD-021',
    name: 'Tandem-Axle Utility Trailer',
    category: 'Outdoor',
    price: 285000,
    condition: 'Good',
    description:
      'Tandem-axle utility trailer with wood deck and rear ramp gate. Road-ready.',
    image: '/products/trailer_and_ATV.jpg',
    inStock: true,
  },
  {
    id: 'tsd-022',
    sku: 'TSD-022',
    name: 'Honda Rancher ATV',
    category: 'Outdoor',
    price: 425000,
    condition: 'Good — runs strong',
    description:
      'Honda Rancher four-wheeler with front and rear racks. Starts and runs.',
    image: '/products/ATV_4wheeler.jpg',
    inStock: true,
  },
];

export default products;

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getCategories() {
  return [...new Set(products.map((p) => p.category))].sort();
}