module.exports = function(eleventyConfig) {
  // Copy images and styles to /assets/*
  eleventyConfig.addPassthroughCopy({
    "src/images": "assets/images",
    "src/styles": "assets/css"
  });

  // Example shortcode (keep your existing one if present)
  eleventyConfig.addShortcode("itemCard", function(title, image, desc, link) {
    return `
      <div class="item-card">
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${link}" class="button">Read More</a>
      </div>
    `;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
