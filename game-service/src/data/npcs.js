// data/npcs.js
const npcs = [
  {
    id: "apprentice",
    name: "Apprentice",
    role: "Guide",
    dialogue: "Let's start simple. Every journey begins with small steps.",
    mission: {
      title: "Find the Needle",
      description: "Search for a specific number in a small unsorted array."
    },
    requiredComplexity: "O(n)",
    rewardXP: 20,
    rewardTool: "MergeSort",
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
    rewardTool: "QuickSort"
  },
  {
    id: "sorter",
    name: "Sorter",
    role: "Trainer",
    dialogue: "Brute force may work... but elegance wins wars.",
    mission: {
      title: "Sort the Scrolls",
      description: "Sort a list of magical scrolls by their rarity and power level."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 75,
    rewardTool: "BFS"
  },
  {
    id: "pathfinder",
    name: "Pathfinder",
    role: "Guide",
    dialogue: "To defeat enemies, your algorithm must be efficient.",
    mission: {
      title: "Optimize Pathfinding",
      description: "Find the shortest path from start to finish in a weighted graph."
    },
    requiredComplexity: "O(n log n)",
    rewardXP: 100,
    rewardTool: "BinarySearch"
  },
  {
    id: "guardian",
    name: "Guardian",
    role: "Boss",
    dialogue: "I guard the secrets of sorted arrays. Only the worthy pass.",
    mission: {
      title: "Find Target in Sorted Array",
      description: "Given a sorted array and a target, return its index efficiently."
    },
    requiredComplexity: "O(log n)",
    rewardXP: 150,
    rewardTool: "HeapSort"
  }
];

export default npcs;
