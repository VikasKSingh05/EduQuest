const courseData = {
  "our-planet-our-home": {
    title: "Our Planet, Our Home",
    subtitle: "Understand Earth systems and how daily choices protect nature.",
    heroImage: "/image/origbig1.png",
    quizType: "our_planet",
    lessons: [
      {
        heading: "Ecosystems Work Together",
        content:
          "Forests, oceans, grasslands, and wetlands are connected. When one ecosystem is damaged, others can also suffer.",
      },
      {
        heading: "Biodiversity Keeps Balance",
        content:
          "Plants, animals, insects, and microbes each play a role. Rich biodiversity helps ecosystems recover from disease and climate stress.",
      },
      {
        heading: "Human Activities Matter",
        content:
          "Deforestation, pollution, and waste can break natural cycles. Smarter farming, clean energy, and less plastic can restore balance.",
      },
      {
        heading: "Protecting Home Starts Local",
        content:
          "Tree planting, saving water, reducing waste, and supporting green spaces in your area create real impact over time.",
      },
    ],
    questions: [
      { id: 1, question: "What is an ecosystem?", options: ["Only animals in one place", "Living things and their environment interacting", "A weather report", "A type of mountain"], correct: 1 },
      { id: 2, question: "Why is biodiversity important?", options: ["It makes ecosystems stronger", "It increases plastic use", "It removes sunlight", "It stops rainfall"], correct: 0 },
      { id: 3, question: "Which action helps ecosystems most?", options: ["Burning waste", "Reducing pollution", "Cutting all trees", "Overfishing"], correct: 1 },
      { id: 4, question: "Wetlands are useful because they...", options: ["Increase noise", "Filter water and support wildlife", "Create plastic", "Stop all rainfall"], correct: 1 },
      { id: 5, question: "What does deforestation cause?", options: ["More habitats", "Habitat loss and soil damage", "Cleaner air", "Lower temperatures everywhere"], correct: 1 },
      { id: 6, question: "A local environmental action is...", options: ["Wasting electricity", "Planting native trees", "Throwing batteries in trash", "Burning leaves daily"], correct: 1 },
      { id: 7, question: "Healthy oceans help because they...", options: ["Produce oxygen and store carbon", "Stop all storms", "Eliminate gravity", "Create deserts"], correct: 0 },
      { id: 8, question: "Best summary of Earth care is...", options: ["One person cannot help", "Small daily actions can create big impact", "Only scientists can act", "Nature fixes itself without effort"], correct: 1 },
    ],
  },
  "ocean-mysteries": {
    title: "Ocean Mysteries",
    subtitle: "Explore marine life, food webs, and why oceans regulate climate.",
    heroImage: "/image/origbig4.png",
    quizType: "ocean_mysteries",
    lessons: [
      {
        heading: "The Ocean Is a Climate Engine",
        content:
          "Oceans absorb heat and carbon dioxide, helping regulate global temperature and weather patterns.",
      },
      {
        heading: "Marine Food Webs Are Delicate",
        content:
          "Plankton feed small fish, which feed larger species. Disturbing one level can affect the entire chain.",
      },
      {
        heading: "Coral Reefs Are Biodiversity Hotspots",
        content:
          "Though reefs cover a small ocean area, they support thousands of marine species and coastal livelihoods.",
      },
      {
        heading: "Pollution Travels Far",
        content:
          "Plastic and chemical runoff from cities and rivers can travel into oceans, harming animals and habitats.",
      },
    ],
    questions: [
      { id: 1, question: "What role do oceans play in climate?", options: ["No role", "They regulate heat and carbon", "They only create waves", "They stop wind"], correct: 1 },
      { id: 2, question: "Who are primary producers in many marine food webs?", options: ["Sharks", "Plankton", "Whales", "Jellyfish"], correct: 1 },
      { id: 3, question: "Why are coral reefs important?", options: ["They reduce biodiversity", "They support many species", "They are only rocks", "They produce plastic"], correct: 1 },
      { id: 4, question: "A major threat to ocean wildlife is...", options: ["Plastic pollution", "Sea breeze", "Moonlight", "Sand"], correct: 0 },
      { id: 5, question: "Overfishing can lead to...", options: ["Balanced ecosystems", "Collapsed fish populations", "Cleaner reefs", "More plankton diversity always"], correct: 1 },
      { id: 6, question: "Mangroves help coasts by...", options: ["Increasing erosion", "Protecting shorelines", "Blocking oxygen", "Creating tsunamis"], correct: 1 },
      { id: 7, question: "Which choice helps oceans most?", options: ["Using single-use plastics daily", "Proper waste disposal and reuse", "Dumping oil in drains", "Ignoring local waterways"], correct: 1 },
      { id: 8, question: "Ocean acidification is mainly linked to...", options: ["Higher CO2 absorption", "Less sunlight", "More sea salt", "Lower tides"], correct: 0 },
    ],
  },
  "climate-guardians": {
    title: "Climate Guardians",
    subtitle: "Learn climate basics and practical actions to reduce emissions.",
    heroImage: "/image/origbig5.png",
    quizType: "climate_guardians",
    lessons: [
      {
        heading: "Greenhouse Effect Basics",
        content:
          "Some gases trap heat naturally, but excess emissions from fossil fuels intensify warming.",
      },
      {
        heading: "Weather vs Climate",
        content:
          "Weather is short-term conditions, while climate is the long-term pattern over decades.",
      },
      {
        heading: "Mitigation and Adaptation",
        content:
          "Mitigation reduces causes of climate change; adaptation helps communities manage impacts.",
      },
      {
        heading: "Personal and Community Action",
        content:
          "Public transport, energy efficiency, tree cover, and responsible consumption reduce climate pressure.",
      },
    ],
    questions: [
      { id: 1, question: "Climate means...", options: ["Daily temperature only", "Long-term weather patterns", "Wind direction now", "A single storm"], correct: 1 },
      { id: 2, question: "Main human source of rising CO2 is...", options: ["Solar panels", "Burning fossil fuels", "Plant growth", "Ocean waves"], correct: 1 },
      { id: 3, question: "Mitigation focuses on...", options: ["Reducing emissions", "Ignoring impacts", "Increasing waste", "Cutting adaptation"], correct: 0 },
      { id: 4, question: "Adaptation means...", options: ["Lowering causes only", "Preparing for climate impacts", "Stopping all rain", "Eliminating seasons"], correct: 1 },
      { id: 5, question: "A low-carbon travel choice is...", options: ["Solo car daily", "Public transport or cycling", "Private jet", "Idling engines"], correct: 1 },
      { id: 6, question: "Energy efficiency example:", options: ["Leaving lights on", "Using LED bulbs", "Running AC with windows open", "Wasting electricity"], correct: 1 },
      { id: 7, question: "Planting trees helps because trees...", options: ["Release extra plastic", "Absorb carbon dioxide", "Increase smog", "Heat cities"], correct: 1 },
      { id: 8, question: "Best climate guardian mindset is...", options: ["Wait for others", "Take consistent practical actions", "Do nothing local", "Avoid learning"], correct: 1 },
    ],
  },
  "plastic-pirates": {
    title: "Plastic Pirates",
    subtitle: "Track plastic waste and learn how to cut pollution at the source.",
    heroImage: "/image/origbig6.png",
    quizType: "plastic_pirates",
    lessons: [
      {
        heading: "Single-Use Plastic Problem",
        content:
          "Many plastic items are used for minutes but remain in the environment for decades or longer.",
      },
      {
        heading: "Microplastics Everywhere",
        content:
          "Large plastic breaks into tiny particles found in soil, water, and even food chains.",
      },
      {
        heading: "Waste Segregation Matters",
        content:
          "Separating dry and wet waste improves recycling quality and prevents contamination.",
      },
      {
        heading: "Refuse, Reduce, Reuse",
        content:
          "Carrying reusable bottles, bags, and containers is one of the fastest ways to reduce plastic waste.",
      },
    ],
    questions: [
      { id: 1, question: "Single-use plastics are harmful mainly because they...", options: ["Disappear quickly", "Persist for a long time", "Feed fish safely", "Improve soil"], correct: 1 },
      { id: 2, question: "Microplastics are...", options: ["Large metal pieces", "Tiny plastic particles", "Natural minerals", "Sea plants"], correct: 1 },
      { id: 3, question: "A strong anti-plastic habit is...", options: ["Using disposable bottles daily", "Carrying a reusable bottle", "Throwing waste in drains", "Mixing all waste"], correct: 1 },
      { id: 4, question: "Waste segregation means...", options: ["Burning all trash", "Separating different waste types", "Hiding plastic", "Dumping at sea"], correct: 1 },
      { id: 5, question: "Plastic entering rivers often ends up in...", options: ["Mountains only", "Oceans", "Clouds", "Deserts only"], correct: 1 },
      { id: 6, question: "Best first step in reducing plastic:", options: ["Buy more packaged items", "Refuse unnecessary plastic", "Use extra straws", "Ignore labels"], correct: 1 },
      { id: 7, question: "Reusable cloth bags help by...", options: ["Increasing litter", "Replacing disposable bags", "Blocking recycling", "Raising emissions always"], correct: 1 },
      { id: 8, question: "Community clean-ups are useful because they...", options: ["Add waste", "Remove litter and build awareness", "Create pollution", "Stop all plastic production"], correct: 1 },
    ],
  },
  "recycling-basics": {
    title: "Recycling Basics",
    subtitle: "Master sorting rules and turn waste into reusable resources.",
    heroImage: "/image/banner2.png",
    quizType: "recycling_basics",
    lessons: [
      {
        heading: "Why Recycling Works",
        content:
          "Recycling saves raw materials and energy by turning used items into new products.",
      },
      {
        heading: "Clean and Dry Is Key",
        content:
          "Food residue contaminates recyclable waste. Rinse containers before sorting.",
      },
      {
        heading: "Know Material Types",
        content:
          "Paper, metal, glass, and selected plastics are usually recyclable when separated correctly.",
      },
      {
        heading: "Reduce Before Recycle",
        content:
          "Recycling is useful, but reducing consumption and reusing items is even better.",
      },
    ],
    questions: [
      { id: 1, question: "Recycling helps by...", options: ["Using more raw materials", "Saving resources and energy", "Increasing landfill use", "Creating more waste"], correct: 1 },
      { id: 2, question: "Before recycling containers, you should...", options: ["Leave food inside", "Rinse and dry them", "Crush with wet waste", "Burn them"], correct: 1 },
      { id: 3, question: "Which is usually recyclable?", options: ["Clean paper", "Used tissue", "Food-soaked cardboard", "Mixed wet waste"], correct: 0 },
      { id: 4, question: "Best waste strategy order is...", options: ["Recycle, reduce, reuse", "Reduce, reuse, recycle", "Burn, dump, forget", "Buy, throw, repeat"], correct: 1 },
      { id: 5, question: "Glass can often be...", options: ["Recycled multiple times", "Recycled once only", "Never recycled", "Used only as fuel"], correct: 0 },
      { id: 6, question: "Mixing wet and dry waste usually...", options: ["Improves recycling", "Contaminates recyclables", "Creates compost faster", "Reduces sorting effort"], correct: 1 },
      { id: 7, question: "A recyclable metal example is...", options: ["Aluminum cans", "Plastic wrappers", "Food leftovers", "Garden soil"], correct: 0 },
      { id: 8, question: "Which action supports recycling systems?", options: ["Throwing all waste together", "Following local sorting rules", "Using more single-use items", "Ignoring collection schedules"], correct: 1 },
    ],
  },
  "save-water": {
    title: "Save Water",
    subtitle: "Protect freshwater through efficient use at home and in communities.",
    heroImage: "/image/banner1.png",
    quizType: "save_water",
    lessons: [
      {
        heading: "Freshwater Is Limited",
        content:
          "Only a small fraction of Earth's water is accessible freshwater for drinking and daily use.",
      },
      {
        heading: "Small Leaks, Big Loss",
        content:
          "Dripping taps and leaking pipes waste large amounts of water over time.",
      },
      {
        heading: "Smart Daily Habits",
        content:
          "Shorter showers, bucket washing, and turning off taps while brushing save water every day.",
      },
      {
        heading: "Reuse and Harvest",
        content:
          "Rainwater harvesting and reusing greywater for gardening reduce dependence on fresh supply.",
      },
    ],
    questions: [
      { id: 1, question: "Most of Earth's water is...", options: ["Fresh and drinkable", "Salt water", "Stored in rivers", "Rainwater only"], correct: 1 },
      { id: 2, question: "A leaky tap should be...", options: ["Ignored", "Fixed quickly", "Opened fully", "Covered with cloth"], correct: 1 },
      { id: 3, question: "Water-saving habit:", options: ["Long showers daily", "Turn off tap while brushing", "Wash cars with open hose", "Run half-load laundry"], correct: 1 },
      { id: 4, question: "Rainwater harvesting is used to...", options: ["Waste rain", "Store rain for useful purposes", "Increase sewage", "Pollute wells"], correct: 1 },
      { id: 5, question: "Greywater can often be reused for...", options: ["Drinking", "Gardening", "Medical use", "Bottling"], correct: 1 },
      { id: 6, question: "Running a full washing machine load...", options: ["Saves water", "Wastes more water", "Uses no electricity", "Damages pipes"], correct: 0 },
      { id: 7, question: "Which tool reduces shower water use?", options: ["High-flow nozzle", "Low-flow showerhead", "Open hose", "No fixture"], correct: 1 },
      { id: 8, question: "Water conservation is important because...", options: ["Freshwater is unlimited", "Freshwater is limited and essential", "Only industries need water", "Rain solves everything"], correct: 1 },
    ],
  },
  "green-energy": {
    title: "Green Energy",
    subtitle: "Discover clean energy sources and how they reduce pollution.",
    heroImage: "/image/banner4.gif",
    quizType: "green_energy",
    lessons: [
      {
        heading: "What Is Green Energy?",
        content:
          "Green energy comes from renewable sources such as sunlight, wind, and flowing water.",
      },
      {
        heading: "Why It Matters",
        content:
          "Renewables reduce greenhouse gas emissions and improve long-term energy security.",
      },
      {
        heading: "Solar and Wind Basics",
        content:
          "Solar panels convert sunlight into electricity, while wind turbines use moving air.",
      },
      {
        heading: "Efficiency + Clean Energy",
        content:
          "Combining renewable power with energy-efficient devices provides the biggest benefit.",
      },
    ],
    questions: [
      { id: 1, question: "Green energy usually comes from...", options: ["Coal and oil", "Renewable resources", "Plastic waste", "Diesel only"], correct: 1 },
      { id: 2, question: "A renewable source is...", options: ["Wind", "Coal", "Petrol", "Natural gas"], correct: 0 },
      { id: 3, question: "Solar panels convert...", options: ["Wind into heat", "Sunlight into electricity", "Water into plastic", "Coal into oxygen"], correct: 1 },
      { id: 4, question: "Wind turbines generate power using...", options: ["Soil", "Air movement", "Plastic combustion", "Ocean salt"], correct: 1 },
      { id: 5, question: "Why switch to green energy?", options: ["Increase emissions", "Reduce pollution and emissions", "Use more fuel imports always", "Lower efficiency"], correct: 1 },
      { id: 6, question: "Energy-efficient appliances...", options: ["Use less electricity", "Use more electricity", "Cannot be recycled", "Need fossil fuels only"], correct: 0 },
      { id: 7, question: "Hydropower uses...", options: ["Flowing water", "Burning plastic", "Coal smoke", "Sandstorms"], correct: 0 },
      { id: 8, question: "Best long-term strategy is...", options: ["Only fossil fuels", "Renewables plus efficiency", "No energy planning", "Ignoring consumption"], correct: 1 },
    ],
  },
};

export default courseData;
