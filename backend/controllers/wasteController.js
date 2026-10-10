
const wasteCategories = require("../data/wasteData");

function getCategories(req, res) {
  const categories = Object.entries(wasteCategories).map(
    ([id, details]) => ({
      id,
      label: details.label,
      description: details.description
    })
  );

  return res.status(200).json({
    success: true,
    count: categories.length,
    categories
  });
}

function analyzeWaste(req, res) {
  const { wasteType, description } = req.body || {};

  // Validate wasteType
  if (
    typeof wasteType !== "string" ||
    !wasteType.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Please select a waste category."
    });
  }

  const category = wasteType.trim().toLowerCase();
  const waste = wasteCategories[category];

  if (!waste) {
    return res.status(400).json({
      success: false,
      message: "Invalid waste category. Fetch /api/categories for valid options."
    });
  }

  // Validate optional description
  if (
    description !== undefined &&
    typeof description !== "string"
  ) {
    return res.status(400).json({
      success: false,
      message: "Description must be text."
    });
  }

  const cleanDescription = (description || "").trim();

  if (cleanDescription.length > 500) {
    return res.status(400).json({
      success: false,
      message: "Description must be 500 characters or fewer."
    });
  }

  return res.status(200).json({
    success: true,
    wasteType: category,
    category: waste.label,
    description: cleanDescription,
    suggestion: waste.disposal,
    reuseTip: waste.reuse,
    caution: waste.caution
  });
}

module.exports = {
  getCategories,
  analyzeWaste
};
