// Interaction Logic - Thuligal Trees

// State Variables
let currentFilter = 'all';
let searchQuery = '';
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

// Supabase Client Initialization
let supabaseClient = null;
if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function' && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
  try {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log("Supabase Client initialized successfully!");
  } catch (error) {
    console.error("Error initializing Supabase:", error);
  }
} else {
  console.log("Supabase credentials not configured or script not loaded. Falling back to LocalStorage.");


// Quiz Questions Pool (Derived from trees database)
const QUIZ_QUESTIONS_POOL = [
  {
    question: "Renowned in Ayurveda as a 'Hridaya' (heart) tonic, which tree supports myocardial function and manages hypertension?",
    options: ["Neermaruthu", "Vilvam", "Magizham", "Vengai"],
    answer: "Neermaruthu"
  },
  {
    question: "Which tree represents the 'Trinetra' (three eyes of Shiva) and has fruit pulp rich in tannins and pectin for gut health?",
    options: ["Kadambu", "Vilvam", "Punnai", "Naval (Jamun)"],
    answer: "Vilvam"
  },
  {
    question: "In which tree's hollow did the Pandavas secrete their weapons as told in epics, symbolizing resilience in dry zones?",
    options: ["Vanni", "Aal (Banyan)", "Kurumpala", "Tamarind"],
    answer: "Vanni"
  },
  {
    question: "Known as the 'Village Doctor' of Tamil Nadu, which tree is intrinsically connected to the worship of Amman?",
    options: ["Vembu (Neem)", "Nelli (Gooseberry)", "Iluppai (Mahua)", "Arasu (Peepal)"],
    answer: "Vembu (Neem)"
  },
  {
    question: "Which tree at Kanchi Ekambareswarar Temple is associated with a Sthalapurana spanning 3,500 years?",
    options: ["Maa (Mango)", "Kurumpala", "Vilvam", "Magizham"],
    answer: "Maa (Mango)"
  },
  {
    question: "Which tree is Tamil Nadu's official state tree, historically serving as the writing material (palm-leaves) for ancient literature?",
    options: ["Panai (Palmyra Palm)", "Aal (Banyan)", "Vengai", "Neermaruthu"],
    answer: "Panai (Palmyra Palm)"
  },
  {
    question: "Which tree is traditionally carved into wooden medicinal tumblers to regulate insulin and treat metabolic disorders?",
    options: ["Vengai", "Naval (Jamun)", "Kadambu", "Punnai"],
    answer: "Vengai"
  },
  {
    question: "Which flower shape resembles a conch (Shankha) and is clinically recognized for boosting memory and reducing neuro-inflammation?",
    options: ["Sankupushpam", "Mullai (Jasmine)", "Poo Marutham", "Vellerukku"],
    answer: "Sankupushpam"
  },
  {
    question: "Which tree displays a remarkable flower that mirrors a Shiva Linga shielded by a multi-headed serpent (Naga)?",
    options: ["Nagalingam", "Magizham", "Konrai", "Kadambu"],
    answer: "Nagalingam"
  },
  {
    question: "At Alwar Tirunagari, Nammalvar entered a deep meditative state under which tree, witnessing centuries of philosophical growth?",
    options: ["Tamarind", "Aal (Banyan)", "Vembu (Neem)", "Arasu (Peepal)"],
    answer: "Tamarind"
  }
];

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
  renderTreeCatalog();
  setupCatalogListeners();
  setupModalListeners();
  setupQuizListeners();
  setupHeaderScroll();
  renderPledgeList();
  setupPledgeListeners();
});

// Header Scroll Effect
function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Generate Custom Dynamic SVGs for fallback trees
function generateTreeSVG(tree) {
  const cfg = tree.svgConfig || {
    bgGradient: ["#145a32", "#1e8449"],
    themeColor: "#27ae60"
  };
  const isPalm = cfg.isPalm || false;
  const isClimber = cfg.isClimber || false;
  const isShrub = cfg.isShrub || false;
  const hasFruit = cfg.hasFruit || false;
  const hasFlowers = cfg.hasFlowers || false;
  const hasAerialRoots = cfg.hasAerialRoots || false;
  const gradId = `grad-tree-${tree.id}`;

  let svg = `<svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="tree-svg" style="border-radius: inherit;">
    <defs>
      <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${cfg.bgGradient[0]}" />
        <stop offset="100%" stop-color="${cfg.bgGradient[1]}" />
      </linearGradient>
    </defs>
    <!-- Background Circle -->
    <circle cx="100" cy="100" r="85" fill="url(#${gradId})" opacity="0.85" />
  `;

  // Draw ground
  svg += `<path d="M 35 150 Q 100 135 165 150 L 165 170 Q 100 170 35 170 Z" fill="#8d6e63" opacity="0.4" />`;

  if (isPalm) {
    // Palmyra Palm
    svg += `<path d="M 96 150 L 97 50 Q 100 48 103 50 L 104 150 Z" fill="#4d3b32" />`;
    for (let y = 65; y < 150; y += 15) {
      svg += `<path d="M 96.5 ${y} Q 100 ${y-2} 103.5 ${y}" stroke="#2e2520" stroke-width="1.5" fill="none" opacity="0.7" />`;
    }
    const frondAngles = [0, 30, 60, 95, 125, 155, 180, 210, 240, 270, 300, 330];
    frondAngles.forEach(angle => {
      const rad = (angle * Math.PI) / 180;
      const xEnd = 100 + Math.cos(rad) * 45;
      const yEnd = 50 + Math.sin(rad) * 45;
      svg += `<path d="M 100 50 Q ${100 + Math.cos(rad)*22 + Math.sin(rad)*8} ${50 + Math.sin(rad)*22 - Math.cos(rad)*8} ${xEnd} ${yEnd}" stroke="#145a32" stroke-width="3.5" fill="none" stroke-linecap="round" />`;
    });
    if (hasFruit) {
      const fColor = cfg.fruitColor || "#2e2520";
      svg += `<circle cx="95" cy="58" r="6" fill="${fColor}" />`;
      svg += `<circle cx="105" cy="59" r="6.5" fill="${fColor}" />`;
      svg += `<circle cx="100" cy="64" r="7" fill="${fColor}" />`;
    }
  } else if (isClimber) {
    // Vine / Jasmine
    svg += `<line x1="100" y1="160" x2="100" y2="40" stroke="#a1887f" stroke-width="4" stroke-linecap="round" />`;
    svg += `<line x1="80" y1="160" x2="120" y2="160" stroke="#a1887f" stroke-width="3" opacity="0.5" />`;
    svg += `<line x1="80" y1="100" x2="120" y2="100" stroke="#a1887f" stroke-width="3" opacity="0.5" />`;
    svg += `<path d="M 100 160 Q 80 130 100 100 T 100 40" stroke="#1e8449" stroke-width="2.5" fill="none" stroke-linecap="round" />`;
    svg += `<path d="M 100 160 Q 120 120 100 80 T 100 40" stroke="#2ecc71" stroke-width="2" fill="none" stroke-linecap="round" />`;
    const leavesList = [
      {x: 90, y: 130, r: -30}, {x: 110, y: 110, r: 30}, {x: 88, y: 80, r: -40}, {x: 108, y: 60, r: 40}
    ];
    leavesList.forEach(l => {
      svg += `<path d="M ${l.x} ${l.y} C ${l.x + 8} ${l.y - 12}, ${l.x + 16} ${l.y - 4}, ${l.x} ${l.y}" fill="#27ae60" transform="rotate(${l.r}, ${l.x}, ${l.y})" />`;
    });
    if (hasFlowers) {
      const flColor = cfg.flowerColor || "#ffffff";
      svg += `<circle cx="100" cy="90" r="6" fill="${flColor}" stroke="#eee" stroke-width="0.5" />`;
      svg += `<circle cx="95" cy="55" r="6" fill="${flColor}" stroke="#eee" stroke-width="0.5" />`;
      if (flColor !== "#ffffff") {
        svg += `<circle cx="100" cy="90" r="3.5" fill="#f1c40f" />`;
        svg += `<circle cx="95" cy="55" r="3.5" fill="#f1c40f" />`;
      }
    }
  } else if (isShrub) {
    // Giant Shrub
    svg += `<path d="M 96 150 Q 80 120 70 95 L 75 93 Q 83 115 97 130 Z" fill="#6e6259" />`;
    svg += `<path d="M 102 150 Q 115 120 125 90 L 121 88 Q 112 115 101 130 Z" fill="#584f47" />`;
    svg += `<circle cx="70" cy="90" r="15" fill="#aab7b8" opacity="0.9" />`;
    svg += `<circle cx="125" cy="85" r="16" fill="#bdc3c7" opacity="0.9" />`;
    svg += `<circle cx="95" cy="80" r="18" fill="#aab7b8" opacity="0.9" />`;
    if (hasFlowers) {
      svg += `<circle cx="70" cy="82" r="5" fill="#f2f3f4" stroke="#9b59b6" stroke-width="1.5" />`;
      svg += `<circle cx="125" cy="77" r="5" fill="#f2f3f4" stroke="#9b59b6" stroke-width="1.5" />`;
      svg += `<circle cx="95" cy="72" r="6" fill="#f2f3f4" stroke="#9b59b6" stroke-width="1.5" />`;
    }
  } else {
    // Normal Trees
    svg += `<path d="M 94 150 Q 94 100 85 95 L 94 92 Q 100 100 101 150 Z" fill="#5c4033" />`;
    svg += `<path d="M 104 150 Q 104 105 115 95 L 110 92 Q 100 102 99 150 Z" fill="#4a3329" />`;
    if (hasAerialRoots) {
      svg += `<line x1="75" y1="85" x2="75" y2="148" stroke="#8d6e63" stroke-width="1.2" opacity="0.8" />`;
      svg += `<line x1="125" y1="85" x2="125" y2="148" stroke="#8d6e63" stroke-width="1.2" opacity="0.8" />`;
      svg += `<line x1="90" y1="90" x2="90" y2="148" stroke="#795548" stroke-width="1" opacity="0.7" />`;
      svg += `<line x1="110" y1="90" x2="110" y2="148" stroke="#795548" stroke-width="1" opacity="0.7" />`;
    }

    const leafStyle = cfg.leafStyle;
    const themeColor = cfg.themeColor;

    if (leafStyle === "heart-pointed") {
      svg += `<path d="M 85 75 C 60 55, 60 85, 85 95 C 110 85, 110 55, 85 75 Z" fill="${themeColor}" opacity="0.95" />`;
      svg += `<path d="M 115 70 C 95 50, 95 80, 115 90 C 135 80, 135 50, 115 70 Z" fill="${themeColor}" opacity="0.9" />`;
      svg += `<path d="M 100 55 C 75 35, 75 65, 100 75 C 125 65, 125 35, 100 55 Z" fill="${themeColor}" opacity="0.98" />`;
    } else if (leafStyle === "feathery" || leafStyle === "tripinnate" || leafStyle === "pinnate-feathery") {
      svg += `<circle cx="80" cy="80" r="22" fill="${themeColor}" opacity="0.92" />`;
      svg += `<circle cx="120" cy="80" r="22" fill="${themeColor}" opacity="0.92" />`;
      svg += `<circle cx="100" cy="55" r="25" fill="${themeColor}" opacity="0.98" />`;
      svg += `<circle cx="70" cy="65" r="16" fill="${themeColor}" opacity="0.85" />`;
      svg += `<circle cx="130" cy="65" r="16" fill="${themeColor}" opacity="0.85" />`;
    } else if (leafStyle === "serrated" || leafStyle === "long-tapered") {
      svg += `<path d="M 75 82 Q 48 65 75 53 Q 102 65 75 82 Z" fill="${themeColor}" opacity="0.95" />`;
      svg += `<path d="M 125 82 Q 98 65 125 53 Q 152 65 125 82 Z" fill="${themeColor}" opacity="0.95" />`;
      svg += `<circle cx="100" cy="72" r="20" fill="${themeColor}" opacity="0.9" />`;
    } else {
      svg += `<circle cx="75" cy="80" r="25" fill="${themeColor}" opacity="0.95" />`;
      svg += `<circle cx="125" cy="80" r="25" fill="${themeColor}" opacity="0.95" />`;
      svg += `<circle cx="100" cy="58" r="30" fill="${themeColor}" opacity="0.98" />`;
      svg += `<circle cx="95" cy="88" r="22" fill="${themeColor}" opacity="0.9" />`;
    }

    if (hasFlowers) {
      const flColor = cfg.flowerColor || "#f1c40f";
      svg += `<circle cx="70" cy="75" r="4.5" fill="${flColor}" />`;
      svg += `<circle cx="85" cy="65" r="3.5" fill="${flColor}" />`;
      svg += `<circle cx="120" cy="75" r="4.5" fill="${flColor}" />`;
      svg += `<circle cx="105" cy="48" r="4" fill="${flColor}" />`;
      svg += `<circle cx="95" cy="60" r="4.5" fill="${flColor}" />`;
    }

    if (hasFruit) {
      const frColor = cfg.fruitColor || "#e74c3c";
      svg += `<circle cx="78" cy="88" r="5" fill="${frColor}" />`;
      svg += `<circle cx="122" cy="88" r="5.5" fill="${frColor}" />`;
      svg += `<circle cx="100" cy="72" r="5" fill="${frColor}" />`;
      svg += `<circle cx="90" cy="53" r="4.5" fill="${frColor}" />`;
    }
  }

  svg += `</svg>`;
  return svg;
}

// Render Tree Cards
function renderTreeCatalog() {
  const grid = document.getElementById('tree-cards-grid');
  grid.innerHTML = '';

  // Filter and Search Database
  const filteredTrees = TREES_DATA.filter(tree => {
    const matchesCategory = currentFilter === 'all' || tree.categories.includes(currentFilter);
    
    const sTerm = searchQuery.toLowerCase().trim();
    const matchesSearch = sTerm === '' ||
      tree.commonName.toLowerCase().includes(sTerm) ||
      tree.botanicalName.toLowerCase().includes(sTerm) ||
      tree.significance.toLowerCase().includes(sTerm) ||
      tree.healthBenefits.toLowerCase().includes(sTerm) ||
      tree.templeAssociation.toLowerCase().includes(sTerm);

    return matchesCategory && matchesSearch;
  });

  // Sort alphabetically
  filteredTrees.sort((a, b) => a.commonName.localeCompare(b.commonName));

  // Update Display Counter
  const countSpan = document.querySelector('#results-count-display span');
  if (countSpan) countSpan.textContent = filteredTrees.length;

  if (filteredTrees.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-tree-slash" style="font-size: 40px; margin-bottom: 16px; color: var(--accent);"></i>
        <h3>No Native Trees Found</h3>
        <p style="margin-top: 8px;">Try adjusting your search filters or queries to explore other species.</p>
      </div>
    `;
    return;
  }

  filteredTrees.forEach(tree => {
    const card = document.createElement('div');
    card.classList.add('tree-card');
    card.setAttribute('id', `tree-card-${tree.id}`);
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${tree.commonName}, botanical name ${tree.botanicalName}`);

    // Determine visual
    let visualHtml = '';
    if (tree.image) {
      visualHtml = `<img src="${tree.image}" alt="Watercolor illustration of ${tree.commonName}" class="tree-card-img" onerror="this.outerHTML=getDefaultSvg(${tree.id})">`;
    } else {
      visualHtml = `<div class="tree-vector-container">${generateTreeSVG(tree)}</div>`;
    }

    // Build tags
    const tagsHtml = tree.categories.slice(0, 2).map(cat => 
      `<span class="tree-tag-badge">${cat}</span>`
    ).join('');

    card.innerHTML = `
      <div class="tree-card-img-wrapper">
        ${visualHtml}
      </div>
      <div class="tree-card-body">
        <h3>${tree.commonName}</h3>
        <span class="botanical-name-italics">${tree.botanicalName}</span>
        <p class="tree-card-desc">${tree.significance}</p>
        <div class="tree-card-footer">
          <div class="tree-tags">
            ${tagsHtml}
          </div>
          <span class="learn-more-link">Details <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;

    // Click handler to open Modal
    card.addEventListener('click', () => openTreeModal(tree));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTreeModal(tree);
      }
    });

    grid.appendChild(card);
  });
}

// Fallback SVG string inside card error helper
function getDefaultSvg(treeId) {
  const tree = TREES_DATA.find(t => t.id === treeId);
  return generateTreeSVG(tree);
}

// Setup Catalog Event Listeners
function setupCatalogListeners() {
  const searchInput = document.getElementById('tree-search-bar');
  const filterButtons = document.querySelectorAll('.filter-tag');

  // Search input change
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderTreeCatalog();
  });

  // Category tags click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentFilter = btn.getAttribute('data-category');
      renderTreeCatalog();
    });
  });
}

// External filter trigger (from Footer/Navigation links)
window.triggerFilter = function(category) {
  const targetBtn = document.querySelector(`.filter-tag[data-category="${category}"]`);
  if (targetBtn) {
    targetBtn.click();
    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
  }
};

// Immersive Detail Modal Logic
function openTreeModal(tree) {
  const modal = document.getElementById('tree-detail-modal');
  
  // Set content
  const modalTitle = document.getElementById('modal-title');
  const modalBotanical = document.getElementById('modal-botanical');
  const modalSignificance = document.getElementById('modal-significance');
  const modalHealth = document.getElementById('modal-health');
  const modalTemple = document.getElementById('modal-temple');
  const modalImageCol = document.getElementById('modal-image-col');
  const badgesContainer = document.getElementById('modal-badges-container');
  
  // Specifications
  document.getElementById('detail-leaves').textContent = tree.details.leafType;
  document.getElementById('detail-flowers').textContent = tree.details.flowerColor;
  document.getElementById('detail-fruit').textContent = tree.details.fruit;
  document.getElementById('detail-habitat').textContent = tree.details.preferredSoil;

  modalTitle.textContent = tree.commonName;
  modalBotanical.textContent = tree.botanicalName;
  modalSignificance.textContent = tree.significance;
  modalHealth.textContent = tree.healthBenefits;
  modalTemple.textContent = tree.templeAssociation;

  // Render Badges
  badgesContainer.innerHTML = tree.categories.map(cat => 
    `<span class="tree-tag-badge" style="font-size:11px; padding: 6px 14px; background: rgba(196, 153, 53, 0.1); color: var(--accent);">${cat}</span>`
  ).join('');

  // Render Visual
  if (tree.image) {
    modalImageCol.innerHTML = `<img src="${tree.image}" alt="Detailed profile image of ${tree.commonName}" onerror="this.outerHTML=getDefaultSvg(${tree.id})">`;
  } else {
    modalImageCol.innerHTML = `<div class="tree-vector-container" style="width: 100%; height: 100%;">${generateTreeSVG(tree)}</div>`;
  }

  // Open Modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeTreeModal() {
  const modal = document.getElementById('tree-detail-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Unlock scroll
}

function setupModalListeners() {
  const modal = document.getElementById('tree-detail-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  closeBtn.addEventListener('click', closeTreeModal);
  
  // Close on click outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTreeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeTreeModal();
    }
  });
}

// Educational Quiz Logic
function setupQuizListeners() {
  const startBtn = document.getElementById('start-quiz-btn');
  const restartBtn = document.getElementById('restart-quiz-btn');

  startBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
  // Hide Intro and Results, Show Game
  document.getElementById('quiz-intro-card').style.display = 'none';
  document.getElementById('quiz-results-card').style.display = 'none';
  document.getElementById('quiz-game-container').style.display = 'block';

  // Select 5 random questions from pool
  const shuffledPool = [...QUIZ_QUESTIONS_POOL].sort(() => 0.5 - Math.random());
  activeQuizQuestions = shuffledPool.slice(0, 5);
  
  currentQuestionIndex = 0;
  quizScore = 0;

  loadQuizQuestion();
}

function loadQuizQuestion() {
  const qData = activeQuizQuestions[currentQuestionIndex];
  
  // Update header text
  document.getElementById('quiz-question-number').textContent = `Question ${currentQuestionIndex + 1} of 5`;
  document.getElementById('quiz-timer-score').textContent = `Score: ${quizScore} / ${currentQuestionIndex}`;

  // Update progress bar
  const progressPercent = (currentQuestionIndex / 5) * 100;
  document.getElementById('quiz-progress-indicator').style.width = `${progressPercent}%`;

  // Render text
  document.getElementById('quiz-question-text').textContent = qData.question;

  // Render options
  const optionsBox = document.getElementById('quiz-options-container');
  optionsBox.innerHTML = '';

  qData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('quiz-option');
    btn.textContent = opt;
    btn.addEventListener('click', () => handleOptionSelection(btn, opt, qData.answer));
    optionsBox.appendChild(btn);
  });
}

function handleOptionSelection(selectedBtn, selectedVal, correctVal) {
  const options = document.querySelectorAll('.quiz-option');
  
  // Disable all options
  options.forEach(opt => opt.classList.add('disabled'));

  // Grade selection
  if (selectedVal === correctVal) {
    selectedBtn.classList.add('correct');
    quizScore++;
  } else {
    selectedBtn.classList.add('incorrect');
    // Highlight correct one
    options.forEach(opt => {
      if (opt.textContent === correctVal) {
        opt.classList.add('correct');
      }
    });
  }

  // Update score summary
  document.getElementById('quiz-timer-score').textContent = `Score: ${quizScore} / ${currentQuestionIndex + 1}`;

  // Proceed after delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
      loadQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 1600);
}

function finishQuiz() {
  // Hide Game, Show Results
  document.getElementById('quiz-game-container').style.display = 'none';
  
  const resultsCard = document.getElementById('quiz-results-card');
  resultsCard.style.display = 'flex';

  // Set final progress bar to full
  document.getElementById('quiz-progress-indicator').style.width = `100%`;

  // Update elements
  document.getElementById('quiz-final-score').textContent = quizScore;
  
  // Custom feedbacks
  const feedbackText = document.getElementById('quiz-feedback-text');
  if (quizScore === 5) {
    feedbackText.innerHTML = "Perfect Score! You are a certified <strong>Forest Conservator</strong> of Tamil Nadu!";
    triggerConfetti();
  } else if (quizScore >= 3) {
    feedbackText.innerHTML = "Great job! You have solid awareness of our native botanical heritage.";
  } else {
    feedbackText.innerHTML = "Keep learning! Re-read the catalog to discover more secrets about our native flora.";
  }
}

// Confetti Effect for Perfect Score
function triggerConfetti() {
  const container = document.getElementById('quiz');
  
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = ['#c49935', '#2ecc71', '#e74c3c', '#3498db', '#f1c40f'][Math.floor(Math.random() * 5)];
    piece.style.animationDelay = Math.random() * 1.5 + 's';
    
    const size = Math.random() * 10 + 6;
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    
    // Random shapes
    if (Math.random() > 0.5) {
      piece.style.borderRadius = '0%'; // Square
    }
    
    container.appendChild(piece);
    
    // Auto cleanup
    setTimeout(() => {
      piece.remove();
    }, 3500);
  }
}

// Render Pledges (Checks Supabase first, falls back to LocalStorage)
function renderPledgeList() {
  if (supabaseClient) {
    supabaseClient.from('pledges')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          console.error("Supabase select error, falling back to LocalStorage:", error);
          renderLocalPledgeList();
        } else {
          displayPledges(data || []);
        }
      })
      .catch(err => {
        console.error("Supabase select catch, falling back to LocalStorage:", err);
        renderLocalPledgeList();
      });
  } else {
    renderLocalPledgeList();
  }
}

function renderLocalPledgeList() {
  let pledges = JSON.parse(localStorage.getItem('thuligal_pledges')) || [];
  pledges.sort((a, b) => new Date(b.date) - new Date(a.date));
  displayPledges(pledges);
}

// Display Pledges on Wall of Honor
function displayPledges(pledgesList) {
  const container = document.getElementById('pledgers-list-container');
  const totalCountSpan = document.getElementById('total-pledges-count');
  
  if (!container || !totalCountSpan) return;

  // Calculate total trees
  let totalTrees = pledgesList.reduce((sum, p) => sum + parseInt(p.count || 0), 0);
  totalCountSpan.textContent = `${totalTrees.toLocaleString()} Trees Pledged`;

  if (pledgesList.length === 0) {
    container.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); text-align: center; font-style: italic; margin: 10px 0;">No pledges submitted yet. Be the first!</p>`;
    return;
  }

  // Render recent pledges
  container.innerHTML = pledgesList.map(p => {
    const dateVal = p.created_at || p.date;
    return `
      <div style="background: rgba(43, 112, 76, 0.04); border-left: 3px solid var(--accent); padding: 8px 12px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
        <div style="text-align: left;">
          <strong style="color: var(--primary-dark); display: block;">${escapeHtml(p.name)}</strong>
          <span style="color: var(--text-muted); font-size: 11px;">Pledged on ${new Date(dateVal).toLocaleDateString()}</span>
        </div>
        <span style="font-weight: 700; color: var(--primary-light); background: rgba(43, 112, 76, 0.06); padding: 3px 8px; border-radius: 4px; font-size: 12px; white-space: nowrap;">${p.count} ${parseInt(p.count) === 1 ? 'Tree' : 'Trees'}</span>
      </div>
    `;
  }).join('');
}

// Utility to escape HTML and prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Setup Pledge Controls (e.g. Clear button)
function setupPledgeListeners() {
  const clearBtn = document.getElementById('clear-pledges-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear the Wall of Honor registry? (If using Supabase, this clears remote records)")) {
        if (supabaseClient) {
          supabaseClient.from('pledges')
            .delete()
            .neq('name', '') // Deletes all rows where name is not empty
            .then(({ error }) => {
              if (error) {
                console.error("Supabase delete error:", error);
                alert("Failed to clear Supabase database. Falling back to clearing LocalStorage.");
                clearLocalPledges();
              } else {
                renderPledgeList();
              }
            })
            .catch(err => {
              console.error("Supabase delete catch:", err);
              clearLocalPledges();
            });
        } else {
          clearLocalPledges();
        }
      }
    });
  }
}

function clearLocalPledges() {
  localStorage.removeItem('thuligal_pledges');
  renderLocalPledgeList();
}

// Handle pledge submission
window.submitPledge = function() {
  const form = document.getElementById('tree-pledge-form');
  const successMsg = document.getElementById('pledge-success-msg');
  const nameVal = document.getElementById('pledge-name').value;
  const emailVal = document.getElementById('pledge-email').value;
  const countVal = parseInt(document.getElementById('pledge-count').value) || 0;
  
  if (form.checkValidity() && nameVal && countVal > 0) {
    const pledgeData = {
      name: nameVal,
      email: emailVal,
      count: countVal
    };

    // Show success message immediately
    form.style.display = 'none';
    successMsg.style.display = 'block';

    if (supabaseClient) {
      // Save to Supabase
      supabaseClient.from('pledges')
        .insert([pledgeData])
        .then(({ error }) => {
          if (error) {
            console.error("Supabase insert error, saving locally:", error);
            saveLocalPledge(pledgeData);
          } else {
            renderPledgeList();
          }
        })
        .catch(err => {
          console.error("Supabase insert catch, saving locally:", err);
          saveLocalPledge(pledgeData);
        });
    } else {
      saveLocalPledge(pledgeData);
    }
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'flex';
      successMsg.style.display = 'none';
    }, 4000);
  }
};

function saveLocalPledge(pledgeData) {
  let pledges = JSON.parse(localStorage.getItem('thuligal_pledges')) || [];
  pledgeData.date = new Date().toISOString();
  pledges.push(pledgeData);
  localStorage.setItem('kadamba_vanam_pledges', JSON.stringify(pledges));
  renderLocalPledgeList();
}
