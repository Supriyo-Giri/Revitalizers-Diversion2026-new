// data/npcs.js
const npcs = [
  {
    id: "elder-coder",
    name: "Elder Coder",
    role: "Guide",
    dialogue: "To defeat enemies, your algorithm must be efficient.",
    mission: {
      title: "Optimize Pathfinding",
      description: "Find the shortest path from start to finish in a weighted graph."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 100
  },
  {
    id: "sort-monk",
    name: "Sort Monk",
    role: "Trainer",
    dialogue: "Brute force may work... but elegance wins wars.",
    mission: {
      title: "Sort the Scrolls",
      description: "Sort a large list of magical scrolls by their rarity and power level."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 50
  },
  {
    id: "array-warrior",
    name: "Array Warrior",
    role: "Challenger",
    dialogue: "Only the sharpest loops survive.",
    mission: {
      title: "Merge the Arrays",
      description: "Combine multiple sorted arrays into a single sorted array efficiently."
    },
    requiredComplexity: "O(n)",
    rewardXP: 75
  }
];

export default npcs;