import type { StyleKey } from './quiz'

export interface JournalPrompt {
  id: string
  category: 'self' | 'partner' | 'together' | 'repair'
  style?: StyleKey | 'all'
  prompt: string
  subtext?: string
}

export const JOURNAL_PROMPTS: JournalPrompt[] = [
  // Know Yourself
  { id: 'self-1', category: 'self', style: 'all', prompt: "When did you first learn that love could feel uncertain? What was happening, and how old were you?", subtext: "You don't have to share this with anyone. This is just for you." },
  { id: 'self-2', category: 'self', style: 'anxious', prompt: "Think of a moment when you felt truly, completely safe with someone. What were they doing? What did it feel like in your body?", subtext: "Describe it like a place you could visit again." },
  { id: 'self-3', category: 'self', style: 'avoidant', prompt: "Is there something you have wanted to say to someone you love but haven't found the words for? What would you say if you knew they could hear it without judgment?", subtext: "Let it be imperfect. First drafts are allowed." },
  { id: 'self-4', category: 'self', style: 'disorganized', prompt: "Think of a time love felt scary. What was happening? What did you need that you didn't know how to ask for?", subtext: "There is no right answer here. Just curiosity." },
  { id: 'self-5', category: 'self', style: 'secure', prompt: "What does security feel like to you? Where did you learn it? How do you want to pass it forward?", subtext: "Reflect on the gift you carry and how it arrived." },
  { id: 'self-6', category: 'self', style: 'all', prompt: "What is the bravest thing you have ever done in a relationship -- not dramatic, just genuinely brave?", subtext: "It might be smaller than you think." },
  { id: 'self-7', category: 'self', style: 'all', prompt: "What patterns do you notice yourself repeating in relationships? Without judgment -- just observation. What might they be protecting you from?", subtext: "Patterns are not flaws. They are adaptations that made sense once." },
  { id: 'self-8', category: 'self', style: 'all', prompt: "If your younger self could see how you love now, what would they think? What would you want them to know?", subtext: "A letter to yourself across time." },

  // Know Each Other
  { id: 'partner-1', category: 'partner', style: 'all', prompt: "What does safety feel like in your body? Describe it like a place you could visit.", subtext: "Answer this separately, then share your answers out loud to each other." },
  { id: 'partner-2', category: 'partner', style: 'all', prompt: "What is one thing your partner does that makes you feel deeply loved, that they might not even know they're doing?", subtext: "Share this with them. Watch what happens." },
  { id: 'partner-3', category: 'partner', style: 'all', prompt: "What is one thing you wish your partner understood about how you love?", subtext: "This one asks for honesty and gentleness in equal measure." },
  { id: 'partner-4', category: 'partner', style: 'all', prompt: "Describe a moment with your partner when you felt the most connected. What was happening? What made it feel that way?", subtext: "Notice the details. They tell you something important." },
  { id: 'partner-5', category: 'partner', style: 'all', prompt: "What fear do you carry into this relationship that belongs to a previous chapter of your life, not the one you're in now?", subtext: "Name it gently. You don't have to fix it -- just see it." },
  { id: 'partner-6', category: 'partner', style: 'all', prompt: "What would you most like your partner to understand about what you went through before them?", subtext: "Not to explain yourself. Just to let them know you." },

  // Grow Together
  { id: 'together-1', category: 'together', style: 'all', prompt: "Write a letter to your younger self about love. What would you tell them? What did you wish someone had said to you?", subtext: "There are no rules for this one. Let it be honest." },
  { id: 'together-2', category: 'together', style: 'all', prompt: "What I wish you knew about how I love: finish this sentence in at least five ways.", subtext: "Do this separately, then read each other's lists aloud." },
  { id: 'together-3', category: 'together', style: 'all', prompt: "When I am at my best in this relationship, I...", subtext: "Describe that version of yourself in detail. What does it feel like to be them?" },
  { id: 'together-4', category: 'together', style: 'all', prompt: "What do I want our relationship to feel like five years from now? What would need to be true for that to happen?", subtext: "Dream a little. Then notice where the realistic steps are." },
  { id: 'together-5', category: 'together', style: 'all', prompt: "What is something my partner has done in the last month that I haven't thanked them for?", subtext: "Then go thank them. It's that simple." },
  { id: 'together-6', category: 'together', style: 'all', prompt: "What does 'home' mean to you? Does this relationship feel like home? What would make it feel more like home?", subtext: "Take your time with this one." },

  // Repair & Reset
  { id: 'repair-1', category: 'repair', style: 'all', prompt: "What story did I tell myself during our last argument? Was it true? What might my partner's story have been?", subtext: "Try to hold both stories at once. Both can be real." },
  { id: 'repair-2', category: 'repair', style: 'all', prompt: "What do I do when I'm hurt that probably makes things harder rather than better? Where did I learn that?", subtext: "No judgment. Just honest seeing." },
  { id: 'repair-3', category: 'repair', style: 'all', prompt: "What does it feel like in my body when I am in conflict with my partner? Where does it live? What does it need?", subtext: "Getting to know this map changes everything." },
  { id: 'repair-4', category: 'repair', style: 'all', prompt: "Is there something I said or did that I haven't fully apologized for? What would a real, clean apology look like?", subtext: "No one is keeping score. This is just for you -- and then maybe for them." },
  { id: 'repair-5', category: 'repair', style: 'all', prompt: "After hard seasons, what has helped us find our way back? What does repair look like for us at our best?", subtext: "Name what works. Then do more of it on purpose." },
  { id: 'repair-6', category: 'repair', style: 'all', prompt: "What is one thing I could do differently in our next difficult moment that would make things better rather than worse?", subtext: "Write it down before the moment arrives. That's the work." },
]

export const CATEGORY_LABELS = {
  self: { label: 'Know Yourself', emoji: '🪞', color: 'var(--lavender)' },
  partner: { label: 'Know Each Other', emoji: '💛', color: 'var(--rose)' },
  together: { label: 'Grow Together', emoji: '🌱', color: 'var(--sage)' },
  repair: { label: 'Repair & Reset', emoji: '🕊️', color: 'var(--mauve)' },
}
