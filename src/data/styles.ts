import type { StyleKey } from './quiz'

export interface StyleData {
  key: StyleKey
  name: string
  descriptor: string
  icon: string
  emoji: string
  color: string
  bgColor: string
  summary: string[]
  superpowers: string[]
  growthEdge: string
  needs: string[]
  noteToPartner: (name: string, partnerName: string) => string
}

export const STYLES: Record<StyleKey, StyleData> = {
  secure: {
    key: 'secure',
    name: 'Secure',
    descriptor: 'The Safe Harbor',
    icon: '🌿',
    emoji: '🌿',
    color: '#6A9370',
    bgColor: 'rgba(139,175,141,0.12)',
    summary: [
      "You carry a quiet confidence in love, {name}. You know at your core that you are worthy of connection, and that knowledge shapes the way you show up for the people around you. You tend to trust that relationships can hold conflict, distance, and difference without falling apart -- and that belief is a gift to everyone lucky enough to be close to you.",
      "Your security doesn't mean you never feel vulnerable or uncertain. It means that when those feelings arrive, you have the inner resources to move through them without being overtaken. You reach toward connection rather than away from it, and you offer others a steady place to land.",
      "This is a beautiful foundation to build from. And because no one is perfectly secure in every moment, you may still have edges to explore. That's not a flaw -- it's what makes growth so rich."
    ],
    superpowers: ['Emotional consistency', 'Clear communication', 'Trustworthiness', 'Healthy boundaries', 'Comfort with vulnerability', 'Conflict resolution'],
    growthEdge: "You might notice that you sometimes underestimate how frightening closeness feels for others, or grow frustrated when a partner can't meet you where you are. Your steadiness is a strength -- and your growth edge is developing deep compassion for the harder roads some people are walking. Patience with those who haven't yet found what feels natural to you is its own kind of love.",
    needs: [
      "A partner who is willing to grow alongside you",
      "Honest, open communication -- you thrive when words match feelings",
      "Space for genuine connection without pretense",
      "Reciprocity -- love that flows in both directions",
      "A relationship where both people feel safe enough to be fully themselves",
    ],
    noteToPartner: (name, partner) =>
      `${name} tends to bring steadiness and warmth to relationships, ${partner}. They are likely to reach toward you in moments of tension rather than pulling away -- and they genuinely want to work things through. The most meaningful thing you can offer them is honesty and reciprocity. When ${name} feels they are the only one showing up, or senses distance without explanation, it lands harder than it might appear. Show up consistently, communicate openly, and let them in. That is where they flourish.`
  },

  anxious: {
    key: 'anxious',
    name: 'Anxious',
    descriptor: 'The Deep Feeler',
    icon: '🌊',
    emoji: '🌊',
    color: '#7A5C9A',
    bgColor: 'rgba(184,169,201,0.15)',
    summary: [
      "You feel deeply, {name}. When you love someone, you love with your whole heart -- and that is one of the most beautiful and courageous things about you. Your capacity for emotional attunement means you often sense shifts in a relationship before they are spoken, and you care fiercely about the people you let in.",
      "Your style means you may sometimes feel a pull toward reassurance, or find yourself anxious when someone you love feels distant or quiet. This isn't a flaw. It is the echo of a time when closeness felt uncertain -- when love sometimes came with conditions, or disappeared without warning. Your nervous system learned to stay alert. That was wisdom then. And it can soften now.",
      "You are not too much. You are someone whose love runs deep, and you deserve a relationship that can hold that depth with care."
    ],
    superpowers: ['Profound empathy', 'Emotional depth and attunement', 'Fierce devotion', 'Ability to name feelings clearly', 'Strong intuition about others', 'Passionate engagement'],
    growthEdge: "You might notice that you sometimes interpret silence as rejection, or find yourself spiraling when a partner needs space. The stories your mind tells you in uncertain moments -- \"they don't care,\" \"something is wrong\" -- are old protection strategies, not present-day facts. Your growth edge is learning to pause before acting on those stories, and to build a sense of safety that lives inside you, not only in your partner's responses.",
    needs: [
      "Consistent, reliable reassurance -- a little goes a very long way",
      "Partners who reach out first after conflict to say \"I'm still here\"",
      "Clear communication rather than silence when your partner needs space",
      "Warmth and presence, especially during uncertain moments",
      "To be chosen, clearly and repeatedly",
      "A relationship where your emotional needs are met with patience, not irritation",
    ],
    noteToPartner: (name, partner) =>
      `${name} loves with enormous depth, ${partner}, and that depth can sometimes look like worry or urgency. When they reach out during uncertain moments, they are not trying to pressure you -- they are trying to feel safe. The most powerful thing you can do is reach back, even briefly. When you need space, say so gently and with a reassurance attached: "I need some time to think, but I am not going anywhere." Those last words change everything for ${name}. Small, consistent acts of connection -- a check-in text, a hand reached across the table -- mean more than grand gestures. You don't have to fix the anxiety. You just have to keep showing up.`
  },

  avoidant: {
    key: 'avoidant',
    name: 'Avoidant',
    descriptor: 'The Independent Spirit',
    icon: '🌬️',
    emoji: '🌬️',
    color: '#B05A5A',
    bgColor: 'rgba(212,165,165,0.15)',
    summary: [
      "You are someone who has learned to stand on your own two feet, {name}. You carry a quiet strength and a deeply developed sense of self -- and there is real beauty in that. You process the world internally, and you bring a thoughtfulness to everything you do.",
      "Your style means that closeness can sometimes feel like a kind of pressure rather than a comfort -- and your instinct may be to create space when intimacy intensifies. This isn't indifference. It is a protection strategy that made perfect sense at some point in your life, when self-reliance was the safest option available to you. You learned that needing people could lead to disappointment, so you became someone who needed less.",
      "Here is what is also true: you are capable of deep connection. It may look quieter than others', but it is no less real. And the distance you sometimes keep can shrink when you feel genuinely safe -- and when you choose to let it."
    ],
    superpowers: ['Remarkable self-reliance', 'Calm and steady under pressure', 'Thoughtfulness and depth', 'Healthy independence', 'Ability to regulate strong emotions', 'Clear, consistent identity'],
    growthEdge: "You might notice that you sometimes pull back when a relationship gets emotionally intense, or that you minimize your own needs to avoid the discomfort of depending on someone. You may feel irritated by emotional demands rather than curious about them. Your growth edge is learning to stay in the room -- emotionally -- a few moments longer than feels natural. Not because someone needs you to perform connection, but because you deserve the real thing too.",
    needs: [
      "Space to process without being followed or pressured",
      "Partners who do not interpret silence or solitude as rejection",
      "Consistency without clinginess",
      "Time -- intimacy that grows slowly and on your own terms",
      "Appreciation for how you show love through actions, not always words",
      "A relationship where you can recharge alone without it causing a crisis",
    ],
    noteToPartner: (name, partner) =>
      `${name} shows love in ways that may be quieter than words, ${partner}. When they choose to stay in the room, plan something thoughtful, or sit beside you in silence -- that is their love language. Give them space without punishing them for needing it. When they withdraw, resist the urge to chase immediately; give them a little room and then a gentle, low-pressure invitation back. And know this: what looks like distance is rarely indifference. ${name} is more connected to you than they may know how to express. Your patience and consistency are the soil in which that connection grows.`
  },

  disorganized: {
    key: 'disorganized',
    name: 'Disorganized',
    descriptor: 'The Brave Paradox',
    icon: '🌀',
    emoji: '🌀',
    color: '#9B7D30',
    bgColor: 'rgba(201,184,169,0.15)',
    summary: [
      "You carry a complexity that most people never fully understand, {name}, and there is something quietly remarkable about that. You want closeness -- deeply -- and at the same time, closeness can feel frightening. You may have learned early in life that the people meant to keep you safe were sometimes the source of pain, and so your nervous system holds a real contradiction: love is both what you most need and what can feel most threatening.",
      "This isn't a brokenness in you. It is an adaptation. One that took enormous courage to survive. And it can shift -- with awareness, with safety, and with the right support. Many people with your style go on to build profoundly loving, stable relationships once they understand what is happening inside them.",
      "You are not too complicated to be loved. You are a person learning to trust something that has not always been trustworthy. That is some of the bravest work a human being can do."
    ],
    superpowers: ['Remarkable resilience', 'Deep capacity for self-awareness', 'Courageous vulnerability when trust is built', 'Rich inner emotional life', 'Compassion for others in pain', 'Profound strength forged through difficulty'],
    growthEdge: "You might notice that your responses in relationships can feel unpredictable -- even to you. You may push someone away and then desperately want them back. You may struggle to believe love is safe even when someone is clearly showing up for you. Your growth edge is learning to recognize these patterns as old survival strategies, not present truths -- and finding a therapist or support system to help you do that work gently and at your own pace.",
    needs: [
      "Extraordinary consistency -- predictable safety built over time",
      "Partners who can be gentle when you flinch and stay when you push",
      "Explicit reassurance that conflict does not mean abandonment",
      "Patience with your non-linear process of building trust",
      "Space to name what is happening without shame",
      "A relationship where it is safe to need and safe to pull back when overwhelmed",
    ],
    noteToPartner: (name, partner) =>
      `Loving ${name} well, ${partner}, is one of the most meaningful things you can do -- and it asks something real of you. When ${name} pulls away or responds in ways that feel confusing, know that they are not trying to hurt you. They are protecting themselves from something that no longer applies. Your consistency is medicine. Stay steady. When they test your presence, show up anyway. When they apologize or seem confused by their own reactions, meet them with gentleness rather than frustration. This kind of love takes patience -- and it grows into something extraordinarily deep. You are safe to love ${name} at whatever pace feels right to both of you.`
  }
}
