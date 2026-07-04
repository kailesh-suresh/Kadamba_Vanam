// Interaction Logic - Kadamba Vanam Trees

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
}

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

// Render Tree Cards
function renderTreeCatalog() {
  const grid = document.getElementById('tree-cards-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filteredTrees = TREES_DATA.filter(tree => {
    const matchesCategory = currentFilter === 'all' || tree.categories.includes(currentFilter);
    const sTerm = searchQuery.toLowerCase().trim();
    const matchesSearch = sTerm === '' ||
      tree.commonName.toLowerCase().includes(sTerm) ||
      tree.botanicalName.toLowerCase().includes(sTerm) ||
      tree.significance.toLowerCase().includes(sTerm);

    return matchesCategory && matchesSearch;
  });

  filteredTrees.sort((a, b) => a.commonName.localeCompare(b.commonName));

  const countSpan = document.querySelector('#results-count-display span');
  if (countSpan) countSpan.textContent = filteredTrees.length;

  filteredTrees.forEach(tree => {
    const card = document.createElement('div');
    card.classList.add('tree-card');
    card.innerHTML = `
      <div class="tree-card-body">
        <h3>${tree.commonName}</h3>
        <p>${tree.significance}</p>
      </div>
    `;
    card.addEventListener('click', () => openTreeModal(tree));
    grid.appendChild(card);
  });
}

// Pledge Logic
function renderPledgeList() {
  if (supabaseClient) {
    supabaseClient.from('pledges')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) renderLocalPledgeList();
        else displayPledges(data || []);
      });
  } else {
    renderLocalPledgeList();
  }
}

function renderLocalPledgeList() {
  let pledges = JSON.parse(localStorage.getItem('kadamba_vanam_pledges')) || [];
  displayPledges(pledges);
}

function displayPledges(pledgesList) {
  const container = document.getElementById('pledgers-list-container');
  const totalCountSpan = document.getElementById('total-pledges-count');
  if (!container || !totalCountSpan) return;

  let totalTrees = pledgesList.reduce((sum, p) => sum + parseInt(p.count || 0), 0);
  totalCountSpan.textContent = `${totalTrees.toLocaleString()} Trees Pledged`;

  container.innerHTML = pledgesList.map(p => `
    <div class="pledge-entry">
      <strong>${escapeHtml(p.name)}</strong> - ${p.count} Trees
    </div>
  `).join('');
}

window.submitPledge = function() {
  const nameVal = document.getElementById('pledge-name').value;
  const emailVal = document.getElementById('pledge-email').value;
  const countVal = parseInt(document.getElementById('pledge-count').value) || 0;
  
  if (nameVal && countVal > 0) {
    const pledgeData = { name: nameVal, email: emailVal, count: countVal };

    if (supabaseClient) {
      supabaseClient.from('pledges').insert([pledgeData]).then(() => renderPledgeList());
    } else {
      saveLocalPledge(pledgeData);
    }
  }
};

function saveLocalPledge(pledgeData) {
  let pledges = JSON.parse(localStorage.getItem('kadamba_vanam_pledges')) || [];
  pledgeData.date = new Date().toISOString();
  pledges.push(pledgeData);
  localStorage.setItem('kadamba_vanam_pledges', JSON.stringify(pledges));
  renderPledgeList();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}