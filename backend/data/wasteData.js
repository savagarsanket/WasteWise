
const wasteCategories = {
  plastic: {
    label: "Plastic",
    description: "Plastic bottles, containers and packaging",
    disposal:
      "Keep recyclable plastic clean and dry. Check the recycling symbol and your local recycling rules.",
    reuse:
      "Reuse suitable containers where safe, and choose refillable products when possible.",
    caution:
      "Do not put dirty or mixed-material plastic into recycling unless local rules allow it."
  },

  organic: {
    label: "Organic Waste",
    description: "Fruit peels, vegetable scraps and suitable food waste",
    disposal:
      "Separate food scraps for composting or use your local organic-waste collection service.",
    reuse:
      "Compost suitable fruit and vegetable scraps to make soil conditioner.",
    caution:
      "Meat, dairy and oily food may require a specialized composting system."
  },

  electronic: {
    label: "Electronic Waste",
    description: "Old phones, chargers, computers and electronic devices",
    disposal:
      "Take electronic waste to an authorized e-waste collection centre or approved recycler.",
    reuse:
      "Repair, reuse or donate working electronics when appropriate.",
    caution:
      "Do not dismantle batteries or electronics yourself. Keep damaged batteries away from heat."
  },

  paper: {
    label: "Paper",
    description: "Newspapers, notebooks, cardboard and paper packaging",
    disposal:
      "Keep paper clean and dry, then place it in your local paper-recycling collection.",
    reuse:
      "Reuse one-sided sheets for rough work and reuse cardboard boxes when possible.",
    caution:
      "Greasy or food-contaminated paper may not be accepted in regular paper recycling."
  },

  metal: {
    label: "Metal",
    description: "Metal cans and suitable scrap metal",
    disposal:
      "Separate metal items and send accepted materials to a local recycling collection point.",
    reuse:
      "Reuse sturdy containers when they are safe and suitable for their intended purpose.",
    caution:
      "Sharp or contaminated metal should be handled carefully and according to local rules."
  },

  glass: {
    label: "Glass",
    description: "Glass bottles and jars",
    disposal:
      "Separate glass bottles and jars and check whether your local service accepts them.",
    reuse:
      "Reuse intact jars when appropriate after cleaning them safely.",
    caution:
      "Wrap broken glass securely and follow local instructions; never mix loose broken glass with ordinary recyclables."
  },

  hazardous: {
    label: "Hazardous Waste",
    description: "Paints, chemicals, solvents and other potentially hazardous household waste",
    disposal:
      "Use an authorized hazardous-waste collection service and follow the product label and local disposal guidance.",
    reuse:
      "Only reuse products as directed by their labels. Do not transfer unknown chemicals into unlabelled containers.",
    caution:
      "Do not pour unknown chemicals into drains or mix different chemical products."
  },

  general: {
    label: "General Waste",
    description: "Waste that cannot be sorted into the available categories",
    disposal:
      "Check whether any part can be reused or recycled. Dispose of the remaining waste through your local municipal service.",
    reuse:
      "Separate any recoverable materials before disposing of the remainder.",
    caution:
      "Do not place batteries, electronics or hazardous materials in general waste when separate collection is required."
  }
};

module.exports = wasteCategories;
