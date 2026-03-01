export type StyleKey = 'secure' | 'anxious' | 'avoidant' | 'disorganized'

export interface Question {
  id: number
  text: string
  style: StyleKey
}

export const QUESTIONS: Question[] = [
  // Secure
  { id: 1,  text: "I feel comfortable turning to others for support when life gets hard.", style: 'secure' },
  { id: 2,  text: "When conflict shows up in a relationship, I trust that we can work through it together.", style: 'secure' },
  { id: 3,  text: "I feel worthy of love without having to earn it.", style: 'secure' },
  { id: 4,  text: "I can be close with someone while still feeling like myself.", style: 'secure' },
  { id: 5,  text: "I feel at ease depending on the people I love, and letting them depend on me.", style: 'secure' },

  // Anxious
  { id: 6,  text: "I often worry that the people I love will eventually leave me.", style: 'anxious' },
  { id: 7,  text: "I need reassurance from my partner to feel truly secure in the relationship.", style: 'anxious' },
  { id: 8,  text: "When my partner doesn't reply quickly, I find myself assuming something is wrong.", style: 'anxious' },
  { id: 9,  text: "I tend to think about my relationship a lot and find it hard to fully relax when things feel uncertain.", style: 'anxious' },
  { id: 10, text: "I sometimes feel that I care more about the relationship than my partner does.", style: 'anxious' },

  // Avoidant
  { id: 11, text: "I tend to feel uncomfortable when someone gets too emotionally close to me.", style: 'avoidant' },
  { id: 12, text: "When something is bothering me, I prefer to work through it on my own.", style: 'avoidant' },
  { id: 13, text: "Deep intimacy can sometimes feel overwhelming, even with people I genuinely care about.", style: 'avoidant' },
  { id: 14, text: "I value my independence and find that strong emotional needs in others can feel difficult to meet.", style: 'avoidant' },
  { id: 15, text: "When a relationship feels intense or demanding, my instinct is to create some distance.", style: 'avoidant' },

  // Disorganized
  { id: 16, text: "I sometimes deeply want closeness, then feel scared or overwhelmed once I get it.", style: 'disorganized' },
  { id: 17, text: "My relationships can feel confusing or chaotic, even when I am trying my best.", style: 'disorganized' },
  { id: 18, text: "I find it difficult to trust people, even those who have never given me a reason not to.", style: 'disorganized' },
  { id: 19, text: "I sometimes feel like my emotions around love are hard to predict, even for me.", style: 'disorganized' },
  { id: 20, text: "I have a push-pull experience with relationships: I crave them and fear them at the same time.", style: 'disorganized' },
]

export const SCALE_LABELS: Record<number, string> = {
  1: "Not like me at all",
  2: "Rarely like me",
  3: "Sometimes like me",
  4: "Often like me",
  5: "This is very much me",
}

export function calculateScores(answers: Record<number, number>): Record<StyleKey, number> {
  const scores: Record<StyleKey, number> = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 }
  for (const q of QUESTIONS) {
    scores[q.style] += (answers[q.id] ?? 0)
  }
  return scores
}

export function getPrimaryStyle(scores: Record<StyleKey, number>): StyleKey {
  return (Object.keys(scores) as StyleKey[]).reduce((a, b) => scores[a] >= scores[b] ? a : b)
}

export function getSecondaryStyle(scores: Record<StyleKey, number>): StyleKey {
  const sorted = (Object.keys(scores) as StyleKey[]).sort((a, b) => scores[b] - scores[a])
  return sorted[1]
}

export function getPercentages(scores: Record<StyleKey, number>): Record<StyleKey, number> {
  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  if (total === 0) return { secure: 25, anxious: 25, avoidant: 25, disorganized: 25 }
  return {
    secure:       Math.round((scores.secure / total) * 100),
    anxious:      Math.round((scores.anxious / total) * 100),
    avoidant:     Math.round((scores.avoidant / total) * 100),
    disorganized: Math.round((scores.disorganized / total) * 100),
  }
}
