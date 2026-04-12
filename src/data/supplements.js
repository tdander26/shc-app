// Comprehensive supplement database mapping supplement names to details
// All supplements mentioned throughout the SHC application sections

export const supplements = {
  // B-Vitamins and Methyl Donors
  'vitamin-b12': {
    name: 'Vitamin B12',
    alternateNames: ['B12', 'Methylcobalamin'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Essential for energy metabolism and neurological function'
  },
  'methylb12': {
    name: 'Methyl B12',
    alternateNames: ['MethylB12'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Active form of B12, better absorption'
  },
  'vitamin-b6': {
    name: 'Vitamin B6',
    alternateNames: ['B6', 'P5P', 'Pyridoxal 5 Phosphate'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Critical for amino acid metabolism and hormone regulation'
  },
  'p5p': {
    name: 'Pyridoxal 5 Phosphate (P5P)',
    alternateNames: ['P5P'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Active form of Vitamin B6'
  },
  'vitamin-b9': {
    name: 'Vitamin B9',
    alternateNames: ['B9', 'Folate', '5MTHF'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Essential for DNA synthesis and cell division'
  },
  'folate': {
    name: 'Folate',
    alternateNames: ['Vitamin B9', '5MTHF', 'Folic Acid'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Natural form of Vitamin B9'
  },
  '5mthf': {
    name: '5-MTHF',
    alternateNames: ['5MTHF', 'Methylfolate'],
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Active form of folate, better bioavailability'
  },

  // Minerals
  'zinc': {
    name: 'Zinc',
    alternateNames: ['Zn'],
    brand: 'Various',
    category: 'Mineral',
    description: 'Essential for immune function and hormone metabolism'
  },
  'magnesium': {
    name: 'Magnesium',
    alternateNames: ['Mg'],
    brand: 'Various',
    category: 'Mineral',
    description: 'Critical for muscle function and stress response'
  },
  'iron': {
    name: 'Iron',
    brand: 'Various',
    category: 'Mineral',
    description: 'Essential for red blood cell formation and oxygen transport'
  },
  'copper': {
    name: 'Copper',
    brand: 'Various',
    category: 'Mineral',
    description: 'Cofactor for iron metabolism and enzymatic processes'
  },
  'molybdenum': {
    name: 'Molybdenum',
    brand: 'Various',
    category: 'Mineral',
    description: 'Cofactor for detoxification enzymes'
  },
  'iodine': {
    name: 'Iodine',
    brand: 'Various',
    category: 'Mineral',
    description: 'Essential for thyroid hormone production'
  },
  'manganese': {
    name: 'Manganese',
    alternateNames: ['Mn'],
    brand: 'Various',
    category: 'Mineral',
    description: 'Cofactor for various enzymes and antioxidant defense'
  },
  'calcium': {
    name: 'Calcium',
    alternateNames: ['Ca'],
    brand: 'Various',
    category: 'Mineral',
    description: 'Essential for bone health and muscle function'
  },

  // Amino Acids and Precursors
  'cysteine': {
    name: 'Cysteine',
    alternateNames: ['CYS', 'NAC', 'N-Acetyl Cysteine', 'Cysteine/NAC'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Precursor to glutathione for detoxification'
  },
  'arginine': {
    name: 'Arginine',
    alternateNames: ['ARG', 'Arginex'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Precursor to nitric oxide for vascular health'
  },
  'arginex': {
    name: 'Arginex',
    alternateNames: ['ARG', 'Arginine'],
    brand: 'Nutricost/Various',
    category: 'Amino Acid',
    description: 'Arginine formulation for nitric oxide production'
  },
  'ornithine': {
    name: 'Ornithine',
    alternateNames: ['ORT'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Amino acid for muscle and immune function'
  },
  'citrulline': {
    name: 'Citrulline',
    alternateNames: ['CIT'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Precursor to arginine and nitric oxide'
  },
  'taurine': {
    name: 'Taurine',
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Supports cardiovascular and neurological health'
  },
  'l-theanine': {
    name: 'L-Theanine',
    alternateNames: ['L-Theanine'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Promotes relaxation without sedation'
  },

  // Vitamins
  'vitamin-a': {
    name: 'Vitamin A',
    brand: 'Various',
    category: 'Vitamin',
    description: 'Essential for vision, immune function, and hormone metabolism'
  },
  'vitamin-d': {
    name: 'Vitamin D',
    alternateNames: ['D3'],
    brand: 'Various',
    category: 'Vitamin',
    description: 'Critical for calcium absorption and immune function'
  },
  'd3': {
    name: 'Vitamin D3',
    alternateNames: ['D3', 'Cholecalciferol'],
    brand: 'Various',
    category: 'Vitamin',
    description: 'Active form of Vitamin D'
  },
  'vitamin-e': {
    name: 'Vitamin E',
    alternateNames: ['Vit E'],
    brand: 'Various',
    category: 'Vitamin',
    description: 'Powerful antioxidant for cellular protection'
  },
  'niacinamide': {
    name: 'Niacinamide',
    brand: 'Various',
    category: 'Vitamin',
    description: 'Form of Niacin (B3) with multiple health benefits'
  },

  // Fatty Acids
  'epa': {
    name: 'EPA',
    alternateNames: ['EPA', 'Eicosapentaenoic Acid'],
    brand: 'Various',
    category: 'Fatty Acid',
    description: 'Omega-3 fatty acid with anti-inflammatory properties'
  },
  'dha': {
    name: 'DHA',
    alternateNames: ['DHA', 'Docosahexaenoic Acid'],
    brand: 'Various',
    category: 'Fatty Acid',
    description: 'Omega-3 fatty acid critical for brain and eye health'
  },
  'fish-oil': {
    name: 'Fish Oil',
    alternateNames: ['Fish Oil', 'EPA/DHA'],
    brand: 'Various',
    category: 'Fatty Acid',
    description: 'Source of omega-3 fatty acids EPA and DHA'
  },
  'efas': {
    name: 'Essential Fatty Acids',
    alternateNames: ['EFAs'],
    brand: 'Various',
    category: 'Fatty Acid',
    description: 'Omega-3 and Omega-6 fatty acids'
  },
  'wheat-germ-oil': {
    name: 'Wheat Germ Oil',
    alternateNames: ['Wheat Germ Oil'],
    brand: 'Various',
    category: 'Fatty Acid',
    description: 'Rich in vitamin E and essential fatty acids'
  },

  // Herbal Supplements
  'ashwagandha': {
    name: 'Ashwagandha',
    brand: 'Various',
    category: 'Herb',
    description: 'Adaptogenic herb for stress and hormonal balance'
  },
  'tulsi': {
    name: 'Tulsi',
    alternateNames: ['Holy Basil'],
    brand: 'Various',
    category: 'Herb',
    description: 'Adaptogenic herb for stress relief and immune support'
  },
  'passionflower': {
    name: 'Passionflower',
    alternateNames: ['Passion Flower'],
    brand: 'Various',
    category: 'Herb',
    description: 'Herbal nervine for relaxation and anxiety relief'
  },
  'valerian-root': {
    name: 'Valerian Root',
    alternateNames: ['Valerian Root', 'Valerian'],
    brand: 'Various',
    category: 'Herb',
    description: 'Traditional herb for sleep and relaxation'
  },
  'saw-palmetto': {
    name: 'Saw Palmetto',
    alternateNames: ['Saw Palmetto'],
    brand: 'Various',
    category: 'Herb',
    description: 'Herb for prostate and hormonal health'
  },
  'rosemary': {
    name: 'Rosemary',
    brand: 'Various',
    category: 'Herb',
    description: 'Culinary herb with hormonal balancing properties'
  },
  'ginger': {
    name: 'Ginger',
    brand: 'Various',
    category: 'Herb',
    description: 'Anti-inflammatory herb for digestion and immunity'
  },
  'uva-ursi': {
    name: 'Uva Ursi',
    alternateNames: ['Uva Ursi', 'Bearberry'],
    brand: 'Various',
    category: 'Herb',
    description: 'Herb traditionally used for urinary tract support'
  },
  'st-johns-wort': {
    name: "St. John's Wort",
    brand: 'Various',
    category: 'Herb',
    description: 'Herb for serotonin support and mood balance'
  },
  'wild-cherry': {
    name: 'Wild Cherry',
    alternateNames: ['Wild cherry juice'],
    brand: 'Various',
    category: 'Herb',
    description: 'Natural source of antioxidants and nutrients'
  },

  // Glandular and Organ Support
  'pituitary-pmg': {
    name: 'Pituitary PMG',
    alternateNames: ['Pituitary PMG'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'Glandular support for pituitary function'
  },
  'ovex-p': {
    name: 'Ovex P',
    alternateNames: ['Ovex P'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'Glandular support for ovarian function'
  },
  'cataplex-g': {
    name: 'Cataplex G',
    alternateNames: ['Cat G'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'Adrenal and immune support formula'
  },
  'cataplex-c': {
    name: 'Cataplex C',
    alternateNames: ['Cat C'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'Vitamin C support formula'
  },
  'cataplex-b': {
    name: 'Cataplex B',
    alternateNames: ['Cat B'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'B-complex support formula'
  },
  'cataplex-e': {
    name: 'Cataplex E',
    alternateNames: ['Cat E'],
    brand: 'Standard Process',
    category: 'Glandular',
    description: 'Vitamin E and adrenal support formula'
  },

  // Digestive and Organ Support
  'cholacol': {
    name: 'Cholacol',
    brand: 'Standard Process',
    category: 'Digestive',
    description: 'Herbal support for gallbladder and bile function'
  },
  'betafood': {
    name: 'Betafood',
    brand: 'Standard Process',
    category: 'Digestive',
    description: 'Beet root extract for liver and gallbladder support'
  },
  'choline': {
    name: 'Choline',
    brand: 'Various',
    category: 'Nutrient',
    description: 'Essential nutrient for liver health and neurotransmitter function'
  },
  'bodyguard': {
    name: 'BodyGuard',
    brand: 'Standard Process',
    category: 'Digestive',
    description: 'Herbal formula for gallstone support'
  },
  'cyruta-plus': {
    name: 'Cyruta Plus',
    alternateNames: ['Cyruta Plus'],
    brand: 'Standard Process',
    category: 'Circulatory',
    description: 'Bioflavonoid formula for vascular health'
  },

  // Mineral and Nutrient Complexes
  'artichoke-extract': {
    name: 'Artichoke Extract',
    alternateNames: ['Artichoke', 'Artichoke Extract'],
    brand: 'Various',
    category: 'Plant Extract',
    description: 'Liver and digestive support'
  },
  'org-mins': {
    name: 'Organically Bound Minerals',
    alternateNames: ['Org Mins'],
    brand: 'Standard Process',
    category: 'Mineral',
    description: 'Chelated mineral complex'
  },
  'phosfood': {
    name: 'Phosfood',
    brand: 'Standard Process',
    category: 'Nutrient',
    description: 'Phosphorus and mineral support'
  },
  'min-tran': {
    name: 'Min Tran',
    alternateNames: ['Min Tran'],
    brand: 'Standard Process',
    category: 'Mineral',
    description: 'Mineral transport and nervous system support'
  },

  // Amino Acid Complexes and Other Nutrients
  'gaba': {
    name: 'GABA',
    alternateNames: ['GABA', 'Gamma-Aminobutyric Acid'],
    brand: 'Various',
    category: 'Amino Acid',
    description: 'Neurotransmitter for relaxation and anxiety relief'
  },
  'biotin': {
    name: 'Biotin',
    brand: 'Various',
    category: 'B-Vitamin',
    description: 'Essential for hair, skin, and nail health'
  },
  'protein': {
    name: 'Protein',
    alternateNames: ['Whey Protein', 'Collagen Protein', 'Egg Protein'],
    brand: 'Various',
    category: 'Macronutrient',
    description: 'Essential macronutrient for muscle and tissue support'
  },
  'selenium': {
    name: 'Selenium',
    brand: 'Various',
    category: 'Mineral',
    description: 'Antioxidant mineral for thyroid and immune function'
  },
  'saturated-fats': {
    name: 'Saturated Fats',
    brand: 'Food-based',
    category: 'Macronutrient',
    description: 'Essential fats for hormone production and cellular health'
  },

  // Antioxidant and Immune Support
  'antioxidants': {
    name: 'Antioxidants',
    brand: 'Various',
    category: 'Plant Compound',
    description: 'Various antioxidant compounds for cellular protection'
  }
};

// Helper function to search for supplements by name or alternate name
export const searchSupplement = (searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  for (const [key, supplement] of Object.entries(supplements)) {
    if (key === term || supplement.name.toLowerCase() === term) {
      return supplement;
    }
    if (supplement.alternateNames?.some(alt => alt.toLowerCase() === term)) {
      return supplement;
    }
  }
  return null;
};

// Get all supplements by category
export const getSupplementsByCategory = (category) => {
  return Object.entries(supplements)
    .filter(([_, supp]) => supp.category === category)
    .reduce((acc, [key, supp]) => {
      acc[key] = supp;
      return acc;
    }, {});
};

// Get all available categories
export const getAllCategories = () => {
  const categories = new Set();
  Object.values(supplements).forEach(supp => {
    categories.add(supp.category);
  });
  return Array.from(categories).sort();
};

// Get all supplements that mention a specific condition in their description
export const getSupplementsForCondition = (condition) => {
  const term = condition.toLowerCase();
  return Object.entries(supplements)
    .filter(([_, supp]) => supp.description.toLowerCase().includes(term))
    .reduce((acc, [key, supp]) => {
      acc[key] = supp;
      return acc;
    }, {});
};
