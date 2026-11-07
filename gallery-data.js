/*
  HOW TO ADD A NEW PHOTO:
  1. Upload the photo into the "images" folder.
  2. Add one new item to the list below (copy an existing item).
  3. Save and upload this file to GitHub.
*/
window.communityGalleryItems = [
  {
    image: "images/health-campaign.jpg",
    alt: "Community health and blood group campaign",
    category: "HEALTH & AWARENESS",
    title: "Health & Blood Group Campaign",
    description: "Taking part in a community health initiative and blood-group awareness activities.",
    descriptionBn: "কমিউনিটি স্বাস্থ্যসেবা ও রক্তের গ্রুপ সম্পর্কে সচেতনতামূলক কার্যক্রমে অংশগ্রহণ।"
  },
  {
    image: "images/cleanliness-campaign.jpg",
    alt: "Youth volunteers taking part in a cleanliness campaign",
    category: "ENVIRONMENT",
    title: "Cleanliness Campaign",
    description: "Working with fellow volunteers to promote a cleaner and healthier community.",
    descriptionBn: "পরিচ্ছন্ন ও স্বাস্থ্যকর পরিবেশ গড়ে তুলতে স্বেচ্ছাসেবীদের সঙ্গে পরিচ্ছন্নতা কার্যক্রম।"
  },
  {
    image: "images/winter-blanket-distribution.jpg",
    alt: "Volunteer handing a warm blanket to an elderly community member",
    category: "HUMANITARIAN SERVICE",
    title: "Winter Blanket Distribution",
    description: "Supporting people in need during winter through blanket distribution.",
    descriptionBn: "শীতকালে অসহায় ও শীতার্ত মানুষের মাঝে কম্বল বিতরণের মানবিক উদ্যোগ।"
  },
  {
    image: "images/leadership-workshop.jpg",
    alt: "Participants collaborating in a leadership and development workshop",
    category: "YOUTH DEVELOPMENT",
    title: "Leadership & Workshop",
    description: "Learning, sharing ideas and collaborating through youth development activities.",
    descriptionBn: "যুব উন্নয়নমূলক প্রশিক্ষণ, মতবিনিময় ও দলগত কার্যক্রমের অভিজ্ঞতা।"
  },
  {
    image: "images/rajshahi-shomotay-tarunno.jpg",
    alt: "Group photo at the Shomotay Tarunno Project in Rajshahi",
    category: "RAJSHAHI · COLLABORATION",
    title: "Shomotay Tarunno Project",
    description: "A memorable learning and networking experience at a program in Rajshahi.",
    descriptionBn: "রাজশাহীতে সমতায় তারুণ্য প্রকল্পের একটি প্রোগ্রামে অংশগ্রহণের স্মরণীয় অভিজ্ঞতা।"
  }
];

(function renderCommunityGallery() {
  const grid = document.getElementById("ci-gallery-grid");
  if (!grid || !Array.isArray(window.communityGalleryItems)) return;

  grid.innerHTML = window.communityGalleryItems.map((item) => {
    const safe = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
    return `
      <article class="ci-card">
        <img src="${safe(item.image)}" alt="${safe(item.alt || item.title)}" loading="lazy">
        <div class="ci-card-body">
          <span class="ci-tag">${safe(item.category)}</span>
          <h3>${safe(item.title)}</h3>
          <p>${safe(item.description)}</p>
          <p lang="bn">${safe(item.descriptionBn)}</p>
        </div>
      </article>`;
  }).join("");
})();
