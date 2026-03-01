import type { StyleKey } from './quiz'

export interface PairingData {
  key: string
  name: string
  tagline: string
  howYouConnect: string
  whereYouStruggle: string
  bridgeActions: { person: 'p1' | 'p2' | 'both'; text: string }[]
  compatibilityAreas: { label: string; score: number }[]
  dateIdeas: DateIdea[]
  safetyActionsP1: (name: string, style: StyleKey) => string[]
  safetyActionsP2: (name: string, style: StyleKey) => string[]
  sharedPractice: (name1: string, name2: string) => string
  repairPhrase: (name1: string, name2: string) => string
}

export interface DateIdea {
  emoji: string
  name: string
  desc: string
  why: string
  comfort: 'lowkey' | 'moderate' | 'adventure'
}

const PAIRINGS: Record<string, PairingData> = {
  'secure+secure': {
    key: 'secure+secure',
    name: 'The Foundation',
    tagline: 'Two people who know how to love -- building something that lasts.',
    howYouConnect: "This is one of the most nourishing combinations possible. You both bring a genuine willingness to show up, to communicate honestly, and to work through hard things together rather than around them. Conflict doesn't frighten either of you -- it's just a signal to pay attention. You make each other feel safe without working too hard at it, and that ease allows both of you to be fully yourselves. The relationship has room for laughter, depth, disagreement, repair, and growth all at once.",
    whereYouStruggle: "Even two secure people can drift into complacency. When life gets busy, you might stop nurturing the relationship with intention -- assuming everything is fine because nothing feels urgently broken. The invitation here is to keep choosing each other actively, not just by default. You may also occasionally have mismatched needs around timing or communication, since no two people are identically secure in every area.",
    bridgeActions: [
      { person: 'both', text: "Schedule regular intentional connection time -- not as a fix, but as a celebration of what you have built." },
      { person: 'both', text: "Use your shared communication ease to explore the deeper dreams, fears, and desires you haven't yet voiced." },
      { person: 'both', text: "Actively appreciate each other's steadiness out loud. Saying \"I feel safe with you\" is a gift, even when things are going well." },
    ],
    compatibilityAreas: [
      { label: 'Emotional safety', score: 95 },
      { label: 'Communication', score: 92 },
      { label: 'Conflict resolution', score: 90 },
      { label: 'Growth together', score: 88 },
    ],
    dateIdeas: [
      { emoji: '🍽️', name: 'Host a dinner party together', desc: 'Plan, cook, and host as a team. Divide tasks and celebrate each other\'s contributions.', why: 'Collaborative projects let you enjoy your natural teamwork and shared confidence.', comfort: 'moderate' },
      { emoji: '🌱', name: 'Volunteer side by side', desc: 'Choose a cause you both care about and spend a morning giving back.', why: 'Shared purpose deepens connection and shows each other what matters most.', comfort: 'moderate' },
      { emoji: '🗺️', name: 'Plan a shared vision board', desc: 'Set aside an evening to dream together -- where you want to travel, grow, and go as a couple.', why: 'Your comfort with vulnerability makes this kind of forward-looking intimacy genuinely fun.', comfort: 'lowkey' },
      { emoji: '🎓', name: 'Learn something new together', desc: 'Take a pottery class, cooking workshop, or language lesson as a pair.', why: 'Being beginners together keeps things fresh and lets you support each other outside your comfort zones.', comfort: 'adventure' },
      { emoji: '📚', name: 'Bookstore date with a twist', desc: 'Each of you picks a book for the other to read. Compare notes over coffee a week later.', why: 'Choosing for each other is an act of attunement -- and the conversations that follow are rich.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `Keep choosing ${name} actively and out loud -- don't let comfort become assumption.`,
      "Check in regularly about how the relationship feels, not just how life feels.",
      "Bring your full self to the relationship, including the messy or uncertain parts.",
    ],
    safetyActionsP2: (name) => [
      `Tell ${name} specifically what you love about being with them -- often.`,
      "Stay curious about who they are becoming, not just who they have been.",
      "Keep growing as an individual so you continue to bring a full, interesting self to the partnership.",
    ],
    sharedPractice: (n1, n2) => `Once a week, ${n1} and ${n2} take turns completing this sentence: "Something I've been thinking about us lately is..." No agenda, no fixing -- just listening.`,
    repairPhrase: (n1, n2) => `"${n1}, I want to understand what just happened for you. Can we slow down and try again?"`,
  },

  'secure+anxious': {
    key: 'secure+anxious',
    name: 'The Steady and the Seeker',
    tagline: 'One brings the harbor. The other teaches the beauty of the deep.',
    howYouConnect: "There is a natural gravitational pull in this pairing. The secure partner offers something the anxious partner has longed for -- a steadiness that doesn't waver under pressure. And the anxious partner brings something the secure partner may rarely experience: a love so attentive and attuned that every gesture is noticed and cherished. At its best, this relationship is profoundly nourishing for both people. The secure partner helps the anxious partner finally exhale. The anxious partner helps the secure partner feel truly seen.",
    whereYouStruggle: "The most common friction here happens when the anxious partner's need for reassurance begins to feel like an emotional weight the secure partner wasn't prepared to carry. And from the other side: when the secure partner seems unbothered by something the anxious partner is intensely worried about, it can feel like they don't care -- even though they do. The gap between \"you're fine\" and \"I need to hear that I'm fine from you\" is where this pairing most often loses its footing.",
    bridgeActions: [
      { person: 'p1', text: "When your partner reaches out during uncertain moments, try meeting them before reassuring them. Say 'I hear that you're worried' before 'everything is fine.'" },
      { person: 'p2', text: "Practice naming what you need before the anxiety peaks. 'I'm feeling a little wobbly today and a hug would help' is easier for your partner to respond to than a spiral." },
      { person: 'both', text: "Create a small ritual of daily check-ins -- even just five minutes -- so the anxious partner doesn't have to wait for reassurance and the secure partner doesn't feel overwhelmed by requests." },
    ],
    compatibilityAreas: [
      { label: 'Emotional depth', score: 88 },
      { label: 'Feeling seen', score: 85 },
      { label: 'Communication', score: 78 },
      { label: 'Managing distance', score: 70 },
    ],
    dateIdeas: [
      { emoji: '🃏', name: 'Deep conversation card game', desc: 'Use a conversation prompt deck and take turns answering honestly over tea or wine.', why: 'The anxious partner craves being known deeply; the secure partner thrives in honest exchange.', comfort: 'lowkey' },
      { emoji: '📵', name: 'Phone-free slow dinner', desc: 'Cook together or go to a quiet restaurant with no screens allowed.', why: 'Undivided presence is the most powerful reassurance there is.', comfort: 'moderate' },
      { emoji: '🌾', name: 'Farmers market morning', desc: 'Wander without a plan. Hold hands. Let the day be unhurried.', why: 'Low-stakes togetherness builds the secure foundation the anxious partner is learning to trust.', comfort: 'lowkey' },
      { emoji: '✍️', name: 'Couples journaling night', desc: 'Answer the same prompts separately, then share your answers out loud.', why: 'This gives the anxious partner beautiful windows into their partner\'s inner world.', comfort: 'lowkey' },
      { emoji: '🌅', name: 'Sunrise or sunset ritual', desc: 'Pick a beautiful spot and watch the light change together in comfortable quiet.', why: 'Peaceful presence communicates safety without requiring words.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `Reach out first after an argument, even just to say "I'm still here." For ${name}, that means everything.`,
      "When you need space, say so gently: 'I need a little time to think, but I'm not going anywhere.'",
      "Small, consistent check-ins matter more than grand gestures. A good morning text. A 'thinking of you' in the afternoon.",
      `Let ${name} know when something they do makes you feel loved. Specific appreciation is a deep comfort.`,
    ],
    safetyActionsP2: (name) => [
      `You don't always have to hold everything at once, ${name}. Share what you're carrying with your partner -- they genuinely want to know.`,
      "Notice when you're asking for reassurance from outside instead of building it from within. Both matter; aim for balance.",
      "When you feel the urge to interpret silence as rejection, pause and get curious instead: 'What do I actually know right now?'",
      `Try asking for what you need directly rather than hoping it will be guessed.`,
    ],
    sharedPractice: (n1, n2) => `Each evening, ${n1} and ${n2} share one thing they appreciated about each other that day. Keep it specific. Keep it real.`,
    repairPhrase: (n1, n2) => `"I'm not going anywhere. I just need a moment. Can we come back to this in [time]? I want to understand you."`,
  },

  'secure+avoidant': {
    key: 'secure+avoidant',
    name: 'The Open Door',
    tagline: 'Steady warmth meeting the courage to slowly step inside.',
    howYouConnect: "The secure partner in this pairing is often uniquely equipped to offer something the avoidant partner has rarely felt safe enough to accept: consistent, non-pressuring love. This relationship works beautifully when the secure partner understands that closeness for the avoidant partner is earned through patience, not urgency. The avoidant partner, in turn, brings a steadiness and self-possession that the secure partner finds genuinely attractive. When this pairing finds its rhythm, the avoidant partner slowly discovers that intimacy doesn't have to mean losing themselves.",
    whereYouStruggle: "The secure partner may eventually feel lonely when the avoidant partner consistently withdraws or struggles to access emotional language. And the avoidant partner may feel chronic, low-level pressure even when none is intended -- just sensing a partner's need for closeness can trigger the urge to pull back. The invitation for this pairing is to renegotiate what closeness looks like so it works for both, rather than defaulting to one person's comfort at the other's expense.",
    bridgeActions: [
      { person: 'p1', text: "Resist the urge to interpret your partner's need for space as a statement about your worth. It almost never is." },
      { person: 'p2', text: "When you withdraw, give your partner a soft landing: 'I need some alone time this evening, but I'm really glad you're here.'"},
      { person: 'both', text: "Negotiate the amount of togetherness and space you each need explicitly -- not through distance and pursuit, but through honest conversation before tension builds." },
    ],
    compatibilityAreas: [
      { label: 'Mutual respect', score: 86 },
      { label: 'Growth potential', score: 84 },
      { label: 'Emotional safety', score: 80 },
      { label: 'Closeness rhythm', score: 68 },
    ],
    dateIdeas: [
      { emoji: '🎬', name: 'Movie night, avoidant partner chooses', desc: 'Let the avoidant partner pick the film and the setting. Give them control of the comfort level.', why: 'Giving the avoidant partner agency reduces the pressure that triggers withdrawal.', comfort: 'lowkey' },
      { emoji: '🧭', name: 'A slow hike with no agenda', desc: 'Walk together in nature without a destination or time pressure.', why: 'Side-by-side activity allows connection without the intensity of direct eye contact.', comfort: 'moderate' },
      { emoji: '🍳', name: 'Cook a new recipe together', desc: 'Pick something neither of you has made before and work through it as a team.', why: 'Shared tasks give the avoidant partner a comfortable focus while building togetherness.', comfort: 'lowkey' },
      { emoji: '🌌', name: 'Stargazing night', desc: 'Bring a blanket, put the phones away, and look up together.', why: 'Wide open space and quiet presence can feel expansive rather than claustrophobic.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Art gallery or museum visit', desc: 'Wander separately and come together to share what caught your attention.', why: 'Parallel exploration followed by sharing bridges independence and intimacy beautifully.', comfort: 'moderate' },
    ],
    safetyActionsP1: (name) => [
      `You don't have to have all the words, ${name}. Showing up physically -- sitting nearby, a hand on the shoulder, making tea -- says "I'm here" without requiring emotional performance.`,
      "When you need space, claim it clearly and kindly before you disappear.",
      `Let your partner know what they can expect from you. Predictability is the soil trust grows in.`,
    ],
    safetyActionsP2: (name) => [
      `Trust ${name}'s consistency, even when part of you expects it to run out. They are showing you who they are.`,
      "When you feel the pull toward distance, name it: 'I'm feeling a little overstimulated. I'm going to take some space and I'll be back soon.'",
      "Practice one small act of emotional reach per day -- a text, a glance, a hand hold. These compound over time.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} choose one evening per week as a "no expectations" night -- they spend time together with no agenda, no emotional processing required. Just presence.`,
    repairPhrase: (n1, n2) => `"I'm not trying to push. I just want you to know I'm here, and there's no rush."`,
  },

  'secure+disorganized': {
    key: 'secure+disorganized',
    name: 'The Patient Garden',
    tagline: 'Steady love, given freely, in the soil where healing happens.',
    howYouConnect: "This pairing, at its best, can be genuinely transformative. The secure partner offers something that the disorganized partner may have never fully experienced: a love that stays even when they are hard to love, that isn't rattled by confusion, and that doesn't require them to perform stability they don't yet have. The disorganized partner, in turn, brings a depth of resilience and emotional complexity that can profoundly expand the secure partner's capacity for empathy and patience.",
    whereYouStruggle: "This is also one of the more challenging pairings, because the disorganized partner's fear of closeness and intimacy can make the secure partner feel like they're doing most of the work -- and it can be genuinely hard to stay warm when someone keeps pushing you away. The disorganized partner may also interpret the secure partner's steadiness as too good to be true, and unconsciously test it. Both people need strong support systems outside this relationship.",
    bridgeActions: [
      { person: 'p1', text: "Your steadiness is medicine. Keep offering it, and also protect your own wellbeing. You cannot pour from an empty cup." },
      { person: 'p2', text: "When you notice yourself pushing your partner away, try naming it out loud: 'I'm feeling scared right now and I'm not sure why.' That honesty is a bridge." },
      { person: 'both', text: "Consider couples therapy as a powerful tool -- not because something is broken, but because a skilled guide can help you build safety faster and more durably." },
    ],
    compatibilityAreas: [
      { label: 'Healing potential', score: 90 },
      { label: 'Depth of connection', score: 85 },
      { label: 'Patience required', score: 80 },
      { label: 'Day-to-day ease', score: 65 },
    ],
    dateIdeas: [
      { emoji: '🕯️', name: 'Quiet at-home evening', desc: 'Low sensory, no expectations -- cook together or order in, light candles, and let the evening be soft.', why: 'Predictable, gentle environments help the disorganized partner\'s nervous system settle.', comfort: 'lowkey' },
      { emoji: '🌿', name: 'Walk in a garden or park', desc: 'Nature has a regulating effect. Walk slowly and talk about whatever arises.', why: 'Movement and natural settings reduce the intensity of face-to-face emotional pressure.', comfort: 'lowkey' },
      { emoji: '🖼️', name: 'Visit a quiet museum', desc: 'Choose a small, uncrowded gallery or exhibit and wander at your own pace.', why: 'Low stimulation and shared curiosity create safe ground for gentle connection.', comfort: 'lowkey' },
      { emoji: '🎶', name: 'Share your music', desc: 'Take turns playing songs that mean something to you and saying a little about why.', why: 'Music is a non-threatening doorway into inner worlds, especially for those who struggle to find words.', comfort: 'lowkey' },
      { emoji: '🧩', name: 'Puzzle or board game night', desc: 'A low-stakes activity that keeps hands busy and pressure off.', why: 'Side-by-side focus reduces the intensity of sustained eye contact while building shared enjoyment.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `Be predictable, ${name}. Show up when you say you will. Follow through. This is more powerful than any grand gesture.`,
      "When they push you away, don't disappear -- but don't chase either. Stay calm and nearby.",
      "Celebrate every small moment of trust they extend to you. It took real courage.",
    ],
    safetyActionsP2: (name) => [
      `When you feel the push-pull happening, try to name it to ${name}: "I want to be close right now and I'm also scared. Please stay."`,
      "Working with a therapist individually alongside this relationship will make everything easier.",
      "Notice when your partner is being consistent and let yourself feel it -- really feel it -- rather than dismissing it.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} create a "safety signal" -- a word, gesture, or phrase that either of them can use to mean "I need things to slow down right now, and I'm still here."`,
    repairPhrase: (n1, n2) => `"I'm not leaving. Whatever just happened, we can come back to it gently. You are safe with me."`,
  },

  'anxious+anxious': {
    key: 'anxious+anxious',
    name: 'Two Deep Hearts',
    tagline: 'When two people who feel everything find each other.',
    howYouConnect: "The understanding between two anxiously attached people can be immediate and profound. You speak the same emotional language. You get the 3am worry, the need for reassurance, the way a small silence can feel enormous. There is an intimacy in being truly understood by someone who has walked a similar road, and this pairing often creates a relationship of extraordinary emotional depth and devotion.",
    whereYouStruggle: "When anxiety meets anxiety, the patterns can amplify rather than balance. One partner's worry can activate the other's, creating spirals that feed each other. Both partners may seek reassurance simultaneously, leaving no one to offer it. When one partner withdraws even slightly (perhaps just needing rest), the other may interpret it as confirmation of their deepest fears, triggering a cycle that's hard to break without awareness.",
    bridgeActions: [
      { person: 'both', text: "Learn to identify when you are co-regulating upward (making each other more anxious) and call a gentle pause." },
      { person: 'p1', text: "Practice being the one who self-soothes before reaching out -- even just for ten minutes. Build that muscle." },
      { person: 'p2', text: "When your partner is spiraling, sometimes the most loving thing is calm presence rather than more reassurance." },
      { person: 'both', text: "Individual therapy for both partners -- not couples work alone -- can be profoundly helpful here." },
    ],
    compatibilityAreas: [
      { label: 'Emotional understanding', score: 92 },
      { label: 'Devotion and loyalty', score: 90 },
      { label: 'Mutual attunement', score: 88 },
      { label: 'Emotional regulation', score: 60 },
    ],
    dateIdeas: [
      { emoji: '🧘', name: 'Gentle yoga or movement class', desc: 'Take a class together that focuses on breathwork or gentle movement.', why: 'Learning regulation tools together builds a shared toolkit for anxious moments.', comfort: 'moderate' },
      { emoji: '📖', name: 'Cozy reading afternoon', desc: 'Share the same cozy space while each reading your own book.', why: 'Parallel presence without pressure -- together without needing to perform togetherness.', comfort: 'lowkey' },
      { emoji: '🍦', name: 'Explore a new neighborhood', desc: 'Pick a part of your city you\'ve never wandered and spend an afternoon there.', why: 'Novel shared experiences create positive emotional memories that buffer anxious patterns.', comfort: 'moderate' },
      { emoji: '💌', name: 'Write each other letters', desc: 'Write a letter to your partner about what you love about them. Exchange and read aloud.', why: 'Both partners feel deeply seen, and the act of reading aloud anchors that love in the body.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Spend time near water', desc: 'A beach, a river, a lake -- let the sound and movement do some of the regulating.', why: 'Nature has a genuinely calming effect on sensitive nervous systems.', comfort: 'moderate' },
    ],
    safetyActionsP1: (name) => [
      `Before you reach out for reassurance, take three slow breaths and ask: what do I actually know right now?`,
      `Let ${name} know when you're having a hard moment -- but also share when you're doing well.`,
      "Practice saying: 'I'm feeling anxious about X, and I'm going to be okay. I just wanted you to know.'",
    ],
    safetyActionsP2: (name) => [
      `When ${name} is struggling, try offering calm presence before solving or reassuring.`,
      "Remember that you cannot be each other's only emotional support -- build a wider net together.",
      "Celebrate the moments you both choose regulation over reactivity. That is real growth.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} have a "steady phrase" they use when one of them is spinning: "We are okay right now. Right now, we are okay." Say it together, slowly.`,
    repairPhrase: (n1, n2) => `"We're both a little wobbly right now. Let's take five minutes and come back to this with softer eyes."`,
  },

  'anxious+avoidant': {
    key: 'anxious+avoidant',
    name: 'The Push-Pull Dance',
    tagline: 'The most common pairing -- and the one with the most to teach.',
    howYouConnect: "This is one of the most frequently occurring pairings, and for good reason. The anxious partner is drawn to the avoidant partner's calm confidence and self-containment -- someone who seems so sure of themselves feels like a safe place to land. The avoidant partner is often initially drawn to the anxious partner's warmth, attentiveness, and emotional openness -- someone who so clearly wants to be close can feel deeply appealing. The chemistry here is often electric, and the connection real.",
    whereYouStruggle: "This pairing can fall into a painful cycle: the anxious partner reaches for connection, the avoidant partner feels crowded and withdraws, the anxious partner reaches harder, the avoidant partner retreats further. Neither person is the villain. Both are doing exactly what their nervous system learned to do. Recognizing this cycle -- and naming it before it takes over -- is the most powerful thing this pairing can do.",
    bridgeActions: [
      { person: 'p1', text: "When you feel the pull to reach out urgently, pause. Ask yourself: what story am I telling? What do I actually know? Then reach out more gently -- 'I'm missing you' rather than 'why haven't you responded?'" },
      { person: 'p2', text: "When you feel the urge to withdraw, try giving your partner a soft landing before you go: 'I need some space tonight, I'll reach out tomorrow morning.' Those words prevent a spiral." },
      { person: 'both', text: "Name the pattern out loud, together, when you're both calm: 'I think we just did the dance again. Can we try that differently?'" },
    ],
    compatibilityAreas: [
      { label: 'Initial attraction', score: 90 },
      { label: 'Emotional depth', score: 82 },
      { label: 'Growth opportunity', score: 85 },
      { label: 'Day-to-day ease', score: 62 },
    ],
    dateIdeas: [
      { emoji: '🍳', name: 'Cook a new recipe together', desc: 'A shared task that keeps hands busy and pressure manageable.', why: 'The avoidant partner gets a comfortable focus; the anxious partner gets warm togetherness.', comfort: 'lowkey' },
      { emoji: '🥾', name: 'Hike with no destination', desc: 'Choose a trail and walk without a particular goal in mind.', why: 'Movement and open space reduce intensity. Side-by-side feels less pressured than face-to-face.', comfort: 'moderate' },
      { emoji: '🎥', name: 'Avoidant partner chooses the film', desc: 'Let the avoidant partner pick the movie, the setting, the snacks.', why: 'Giving the avoidant partner control and autonomy reduces the reflex to withdraw.', comfort: 'lowkey' },
      { emoji: '✏️', name: 'Creative night at home', desc: 'Draw, paint, write, build -- something creative, side by side, no rules.', why: 'Creative expression opens emotional doors that direct conversation sometimes closes.', comfort: 'lowkey' },
      { emoji: '🌠', name: 'Stargazing with a blanket', desc: 'Find a dark spot, bring something warm to drink, and look up.', why: 'Vast open space and quiet presence can feel expansive rather than overwhelming.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `When ${name} needs space, practice receiving it without catastrophizing. Space is not rejection.`,
      "Ask for what you need directly and gently: 'I'd love a quick check-in call tonight if you're up for it.'",
      "Build your own sources of comfort and regulation outside the relationship. This isn't giving up -- it's growing.",
    ],
    safetyActionsP2: (name) => [
      `Tell ${name} when you're stepping back, so they don't have to guess. "I need quiet tonight" is a kindness.`,
      "Notice the moments your partner is asking for connection, not control. Try meeting them there.",
      "Your small, consistent acts of presence mean more than you know. A short text. A check-in. A hand held.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} name the dance when it starts: "I think we're in the pattern right now." Just naming it together, without blame, is enough to interrupt it.`,
    repairPhrase: (n1, n2) => `"I need a little space right now, and I want you to know I'm coming back. I'm not disappearing."`,
  },

  'anxious+disorganized': {
    key: 'anxious+disorganized',
    name: 'The Tender Storm',
    tagline: 'Two hearts that have been through a lot, learning to weather it together.',
    howYouConnect: "There is a deep recognition between these two styles -- both understand what it feels like when love has been uncertain, when closeness has sometimes hurt, when the nervous system has learned to stay on alert. That shared history can create genuine compassion and fierce loyalty. When this pairing feels safe, it is a remarkably rich and tender connection.",
    whereYouStruggle: "The intensity of both styles together can create emotional weather that is hard for either person to navigate alone. The anxious partner may trigger the disorganized partner's fear of engulfment; the disorganized partner's push-pull behavior can activate the anxious partner's deepest fears of abandonment. Both patterns feeding each other requires conscious, ongoing attention and ideally outside support.",
    bridgeActions: [
      { person: 'p1', text: "When your partner goes cold or pushes back, try not to pursue immediately. Give them a beat, then a gentle, low-pressure signal: 'I'm here whenever you're ready.'" },
      { person: 'p2', text: "When you feel the urge to push away, try naming it before acting on it: 'I'm feeling overwhelmed and I think I need a short break. I'll be back.'" },
      { person: 'both', text: "Individual therapy for both partners is strongly encouraged alongside this relationship. The work you do separately shows up as gifts to each other." },
    ],
    compatibilityAreas: [
      { label: 'Emotional understanding', score: 85 },
      { label: 'Depth of feeling', score: 88 },
      { label: 'Growth together', score: 80 },
      { label: 'Stability day to day', score: 58 },
    ],
    dateIdeas: [
      { emoji: '🕯️', name: 'Quiet dinner at home', desc: 'A soft, unhurried evening in a familiar, safe space.', why: 'Predictability and calm environments support both styles\' need for felt safety.', comfort: 'lowkey' },
      { emoji: '🎶', name: 'Share your playlists', desc: 'Make playlists for each other and talk about the songs you chose and why.', why: 'Music communicates what\'s hard to say and builds intimacy with low emotional pressure.', comfort: 'lowkey' },
      { emoji: '🌿', name: 'Walk in nature', desc: 'A quiet, unhurried walk somewhere green and open.', why: 'Natural environments regulate both anxious and disorganized nervous systems gently.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Side-by-side art night', desc: 'Put on music, get out whatever creative materials you have, and make something.', why: 'No performance pressure. Just being together in something expressive.', comfort: 'lowkey' },
      { emoji: '📝', name: 'Write each other a letter', desc: 'Each of you writes what you wish the other knew about how you love.', why: 'Giving words space and time reduces the intensity that face-to-face conversations can carry.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `Practice self-soothing techniques so you don't need ${name} to regulate you in every difficult moment.`,
      "When you feel the pull toward urgency, ask yourself: is this the right moment for this conversation?",
      "Celebrate every time your partner comes back after distance. That is love in action.",
    ],
    safetyActionsP2: (name) => [
      `When you feel the push-pull, name it to ${name} gently. "I'm scared right now and that's making me act weirdly. I'm sorry."`,
      "Let yourself notice when ${name} is being consistent and reliable -- even for small things.",
      "Individual therapy is one of the most loving things you can do for this relationship.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} create a "soft landing" phrase they can both use: "I'm still here. I'm just feeling a lot right now." Either of them can say it, any time.`,
    repairPhrase: (n1, n2) => `"Things got a little intense. I want you to know I care about us. Can we try again, slower?"`,
  },

  'avoidant+avoidant': {
    key: 'avoidant+avoidant',
    name: 'Two Islands Building a Bridge',
    tagline: 'Independent souls, discovering what is possible when they lean in.',
    howYouConnect: "There is a wonderful ease in this pairing at the surface level. Two avoidantly attached people respect each other's space without question, feel no pressure to perform emotional availability they don't have, and are unlikely to experience the claustrophobia that can come with more intensely bonded partners. The relationship may begin with a refreshing sense of mutual independence.",
    whereYouStruggle: "The challenge for this pairing is often one of drift rather than collision. Both partners may feel deeply for each other while remaining behind emotional walls, and the relationship can gradually lose warmth and closeness without either person quite knowing why. Without repair rituals or active cultivation of intimacy, this pairing can become a comfortable parallel life rather than a true partnership.",
    bridgeActions: [
      { person: 'both', text: "Schedule emotional check-ins as intentionally as you'd schedule anything else. Neither of you will naturally initiate them -- build the structure anyway." },
      { person: 'p1', text: "Practice making one small emotional reach per week -- telling your partner something you appreciate about them, or sharing something you've been thinking about." },
      { person: 'p2', text: "Receive your partner's emotional reaches gracefully, even when they feel awkward. Acknowledge them. They took effort." },
    ],
    compatibilityAreas: [
      { label: 'Mutual respect', score: 90 },
      { label: 'Space and autonomy', score: 95 },
      { label: 'Shared calm', score: 85 },
      { label: 'Emotional closeness', score: 65 },
    ],
    dateIdeas: [
      { emoji: '📚', name: 'Parallel reading date', desc: 'Sit together in the same cozy space, each reading your own book, occasionally sharing passages.', why: 'Parallel presence -- together without pressure -- is the comfort zone for both of you, and it\'s genuinely lovely.', comfort: 'lowkey' },
      { emoji: '🗺️', name: 'Road trip with a shared playlist', desc: 'Drive somewhere neither of you has been before. Share the music. Let the road do the talking.', why: 'Forward motion and wide open space feel freeing. The side-by-side nature of driving reduces pressure.', comfort: 'adventure' },
      { emoji: '🏛️', name: 'Museum or gallery visit', desc: 'Explore separately and meet up to share what caught your eye.', why: 'Independent exploration followed by sharing models healthy interdependence beautifully.', comfort: 'moderate' },
      { emoji: '👨‍🍳', name: 'Friendly cooking competition', desc: 'Each of you makes a dish from the same ingredient. Judge each other\'s results.', why: 'Playfulness and gentle competition are safe emotional territory that can build connection.', comfort: 'lowkey' },
      { emoji: '🌱', name: 'Work on a shared project', desc: 'Start a garden, build furniture, learn a skill -- something with long-term, tangible results.', why: 'Building something together creates connection through shared investment rather than emotional performance.', comfort: 'moderate' },
    ],
    safetyActionsP1: (name) => [
      `Make the first move toward connection sometimes -- even something as small as a "thinking of you" message.`,
      `Tell ${name} what they mean to you, even if the words feel awkward. They need to hear it.`,
      "Let yourself be a little vulnerable. You don't have to become someone you're not -- just open the door a crack.",
    ],
    safetyActionsP2: (name) => [
      `When ${name} reaches toward you emotionally, receive it with warmth rather than deflection.`,
      "Practice saying what you appreciate about your partner out loud, not just in your head.",
      "Gently encourage shared rituals -- a weekly dinner, a morning walk -- that build the texture of closeness.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} try a "rose and thorn" share at the end of each week: one good thing and one hard thing from the week, said out loud. No fixing, just listening.`,
    repairPhrase: (n1, n2) => `"I think we've been a little distant lately. I miss you. Can we reconnect?"`,
  },

  'avoidant+disorganized': {
    key: 'avoidant+disorganized',
    name: 'The Quiet Wilderness',
    tagline: 'Two people learning that safety can be built, slowly and honestly.',
    howYouConnect: "These two styles can find a particular kind of peace together -- neither demands the emotional performance that other styles might, and both have a capacity for deep internal worlds. The disorganized partner may feel less pressure to be consistently "on," and the avoidant partner may find the disorganized partner's honesty about their inner complexity oddly refreshing.",
    whereYouStruggle: "The disorganized partner's unpredictable emotional swings can overwhelm the avoidant partner's tolerance for emotional intensity, causing them to shut down precisely when their partner needs someone to stay. And when the avoidant partner withdraws, the disorganized partner may experience it as confirmation of their deepest fears about love being unsafe. Both styles have strong self-protective impulses that can prevent the vulnerable conversations this relationship needs to thrive.",
    bridgeActions: [
      { person: 'p1', text: "When your partner's emotions feel too big, stay physically present even if you can't match the emotional intensity. Just being in the room matters enormously." },
      { person: 'p2', text: "When you feel the push-pull beginning, try to give your partner advance notice rather than an emotional ambush: 'I'm having a hard time today. I might need space and also connection. I'm not sure yet.'" },
      { person: 'both', text: "Both of you benefit enormously from individual therapeutic support. Growing separately here truly serves the relationship." },
    ],
    compatibilityAreas: [
      { label: 'Mutual understanding', score: 80 },
      { label: 'Shared independence', score: 82 },
      { label: 'Emotional availability', score: 62 },
      { label: 'Growth together', score: 78 },
    ],
    dateIdeas: [
      { emoji: '🌲', name: 'Walk in nature', desc: 'A slow, quiet walk somewhere with space and green.', why: 'Both styles regulate better in open, natural environments with no social pressure.', comfort: 'lowkey' },
      { emoji: '🧩', name: 'Puzzle or building project', desc: 'A low-stakes hands-on activity with a satisfying endpoint.', why: 'Shared focus on an object reduces the intensity of face-to-face connection while building teamwork.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Share your music and stories', desc: 'Take turns playing a song that matters and sharing a memory attached to it.', why: 'Music creates an emotionally safe bridge between two internal worlds.', comfort: 'lowkey' },
      { emoji: '🍵', name: 'Tea and quiet conversation', desc: 'A slow cup of tea and an unhurried talk about something neither of you usually discusses.', why: 'Low stimulation environments allow both styles to lower their guard naturally.', comfort: 'lowkey' },
      { emoji: '🖼️', name: 'Visit a small art space', desc: 'Choose a quiet, smaller gallery rather than a busy museum.', why: 'Beauty and quiet create a shared experience without requiring emotional performance.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `Stay in the room when ${name}'s emotions get big. Your physical presence is a form of love, even without words.`,
      "Let your partner know what they can expect from you. Predictability is deeply healing for them.",
      "Practice saying: 'I'm not sure what to say, but I'm here.'",
    ],
    safetyActionsP2: (name) => [
      `Warn ${name} before you're overwhelmed if you can: 'I feel something building and I might need space soon.'`,
      "Notice when your partner is trying to stay -- really notice it -- rather than dismissing it.",
      "Individual therapy is one of the most powerful things you can invest in for yourself and for this relationship.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} build a shared code: a word or signal that means "I need to slow down right now -- no urgency, no alarm." Using it keeps small moments from becoming big crises.`,
    repairPhrase: (n1, n2) => `"I got overwhelmed back there. I'm back now. Can we take it gently from here?"`,
  },

  'disorganized+disorganized': {
    key: 'disorganized+disorganized',
    name: 'The Brave Wilderness',
    tagline: 'Two survivors, choosing each other, learning what safe love feels like.',
    howYouConnect: "There is a recognition between two disorganized partners that can feel immediately profound -- a sense of finally being understood without having to explain. Both carry complexity, contradiction, and resilience in equal measure, and that shared depth can create moments of connection that feel unlike anything either person has experienced before.",
    whereYouStruggle: "This is also one of the most challenging pairings to navigate without outside support. When both partners are simultaneously fearing closeness and craving it, the relational weather can be intense and unpredictable. Conflict can escalate quickly. Trust, once broken in even small ways, can be hard to rebuild. Both partners need strong individual support structures for this relationship to find its footing.",
    bridgeActions: [
      { person: 'both', text: "Individual therapy for both partners is not optional here -- it is the foundation on which everything else is built." },
      { person: 'p1', text: "When you feel the push-pull, name it out loud rather than acting it out. 'I want to be close and I'm also terrified right now. I'm naming it instead of running.'" },
      { person: 'p2', text: "When your partner is in a difficult moment, resist the urge to match their intensity. One person staying even slightly calmer is enough to shift the dynamic." },
      { person: 'both', text: "Celebrate every moment of repair. Every time you come back to each other after difficulty is evidence that safety is being built, one brick at a time." },
    ],
    compatibilityAreas: [
      { label: 'Depth of understanding', score: 88 },
      { label: 'Resilience together', score: 82 },
      { label: 'Emotional intensity', score: 85 },
      { label: 'Day-to-day stability', score: 55 },
    ],
    dateIdeas: [
      { emoji: '🌿', name: 'Gentle nature time', desc: 'A quiet walk, a park bench, time somewhere green and unhurried.', why: 'Natural environments are grounding. They ask nothing of you.', comfort: 'lowkey' },
      { emoji: '🕯️', name: 'Simple evening at home', desc: 'Candles, music, a meal you made together, no agenda at all.', why: 'Familiar, predictable environments reduce the baseline arousal that can trigger old patterns.', comfort: 'lowkey' },
      { emoji: '🎭', name: 'Watch something deeply human', desc: 'A film or documentary about resilience, healing, or the complexity of being human.', why: 'Shared emotional resonance with characters is often safer than direct emotional conversation.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read the same book', desc: 'Choose a novel or memoir you\'ll both read, then talk about it chapter by chapter.', why: 'Processing big feelings through a story creates distance that makes them approachable.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Make something with your hands', desc: 'Draw, build, sculpt, garden -- any tactile creative activity.', why: 'Grounding in the body through making soothes the nervous system and creates shared pride.', comfort: 'lowkey' },
    ],
    safetyActionsP1: (name) => [
      `When you're in the push-pull, say it: "I'm in it right now. Please stay close, but gently."`,
      `Celebrate every time you and ${name} repair something. Those moments are building the safety you both need.`,
      "Getting individual support is one of the most loving things you can do for this relationship.",
    ],
    safetyActionsP2: (name) => [
      `Try to stay a few degrees calmer than your nervous system wants to when ${name} is struggling.`,
      "Your consistent returns -- after distance, after conflict -- are the most powerful thing you can offer.",
      "Therapy for yourself is not weakness. It is the work that makes this relationship possible.",
    ],
    sharedPractice: (n1, n2) => `${n1} and ${n2} agree on this: repair matters more than perfection. Any time one of them says "I came back" -- that counts. Every single time.`,
    repairPhrase: (n1, n2) => `"We're both in the hard place right now. Can we hold on for each other and try again tomorrow?"`,
  },
}

export function getPairingKey(s1: StyleKey, s2: StyleKey): string {
  const order: StyleKey[] = ['secure', 'anxious', 'avoidant', 'disorganized']
  const sorted = [s1, s2].sort((a, b) => order.indexOf(a) - order.indexOf(b))
  return sorted.join('+')
}

export function getPairing(s1: StyleKey, s2: StyleKey): PairingData {
  const key = getPairingKey(s1, s2)
  return PAIRINGS[key]
}
