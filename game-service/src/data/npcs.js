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
  },

  // bosses merged as NPCs with only first question
  {
    id: "sorted-guardian",
    name: "Sorted Guardian",
    role: "Boss",
    dialogue: "I guard the secrets of sorted arrays.",
    mission: {
      title: "Find target in sorted array",
      description: "Given sorted array and target, return index."
    },
    requiredComplexity: "O(log n)",
    rewardXP: 150
  },
  {
    id: "chaos-beast",
    name: "Chaos Beast",
    role: "Boss",
    dialogue: "I thrive in disorder and complexity.",
    mission: {
      title: "Sort unsorted array",
      description: "Sort large dataset efficiently."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 200
  }
];

export default npcs;