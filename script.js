/*
  Fill your personal information in PROFILE below.
  Example format is provided next to each TODO field.
*/
const PROFILE = {
  name: "XIANTENG TANG", // Example: "Haoran Du"
  title: "Ph.D. Student @ Indiana University Bloomington", // Example: "Ph.D. Student @ Fudan University"
  email: "tangxt.me@gmail.com", // Example: "name@university.edu"
  about: "TODO_YOUR_ABOUT", // Example: "I am a Ph.D. student focusing on ..."
  contactLine: "If you are interested in chatting with me, feel free to drop me an email.", // Example: "Feel free to email me for research collaboration."
  social: [
    { label: "GitHub", url: "TODO_GITHUB_URL" }, // Example: "https://github.com/yourname"
    { label: "Google Scholar", url: "TODO_SCHOLAR_URL" },
    { label: "ORCID", url: "TODO_ORCID_URL" }
  ],
  interests: [
    "TODO_INTEREST_1", // Example: "LLM Agents"
    "TODO_INTEREST_2", // Example: "Graph Learning"
    "TODO_INTEREST_3"  // Example: "Social Bot Detection"
  ],
  experience: [
    {
      period: "TODO_PERIOD_1", // Example: "2024.09 - Present"
      role: "TODO_ROLE_1", // Example: "Ph.D. Student"
      org: "TODO_ORG_1", // Example: "Fudan University"
      details: "TODO_DETAILS_1" // Example: "Advisor: Prof. A and Prof. B"
    },
    {
      period: "TODO_PERIOD_2",
      role: "TODO_ROLE_2",
      org: "TODO_ORG_2",
      details: "TODO_DETAILS_2"
    }
  ],
  publications: [
    {
      title: "TODO_PAPER_TITLE_1",
      venue: "TODO_VENUE_YEAR_1", // Example: "WWW 2026"
      authors: "TODO_AUTHORS_1", // Example: "A, B, Your Name"
      link: "TODO_PAPER_LINK_1"
    },
    {
      title: "TODO_PAPER_TITLE_2",
      venue: "TODO_VENUE_YEAR_2",
      authors: "TODO_AUTHORS_2",
      link: "TODO_PAPER_LINK_2"
    }
  ],
  projects: [
    {
      name: "TODO_PROJECT_1",
      desc: "TODO_PROJECT_DESC_1",
      link: "TODO_PROJECT_LINK_1"
    },
    {
      name: "TODO_PROJECT_2",
      desc: "TODO_PROJECT_DESC_2",
      link: "TODO_PROJECT_LINK_2"
    }
  ],
  awards: [
    "TODO_AWARD_1", // Example: "First Prize, XXX Competition, 2025"
    "TODO_AWARD_2",
    "TODO_AWARD_3"
  ]
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function createLink(label, url) {
  const a = document.createElement("a");
  a.textContent = label;
  a.href = url || "#";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderExperience(items) {
  const container = document.getElementById("experienceList");
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <div class="period">${item.period || ""}</div>
      <div class="role">${item.role || ""}</div>
      <div class="org">${item.org || ""}</div>
      <div>${item.details || ""}</div>
    `;
    container.appendChild(block);
  });
}

function renderCards(containerId, items, titleKey, descKey, linkKey, metaKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    const link = item[linkKey] || "#";
    const meta = metaKey ? `<div class="meta">${item[metaKey] || ""}</div>` : "";
    const extra = descKey ? `<p>${item[descKey] || ""}</p>` : "";
    card.innerHTML = `
      <p class="card-title">${item[titleKey] || ""}</p>
      ${meta}
      ${extra}
      <a href="${link}" target="_blank" rel="noopener noreferrer">Open link</a>
    `;
    container.appendChild(card);
  });
}

function initPage() {
  document.title = `${PROFILE.name} | Personal Homepage`;
  setText("name", PROFILE.name);
  setText("title", PROFILE.title);
  setText("email", PROFILE.email);
  setText("aboutText", PROFILE.about);
  setText("contactLine", PROFILE.contactLine);
  setText("footerName", PROFILE.name);

  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = PROFILE.name;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", PROFILE.about);

  const socialWrap = document.getElementById("socialLinks");
  if (socialWrap) {
    socialWrap.innerHTML = "";
    PROFILE.social.forEach((item) => {
      socialWrap.appendChild(createLink(item.label, item.url));
    });
  }

  renderList("interestList", PROFILE.interests);
  renderExperience(PROFILE.experience);
  renderCards("publicationList", PROFILE.publications, "title", "authors", "link", "venue");
  renderCards("projectList", PROFILE.projects, "name", "desc", "link", "");
  renderList("awardList", PROFILE.awards);
}

initPage();
