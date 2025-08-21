// Highlight selected category (optional future use)
function productCategory(event) {
  console.log("Category:", event.target.getAttribute("data-value"));
}

// Highlight selected subcategory
function productSubCategory(event) {
  event.stopPropagation(); // Prevent parent li click
  const allSubItems = document.querySelectorAll(".sub-menu ul li");
  
  // Remove active class from all
  allSubItems.forEach(item => item.classList.remove("active"));

  // Add active class to clicked item
  event.target.classList.add("active");

  console.log("Subcategory:", event.target.getAttribute("data-value"));
}
