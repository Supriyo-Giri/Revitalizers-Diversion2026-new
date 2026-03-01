// data/npcs.js
const npcs = [
  {
    id: "training-apprentice",
    name: "Training Apprentice",
    role: "Guide",
    dialogue: "Let's start simple. Every journey begins with small steps.",
    mission: {
      title: "Find the Needle",
      description: "Search for a specific number in a small unsorted array."
    },
    requiredComplexity: "O(n)",
    rewardXP: 20,
    rewardTool: "LinearSearch"
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
    rewardXP: 50,
    rewardTool: "MergeSort"
  },
  {
    id: "sort-monk",
    name: "Sort Monk",
    role: "Trainer",
    dialogue: "Brute force may work... but elegance wins wars.",
    mission: {
      title: "Sort the Scrolls",
      description: "Sort a list of magical scrolls by their rarity and power level."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 75,
    rewardTool: "QuickSort"
  },
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
    rewardXP: 100,
    rewardTool: "BFS"
  },
  {
    id: "sorted-guardian",
    name: "Sorted Guardian",
    role: "Boss",
    dialogue: "I guard the secrets of sorted arrays. Only the worthy pass.",
    mission: {
      title: "Find Target in Sorted Array",
      description: "Given a sorted array and a target, return its index efficiently."
    },
    requiredComplexity: "O(log n)",
    rewardXP: 150,
    rewardTool: "BinarySearch"
  }
];

export default npcs;
