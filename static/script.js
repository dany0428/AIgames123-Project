// =============================================
// AIGames123 - Main JavaScript
// =============================================

// Sample game data
const games = [
  {
    id: 1,
    title: "Pixel Puzzle Quest",
    description: "A challenging puzzle game with retro pixel art aesthetics. Solve increasingly complex puzzles.",
    category: "Puzzle",
    plays: "12.5K",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop"
  },
  {
    id: 2,
    title: "Space Defender",
    description: "Defend your space station against waves of alien invaders in this action-packed shooter.",
    category: "Action",
    plays: "8.2K",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=225&fit=crop"
  },
  {
    id: 3,
    title: "City Builder AI",
    description: "Build and manage your own city with AI-powered citizens and dynamic economy.",
    category: "Simulation",
    plays: "15.3K",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=225&fit=crop"
  },
  {
    id: 4,
    title: "Memory Match Pro",
    description: "Test your memory with this beautifully designed card matching game.",
    category: "Puzzle",
    plays: "6.7K",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=225&fit=crop"
  },
  {
    id: 5,
    title: "Neon Racer",
    description: "Race through neon-lit tracks at breakneck speeds in this futuristic racing game.",
    category: "Action",
    plays: "9.1K",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop"
  },
  {
    id: 6,
    title: "Farm Life Simulator",
    description: "Experience peaceful farm life. Grow crops, raise animals, and build your dream farm.",
    category: "Simulation",
    plays: "11.2K",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=225&fit=crop"
  },
  {
    id: 7,
    title: "Word Wizard",
    description: "Expand your vocabulary with this addictive word puzzle game featuring thousands of levels.",
    category: "Puzzle",
    plays: "7.4K",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=225&fit=crop"
  },
  {
    id: 8,
    title: "Robot Arena",
    description: "Build, customize, and battle robots in this exciting combat simulation.",
    category: "Action",
    plays: "5.9K",
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop"
  }
];

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('open');
}

// Render game cards
function renderGames(gamesToRender) {
  const gamesGrid = document.getElementById('gamesGrid');
  if (!gamesGrid) return;

  gamesGrid.innerHTML = gamesToRender.map(game => `
    <div class="game-card" onclick="playGame(${game.id})">
      <div class="game-card-image">
        <img src="${game.image}" alt="${game.title}">
        <div class="game-card-overlay">
          <div class="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
        <span class="game-card-category">${game.category}</span>
      </div>
      <div class="game-card-content">
        <h3 class="game-card-title">${game.title}</h3>
        <p class="game-card-description">${game.description}</p>
        <div class="game-card-meta">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            ${game.plays} plays
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            ${game.rating}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter games by category
function filterGames(category) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter and render games
  if (category === 'all') {
    renderGames(games);
  } else {
    const filtered = games.filter(game => 
      game.category.toLowerCase() === category.toLowerCase()
    );
    renderGames(filtered);
  }
}

// Play game (placeholder)
function playGame(gameId) {
  const game = games.find(g => g.id === gameId);
  alert(`Starting "${game.title}"...\n\nThis is a demo. In a real implementation, this would load the game.`);
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query === '') {
      renderGames(games);
    } else {
      const filtered = games.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
      );
      renderGames(filtered);
    }
  });
}

// Form submission (upload page)
function setupUploadForm() {
  const form = document.getElementById('uploadForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Game uploaded successfully!\n\nThis is a demo. In a real implementation, the game would be processed and published.');
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderGames(games);
  setupSearch();
  setupUploadForm();
});
