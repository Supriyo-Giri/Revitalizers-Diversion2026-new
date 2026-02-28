const bosses = [
  {
    id: "sorted-guardian",
    name: "Sorted Guardian",
    optimalComplexity: "O(log n)",
    unlockReward: "BinarySearch",
    questions: [
      {
        id: 1,
        title: "Find target in sorted array",
        description: "Given sorted array and target, return index."
      },
      {
        id: 2,
        title: "First occurrence",
        description: "Find first occurrence of element."
      },
      {
        id: 3,
        title: "Count occurrences",
        description: "Count how many times target appears."
      }
    ]
  },
  
  {
    id: "chaos-beast",
    name: "Chaos Beast",
    optimalComplexity: "O(n log n)",
    unlockReward: "MergeSort",
    questions: [
      {
        id: 1,
        title: "Sort unsorted array",
        description: "Sort large dataset efficiently."
      },
      {
        id: 2,
        title: "Sort linked list",
        description: "Efficiently sort linked list."
      },
      {
        id: 3,
        title: "Stable sorting needed",
        description: "Sort while maintaining order."
      }
    ]
  }
];

export default bosses;