const MISSIONS = [
  {
    id: 1,
    group: "Support",
    topic: "FDP Connections",
    title: "Converting Between Fractions, Decimals and Percentages - Level 1",
    shortDescription: "Use familiar fractions, tenths and hundredths to convert between forms.",
    supportLinks: [{ label: "Corbettmaths: Fractions, Decimals and Percentages", url: "https://corbettmathsprimary.com/2018/07/24/fractions-decimals-and-percentages-video/" }],
    learnIntro: "Fractions, decimals and percentages can all describe the same amount. In this mission, use simple examples such as halves, quarters, fifths and tenths.",
    keySteps: [
      "Fraction to decimal: divide the numerator by the denominator.",
      "Decimal to percentage: multiply by 100 and add the percent sign.",
      "Percentage to fraction: write the value over 100, then simplify if possible."
    ],
    examples: [
      { title: "Example 1: Fraction to decimal", question: "Convert 3/4 to a decimal.", working: ["3 ÷ 4 = 0.75", "So 3/4 = 0.75"] },
      { title: "Example 2: Decimal to percentage", question: "Convert 0.6 to a percentage.", working: ["0.6 × 100 = 60", "So 0.6 = 60%"] },
      { title: "Example 3: Percentage to fraction", question: "Convert 25% to a fraction.", working: ["25% = 25/100", "Simplify 25/100 to 1/4", "So 25% = 1/4"] }
    ],
    practice: [
      { prompt: "Write 1/2 as a decimal.", accepted: ["0.5", ".5"], hint: "Think: numerator divided by denominator.", reteach: "For a fraction to a decimal, divide the top number by the bottom number. Here, 1 ÷ 2 = 0.5.", answerText: "1/2 = 0.5" },
      { prompt: "Write 0.4 as a percentage.", accepted: ["40", "40%"], hint: "Move from decimal to percentage by multiplying by 100.", reteach: "0.4 × 100 = 40, so 0.4 = 40%.", answerText: "0.4 = 40%" },
      { prompt: "Write 50% as a simplified fraction.", accepted: ["1/2"], hint: "Start by writing the percentage over 100.", reteach: "50% = 50/100. Simplify by dividing top and bottom by 50 to get 1/2.", answerText: "50% = 1/2" },
      { prompt: "Write 3/10 as a percentage.", accepted: ["30", "30%"], hint: "It may help to convert the fraction to a decimal first.", reteach: "3/10 = 0.3. Then 0.3 × 100 = 30, so 3/10 = 30%.", answerText: "3/10 = 30%" }
    ],
    quiz: [
      { prompt: "Write 0.25 as a fraction.", accepted: ["1/4", "25/100"], explanation: "0.25 = 25/100 = 1/4" },
      { prompt: "Write 3/5 as a decimal.", accepted: ["0.6"], explanation: "3 ÷ 5 = 0.6" },
      { prompt: "Write 70% as a decimal.", accepted: ["0.7", ".7"], explanation: "70% means 70 per 100, which is 0.7" },
      { prompt: "Write 0.8 as a percentage.", accepted: ["80", "80%"], explanation: "0.8 × 100 = 80%" },
      { prompt: "Write 1/4 as a percentage.", accepted: ["25", "25%"], explanation: "1/4 = 0.25 = 25%" }
    ]
  },
  {
    id: 2,
    group: "Support",
    topic: "Fractions",
    title: "Equivalent Fractions - Level 1",
    shortDescription: "Use multiplication to make matching fractions with simple numbers.",
    supportLinks: [{ label: "Corbettmaths: Equivalent Fractions and Simplifying Fractions", url: "https://corbettmathsprimary.com/2018/07/24/equivalent-fractions-and-simplifying-fractions-videos/" }],
    learnIntro: "Equivalent fractions are fractions that name the same amount. You can create them by multiplying or dividing the numerator and denominator by the same number.",
    keySteps: [
      "Look for the scale factor between one numerator or denominator and the other.",
      "Use the same scale factor on both parts of the fraction.",
      "Check that the two fractions still represent the same amount."
    ],
    examples: [
      { title: "Example 1", question: "Complete 1/2 = ?/4", working: ["The denominator has doubled from 2 to 4.", "Double the numerator too: 1 × 2 = 2.", "So 1/2 = 2/4."] },
      { title: "Example 2", question: "Complete 3/5 = ?/10", working: ["The denominator has been multiplied by 2.", "Multiply the numerator by 2: 3 × 2 = 6.", "So 3/5 = 6/10."] }
    ],
    practice: [
      { prompt: "Complete: 1/3 = ?/6", accepted: ["2"], hint: "How did the denominator change from 3 to 6?", reteach: "3 became 6 by multiplying by 2, so the numerator 1 also becomes 2.", answerText: "1/3 = 2/6" },
      { prompt: "Complete: 2/5 = ?/10", accepted: ["4"], hint: "The denominator has doubled.", reteach: "Multiply both numerator and denominator by 2. 2/5 = 4/10.", answerText: "2/5 = 4/10" },
      { prompt: "Complete: 3/4 = ?/8", accepted: ["6"], hint: "4 has become 8.", reteach: "4 became 8 by multiplying by 2, so 3 becomes 6.", answerText: "3/4 = 6/8" },
      { prompt: "Complete: 4/7 = ?/14", accepted: ["8"], hint: "Look at the denominator first.", reteach: "7 × 2 = 14, so 4 × 2 = 8.", answerText: "4/7 = 8/14" }
    ],
    quiz: [
      { prompt: "Complete: 1/5 = ?/15", accepted: ["3"], explanation: "Multiply top and bottom by 3." },
      { prompt: "Complete: 2/3 = ?/9", accepted: ["6"], explanation: "Multiply top and bottom by 3." },
      { prompt: "Complete: 5/6 = ?/12", accepted: ["10"], explanation: "Multiply top and bottom by 2." },
      { prompt: "Complete: 3/8 = ?/16", accepted: ["6"], explanation: "Multiply top and bottom by 2." },
      { prompt: "Complete: 4/9 = ?/18", accepted: ["8"], explanation: "Multiply top and bottom by 2." }
    ]
  },
  {
    id: 3,
    group: "Support",
    topic: "Decimals",
    title: "Ordering and Rounding Decimals - Level 1",
    shortDescription: "Compare place value and round decimals to the nearest whole number or tenth.",
    supportLinks: [
      { label: "Corbettmaths: Ordering Decimals", url: "https://corbettmathsprimary.com/2018/07/16/ordering-decimals-video/" },
      { label: "Corbettmaths: Rounding", url: "https://corbettmathsprimary.com/2018/07/31/rounding-video/" }
    ],
    learnIntro: "Decimals are ordered by place value. Compare whole numbers first, then tenths, then hundredths. Rounding means choosing the nearest value.",
    keySteps: [
      "Line up the decimal points when comparing decimals.",
      "Compare from left to right: ones, tenths, hundredths.",
      "To round, check the digit to the right of the place you are rounding to."
    ],
    examples: [
      { title: "Example 1: Ordering", question: "Which is greater: 0.6 or 0.56?", working: ["0.6 can be thought of as 0.60.", "Compare 0.60 and 0.56.", "60 hundredths is greater than 56 hundredths, so 0.6 is greater."] },
      { title: "Example 2: Rounding", question: "Round 4.7 to the nearest whole number.", working: ["Look at the tenths digit: 7.", "7 is 5 or more, so round up.", "4.7 rounds to 5."] }
    ],
    practice: [
      { prompt: "Which is larger: 0.4 or 0.35? Type the larger decimal.", accepted: ["0.4"], hint: "You may rewrite 0.4 as 0.40.", reteach: "Compare 0.40 and 0.35. 40 hundredths is larger than 35 hundredths.", answerText: "0.4 is larger." },
      { prompt: "Round 3.2 to the nearest whole number.", accepted: ["3"], hint: "Look at the tenths digit.", reteach: "The tenths digit is 2, so round down. 3.2 rounds to 3.", answerText: "3.2 rounds to 3." },
      { prompt: "Round 6.8 to the nearest whole number.", accepted: ["7"], hint: "Is the tenths digit 5 or more?", reteach: "The tenths digit is 8, so round up. 6.8 rounds to 7.", answerText: "6.8 rounds to 7." },
      { prompt: "Put these in order from smallest to largest: 0.9, 0.19, 0.5", accepted: ["0.19,0.5,0.9", "0.19 0.5 0.9"], hint: "Compare tenths carefully. 0.19 has 1 tenth, while 0.5 has 5 tenths.", reteach: "0.19 is the smallest, then 0.5, then 0.9.", answerText: "0.19, 0.5, 0.9" }
    ],
    quiz: [
      { prompt: "Which is greater: 1.4 or 1.39? Type the larger decimal.", accepted: ["1.4"], explanation: "1.4 = 1.40, which is greater than 1.39." },
      { prompt: "Round 2.6 to the nearest whole number.", accepted: ["3"], explanation: "The tenths digit is 6, so round up." },
      { prompt: "Round 7.44 to the nearest tenth.", accepted: ["7.4"], explanation: "Look at the hundredths digit: 4, so keep the tenths digit the same." },
      { prompt: "Put these in order from smallest to largest: 0.72, 0.7, 0.09", accepted: ["0.09,0.7,0.72", "0.09 0.7 0.72"], explanation: "0.09 is smallest, then 0.70, then 0.72." },
      { prompt: "Round 5.95 to the nearest whole number.", accepted: ["6"], explanation: "The tenths digit is 9, so round up." }
    ]
  },
  {
    id: 4,
    group: "Support",
    topic: "Percentages",
    title: "Calculating Percentages - Level 1",
    shortDescription: "Use easy percentages such as 10%, 25%, 50% and 75%.",
    supportLinks: [{ label: "Corbettmaths: Percentages of Amounts", url: "https://corbettmathsprimary.com/2018/07/18/percentages-of-amounts-video/" }],
    learnIntro: "A percentage means 'out of 100'. Many common percentages can be found using known fraction links such as 50% = 1/2 and 25% = 1/4.",
    keySteps: [
      "10% means one tenth.",
      "50% means one half, and 25% means one quarter.",
      "Use friendly percentages to break problems into simple parts."
    ],
    examples: [
      { title: "Example 1", question: "Find 50% of 18.", working: ["50% means half.", "Half of 18 is 9.", "So 50% of 18 = 9."] },
      { title: "Example 2", question: "Find 25% of 20.", working: ["25% means one quarter.", "A quarter of 20 is 5.", "So 25% of 20 = 5."] }
    ],
    practice: [
      { prompt: "Find 10% of 40.", accepted: ["4"], hint: "10% is the same as one tenth.", reteach: "One tenth of 40 is 4, so 10% of 40 = 4.", answerText: "10% of 40 = 4" },
      { prompt: "Find 50% of 22.", accepted: ["11"], hint: "50% means half.", reteach: "Half of 22 is 11, so 50% of 22 = 11.", answerText: "50% of 22 = 11" },
      { prompt: "Find 25% of 16.", accepted: ["4"], hint: "25% is one quarter.", reteach: "One quarter of 16 is 4.", answerText: "25% of 16 = 4" },
      { prompt: "Find 75% of 20.", accepted: ["15"], hint: "75% is three quarters.", reteach: "Three quarters of 20 is 15. You can also find 25% = 5 and then multiply by 3.", answerText: "75% of 20 = 15" }
    ],
    quiz: [
      { prompt: "Find 10% of 90.", accepted: ["9"], explanation: "10% is one tenth, and one tenth of 90 is 9." },
      { prompt: "Find 50% of 30.", accepted: ["15"], explanation: "50% means half." },
      { prompt: "Find 25% of 24.", accepted: ["6"], explanation: "25% means one quarter." },
      { prompt: "Find 75% of 12.", accepted: ["9"], explanation: "75% is three quarters, and 3/4 of 12 is 9." },
      { prompt: "Find 50% of 46.", accepted: ["23"], explanation: "Half of 46 is 23." }
    ]
  },
  {
    id: 5,
    group: "Consolidate",
    topic: "FDP Connections",
    title: "Converting Between Fractions, Decimals and Percentages - Level 2",
    shortDescription: "Work with less familiar fractions and decimals including twentieths and hundredths.",
    supportLinks: [{ label: "Corbettmaths: Fractions, Decimals and Percentages", url: "https://corbettmathsprimary.com/2018/07/24/fractions-decimals-and-percentages-video/" }],
    learnIntro: "This mission extends FDP conversions to values such as 3/8, 7/20 and 0.625. Some values are easiest to convert by using division, while others can be linked to a denominator of 100.",
    keySteps: [
      "Use division when changing a fraction to a decimal.",
      "Make a denominator of 100 when that is helpful for percentages.",
      "Simplify fractions after converting from a percentage or decimal."
    ],
    examples: [
      { title: "Example 1", question: "Convert 7/20 to a percentage.", working: ["Make the denominator 100: 7/20 = 35/100.", "35/100 = 35%."] },
      { title: "Example 2", question: "Convert 0.75 to a fraction.", working: ["0.75 = 75/100.", "Simplify by dividing top and bottom by 25.", "75/100 = 3/4."] }
    ],
    practice: [
      { prompt: "Write 3/8 as a decimal.", accepted: ["0.375"], hint: "Use division: 3 ÷ 8.", reteach: "3 ÷ 8 = 0.375, so 3/8 = 0.375.", answerText: "3/8 = 0.375" },
      { prompt: "Write 45% as a decimal.", accepted: ["0.45"], hint: "Percent means out of 100.", reteach: "45% = 45/100 = 0.45.", answerText: "45% = 0.45" },
      { prompt: "Write 0.2 as a simplified fraction.", accepted: ["1/5", "2/10"], hint: "Write the decimal over 10 first.", reteach: "0.2 = 2/10, which simplifies to 1/5.", answerText: "0.2 = 1/5" },
      { prompt: "Write 11/20 as a percentage.", accepted: ["55", "55%"], hint: "Can you make the denominator 100?", reteach: "11/20 = 55/100, so 11/20 = 55%.", answerText: "11/20 = 55%" }
    ],
    quiz: [
      { prompt: "Write 0.875 as a simplified fraction.", accepted: ["7/8", "875/1000"], explanation: "0.875 = 875/1000 = 7/8" },
      { prompt: "Write 9/25 as a decimal.", accepted: ["0.36"], explanation: "9 ÷ 25 = 0.36" },
      { prompt: "Write 62% as a decimal.", accepted: ["0.62"], explanation: "62% = 62/100 = 0.62" },
      { prompt: "Write 0.35 as a percentage.", accepted: ["35", "35%"], explanation: "0.35 × 100 = 35%" },
      { prompt: "Write 125% as a simplified fraction.", accepted: ["5/4", "125/100"], explanation: "125% = 125/100 = 5/4" }
    ]
  },
  {
    id: 6,
    group: "Consolidate",
    topic: "Fractions",
    title: "Adding Fractions",
    shortDescription: "Add fractions with common denominators and simple different denominators.",
    supportLinks: [
      { label: "Corbettmaths: Adding Fractions (Same Denominators)", url: "https://corbettmathsprimary.com/2018/07/16/adding-fractions-1-video/" },
      { label: "Corbettmaths: Adding Fractions (Different Denominators)", url: "https://corbettmathsprimary.com/2018/07/16/adding-fractions-2-video/" }
    ],
    learnIntro: "Fractions can only be added directly when the denominators are the same. If they are different, first rename them using equivalent fractions.",
    keySteps: [
      "If the denominators match, add the numerators and keep the denominator.",
      "If the denominators are different, find a common denominator first.",
      "Simplify your final answer where possible."
    ],
    examples: [
      { title: "Example 1: Common denominators", question: "Calculate 2/7 + 3/7.", working: ["The denominators are the same.", "Add the numerators: 2 + 3 = 5.", "Answer: 5/7"] },
      { title: "Example 2: Different denominators", question: "Calculate 1/2 + 1/4.", working: ["Rename 1/2 as 2/4.", "Now add 2/4 + 1/4 = 3/4.", "Answer: 3/4"] }
    ],
    practice: [
      { prompt: "Calculate 1/6 + 4/6.", accepted: ["5/6"], hint: "The denominators already match.", reteach: "Add the numerators only: 1 + 4 = 5, so the answer is 5/6.", answerText: "1/6 + 4/6 = 5/6" },
      { prompt: "Calculate 3/10 + 2/10.", accepted: ["5/10", "1/2"], hint: "Add the numerators first, then simplify if needed.", reteach: "3 + 2 = 5, so 3/10 + 2/10 = 5/10, which simplifies to 1/2.", answerText: "3/10 + 2/10 = 1/2" },
      { prompt: "Calculate 1/3 + 1/6.", accepted: ["3/6", "1/2"], hint: "Use a common denominator of 6.", reteach: "1/3 = 2/6. Then 2/6 + 1/6 = 3/6 = 1/2.", answerText: "1/3 + 1/6 = 1/2" },
      { prompt: "Calculate 2/5 + 1/10.", accepted: ["5/10", "1/2"], hint: "Rename 2/5 using tenths.", reteach: "2/5 = 4/10. Then 4/10 + 1/10 = 5/10 = 1/2.", answerText: "2/5 + 1/10 = 1/2" }
    ],
    quiz: [
      { prompt: "Calculate 5/8 + 1/8.", accepted: ["6/8", "3/4"], explanation: "Same denominator, so add numerators. Simplified answer is 3/4." },
      { prompt: "Calculate 2/9 + 4/9.", accepted: ["6/9", "2/3"], explanation: "Add numerators and simplify." },
      { prompt: "Calculate 1/4 + 1/2.", accepted: ["3/4"], explanation: "Rename 1/2 as 2/4, then add." },
      { prompt: "Calculate 1/6 + 1/3.", accepted: ["3/6", "1/2"], explanation: "Rename 1/3 as 2/6, then add." },
      { prompt: "Calculate 3/5 + 1/10.", accepted: ["7/10"], explanation: "Rename 3/5 as 6/10, then add." }
    ]
  },
  {
    id: 7,
    group: "Consolidate",
    topic: "Fractions",
    title: "Mixed Numbers and Improper Fractions",
    shortDescription: "Convert between mixed numbers and improper fractions using multiplication and addition.",
    supportLinks: [{ label: "Corbettmaths: Mixed Numbers and Improper Fractions", url: "https://corbettmathsprimary.com/2018/07/21/mixed-numbers-video/" }],
    learnIntro: "A mixed number has a whole number and a fraction. An improper fraction has a numerator greater than or equal to the denominator. You can convert between them.",
    keySteps: [
      "To make an improper fraction, multiply the whole number by the denominator, then add the numerator.",
      "Keep the denominator the same.",
      "To make a mixed number, divide the numerator by the denominator."
    ],
    examples: [
      { title: "Example 1: Mixed to improper", question: "Convert 2 1/3 to an improper fraction.", working: ["2 wholes = 2 × 3 = 6 thirds.", "Add the extra 1 third: 6 + 1 = 7 thirds.", "Answer: 7/3"] },
      { title: "Example 2: Improper to mixed", question: "Convert 11/4 to a mixed number.", working: ["11 ÷ 4 = 2 remainder 3.", "So there are 2 whole groups and 3/4 left over.", "Answer: 2 3/4"] }
    ],
    practice: [
      { prompt: "Convert 1 2/5 to an improper fraction.", accepted: ["7/5"], hint: "Multiply the whole number by the denominator first.", reteach: "1 × 5 = 5, then 5 + 2 = 7, so the answer is 7/5.", answerText: "1 2/5 = 7/5" },
      { prompt: "Convert 3 1/4 to an improper fraction.", accepted: ["13/4"], hint: "How many quarters are in 3 wholes?", reteach: "3 wholes = 12 quarters. Add 1 more quarter to get 13/4.", answerText: "3 1/4 = 13/4" },
      { prompt: "Convert 9/2 to a mixed number.", accepted: ["4 1/2", "4½"], hint: "Divide 9 by 2.", reteach: "9 ÷ 2 = 4 remainder 1, so 9/2 = 4 1/2.", answerText: "9/2 = 4 1/2" },
      { prompt: "Convert 7/3 to a mixed number.", accepted: ["2 1/3"], hint: "How many complete groups of 3 fit into 7?", reteach: "7 ÷ 3 = 2 remainder 1, so 7/3 = 2 1/3.", answerText: "7/3 = 2 1/3" }
    ],
    quiz: [
      { prompt: "Convert 2 2/3 to an improper fraction.", accepted: ["8/3"], explanation: "2 × 3 = 6, then 6 + 2 = 8." },
      { prompt: "Convert 14/5 to a mixed number.", accepted: ["2 4/5"], explanation: "14 ÷ 5 = 2 remainder 4." },
      { prompt: "Convert 4 3/8 to an improper fraction.", accepted: ["35/8"], explanation: "4 × 8 = 32, then 32 + 3 = 35." },
      { prompt: "Convert 10/3 to a mixed number.", accepted: ["3 1/3"], explanation: "10 ÷ 3 = 3 remainder 1." },
      { prompt: "Convert 1 5/6 to an improper fraction.", accepted: ["11/6"], explanation: "1 × 6 = 6, then 6 + 5 = 11." }
    ]
  },
  {
    id: 8,
    group: "Consolidate",
    topic: "Decimals",
    title: "Adding and Subtracting Decimals",
    shortDescription: "Line up decimal points and calculate with tenths and hundredths.",
    supportLinks: [{ label: "Corbettmaths: Adding Decimals", url: "http://corbettmathsprimary.com/2018/07/15/adding-decimals-video/" }],
    learnIntro: "When adding or subtracting decimals, line up the decimal points so digits with the same place value stay in the same column.",
    keySteps: [
      "Write the numbers so the decimal points line up.",
      "Add or subtract each column carefully.",
      "Bring the decimal point straight down into the answer."
    ],
    examples: [
      { title: "Example 1: Addition", question: "Calculate 2.4 + 1.35.", working: ["Write 2.4 as 2.40.", "Add 2.40 + 1.35 = 3.75.", "Answer: 3.75"] },
      { title: "Example 2: Subtraction", question: "Calculate 5.6 - 2.2.", working: ["Line up the decimal points.", "Subtract 5.6 - 2.2 = 3.4.", "Answer: 3.4"] }
    ],
    practice: [
      { prompt: "Calculate 1.7 + 2.5.", accepted: ["4.2"], hint: "Line up the decimal points.", reteach: "7 tenths + 5 tenths = 12 tenths, so 1.7 + 2.5 = 4.2.", answerText: "1.7 + 2.5 = 4.2" },
      { prompt: "Calculate 3.8 - 1.4.", accepted: ["2.4"], hint: "Subtract the tenths carefully.", reteach: "3.8 - 1.4 = 2.4 when decimal points are lined up.", answerText: "3.8 - 1.4 = 2.4" },
      { prompt: "Calculate 2.35 + 0.4.", accepted: ["2.75"], hint: "You can write 0.4 as 0.40.", reteach: "2.35 + 0.40 = 2.75.", answerText: "2.35 + 0.4 = 2.75" },
      { prompt: "Calculate 6.2 - 0.75.", accepted: ["5.45"], hint: "Write 6.2 as 6.20 first.", reteach: "6.20 - 0.75 = 5.45.", answerText: "6.2 - 0.75 = 5.45" }
    ],
    quiz: [
      { prompt: "Calculate 4.6 + 1.3.", accepted: ["5.9"], explanation: "Line up decimal points and add." },
      { prompt: "Calculate 7.05 - 2.1.", accepted: ["4.95"], explanation: "Write 2.1 as 2.10, then subtract." },
      { prompt: "Calculate 3.25 + 0.75.", accepted: ["4", "4.0", "4.00"], explanation: "3.25 + 0.75 = 4.00" },
      { prompt: "Calculate 9.4 - 3.7.", accepted: ["5.7"], explanation: "Subtract carefully with aligned decimals." },
      { prompt: "Calculate 1.8 + 2.45.", accepted: ["4.25"], explanation: "Write 1.8 as 1.80, then add." }
    ]
  },
  {
    id: 9,
    group: "Extend",
    topic: "FDP Connections",
    title: "Converting Between Fractions, Decimals and Percentages - Level 3",
    shortDescription: "Apply FDP conversion skills in mixed and slightly more challenging situations.",
    supportLinks: [{ label: "Corbettmaths: Fractions, Decimals and Percentages", url: "https://corbettmathsprimary.com/2018/07/24/fractions-decimals-and-percentages-video/" }],
    learnIntro: "This mission brings the FDP ideas together. You may need to convert in more than one step, simplify answers, or compare forms before deciding on the best method.",
    keySteps: [
      "Choose the most efficient pathway: division, denominator of 100, or known benchmark values.",
      "Simplify fractions after converting.",
      "Check whether your final answer makes sense by estimating."
    ],
    examples: [
      { title: "Example 1", question: "Convert 3/8 to a percentage.", working: ["First convert 3/8 to a decimal: 3 ÷ 8 = 0.375.", "Now multiply by 100.", "0.375 = 37.5%"] },
      { title: "Example 2", question: "Convert 1.25 to a simplified fraction.", working: ["1.25 = 125/100.", "Simplify by dividing by 25.", "125/100 = 5/4."] }
    ],
    practice: [
      { prompt: "Write 3/8 as a percentage.", accepted: ["37.5", "37.5%"], hint: "A decimal step may help.", reteach: "3/8 = 0.375. Multiply by 100 to get 37.5%.", answerText: "3/8 = 37.5%" },
      { prompt: "Write 1.25 as a simplified fraction.", accepted: ["5/4", "125/100"], hint: "Write the decimal over 100 first.", reteach: "1.25 = 125/100 = 5/4.", answerText: "1.25 = 5/4" },
      { prompt: "Write 0.125 as a simplified fraction.", accepted: ["1/8", "125/1000"], hint: "0.125 means 125 thousandths.", reteach: "0.125 = 125/1000 = 1/8.", answerText: "0.125 = 1/8" },
      { prompt: "Write 7/8 as a decimal.", accepted: ["0.875"], hint: "Use division: 7 ÷ 8.", reteach: "7 ÷ 8 = 0.875.", answerText: "7/8 = 0.875" }
    ],
    quiz: [
      { prompt: "Write 62.5% as a decimal.", accepted: ["0.625"], explanation: "62.5% ÷ 100 = 0.625" },
      { prompt: "Write 0.375 as a simplified fraction.", accepted: ["3/8", "375/1000"], explanation: "0.375 = 375/1000 = 3/8" },
      { prompt: "Write 7/20 as a decimal.", accepted: ["0.35"], explanation: "7 ÷ 20 = 0.35" },
      { prompt: "Write 0.45 as a percentage.", accepted: ["45", "45%"], explanation: "0.45 × 100 = 45%" },
      { prompt: "Write 150% as a simplified fraction.", accepted: ["3/2", "150/100"], explanation: "150% = 150/100 = 3/2" }
    ]
  },
  {
    id: 10,
    group: "Extend",
    topic: "Fractions",
    title: "Multiplying and Dividing Fractions",
    shortDescription: "Multiply fractions and divide by multiplying by the reciprocal.",
    supportLinks: [
      { label: "Corbettmaths: Multiplying Fractions", url: "https://corbettmathsprimary.com/2018/07/18/multiplying-fractions-video/" },
      { label: "Corbettmaths: Dividing Fractions", url: "https://corbettmathsprimary.com/2018/07/24/dividing-fractions-video/" }
    ],
    learnIntro: "When multiplying fractions, multiply numerators and multiply denominators. When dividing by a fraction, keep the first fraction, change division to multiplication, and flip the second fraction.",
    keySteps: [
      "For multiplication: top × top and bottom × bottom.",
      "For division: keep, change, flip.",
      "Simplify your answer when possible."
    ],
    examples: [
      { title: "Example 1: Multiplying", question: "Calculate 2/3 × 3/4.", working: ["Multiply the numerators: 2 × 3 = 6.", "Multiply the denominators: 3 × 4 = 12.", "6/12 simplifies to 1/2."] },
      { title: "Example 2: Dividing", question: "Calculate 1/2 ÷ 1/4.", working: ["Keep 1/2.", "Change ÷ to ×.", "Flip 1/4 to 4/1.", "1/2 × 4/1 = 4/2 = 2."] }
    ],
    practice: [
      { prompt: "Calculate 1/2 × 3/5.", accepted: ["3/10"], hint: "Multiply the numerators, then the denominators.", reteach: "1 × 3 = 3 and 2 × 5 = 10, so the answer is 3/10.", answerText: "1/2 × 3/5 = 3/10" },
      { prompt: "Calculate 2/3 × 3/4.", accepted: ["6/12", "1/2"], hint: "Simplify at the end if needed.", reteach: "2 × 3 = 6 and 3 × 4 = 12, so 6/12 = 1/2.", answerText: "2/3 × 3/4 = 1/2" },
      { prompt: "Calculate 3/4 ÷ 1/2.", accepted: ["3/2", "1 1/2", "1.5"], hint: "Use keep, change, flip.", reteach: "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.", answerText: "3/4 ÷ 1/2 = 1 1/2" },
      { prompt: "Calculate 2/5 ÷ 1/10.", accepted: ["4"], hint: "Flip 1/10 to 10/1.", reteach: "2/5 × 10/1 = 20/5 = 4.", answerText: "2/5 ÷ 1/10 = 4" }
    ],
    quiz: [
      { prompt: "Calculate 3/4 × 2/3.", accepted: ["6/12", "1/2"], explanation: "Multiply and simplify." },
      { prompt: "Calculate 5/6 × 3/5.", accepted: ["15/30", "1/2"], explanation: "Multiply and simplify to 1/2." },
      { prompt: "Calculate 1/3 ÷ 1/6.", accepted: ["2"], explanation: "1/3 × 6/1 = 6/3 = 2." },
      { prompt: "Calculate 3/5 ÷ 1/5.", accepted: ["3"], explanation: "3/5 × 5/1 = 15/5 = 3." },
      { prompt: "Calculate 2/7 × 7/8.", accepted: ["14/56", "1/4"], explanation: "Multiply and simplify to 1/4." }
    ]
  },
  {
    id: 11,
    group: "Extend",
    topic: "Decimals",
    title: "Multiplying and Dividing Decimals",
    shortDescription: "Use place value to multiply and divide decimals by whole numbers and simple decimals.",
    supportLinks: [{ label: "Corbettmaths: Multiplying Decimals", url: "https://corbettmathsprimary.com/2018/07/20/multiplying-decimals-video/" }],
    learnIntro: "Multiplying and dividing decimals relies on place value. You can often think in terms of tenths and hundredths, or use known number facts and then place the decimal point carefully.",
    keySteps: [
      "Multiply the digits using number facts, then place the decimal point based on place value.",
      "When dividing by a whole number, share the decimal amount equally.",
      "Estimate first to check whether your answer is reasonable."
    ],
    examples: [
      { title: "Example 1: Multiplication", question: "Calculate 0.4 × 3.", working: ["4 tenths × 3 = 12 tenths.", "12 tenths = 1.2.", "Answer: 1.2"] },
      { title: "Example 2: Division", question: "Calculate 2.4 ÷ 3.", working: ["24 tenths ÷ 3 = 8 tenths.", "8 tenths = 0.8.", "Answer: 0.8"] }
    ],
    practice: [
      { prompt: "Calculate 0.6 × 4.", accepted: ["2.4"], hint: "6 tenths times 4 is 24 tenths.", reteach: "0.6 × 4 = 2.4 because 24 tenths = 2.4.", answerText: "0.6 × 4 = 2.4" },
      { prompt: "Calculate 1.5 × 2.", accepted: ["3"], hint: "One and a half doubled is three.", reteach: "1.5 × 2 = 3.", answerText: "1.5 × 2 = 3" },
      { prompt: "Calculate 3.6 ÷ 4.", accepted: ["0.9"], hint: "36 tenths shared into 4 groups.", reteach: "36 tenths ÷ 4 = 9 tenths, which is 0.9.", answerText: "3.6 ÷ 4 = 0.9" },
      { prompt: "Calculate 4.8 ÷ 6.", accepted: ["0.8"], hint: "48 tenths shared into 6 groups.", reteach: "48 tenths ÷ 6 = 8 tenths, so the answer is 0.8.", answerText: "4.8 ÷ 6 = 0.8" }
    ],
    quiz: [
      { prompt: "Calculate 0.7 × 5.", accepted: ["3.5"], explanation: "7 tenths × 5 = 35 tenths = 3.5." },
      { prompt: "Calculate 2.4 × 3.", accepted: ["7.2"], explanation: "24 tenths × 3 = 72 tenths = 7.2." },
      { prompt: "Calculate 5.6 ÷ 7.", accepted: ["0.8"], explanation: "56 tenths ÷ 7 = 8 tenths." },
      { prompt: "Calculate 3.2 ÷ 4.", accepted: ["0.8"], explanation: "32 tenths ÷ 4 = 8 tenths." },
      { prompt: "Calculate 1.25 × 4.", accepted: ["5"], explanation: "Four groups of 1.25 make 5." }
    ]
  },
  {
    id: 12,
    group: "Extend",
    topic: "Percentages",
    title: "Percentage of a Quantity",
    shortDescription: "Find percentages of amounts using known percentages and decimal methods.",
    supportLinks: [{ label: "Corbettmaths: Percentages of Amounts", url: "https://corbettmathsprimary.com/2018/07/18/percentages-of-amounts-video/" }],
    learnIntro: "To find a percentage of a quantity, you can use easy benchmark percentages such as 10%, 50%, 25% and 1%, or convert the percentage to a decimal and multiply.",
    keySteps: [
      "Start with percentages you know well such as 10%, 50% and 25%.",
      "Combine simple percentages when helpful, such as 15% = 10% + 5%.",
      "Check your answer by estimating whether it should be less than or greater than half the amount."
    ],
    examples: [
      { title: "Example 1", question: "Find 20% of 45.", working: ["10% of 45 is 4.5.", "20% is double 10%, so 4.5 × 2 = 9.", "Answer: 9"] },
      { title: "Example 2", question: "Find 15% of 60.", working: ["10% of 60 is 6.", "5% of 60 is half of 10%, so 3.", "6 + 3 = 9, so 15% of 60 = 9."] }
    ],
    practice: [
      { prompt: "Find 10% of 250.", accepted: ["25"], hint: "10% is one tenth.", reteach: "One tenth of 250 is 25, so 10% of 250 = 25.", answerText: "10% of 250 = 25" },
      { prompt: "Find 20% of 30.", accepted: ["6"], hint: "Find 10% first, then double it.", reteach: "10% of 30 is 3, so 20% is 6.", answerText: "20% of 30 = 6" },
      { prompt: "Find 5% of 80.", accepted: ["4"], hint: "5% is half of 10%.", reteach: "10% of 80 is 8, so 5% is half of 8, which is 4.", answerText: "5% of 80 = 4" },
      { prompt: "Find 15% of 40.", accepted: ["6"], hint: "Use 10% + 5%.", reteach: "10% of 40 is 4 and 5% of 40 is 2. Add them to get 6.", answerText: "15% of 40 = 6" }
    ],
    quiz: [
      { prompt: "Find 25% of 36.", accepted: ["9"], explanation: "25% means one quarter." },
      { prompt: "Find 30% of 50.", accepted: ["15"], explanation: "10% of 50 is 5, so 30% is 15." },
      { prompt: "Find 12.5% of 40.", accepted: ["5"], explanation: "12.5% is one eighth, and one eighth of 40 is 5." },
      { prompt: "Find 40% of 35.", accepted: ["14"], explanation: "10% of 35 is 3.5, so 40% is 14." },
      { prompt: "Find 60% of 25.", accepted: ["15"], explanation: "50% of 25 is 12.5 and 10% is 2.5, so total 15." }
    ]
  }
];
