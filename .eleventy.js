module.exports = function(eleventyConfig) {
  // Copy images and CSS to output folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Example shortcode for a reusable "item card"
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
