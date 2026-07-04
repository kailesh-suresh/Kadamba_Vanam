const TREES_DATA = [
  {
    "id": 1,
    "commonName": "Neermaruthu",
    "botanicalName": "Terminalia arjuna",
    "templeAssociation": "Periyakulam Sivan Temple",
    "significance": "A symbol of protection and endurance, central to the identity of the Maruthu Pandiyar brothers and the etymological roots of 'Maruthai' (Madurai).",
    "healthBenefits": "Renowned in Ayurveda as a 'Hridaya' (heart) tonic. The bark contains arjunolic acid and flavonoids that support myocardial function, manage hypertension, and reduce lipid accumulation in arterial walls.",
    "image": "images/tree_1.png",
    "categories": ["medicinal", "sacred", "riverine"],
    "details": {
      "leafType": "Oblong, light green",
      "flowerColor": "Pale yellow / Cream",
      "fruit": "Fibrous, woody, 5-winged fruit",
      "preferredSoil": "Alluvial, riverbank moist soils",
      "waterRequirement": "High"
    }
  },
  {
    "id": 2,
    "commonName": "Vilvam",
    "botanicalName": "Aegle marmelos",
    "templeAssociation": "Common in most Shiva Temples",
    "significance": "Symbolizes the 'Trinetra' (three eyes of Shiva). It is an essential component of temple rituals, representing the harmony between the divine and the material world.",
    "healthBenefits": "Rich in tannins and pectin, the fruit pulp is a powerhouse for gut health, effectively treating chronic constipation, acidity, and inflammation of the digestive tract.",
    "image": "images/tree_2.png",
    "categories": ["sacred", "medicinal"],
    "details": {
      "leafType": "Trifoliate (three-leafed) pinnate",
      "flowerColor": "Greenish-white, sweet-scented",
      "fruit": "Hard-shelled berry with sweet pulp",
      "preferredSoil": "Sandy loam, dry stony soils",
      "waterRequirement": "Low to Moderate"
    }
  },
  {
    "id": 3,
    "commonName": "Kurumpala",
    "botanicalName": "Artocarpus heterophyllus",
    "templeAssociation": "Tenkasi Viswanathar Temple",
    "significance": "A rare variety of the jackfruit tree, deeply ingrained in the Sthalapurana as a provider of life-sustaining divine shade and fruit.",
    "healthBenefits": "Contains significant dietary fiber and potassium, which help regulate blood pressure and promote regular bowel movements. Its vitamin C content serves as an essential immune booster.",
    "image": "images/tree_3.png",
    "categories": ["sacred", "fruit"],
    "details": {
      "leafType": "Glossy, dark green, oval",
      "flowerColor": "Green, spike-like inflorescence",
      "fruit": "Large composite, green-yellow spiky fruit",
      "preferredSoil": "Deep, well-drained loamy soil",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 4,
    "commonName": "Vanni",
    "botanicalName": "Prosopis cineraria",
    "templeAssociation": "Thiruvanaikaval",
    "significance": "Revered in our epics; it was in a Vanni tree that the Pandavas secreted their weapons. It remains a symbol of resilience in arid landscapes.",
    "healthBenefits": "The bark and leaves are traditional remedies for rheumatism, with documented anti-inflammatory properties that assist in managing localized skin and joint swelling.",
    "image": "images/tree_4.png",
    "categories": ["sacred", "historical", "arid"],
    "details": {
      "leafType": "Bipinnate, tiny leaflets",
      "flowerColor": "Yellowish, small spikes",
      "fruit": "Slender pods containing sweetish pulp",
      "preferredSoil": "Arid, sandy, deep taproot seeking dry soils",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 5,
    "commonName": "Magizham",
    "botanicalName": "Mimusops elengi",
    "templeAssociation": "Sirkazhi Temple",
    "significance": "Deeply linked to Tamil classical literature as a tree of knowledge and fertility, famed for its long-lasting, intoxicating floral scent.",
    "healthBenefits": "The bark is traditionally decocted for dental hygiene to tighten gums, while the flowers contain volatile oils used to soothe chronic migraines and headaches.",
    "image": "images/tree_5.png",
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Wavy-edged, glossy green",
      "flowerColor": "Creamy-white, star-shaped",
      "fruit": "Small ovoid orange-red berry",
      "preferredSoil": "Rich, moist loamy soils",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 6,
    "commonName": "Naval (Jamun)",
    "botanicalName": "Syzygium cumini",
    "templeAssociation": "Jambukeswaram (Thiruvanaikaval)",
    "significance": "Central to the legend of Jambukeswaram, where the deity is said to have performed penance under this very tree.",
    "healthBenefits": "Highly effective in glycemic management; the seeds contain jamboline, which helps manage blood sugar levels and insulin response.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#2e0854", "#633974"],
      "themeColor": "#9b59b6",
      "leafStyle": "oval",
      "hasFruit": true,
      "fruitColor": "#311432"
    },
    "categories": ["sacred", "medicinal", "fruit"],
    "details": {
      "leafType": "Opposite, smooth, glossy, oblong",
      "flowerColor": "Greenish-white, clusters",
      "fruit": "Oblong dark purple fleshy berry",
      "preferredSoil": "Riverbanks, marshy alluvium",
      "waterRequirement": "High"
    }
  },
  {
    "id": 7,
    "commonName": "Nelli (Gooseberry)",
    "botanicalName": "Phyllanthus emblica",
    "templeAssociation": "Tirunellikka Temple",
    "significance": "Regarded as the 'mother of all medicinal plants', worshipped for its purifying nature and association with Lakshmi.",
    "healthBenefits": "A massive source of Vitamin C and antioxidants that neutralize free radicals, slowing oxidative damage and strengthening the body's hair and skin health.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#196f3d", "#27ae60"],
      "themeColor": "#2ecc71",
      "leafStyle": "feathery",
      "hasFruit": true,
      "fruitColor": "#abebc6"
    },
    "categories": ["sacred", "medicinal", "fruit"],
    "details": {
      "leafType": "Feathery, closely-set, light green",
      "flowerColor": "Greenish-yellow",
      "fruit": "Globose, pale yellow-green striped berry",
      "preferredSoil": "Well-drained light-to-medium loams",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 8,
    "commonName": "Punnai",
    "botanicalName": "Calophyllum inophyllum",
    "templeAssociation": "Mayiladuthurai Mayuranathaswamy",
    "significance": "Closely guarded in coastal temples as a protective entity, its wood and oils are historic elements of temple utility.",
    "healthBenefits": "Tamanu oil extracted from the seeds is a regenerative agent for skin, famously used to treat burns and wounds due to its antimicrobial and antioxidant properties.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#0e6655", "#16a085"],
      "themeColor": "#1abc9c",
      "leafStyle": "broad",
      "hasFruit": true,
      "fruitColor": "#f5b041"
    },
    "categories": ["sacred", "medicinal", "coastal"],
    "details": {
      "leafType": "Large, elliptical, glossy green",
      "flowerColor": "Showy white with yellow stamens",
      "fruit": "Globose, smooth green to yellow nut",
      "preferredSoil": "Coastal sandy dunes, saline tolerant",
      "waterRequirement": "Moderate to High"
    }
  },
  {
    "id": 9,
    "commonName": "Arasu (Peepal)",
    "botanicalName": "Ficus religiosa",
    "templeAssociation": "Various temples",
    "significance": "An oxygen-generating giant, often planted with Neem to symbolize the union of masculine and feminine energy in our landscape.",
    "healthBenefits": "Bark extracts exhibit potent antibacterial properties, frequently used in our tradition to treat skin infections and respiratory ailments.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#1b4f72", "#2e86c1"],
      "themeColor": "#5dade2",
      "leafStyle": "heart-pointed",
      "hasFruit": false
    },
    "categories": ["sacred", "medicinal", "oxygen"],
    "details": {
      "leafType": "Heart-shaped with long tapering tip",
      "flowerColor": "Enclosed inside figs (syconium)",
      "fruit": "Small round green-purple figs",
      "preferredSoil": "Thrives in all, highly colonizing",
      "waterRequirement": "Low to Moderate"
    }
  },
  {
    "id": 10,
    "commonName": "Vembu (Neem)",
    "botanicalName": "Azadirachta indica",
    "templeAssociation": "Vaitheeswaran Koil",
    "significance": "The 'Village Doctor' of Tamil Nadu, intrinsically connected to the worship of Amman and village healing deities.",
    "healthBenefits": "A powerful broad-spectrum antimicrobial and blood purifier. It effectively combats fungal infections and provides significant anti-inflammatory relief.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#145a32", "#1e8449"],
      "themeColor": "#27ae60",
      "leafStyle": "serrated",
      "hasFruit": true,
      "fruitColor": "#f1c40f"
    },
    "categories": ["sacred", "medicinal"],
    "details": {
      "leafType": "Serrated, curved leaflets",
      "flowerColor": "Small, white, honey-scented",
      "fruit": "Oval yellow-green drupe",
      "preferredSoil": "Dry, stony, shallow soils; highly drought-resistant",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 11,
    "commonName": "Konrai",
    "botanicalName": "Cassia fistula",
    "templeAssociation": "Various Shiva Temples",
    "significance": "The 'Golden Shower' tree, whose flowering signals the Tamil New Year, symbolizing prosperity and divinity.",
    "healthBenefits": "Fruit pulp is a gentle yet effective laxative, while bark extracts are used to address skin infections and pyretic conditions.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#7d6608", "#d4ac0d"],
      "themeColor": "#f1c40f",
      "leafStyle": "pinnate",
      "hasFlowers": true,
      "flowerColor": "#f4d03f"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Pinnate, large ovate leaflets",
      "flowerColor": "Bright golden yellow cascading racemes",
      "fruit": "Long cylindrical dark brown woody pods",
      "preferredSoil": "Well-drained red gravelly soils",
      "waterRequirement": "Low to Moderate"
    }
  },
  {
    "id": 12,
    "commonName": "Iluppai (Mahua)",
    "botanicalName": "Madhuca longifolia",
    "templeAssociation": "Various Sthala Vrikshas",
    "significance": "A lifeline of the rural economy, its blossoms have historically supported the nutritional needs of tribal and forest-dwelling communities.",
    "healthBenefits": "The flowers are nutrient-rich; the oil pressed from seeds provides deep relief for joint inflammation and is a staple in therapeutic body massages.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#6e2c00", "#a04000"],
      "themeColor": "#e59866",
      "leafStyle": "elliptical",
      "hasFlowers": true,
      "flowerColor": "#fce4d6"
    },
    "categories": ["sacred", "medicinal", "oil"],
    "details": {
      "leafType": "Elliptical, clustered at branch ends",
      "flowerColor": "Fleshy, cream-colored, sweet-scented",
      "fruit": "Green ovoid berry, seed rich in oil",
      "preferredSoil": "Dry, rocky, sandy/lateritic soils",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 13,
    "commonName": "Aal (Banyan)",
    "botanicalName": "Ficus benghalensis",
    "templeAssociation": "Various Temples",
    "significance": "Tamil Nadu's majestic state tree, serving as a 'Community Council' space and a critical habitat for native birds.",
    "healthBenefits": "Latex is used for wound healing, while bark decoctions help in managing blood glucose and improving reproductive wellness.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#0b5345", "#117864"],
      "themeColor": "#45b39d",
      "leafStyle": "broad-oval",
      "hasAerialRoots": true
    },
    "categories": ["sacred", "medicinal", "state-tree"],
    "details": {
      "leafType": "Large, thick, leathery, oval",
      "flowerColor": "Enclosed in red globose figs",
      "fruit": "Red fleshy figs, bird favorite",
      "preferredSoil": "Deep, loamy, moist soils",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 14,
    "commonName": "Maa (Mango)",
    "botanicalName": "Mangifera indica",
    "templeAssociation": "Kanchi Ekambareswarar",
    "significance": "The Ekambareswarar temple is famously built around a mango tree that is said to be 3,500 years old, representing the 'Eka-Amra'.",
    "healthBenefits": "Leaves are widely used in traditional management of diabetes, and the fruit provides essential vitamins that support skin and immune health.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#78281f", "#b03a2e"],
      "themeColor": "#ec7063",
      "leafStyle": "long-tapered",
      "hasFruit": true,
      "fruitColor": "#f39c12"
    },
    "categories": ["sacred", "medicinal", "fruit"],
    "details": {
      "leafType": "Long, lanceolate, dark green",
      "flowerColor": "Pale yellow, tiny panicles",
      "fruit": "Large golden fleshy drupe",
      "preferredSoil": "Rich alluvial, well-drained loams",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 15,
    "commonName": "Panai (Palmyra Palm)",
    "botanicalName": "Borassus flabellifer",
    "templeAssociation": "Thirupanandhaal",
    "significance": "The backbone of Tamil literature; without the palm-leaf manuscript, our history would be lost. It is a symbol of endurance in the arid heat.",
    "healthBenefits": "Produces 'Pathaneer', a cooling, mineral-rich sap. Roots and bark have diuretic properties and are used to treat gingivitis.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#424949", "#707b7c"],
      "themeColor": "#a6acaf",
      "isPalm": true,
      "hasFruit": true,
      "fruitColor": "#1b2631"
    },
    "categories": ["sacred", "medicinal", "state-tree", "historical"],
    "details": {
      "leafType": "Large, fan-shaped palmate fronds",
      "flowerColor": "Spadix spikes hidden in leaf sheath",
      "fruit": "Large black round fibrous drupe",
      "preferredSoil": "Sandy, coastal, or arid soils",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 16,
    "commonName": "Kadambu",
    "botanicalName": "Neolamarckia cadamba",
    "templeAssociation": "Madurai Meenakshi Amman",
    "significance": "The original forest cover of Madurai, this tree is deeply associated with Lord Murugan and is the heart of the city's ancient ecology.",
    "healthBenefits": "The bark contains alkaloids that assist in lowering fever and controlling inflammation.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#7e5109", "#b7950b"],
      "themeColor": "#e1b12c",
      "leafStyle": "large-wavy",
      "hasFlowers": true,
      "flowerColor": "#e67e22"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Large, shiny green, prominent veins",
      "flowerColor": "Orange/yellow globose head with white stigmas",
      "fruit": "Small fleshy composite yellow pseudocarps",
      "preferredSoil": "Moist, sandy loam, riverbanks",
      "waterRequirement": "Moderate to High"
    }
  },
  {
    "id": 17,
    "commonName": "Vengai",
    "botanicalName": "Pterocarpus marsupium",
    "templeAssociation": "Various groves",
    "significance": "A tree of deep historical value for its medicinal wood, traditionally carved into tumblers to treat metabolic disorders.",
    "healthBenefits": "A clinically researched anti-diabetic tree; the wood extract aids in insulin regulation and maintains glucose homeostasis.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#641e16", "#922b21"],
      "themeColor": "#c0392b",
      "leafStyle": "pinnate-round",
      "hasFlowers": true,
      "flowerColor": "#f1c40f"
    },
    "categories": ["sacred", "medicinal"],
    "details": {
      "leafType": "Pinnate, 5-7 oval leaflets",
      "flowerColor": "Yellow, fragrant pea-like panicles",
      "fruit": "Circular flat winged pod (samara)",
      "preferredSoil": "Hilly terrain, gravelly red soils",
      "waterRequirement": "Low to Moderate"
    }
  },
  {
    "id": 18,
    "commonName": "Mullai (Jasmine)",
    "botanicalName": "Jasminum auriculatum",
    "templeAssociation": "Mullaivaayil",
    "significance": "One of the five 'Thinai' (landscapes) of ancient Tamil poetry; it evokes grace and purity in our temple gardens.",
    "healthBenefits": "The essential oil is a potent stress-reliever; traditional use includes soothing skin inflammation.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#117a65", "#16a085"],
      "themeColor": "#58d68d",
      "isClimber": true,
      "hasFlowers": true,
      "flowerColor": "#ffffff"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Opposite, simple or trifoliate small leaves",
      "flowerColor": "Star-like white, highly fragrant",
      "fruit": "Globose black berry (rarely formed)",
      "preferredSoil": "Well-drained sandy loam",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 19,
    "commonName": "Poo Marutham",
    "botanicalName": "Lagerstroemia reginae",
    "templeAssociation": "Various river-bank temples",
    "significance": "Revered for its vivid seasonal blossoms, this tree marks the riverine sanctity of our temple landscapes.",
    "healthBenefits": "Contains potent antioxidants; extracts are used in traditional medicine to support renal (kidney) health and manage fluid balance.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#512e5f", "#76448a"],
      "themeColor": "#af7ac5",
      "leafStyle": "oblong",
      "hasFlowers": true,
      "flowerColor": "#d397f8"
    },
    "categories": ["sacred", "medicinal", "flowering", "riverine"],
    "details": {
      "leafType": "Elongated, smooth, dark green",
      "flowerColor": "Beautiful lavender-pink wrinkled petals",
      "fruit": "Woody globose capsule",
      "preferredSoil": "Riverbanks, wetland edges",
      "waterRequirement": "High"
    }
  },
  {
    "id": 20,
    "commonName": "Vellerukku",
    "botanicalName": "Calotropis procera",
    "templeAssociation": "Erukkatthampuliyur",
    "significance": "The rare white-flowered variety is a sacred emblem in Shaiva temples, symbolizing spiritual purification.",
    "healthBenefits": "In Siddha medicine, its processed latex is carefully utilized for challenging skin conditions and inflammatory rheumatic pain.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#2c3e50", "#34495e"],
      "themeColor": "#bdc3c7",
      "isShrub": true,
      "hasFlowers": true,
      "flowerColor": "#f2f3f4"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Thick, leathery, wax-coated, ovate",
      "flowerColor": "White-cream with purplish central crown",
      "fruit": "Fleshy inflated pod containing silky seeds",
      "preferredSoil": "Wastelands, highly alkaline/sandy soils",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 21,
    "commonName": "Sankupushpam",
    "botanicalName": "Clitoria ternatea",
    "templeAssociation": "Various Shakti temples",
    "significance": "Known for its 'Shankha'-shaped blue flowers; it is a vital floral offering that represents clarity and truth.",
    "healthBenefits": "A premier cognitive health herb; the blue pigment (anthocyanins) is rich in antioxidants that boost memory and reduce neuro-inflammation.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#1b263b", "#415a77"],
      "themeColor": "#3f37c9",
      "isClimber": true,
      "hasFlowers": true,
      "flowerColor": "#4361ee"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Pinnate, small ovate leaflets",
      "flowerColor": "Solitary, deep blue with yellow throat",
      "fruit": "Flat, green pods containing seeds",
      "preferredSoil": "Loamy, well-irrigated garden soils",
      "waterRequirement": "Moderate"
    }
  },
  {
    "id": 22,
    "commonName": "Nagalingam",
    "botanicalName": "Couroupita guianensis",
    "templeAssociation": "Various Shiva temples",
    "significance": "The 'Cannonball tree' displays a flower that mirrors the Linga shielded by a Naga; it is a profound meditative focal point in temple courtyards.",
    "healthBenefits": "Recent studies highlight its antimicrobial and anti-inflammatory properties, with historical use for managing hypertension and chronic pain.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#78281f", "#922b21"],
      "themeColor": "#cd6155",
      "leafStyle": "serrate-oblong",
      "hasFlowers": true,
      "flowerColor": "#e74c3c"
    },
    "categories": ["sacred", "medicinal", "flowering"],
    "details": {
      "leafType": "Oblong, broad, serrate-edged, clustered",
      "flowerColor": "Pink-red fleshy flower with hood-like stamens",
      "fruit": "Large, spherical woody brown cannonball",
      "preferredSoil": "Deep alluvial moist soil",
      "waterRequirement": "Moderate to High"
    }
  },
  {
    "id": 23,
    "commonName": "Moringa",
    "botanicalName": "Moringa oleifera",
    "templeAssociation": "Commonly found in temple gardens",
    "significance": "Known in Tamil as 'Murungai', it is an ancient miracle food that has sustained generations of families living around temple precincts.",
    "healthBenefits": "A nutritional powerhouse packed with minerals and proteins. It is effectively used to combat malnutrition and reduce joint inflammatory pain.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#1e8449", "#2ecc71"],
      "themeColor": "#58d68d",
      "leafStyle": "tripinnate",
      "hasFruit": true,
      "fruitColor": "#27ae60"
    },
    "categories": ["medicinal", "nutrition"],
    "details": {
      "leafType": "Tripinnate feathery leaflets, light green",
      "flowerColor": "Creamy-white, honey-scented panicles",
      "fruit": "Long, three-angled ribbed green drumstick",
      "preferredSoil": "Sandy/sandy-loam dry lands",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 24,
    "commonName": "Wood Apple (Vila)",
    "botanicalName": "Limonia acidissima",
    "templeAssociation": "Various ancient temples",
    "significance": "A rugged fruit that signifies durability; its inclusion in temple gardens underscores the importance of resilient, indigenous food sources.",
    "healthBenefits": "Excellent for liver detoxification and digestive stimulation, frequently used to resolve gastrointestinal sluggishness.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#5d4037", "#8d6e63"],
      "themeColor": "#d7ccc8",
      "leafStyle": "pinnate-rough",
      "hasFruit": true,
      "fruitColor": "#a1887f"
    },
    "categories": ["sacred", "medicinal", "fruit"],
    "details": {
      "leafType": "Pinnate, small glossy leaflets",
      "flowerColor": "Small, dull-red or greenish",
      "fruit": "Globose, hard woody grey shell, sour-sweet pulp",
      "preferredSoil": "Dry, gravelly, saline-tolerant clay/loam",
      "waterRequirement": "Low"
    }
  },
  {
    "id": 25,
    "commonName": "Tamarind",
    "botanicalName": "Tamarindus indica",
    "templeAssociation": "Alwar Tirunagari",
    "significance": "The site of Nammalvar's deep meditative state; it stands as a witness to centuries of philosophical evolution in Tamil history.",
    "healthBenefits": "The pulp is a natural digestive aid; seed extracts are utilized in traditional preparations to support joint and skin health.",
    "image": null,
    "svgConfig": {
      "bgGradient": ["#795548", "#a1887f"],
      "themeColor": "#d7ccc8",
      "leafStyle": "pinnate-feathery",
      "hasFruit": true,
      "fruitColor": "#5d4037"
    },
    "categories": ["sacred", "medicinal", "fruit", "historical"],
    "details": {
      "leafType": "Pinnate, small closely packed leaflets",
      "flowerColor": "Yellow with reddish veins, clusters",
      "fruit": "Curved brown indehiscent pod with acidic pulp",
      "preferredSoil": "Deep loam, highly adaptable to poor dry lands",
      "waterRequirement": "Low to Moderate"
    }
  }
];
