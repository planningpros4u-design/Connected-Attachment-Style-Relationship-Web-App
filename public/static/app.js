// ============================================================
// Connected — Attachment Style Guide for Two
// Main Application JavaScript
// ============================================================

// ---- Data ----

const QUESTIONS = [
  { id: 1,  text: "I feel comfortable turning to others for support when life gets hard.", style: 'secure' },
  { id: 2,  text: "When conflict shows up in a relationship, I trust that we can work through it together.", style: 'secure' },
  { id: 3,  text: "I feel worthy of love without having to earn it.", style: 'secure' },
  { id: 4,  text: "I can be close with someone while still feeling like myself.", style: 'secure' },
  { id: 5,  text: "I feel at ease depending on the people I love, and letting them depend on me.", style: 'secure' },
  { id: 6,  text: "I often worry that the people I love will eventually leave me.", style: 'anxious' },
  { id: 7,  text: "I need reassurance from my partner to feel truly secure in the relationship.", style: 'anxious' },
  { id: 8,  text: "When my partner doesn't reply quickly, I find myself assuming something is wrong.", style: 'anxious' },
  { id: 9,  text: "I tend to think about my relationship a lot and find it hard to fully relax when things feel uncertain.", style: 'anxious' },
  { id: 10, text: "I sometimes feel that I care more about the relationship than my partner does.", style: 'anxious' },
  { id: 11, text: "I tend to feel uncomfortable when someone gets too emotionally close to me.", style: 'avoidant' },
  { id: 12, text: "When something is bothering me, I prefer to work through it on my own.", style: 'avoidant' },
  { id: 13, text: "Deep intimacy can sometimes feel overwhelming, even with people I genuinely care about.", style: 'avoidant' },
  { id: 14, text: "I value my independence and find that strong emotional needs in others can feel difficult to meet.", style: 'avoidant' },
  { id: 15, text: "When a relationship feels intense or demanding, my instinct is to create some distance.", style: 'avoidant' },
  { id: 16, text: "I sometimes deeply want closeness, then feel scared or overwhelmed once I get it.", style: 'disorganized' },
  { id: 17, text: "My relationships can feel confusing or chaotic, even when I am trying my best.", style: 'disorganized' },
  { id: 18, text: "I find it difficult to trust people, even those who have never given me a reason not to.", style: 'disorganized' },
  { id: 19, text: "I sometimes feel like my emotions around love are hard to predict, even for me.", style: 'disorganized' },
  { id: 20, text: "I have a push-pull experience with relationships: I crave them and fear them at the same time.", style: 'disorganized' },
]

const SCALE_LABELS = {
  1: "Not like me at all",
  2: "Rarely like me",
  3: "Sometimes like me",
  4: "Often like me",
  5: "This is very much me",
}

const STYLES = {
  secure: {
    key: 'secure', name: 'Secure', descriptor: 'The Safe Harbor',
    icon: '🌿', color: '#6A9370', bgColor: 'rgba(139,175,141,0.12)',
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
    noteToPartner: (name, partner) => `${name} tends to bring steadiness and warmth to relationships, ${partner}. They are likely to reach toward you in moments of tension rather than pulling away -- and they genuinely want to work things through. The most meaningful thing you can offer them is honesty and reciprocity. When ${name} feels they are the only one showing up, or senses distance without explanation, it lands harder than it might appear. Show up consistently, communicate openly, and let them in. That is where they flourish.`
  },
  anxious: {
    key: 'anxious', name: 'Anxious', descriptor: 'The Deep Feeler',
    icon: '🌊', color: '#7A5C9A', bgColor: 'rgba(184,169,201,0.15)',
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
    noteToPartner: (name, partner) => `${name} loves with enormous depth, ${partner}, and that depth can sometimes look like worry or urgency. When they reach out during uncertain moments, they are not trying to pressure you -- they are trying to feel safe. The most powerful thing you can do is reach back, even briefly. When you need space, say so gently and with a reassurance attached: "I need some time to think, but I am not going anywhere." Those last words change everything for ${name}. Small, consistent acts of connection -- a check-in text, a hand reached across the table -- mean more than grand gestures. You don't have to fix the anxiety. You just have to keep showing up.`
  },
  avoidant: {
    key: 'avoidant', name: 'Avoidant', descriptor: 'The Independent Spirit',
    icon: '🌬️', color: '#B05A5A', bgColor: 'rgba(212,165,165,0.15)',
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
    noteToPartner: (name, partner) => `${name} shows love in ways that may be quieter than words, ${partner}. When they choose to stay in the room, plan something thoughtful, or sit beside you in silence -- that is their love language. Give them space without punishing them for needing it. When they withdraw, resist the urge to chase immediately; give them a little room and then a gentle, low-pressure invitation back. And know this: what looks like distance is rarely indifference. ${name} is more connected to you than they may know how to express. Your patience and consistency are the soil in which that connection grows.`
  },
  disorganized: {
    key: 'disorganized', name: 'Disorganized', descriptor: 'The Brave Paradox',
    icon: '🌀', color: '#9B7D30', bgColor: 'rgba(201,184,169,0.15)',
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
    noteToPartner: (name, partner) => `Loving ${name} well, ${partner}, is one of the most meaningful things you can do -- and it asks something real of you. When ${name} pulls away or responds in ways that feel confusing, know that they are not trying to hurt you. They are protecting themselves from something that no longer applies. Your consistency is medicine. Stay steady. When they test your presence, show up anyway. When they apologize or seem confused by their own reactions, meet them with gentleness rather than frustration. This kind of love takes patience -- and it grows into something extraordinarily deep. You are safe to love ${name} at whatever pace feels right to both of you.`
  }
}

const COLORS = [
  { name: 'lavender', value: '#B8A9C9', label: 'Lavender' },
  { name: 'sage',     value: '#8BAF8D', label: 'Sage' },
  { name: 'rose',     value: '#D4A5A5', label: 'Rose' },
  { name: 'mauve',    value: '#9B6B8A', label: 'Mauve' },
  { name: 'sky',      value: '#A9C4D4', label: 'Sky' },
  { name: 'gold',     value: '#C9A96E', label: 'Gold' },
]

const PAIRINGS = {
  'secure+secure': {
    name: 'The Foundation', tagline: 'Two people who know how to love -- building something that lasts.',
    howYouConnect: "This is one of the most nourishing combinations possible. You both bring a genuine willingness to show up, to communicate honestly, and to work through hard things together rather than around them. Conflict doesn't frighten either of you -- it's just a signal to pay attention. You make each other feel safe without working too hard at it, and that ease allows both of you to be fully yourselves. The relationship has room for laughter, depth, disagreement, repair, and growth all at once.",
    whereYouStruggle: "Even two secure people can drift into complacency. When life gets busy, you might stop nurturing the relationship with intention -- assuming everything is fine because nothing feels urgently broken. The invitation here is to keep choosing each other actively, not just by default. You may also occasionally have mismatched needs around timing or communication, since no two people are identically secure in every area.",
    bridgeActions: [
      "Schedule regular intentional connection time -- not as a fix, but as a celebration of what you have built.",
      "Use your shared communication ease to explore the deeper dreams, fears, and desires you haven't yet voiced.",
      "Actively appreciate each other's steadiness out loud. Saying 'I feel safe with you' is a gift, even when things are going well.",
    ],
    compat: [{ label: 'Emotional safety', score: 95 }, { label: 'Communication', score: 92 }, { label: 'Conflict resolution', score: 90 }, { label: 'Growth together', score: 88 }],
    repairPhrase: (n1) => `"${n1}, I want to understand what just happened for you. Can we slow down and try again?"`,
    sharedPractice: (n1, n2) => `Once a week, ${n1} and ${n2} take turns completing this sentence: "Something I've been thinking about us lately is..." No agenda, no fixing -- just listening.`,
    dates: [
      { emoji: '🍽️', name: 'Host a dinner party together', desc: "Plan, cook, and host as a team. Divide tasks and celebrate each other's contributions.", why: 'Collaborative projects let you enjoy your natural teamwork and shared confidence.', comfort: 'moderate' },
      { emoji: '🌱', name: 'Volunteer side by side', desc: 'Choose a cause you both care about and spend a morning giving back.', why: 'Shared purpose deepens connection and shows each other what matters most.', comfort: 'moderate' },
      { emoji: '🗺️', name: 'Create a relationship vision board', desc: "Set aside an evening to dream together -- where you want to travel, grow, and go as a couple.", why: 'Your comfort with vulnerability makes this kind of forward-looking intimacy genuinely fun.', comfort: 'lowkey' },
      { emoji: '🎓', name: 'Learn something new together', desc: 'Take a pottery class, cooking workshop, or language lesson as a pair.', why: 'Being beginners together keeps things fresh and lets you support each other.', comfort: 'adventure' },
      { emoji: '📚', name: 'Bookstore date with a twist', desc: "Each of you picks a book for the other. Compare notes over coffee a week later.", why: 'Choosing for each other is an act of attunement -- and the conversations that follow are rich.', comfort: 'lowkey' },
      { emoji: '🎭', name: 'Attend a live show', desc: 'A play, comedy show, musical, or local band -- something you experience together in real time.', why: 'Shared emotional responses to art create lasting relational memories.', comfort: 'moderate' },
      { emoji: '🌄', name: 'Plan a weekend trip', desc: 'Even a one-night stay somewhere new can reset the relationship and remind you why you chose each other.', why: 'New environments spark new conversations and reduce the rut of the familiar.', comfort: 'adventure' },
      { emoji: '🏃', name: 'Train for something together', desc: 'Sign up for a 5K, yoga challenge, or outdoor adventure course together.', why: 'Working toward a shared physical goal builds teamwork and mutual pride.', comfort: 'adventure' },
      { emoji: '🖼️', name: 'Take each other on a "perfect day"', desc: 'Each of you plans a full day for the other -- your perfect date, start to finish.', why: 'Nothing communicates "I know you" quite like a day designed entirely around their joy.', comfort: 'moderate' },
      { emoji: '💌', name: 'Write each other letters', desc: 'Old-fashioned letters, sealed and exchanged. Read them aloud over a quiet evening.', why: 'Putting love into writing creates something tangible and lasting you can return to.', comfort: 'lowkey' },
      { emoji: '🌌', name: 'Stargazing night', desc: 'Find a dark spot, bring blankets and something warm to drink, and look up together.', why: 'The vast and quiet of the night sky puts everyday worries in perspective.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Take an art class together', desc: 'Painting, ceramics, drawing -- choose something tactile and creative.', why: 'Making something with your hands together is grounding, playful, and surprisingly intimate.', comfort: 'moderate' },
      { emoji: '🧁', name: 'Bake something ambitious', desc: 'Pick a recipe that requires real effort -- croissants, a layered cake, homemade pasta.', why: 'Shared effort plus a delicious result is one of the simplest recipes for joy.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Day trip to water', desc: 'A lake, river, coast, or waterfall. Let the sound and movement do some of the work.', why: 'Water has a regulating effect on the nervous system -- great for all styles.', comfort: 'moderate' },
      { emoji: '🎲', name: 'Game night for two', desc: 'Strategy, trivia, or something cooperative -- games that let you play alongside each other.', why: 'Playfulness and gentle competition are their own form of intimacy.', comfort: 'lowkey' },
    ]
  },
  'secure+anxious': {
    name: 'The Steady and the Seeker', tagline: 'One brings the harbor. The other teaches the beauty of the deep.',
    howYouConnect: "There is a natural gravitational pull in this pairing. The secure partner offers something the anxious partner has longed for -- a steadiness that doesn't waver under pressure. And the anxious partner brings something the secure partner may rarely experience: a love so attentive and attuned that every gesture is noticed and cherished. At its best, this relationship is profoundly nourishing for both people. The secure partner helps the anxious partner finally exhale. The anxious partner helps the secure partner feel truly seen.",
    whereYouStruggle: "The most common friction here happens when the anxious partner's need for reassurance begins to feel like an emotional weight the secure partner wasn't prepared to carry. And from the other side: when the secure partner seems unbothered by something the anxious partner is intensely worried about, it can feel like they don't care -- even though they do. The gap between 'you're fine' and 'I need to hear that I'm fine from you' is where this pairing most often loses its footing.",
    bridgeActions: [
      "When your partner reaches out during uncertain moments, try meeting them before reassuring them. Say 'I hear that you're worried' before 'everything is fine.'",
      "Practice naming what you need before the anxiety peaks. 'I'm feeling a little wobbly today and a hug would help' is easier for your partner to respond to than a spiral.",
      "Create a small ritual of daily check-ins -- even just five minutes -- so reassurance doesn't have to be requested in moments of crisis.",
    ],
    compat: [{ label: 'Emotional depth', score: 88 }, { label: 'Feeling seen', score: 85 }, { label: 'Communication', score: 78 }, { label: 'Managing distance', score: 70 }],
    repairPhrase: () => `"I'm not going anywhere. I just need a moment. Can we come back to this in a little while? I want to understand you."`,
    sharedPractice: (n1, n2) => `Each evening, ${n1} and ${n2} share one thing they appreciated about each other that day. Keep it specific. Keep it real.`,
    dates: [
      { emoji: '🃏', name: 'Deep conversation card game', desc: 'Use conversation prompt cards over tea or wine.', why: 'The anxious partner craves being known deeply; the secure partner thrives in honest exchange.', comfort: 'lowkey' },
      { emoji: '📵', name: 'Phone-free slow dinner', desc: 'Cook together or go somewhere quiet with no screens allowed.', why: 'Undivided presence is the most powerful reassurance there is.', comfort: 'moderate' },
      { emoji: '🌾', name: 'Farmers market morning', desc: 'Wander without a plan. Hold hands. Let the day be unhurried.', why: 'Low-stakes togetherness builds the secure foundation the anxious partner is learning to trust.', comfort: 'lowkey' },
      { emoji: '✍️', name: 'Couples journaling night', desc: 'Answer the same prompts separately, then share your answers out loud.', why: "This gives the anxious partner beautiful windows into their partner's inner world.", comfort: 'lowkey' },
      { emoji: '🌅', name: 'Sunrise or sunset ritual', desc: 'Pick a beautiful spot and watch the light change together in comfortable quiet.', why: 'Peaceful presence communicates safety without requiring words.', comfort: 'lowkey' },
      { emoji: '💌', name: 'Exchange love letters', desc: 'Write letters about what you love about each other and read them aloud.', why: 'Written words give the anxious partner reassurance they can return to any time.', comfort: 'lowkey' },
      { emoji: '🧘', name: 'Gentle yoga or breathwork together', desc: 'A class or YouTube session at home, done side by side.', why: 'Regulated nervous systems make both partners more available to each other.', comfort: 'moderate' },
      { emoji: '🎬', name: 'Movie marathon with a theme', desc: "Each of you picks one film for a double-feature. Make snacks and get cozy.", why: 'Choosing a film for each other is a small, sweet act of knowing someone.', comfort: 'lowkey' },
      { emoji: '🌿', name: 'Plant or tend a garden together', desc: 'Start something that grows over time -- seeds, herbs, a houseplant collection.', why: 'Tending something living together is a beautiful metaphor for the relationship itself.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Make each other a playlist', desc: 'Songs that remind you of each other. Play them on a drive or a quiet evening.', why: 'Music is a love language. Sharing it says "I think about you."', comfort: 'lowkey' },
      { emoji: '🍦', name: 'Wander a new neighborhood', desc: "Pick a part of your city you've never explored and spend an afternoon there.", why: 'New shared experiences become shared memories.', comfort: 'moderate' },
      { emoji: '📖', name: 'Read the same book together', desc: "Choose a novel or memoir. Read a chapter a week and discuss over tea.", why: 'Talking about fictional characters often unlocks conversations about real feelings.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Day trip to somewhere beautiful', desc: 'A waterfall, scenic overlook, botanical garden, or coast.', why: "Beauty creates emotional openness. It's hard to feel anxious when you're genuinely awestruck.", comfort: 'moderate' },
      { emoji: '🎨', name: 'Take a creative class together', desc: 'Painting, ceramics, flower arranging -- something tactile and playful.', why: 'Making something together while laughing at your attempts builds genuine warmth.', comfort: 'moderate' },
      { emoji: '🕯️', name: 'At-home spa night', desc: 'Candles, music, face masks, whatever feels indulgent to you both.', why: 'Physical comfort and care in a relaxed setting deepens the felt sense of safety.', comfort: 'lowkey' },
    ]
  },
  'secure+avoidant': {
    name: 'The Open Door', tagline: 'Steady warmth meeting the courage to slowly step inside.',
    howYouConnect: "The secure partner in this pairing is often uniquely equipped to offer something the avoidant partner has rarely felt safe enough to accept: consistent, non-pressuring love. This relationship works beautifully when the secure partner understands that closeness for the avoidant partner is earned through patience, not urgency. The avoidant partner, in turn, brings a steadiness and self-possession that the secure partner finds genuinely attractive. When this pairing finds its rhythm, the avoidant partner slowly discovers that intimacy doesn't have to mean losing themselves.",
    whereYouStruggle: "The secure partner may eventually feel lonely when the avoidant partner consistently withdraws or struggles to access emotional language. And the avoidant partner may feel chronic, low-level pressure even when none is intended -- just sensing a partner's need for closeness can trigger the urge to pull back. The invitation for this pairing is to renegotiate what closeness looks like so it works for both people.",
    bridgeActions: [
      "Resist the urge to interpret your partner's need for space as a statement about your worth. It almost never is.",
      "When you withdraw, give your partner a soft landing: 'I need some alone time this evening, but I'm really glad you're here.'",
      "Negotiate the amount of togetherness and space you each need explicitly -- through honest conversation before tension builds.",
    ],
    compat: [{ label: 'Mutual respect', score: 86 }, { label: 'Growth potential', score: 84 }, { label: 'Emotional safety', score: 80 }, { label: 'Closeness rhythm', score: 68 }],
    repairPhrase: () => `"I'm not trying to push. I just want you to know I'm here, and there's no rush."`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} choose one evening per week as a "no expectations" night -- together with no agenda, no emotional processing required. Just presence.`,
    dates: [
      { emoji: '🎬', name: 'Movie night -- avoidant partner chooses', desc: 'Let the avoidant partner pick the film and the setting.', why: 'Giving the avoidant partner agency reduces the pressure that triggers withdrawal.', comfort: 'lowkey' },
      { emoji: '🧭', name: 'Slow hike with no agenda', desc: 'Walk together in nature without a destination or time pressure.', why: 'Side-by-side activity allows connection without the intensity of direct eye contact.', comfort: 'moderate' },
      { emoji: '🍳', name: 'Cook a new recipe together', desc: "Pick something neither of you has made before and work through it as a team.", why: 'Shared tasks give the avoidant partner a comfortable focus while building togetherness.', comfort: 'lowkey' },
      { emoji: '🌌', name: 'Stargazing night', desc: 'Bring a blanket, put the phones away, and look up together.', why: 'Wide open space and quiet presence can feel expansive rather than claustrophobic.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Art gallery or museum visit', desc: 'Wander separately and come together to share what caught your attention.', why: 'Parallel exploration followed by sharing bridges independence and intimacy beautifully.', comfort: 'moderate' },
      { emoji: '🎵', name: 'Attend a live music event', desc: 'A concert, jazz club, or local band night -- something to experience together without needing to talk throughout.', why: 'Shared experiences that require no emotional performance are a gateway to closeness.', comfort: 'moderate' },
      { emoji: '🏕️', name: 'Camping or glamping trip', desc: 'A night or two in nature, away from the usual routine.', why: 'Shared adventure with natural pacing builds connection organically over time.', comfort: 'adventure' },
      { emoji: '🗺️', name: 'Road trip without a plan', desc: "Pick a direction and drive. Stop when something looks interesting.", why: 'The open-ended nature removes pressure; forward motion and freedom suit the avoidant partner.', comfort: 'adventure' },
      { emoji: '📚', name: 'Parallel reading date', desc: 'Same cozy space, each reading your own book, sharing passages occasionally.', why: 'Being together without performing closeness is genuinely lovely for this pairing.', comfort: 'lowkey' },
      { emoji: '🏊', name: 'Swimming or water activity', desc: 'A pool, lake, or beach. Movement in water is naturally regulating.', why: 'Physical activity reduces anxiety for the secure partner and pressure for the avoidant.', comfort: 'moderate' },
      { emoji: '🎲', name: 'Strategy or board game night', desc: 'Chess, Scrabble, Catan -- something that engages the mind.', why: 'Games give both partners a comfortable shared focus.', comfort: 'lowkey' },
      { emoji: '🌄', name: 'Sunrise hike or nature walk', desc: 'Early morning, quiet, somewhere beautiful and open.', why: 'Starting the day together with nature creates connection without emotional demand.', comfort: 'moderate' },
      { emoji: '🍜', name: 'Explore a new cuisine', desc: 'Find a restaurant serving food neither of you has tried and go with open minds.', why: 'Novel shared experiences create new positive memories together.', comfort: 'moderate' },
      { emoji: '🏋️', name: 'Workout or movement class together', desc: 'A gym session, dance class, or outdoor fitness activity.', why: 'Physical activity together builds endorphins and a sense of teamwork.', comfort: 'adventure' },
      { emoji: '🌃', name: 'City night walk', desc: 'Walk your city at night -- find the lit-up bridges, quiet neighborhoods, late-night spots.', why: 'Movement and exploration feel natural for the avoidant partner; the beauty is naturally romantic.', comfort: 'moderate' },
    ]
  },
  'secure+disorganized': {
    name: 'The Patient Garden', tagline: 'Steady love, given freely, in the soil where healing happens.',
    howYouConnect: "This pairing, at its best, can be genuinely transformative. The secure partner offers something that the disorganized partner may have never fully experienced: a love that stays even when they are hard to love, that isn't rattled by confusion, and that doesn't require them to perform stability they don't yet have. The disorganized partner, in turn, brings a depth of resilience and emotional complexity that can profoundly expand the secure partner's capacity for empathy and patience.",
    whereYouStruggle: "This is also one of the more challenging pairings, because the disorganized partner's fear of closeness and intimacy can make the secure partner feel like they're doing most of the work -- and it can be genuinely hard to stay warm when someone keeps pushing you away. The disorganized partner may also interpret the secure partner's steadiness as too good to be true, and unconsciously test it. Both people need strong support systems outside this relationship.",
    bridgeActions: [
      "Your steadiness is medicine. Keep offering it, and also protect your own wellbeing. You cannot pour from an empty cup.",
      "When you notice yourself pushing your partner away, try naming it out loud: 'I'm feeling scared right now and I'm not sure why.' That honesty is a bridge.",
      "Consider couples therapy as a powerful tool -- not because something is broken, but because a skilled guide can help you build safety faster and more durably.",
    ],
    compat: [{ label: 'Healing potential', score: 90 }, { label: 'Depth of connection', score: 85 }, { label: 'Patience required', score: 80 }, { label: 'Day-to-day ease', score: 65 }],
    repairPhrase: () => `"I'm not leaving. Whatever just happened, we can come back to it gently. You are safe with me."`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} create a "safety signal" -- a word, gesture, or phrase that either of them can use to mean "I need things to slow down right now, and I'm still here."`,
    dates: [
      { emoji: '🕯️', name: 'Quiet at-home evening', desc: 'Low sensory, no expectations -- cook together or order in, light candles, and let the evening be soft.', why: "Predictable, gentle environments help the disorganized partner's nervous system settle.", comfort: 'lowkey' },
      { emoji: '🌿', name: 'Walk in a garden or park', desc: 'Walk slowly and talk about whatever arises.', why: 'Movement and natural settings reduce the intensity of face-to-face emotional pressure.', comfort: 'lowkey' },
      { emoji: '🖼️', name: 'Visit a quiet gallery', desc: 'Choose a small, uncrowded space and wander at your own pace.', why: 'Low stimulation and shared curiosity create safe ground for gentle connection.', comfort: 'lowkey' },
      { emoji: '🎶', name: 'Share your music', desc: 'Take turns playing songs that mean something to you and saying a little about why.', why: "Music is a non-threatening doorway into inner worlds, especially when words feel hard.", comfort: 'lowkey' },
      { emoji: '🧩', name: 'Puzzle or board game night', desc: 'A low-stakes activity that keeps hands busy and pressure off.', why: 'Side-by-side focus reduces the intensity of sustained emotional pressure while building shared enjoyment.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read to each other', desc: "Take turns reading a chapter or a poem aloud. No agenda, just voices and words.", why: 'Being read to is deeply soothing and builds intimacy at a gentle pace.', comfort: 'lowkey' },
      { emoji: '🌅', name: 'Watch the sunrise or sunset', desc: 'Choose a beautiful spot and be there for the light.', why: 'Natural beauty creates awe, which opens the nervous system to connection.', comfort: 'lowkey' },
      { emoji: '🍵', name: 'Tea ceremony at home', desc: 'Brew something good, sit face to face, and just be present.', why: 'Ritual and slowness create safety. The act of caring for each other through small things matters.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Creative night -- no pressure', desc: 'Draw, paint, collage, write. Put on music and make whatever wants to come out.', why: 'Expressive activity is processing. Doing it together builds a quiet, powerful intimacy.', comfort: 'lowkey' },
      { emoji: '🌾', name: 'Farmers market morning', desc: 'Wander at your own pace. No agenda. Let the day unfold.', why: 'Gentle sensory environments with no emotional demands are restorative for the disorganized nervous system.', comfort: 'lowkey' },
      { emoji: '💌', name: 'Write each other honest letters', desc: 'Unsent or sent -- write what you want the other person to know about how you love.', why: 'Writing creates distance from the raw emotion, making it easier to reach across.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Sit near water together', desc: 'A beach, a lake, a river. Let the sound do the work.', why: 'Moving water is one of the most reliable nervous-system regulators in nature.', comfort: 'lowkey' },
      { emoji: '🧁', name: 'Bake something together', desc: 'Simple bread, cookies, a cake -- something that uses your hands and has a satisfying result.', why: "Tactile activity grounds the body. And you get to eat what you made together, which is its own kind of joy.", comfort: 'lowkey' },
      { emoji: '🐾', name: "Visit animals", desc: "A petting zoo, animal shelter visit, dog park -- wherever there are creatures who offer uncomplicated warmth.", why: "Animals offer non-judgmental presence. For the disorganized partner, this environment often feels genuinely safe.", comfort: 'lowkey' },
      { emoji: '🎭', name: 'Watch something moving together', desc: "A film or documentary that says something true about being human. Let yourself feel it.", why: 'Processing big emotions through art together builds emotional vocabulary and shared empathy.', comfort: 'lowkey' },
    ]
  },
  'anxious+anxious': {
    name: 'Two Deep Hearts', tagline: 'When two people who feel everything find each other.',
    howYouConnect: "The understanding between two anxiously attached people can be immediate and profound. You speak the same emotional language. You get the 3am worry, the need for reassurance, the way a small silence can feel enormous. There is an intimacy in being truly understood by someone who has walked a similar road, and this pairing often creates a relationship of extraordinary emotional depth and devotion.",
    whereYouStruggle: "When anxiety meets anxiety, the patterns can amplify rather than balance. One partner's worry can activate the other's, creating spirals that feed each other. Both partners may seek reassurance simultaneously, leaving no one to offer it. When one partner withdraws even slightly, the other may interpret it as confirmation of their deepest fears, triggering a cycle that's hard to break without awareness.",
    bridgeActions: [
      "Learn to identify when you are making each other more anxious and call a gentle pause.",
      "Practice self-soothing before reaching out -- even just for ten minutes. Build that muscle together.",
      "When your partner is spiraling, sometimes the most loving thing is calm presence rather than more reassurance.",
    ],
    compat: [{ label: 'Emotional understanding', score: 92 }, { label: 'Devotion and loyalty', score: 90 }, { label: 'Mutual attunement', score: 88 }, { label: 'Emotional regulation', score: 60 }],
    repairPhrase: () => `"We're both a little wobbly right now. Let's take five minutes and come back to this with softer eyes."`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} have a "steady phrase" they use when one of them is spinning: "We are okay right now. Right now, we are okay." Say it together, slowly.`,
    dates: [
      { emoji: '🧘', name: 'Gentle yoga or breathwork class', desc: 'Take a class together that focuses on breathwork or gentle movement.', why: 'Learning regulation tools together builds a shared toolkit for anxious moments.', comfort: 'moderate' },
      { emoji: '📖', name: 'Cozy reading afternoon', desc: 'Share the same cozy space while each reading your own book.', why: 'Parallel presence without pressure -- together without needing to perform togetherness.', comfort: 'lowkey' },
      { emoji: '🍦', name: 'Explore a new neighborhood', desc: "Pick a part of your city you've never wandered and spend an afternoon there.", why: 'Novel shared experiences create positive emotional memories that buffer anxious patterns.', comfort: 'moderate' },
      { emoji: '💌', name: 'Write each other letters', desc: 'Write a letter about what you love about your partner. Exchange and read aloud.', why: 'Both partners feel deeply seen, and reading aloud anchors that love in the body.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Spend time near water', desc: 'A beach, a river, a lake -- let the sound and movement do some of the regulating.', why: 'Nature has a genuinely calming effect on sensitive nervous systems.', comfort: 'moderate' },
      { emoji: '🎨', name: 'Take an art or craft class', desc: 'Painting, ceramics, flower arranging -- something with your hands.', why: 'Creative work grounds anxious energy and gives you something to talk about besides the relationship.', comfort: 'moderate' },
      { emoji: '🎵', name: 'Attend live music', desc: 'A concert, open mic, or jazz night. Let the music hold the emotion for a while.', why: 'Shared emotional experience through music is deeply bonding for two deep feelers.', comfort: 'moderate' },
      { emoji: '🌄', name: 'Sunrise hike or walk', desc: 'Early morning, beautiful light, somewhere with a view.', why: 'Starting the day together with intention creates a sense of ritual and safety.', comfort: 'moderate' },
      { emoji: '🕯️', name: 'At-home spa evening', desc: 'Candles, music, face masks, warm water. Tend to each other gently.', why: 'Physical care and comfort in a soft environment builds felt safety in the body.', comfort: 'lowkey' },
      { emoji: '🍳', name: 'Cook a meaningful meal together', desc: "A family recipe, a dish from your culture, something that means something.", why: 'Food made with care is love. For two deep feelers, this lands deeply.', comfort: 'lowkey' },
      { emoji: '📸', name: 'Take photos together', desc: 'Go somewhere beautiful and document it. Not for social media -- just for you.', why: 'Creating shared archives builds a sense of "us" that the anxious partner finds deeply reassuring.', comfort: 'moderate' },
      { emoji: '🎭', name: 'See something emotionally moving', desc: 'A powerful film, a play, a documentary. Let yourselves feel it together.', why: 'Two deep feelers processing emotion side by side creates profound connection.', comfort: 'moderate' },
      { emoji: '✍️', name: 'Journal together with prompts', desc: "Use prompts from this app or your own. Write separately, then share.", why: 'Structured sharing reduces the fear of saying the wrong thing.', comfort: 'lowkey' },
      { emoji: '🌿', name: 'Tend something living together', desc: 'Plant a garden, repot plants, grow herbs on a windowsill.', why: 'Caring for something that grows is a gentle metaphor for caring for each other.', comfort: 'lowkey' },
      { emoji: '🎲', name: 'Play a cooperative game', desc: 'A game where you work together against the board, not against each other.', why: 'Teamwork without competition reinforces the "us against the problem" dynamic that helps anxious partners relax.', comfort: 'lowkey' },
    ]
  },
  'anxious+avoidant': {
    name: 'The Push-Pull Dance', tagline: 'The most common pairing -- and the one with the most to teach.',
    howYouConnect: "This is one of the most frequently occurring pairings, and for good reason. The anxious partner is drawn to the avoidant partner's calm confidence and self-containment -- someone who seems so sure of themselves feels like a safe place to land. The avoidant partner is often initially drawn to the anxious partner's warmth, attentiveness, and emotional openness -- someone who so clearly wants to be close can feel deeply appealing. The chemistry here is often electric, and the connection real.",
    whereYouStruggle: "This pairing can fall into a painful cycle: the anxious partner reaches for connection, the avoidant partner feels crowded and withdraws, the anxious partner reaches harder, the avoidant partner retreats further. Neither person is the villain. Both are doing exactly what their nervous system learned to do. Recognizing this cycle -- and naming it before it takes over -- is the most powerful thing this pairing can do.",
    bridgeActions: [
      "When you feel the pull to reach out urgently, pause. Ask yourself: what do I actually know right now? Then reach out more gently -- 'I'm missing you' rather than 'why haven't you responded?'",
      "When you feel the urge to withdraw, give your partner a soft landing before you go: 'I need some space tonight, I'll reach out tomorrow morning.' Those words prevent a spiral.",
      "Name the pattern out loud together, when you're both calm: 'I think we just did the dance again. Can we try that differently?'",
    ],
    compat: [{ label: 'Initial attraction', score: 90 }, { label: 'Emotional depth', score: 82 }, { label: 'Growth opportunity', score: 85 }, { label: 'Day-to-day ease', score: 62 }],
    repairPhrase: () => `"I need a little space right now, and I want you to know I'm coming back. I'm not disappearing."`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} name the dance when it starts: "I think we're in the pattern right now." Just naming it together, without blame, is enough to interrupt it.`,
    dates: [
      { emoji: '🍳', name: 'Cook a new recipe together', desc: 'A shared task that keeps hands busy and pressure manageable.', why: 'The avoidant partner gets a comfortable focus; the anxious partner gets warm togetherness.', comfort: 'lowkey' },
      { emoji: '🥾', name: 'Hike with no destination', desc: 'Choose a trail and walk without a particular goal in mind.', why: 'Movement and open space reduce intensity. Side-by-side feels less pressured than face-to-face.', comfort: 'moderate' },
      { emoji: '🎥', name: 'Movie night -- avoidant partner chooses', desc: 'Let the avoidant partner pick the movie, the setting, the snacks.', why: 'Giving the avoidant partner control and autonomy reduces the reflex to withdraw.', comfort: 'lowkey' },
      { emoji: '✏️', name: 'Creative night at home', desc: 'Draw, paint, write, build -- something creative, side by side, no rules.', why: 'Creative expression opens emotional doors that direct conversation sometimes closes.', comfort: 'lowkey' },
      { emoji: '🌠', name: 'Stargazing with a blanket', desc: 'Find a dark spot, bring something warm to drink, and look up.', why: 'Vast open space and quiet presence can feel expansive rather than overwhelming.', comfort: 'lowkey' },
      { emoji: '🏕️', name: 'Camping or a night away', desc: 'One night somewhere in nature. Simple food, no agenda, real conversation by firelight.', why: 'Nature removes digital distractions and creates spaciousness -- good for both styles.', comfort: 'adventure' },
      { emoji: '🎵', name: 'Make playlists for each other', desc: "Songs that remind you of each other. Exchange and listen separately, then discuss.", why: 'Music is a safe bridge. The anxious partner gets a window in; the avoidant partner shares without pressure.', comfort: 'lowkey' },
      { emoji: '🍜', name: 'Explore a new restaurant', desc: 'Somewhere neither of you has been. Make it an adventure.', why: 'New environments with something to observe and talk about take the pressure off the relationship itself.', comfort: 'moderate' },
      { emoji: '🌄', name: 'Road trip with a destination the avoidant partner chooses', desc: 'Let the avoidant partner pick where you go and when.', why: 'Autonomy and control are the conditions under which the avoidant partner relaxes.', comfort: 'adventure' },
      { emoji: '📖', name: 'Read the same book', desc: 'Same book, read independently, discussed over coffee.', why: 'Processing feelings through characters creates safer distance for the avoidant partner.', comfort: 'lowkey' },
      { emoji: '🏊', name: 'Go swimming or to a spa', desc: "Water-based activity or a spa day together.", why: 'Physical relaxation reduces avoidant defenses and anxious hypervigilance simultaneously.', comfort: 'moderate' },
      { emoji: '🎲', name: 'Play a competitive game', desc: 'Something playful and low-stakes where you compete or cooperate.', why: 'Playfulness is an attachment behavior that both styles can access without emotional demand.', comfort: 'lowkey' },
      { emoji: '🐾', name: 'Volunteer with animals', desc: 'Spend a morning at an animal shelter or rescue.', why: 'Animals offer unconditional warmth. Working side by side in service is connecting for this pairing.', comfort: 'moderate' },
      { emoji: '🎨', name: 'Take a pottery or art class', desc: "Something hands-on and tactile -- great for getting out of your heads.", why: "For the avoidant partner, hands-on tasks create safety. For the anxious partner, it's joyful shared time.", comfort: 'moderate' },
      { emoji: '🌿', name: 'Garden or outdoor project together', desc: 'Plant something, build a raised bed, maintain a shared outdoor space.', why: 'Working toward a tangible shared outcome builds security for both styles.', comfort: 'lowkey' },
    ]
  },
  'anxious+disorganized': {
    name: 'The Tender Storm', tagline: 'Two hearts that have been through a lot, learning to weather it together.',
    howYouConnect: "There is a deep recognition between these two styles -- both understand what it feels like when love has been uncertain, when closeness has sometimes hurt, when the nervous system has learned to stay on alert. That shared history can create genuine compassion and fierce loyalty. When this pairing feels safe, it is a remarkably rich and tender connection.",
    whereYouStruggle: "The intensity of both styles together can create emotional weather that is hard for either person to navigate alone. The anxious partner may trigger the disorganized partner's fear of engulfment; the disorganized partner's push-pull behavior can activate the anxious partner's deepest fears of abandonment. Both patterns feeding each other requires conscious, ongoing attention and ideally outside support.",
    bridgeActions: [
      "When your partner goes cold or pushes back, try not to pursue immediately. Give them a beat, then a gentle, low-pressure signal: 'I'm here whenever you're ready.'",
      "When you feel the urge to push away, try naming it before acting on it: 'I'm feeling overwhelmed and I think I need a short break. I'll be back.'",
      "Individual therapy for both partners is strongly encouraged alongside this relationship. The work you do separately shows up as gifts to each other.",
    ],
    compat: [{ label: 'Emotional understanding', score: 85 }, { label: 'Depth of feeling', score: 88 }, { label: 'Growth together', score: 80 }, { label: 'Stability day to day', score: 58 }],
    repairPhrase: () => `"Things got a little intense. I want you to know I care about us. Can we try again, slower?"`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} have a "soft landing" phrase they can both use: "I'm still here. I'm just feeling a lot right now." Either of them can say it, any time.`,
    dates: [
      { emoji: '🕯️', name: 'Quiet dinner at home', desc: 'A soft, unhurried evening in a familiar, safe space.', why: "Predictability and calm environments support both styles' need for felt safety.", comfort: 'lowkey' },
      { emoji: '🎶', name: 'Share your playlists', desc: 'Make playlists for each other and talk about the songs you chose and why.', why: "Music communicates what's hard to say and builds intimacy with low emotional pressure.", comfort: 'lowkey' },
      { emoji: '🌿', name: 'Walk in nature', desc: 'A quiet, unhurried walk somewhere green and open.', why: 'Natural environments regulate both anxious and disorganized nervous systems gently.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Side-by-side art night', desc: 'Put on music, get out whatever creative materials you have, and make something.', why: 'No performance pressure. Just being together in something expressive.', comfort: 'lowkey' },
      { emoji: '📝', name: 'Write each other a letter', desc: 'Each of you writes what you wish the other knew about how you love.', why: 'Giving words space and time reduces the intensity that face-to-face conversations can carry.', comfort: 'lowkey' },
      { emoji: '🧩', name: 'Work on a puzzle together', desc: "A beautiful, complex puzzle over several evenings.", why: 'Shared focus on an object removes the pressure of sustained emotional exposure.', comfort: 'lowkey' },
      { emoji: '🌅', name: 'Watch the sun rise or set', desc: 'Somewhere beautiful. Just be there together.', why: 'Awe is a regulating emotion. Beauty opens the nervous system gently.', comfort: 'lowkey' },
      { emoji: '🎬', name: 'Watch a deeply human film', desc: "Something emotionally rich -- a film that says something true about people.", why: 'Processing big feelings through characters is safer than direct emotional conversation for both styles.', comfort: 'lowkey' },
      { emoji: '🍵', name: 'Tea and unhurried conversation', desc: "Make something warm and just... talk. No agenda.", why: 'Low stimulation, no pressure, a familiar ritual. This is where trust is built between these two styles.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Spend time near water', desc: "A beach, river, or lake. Let the sound do some of the regulating.", why: 'Both the anxious and disorganized nervous system responds well to moving water.', comfort: 'lowkey' },
      { emoji: '🐾', name: "Visit animals", desc: "An animal shelter, petting zoo, dog park, or farm.", why: 'Animals offer non-judgmental warmth that neither style has to earn.', comfort: 'lowkey' },
      { emoji: '🧘', name: 'Breathwork or gentle movement', desc: 'A guided breathing exercise or gentle yoga video at home.', why: 'Both styles benefit from nervous-system regulation tools. Learning them together is powerful.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read to each other', desc: "Take turns reading aloud from a book you both love.", why: 'Being read to is soothing. Sharing something meaningful communicates care without demand.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Attend a live performance', desc: 'A small venue, local band, open mic, or acoustic show.', why: 'Live music creates a shared emotional experience in a contained, public space -- which can feel safer.', comfort: 'moderate' },
      { emoji: '🌿', name: 'Plant or tend something living', desc: 'Seeds, herbs, a small garden, houseplants. Something that grows over time.', why: 'Nurturing something together is a metaphor for what you are doing for each other.', comfort: 'lowkey' },
    ]
  },
  'avoidant+avoidant': {
    name: 'Two Islands Building a Bridge', tagline: 'Independent souls, discovering what is possible when they lean in.',
    howYouConnect: "There is a wonderful ease in this pairing at the surface level. Two avoidantly attached people respect each other's space without question, feel no pressure to perform emotional availability they don't have, and are unlikely to experience the claustrophobia that can come with more intensely bonded partners. The relationship may begin with a refreshing sense of mutual independence.",
    whereYouStruggle: "The challenge for this pairing is often one of drift rather than collision. Both partners may feel deeply for each other while remaining behind emotional walls, and the relationship can gradually lose warmth and closeness without either person quite knowing why. Without repair rituals or active cultivation of intimacy, this pairing can become a comfortable parallel life rather than a true partnership.",
    bridgeActions: [
      "Schedule emotional check-ins as intentionally as you'd schedule anything else. Neither of you will naturally initiate them -- build the structure anyway.",
      "Practice making one small emotional reach per week -- telling your partner something you appreciate about them, or sharing something you've been thinking about.",
      "Receive your partner's emotional reaches gracefully, even when they feel awkward. Acknowledge them. They took effort.",
    ],
    compat: [{ label: 'Mutual respect', score: 90 }, { label: 'Space and autonomy', score: 95 }, { label: 'Shared calm', score: 85 }, { label: 'Emotional closeness', score: 65 }],
    repairPhrase: (n1) => `"I think we've been a little distant lately. I miss you. Can we reconnect?"`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} try a "rose and thorn" share at the end of each week: one good thing and one hard thing from the week, said out loud. No fixing, just listening.`,
    dates: [
      { emoji: '📚', name: 'Parallel reading date', desc: 'Sit together in the same cozy space, each reading your own book, occasionally sharing passages.', why: "Parallel presence is the comfort zone for both of you, and it's genuinely lovely.", comfort: 'lowkey' },
      { emoji: '🗺️', name: 'Road trip with a shared playlist', desc: "Drive somewhere neither of you has been before. Share the music. Let the road do the talking.", why: 'Forward motion and wide open space feel freeing. The side-by-side nature of driving reduces pressure.', comfort: 'adventure' },
      { emoji: '🏛️', name: 'Museum or gallery visit', desc: 'Explore separately and meet up to share what caught your eye.', why: 'Independent exploration followed by sharing models healthy interdependence beautifully.', comfort: 'moderate' },
      { emoji: '👨‍🍳', name: 'Friendly cooking competition', desc: "Each of you makes a dish from the same ingredient. Judge each other's results.", why: 'Playfulness and gentle competition are safe emotional territory that can build connection.', comfort: 'lowkey' },
      { emoji: '🌱', name: 'Work on a shared project', desc: 'Start a garden, build something, learn a skill -- something with long-term, tangible results.', why: 'Building something together creates connection through shared investment.', comfort: 'moderate' },
      { emoji: '🧩', name: 'Multi-session puzzle or model', desc: 'A complex puzzle or model you return to over several evenings.', why: 'Low-pressure, parallel work with a shared goal and a satisfying endpoint.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Attend a music event separately, debrief together', desc: 'Go to a show you both like, sit together, talk about it over dinner after.', why: 'Separate experience, shared debrief -- honors independence while building connection.', comfort: 'moderate' },
      { emoji: '🏕️', name: 'Camping or outdoor overnight', desc: "A night in nature with minimal devices and maximum sky.", why: 'Both avoidants tend to find peace outdoors. Shared practical tasks create natural teamwork.', comfort: 'adventure' },
      { emoji: '🎲', name: 'Strategy or puzzle games', desc: 'Chess, Scrabble, Catan, a crossword -- something that engages independent thought together.', why: 'Games give both people a comfortable focus and remove the demand for emotional performance.', comfort: 'lowkey' },
      { emoji: '🌄', name: 'Sunrise hike or early walk', desc: 'Something active, early, and beautiful.', why: 'Avoidants often come alive in nature with movement. An early start means no crowds.', comfort: 'moderate' },
      { emoji: '🖼️', name: 'Design something for your space', desc: "Rearrange a room, choose art together, build furniture -- make your space more yours.", why: 'Building a shared environment is a tangible act of commitment that avoidants can get behind.', comfort: 'lowkey' },
      { emoji: '🍜', name: 'Explore a new cuisine', desc: 'A restaurant serving food neither of you has tried.', why: 'New environments with something to focus on together create connection without pressure.', comfort: 'moderate' },
      { emoji: '🎬', name: 'Watch a documentary together', desc: "Something fascinating -- nature, history, science, culture. Let your curiosity lead.", why: 'Shared intellectual interest is a love language for many avoidants.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read the same book, discuss it', desc: 'Choose a novel or non-fiction and compare notes over coffee.', why: 'Structured conversation removes the discomfort of open-ended emotional sharing.', comfort: 'lowkey' },
      { emoji: '🌃', name: 'Late-night city walk', desc: 'Walk together after dark. Find the city at its quietest.', why: 'The openness and quiet of a city at night suits independent spirits who breathe better with space.', comfort: 'moderate' },
    ]
  },
  'avoidant+disorganized': {
    name: 'The Quiet Wilderness', tagline: 'Two people learning that safety can be built, slowly and honestly.',
    howYouConnect: "These two styles can find a particular kind of peace together -- neither demands the emotional performance that other styles might, and both have a capacity for deep internal worlds. The disorganized partner may feel less pressure to be consistently 'on,' and the avoidant partner may find the disorganized partner's honesty about their inner complexity oddly refreshing.",
    whereYouStruggle: "The disorganized partner's unpredictable emotional swings can overwhelm the avoidant partner's tolerance for emotional intensity, causing them to shut down precisely when their partner needs someone to stay. And when the avoidant partner withdraws, the disorganized partner may experience it as confirmation of their deepest fears about love being unsafe.",
    bridgeActions: [
      "When your partner's emotions feel too big, stay physically present even if you can't match the emotional intensity. Just being in the room matters enormously.",
      "When you feel the push-pull beginning, try to give your partner advance notice rather than an emotional ambush: 'I'm having a hard time today. I might need space and also connection. I'm not sure yet.'",
      "Both of you benefit enormously from individual therapeutic support. Growing separately here truly serves the relationship.",
    ],
    compat: [{ label: 'Mutual understanding', score: 80 }, { label: 'Shared independence', score: 82 }, { label: 'Emotional availability', score: 62 }, { label: 'Growth together', score: 78 }],
    repairPhrase: () => `"I got overwhelmed back there. I'm back now. Can we take it gently from here?"`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} build a shared code: a word or signal that means "I need to slow down right now -- no urgency, no alarm." Using it keeps small moments from becoming big crises.`,
    dates: [
      { emoji: '🌲', name: 'Walk in nature', desc: 'A slow, quiet walk somewhere with space and green.', why: 'Both styles regulate better in open, natural environments with no social pressure.', comfort: 'lowkey' },
      { emoji: '🧩', name: 'Puzzle or building project', desc: 'A low-stakes hands-on activity with a satisfying endpoint.', why: 'Shared focus on an object reduces the intensity of face-to-face connection while building teamwork.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Share your music and stories', desc: 'Take turns playing a song that matters and sharing a memory attached to it.', why: 'Music creates an emotionally safe bridge between two internal worlds.', comfort: 'lowkey' },
      { emoji: '🍵', name: 'Tea and quiet conversation', desc: 'A slow cup of tea and an unhurried talk about something neither of you usually discusses.', why: 'Low stimulation environments allow both styles to lower their guard naturally.', comfort: 'lowkey' },
      { emoji: '🖼️', name: 'Visit a small art space', desc: 'Choose a quiet, smaller gallery rather than a busy museum.', why: 'Beauty and quiet create a shared experience without requiring emotional performance.', comfort: 'lowkey' },
      { emoji: '🕯️', name: 'Cook dinner together slowly', desc: "An involved recipe that takes time. Put on music and take your time.", why: 'Side-by-side practical activity with a delicious result is a perfect low-pressure date.', comfort: 'lowkey' },
      { emoji: '🌄', name: 'Watch the sunrise or sunset from somewhere beautiful', desc: "Get up early or stay out late for the light.", why: 'Natural beauty requires nothing of you. Just being there together is enough.', comfort: 'lowkey' },
      { emoji: '🎬', name: "Watch a film from each other's culture or childhood", desc: "Show each other a movie that shaped you.", why: 'Sharing formative experiences is a form of trust. For both these styles, this is powerful.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read to each other', desc: "Take turns reading something aloud -- a chapter, a poem, an essay.", why: 'Being read to is one of the most soothing forms of intimacy. It requires no performance.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Sit near water', desc: "A beach, river, or lake. Bring something warm to drink. Stay a while.", why: 'Moving water is one of the most reliable nervous-system regulators in existence.', comfort: 'lowkey' },
      { emoji: '🧘', name: 'Learn a breathing practice together', desc: 'A guided breathwork or meditation session done side by side.', why: 'Regulated nervous systems make connection possible. This is foundational for both styles.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Create something with your hands', desc: "Draw, paint, build, garden -- any tactile creative work.", why: 'Grounding in the body through making soothes both styles and creates shared pride.', comfort: 'lowkey' },
      { emoji: '🏕️', name: 'A night away in nature', desc: "Camping, glamping, or a cabin. Simple. No agenda.", why: "Away from the usual environment, both partners often find they feel more available to each other.", comfort: 'adventure' },
      { emoji: '🐾', name: 'Spend time with animals', desc: "Animal shelter, farm, petting zoo, dog park.", why: 'Animals offer uncomplicated warmth that neither partner has to earn.', comfort: 'lowkey' },
      { emoji: '💌', name: 'Write each other letters', desc: "Old-fashioned letters. Sealed and exchanged. Read privately or aloud -- your choice.", why: 'Written words give both styles the time and distance to say what live conversation makes hard.', comfort: 'lowkey' },
    ]
  },
  'disorganized+disorganized': {
    name: 'The Brave Wilderness', tagline: 'Two survivors, choosing each other, learning what safe love feels like.',
    howYouConnect: "There is a recognition between two disorganized partners that can feel immediately profound -- a sense of finally being understood without having to explain. Both carry complexity, contradiction, and resilience in equal measure, and that shared depth can create moments of connection that feel unlike anything either person has experienced before.",
    whereYouStruggle: "This is also one of the more challenging pairings to navigate without outside support. When both partners are simultaneously fearing closeness and craving it, the relational weather can be intense and unpredictable. Conflict can escalate quickly. Trust, once broken in even small ways, can be hard to rebuild. Both people need strong individual support structures for this relationship to find its footing.",
    bridgeActions: [
      "Individual therapy for both partners is not optional here -- it is the foundation on which everything else is built.",
      "When you feel the push-pull, name it out loud rather than acting it out: 'I want to be close and I'm also terrified right now. I'm naming it instead of running.'",
      "Celebrate every moment of repair. Every time you come back to each other after difficulty is evidence that safety is being built, one brick at a time.",
    ],
    compat: [{ label: 'Depth of understanding', score: 88 }, { label: 'Resilience together', score: 82 }, { label: 'Emotional intensity', score: 85 }, { label: 'Day-to-day stability', score: 55 }],
    repairPhrase: () => `"We're both in the hard place right now. Can we hold on for each other and try again tomorrow?"`,
    sharedPractice: (n1, n2) => `${n1} and ${n2} agree on this: repair matters more than perfection. Any time one of them says "I came back" -- that counts. Every single time.`,
    dates: [
      { emoji: '🌿', name: 'Gentle nature time', desc: 'A quiet walk, a park bench, time somewhere green and unhurried.', why: 'Natural environments are grounding. They ask nothing of you.', comfort: 'lowkey' },
      { emoji: '🕯️', name: 'Simple evening at home', desc: 'Candles, music, a meal you made together, no agenda at all.', why: 'Familiar, predictable environments reduce the baseline arousal that can trigger old patterns.', comfort: 'lowkey' },
      { emoji: '🎭', name: 'Watch something deeply human', desc: 'A film or documentary about resilience, healing, or the complexity of being human.', why: 'Shared emotional resonance with characters is often safer than direct emotional conversation.', comfort: 'lowkey' },
      { emoji: '📖', name: 'Read the same book', desc: "Choose a novel or memoir you'll both read, then talk about it chapter by chapter.", why: 'Processing big feelings through a story creates distance that makes them approachable.', comfort: 'lowkey' },
      { emoji: '🎨', name: 'Make something with your hands', desc: 'Draw, build, sculpt, garden -- any tactile creative activity.', why: 'Grounding in the body through making soothes the nervous system and creates shared pride.', comfort: 'lowkey' },
      { emoji: '💌', name: 'Exchange letters', desc: "Write what you wish the other person knew about how you love. Exchange and read privately or aloud.", why: 'Written words allow both partners to say what live conversation makes overwhelming.', comfort: 'lowkey' },
      { emoji: '🌊', name: 'Sit near water together', desc: "A beach, river, lake. Stay for a while. Let the sound settle you.", why: 'Moving water is one of the most reliable nervous-system regulators. Both partners benefit.', comfort: 'lowkey' },
      { emoji: '🎵', name: 'Share the music that made you', desc: "Songs from different chapters of your life. The ones that held you.", why: 'Music is memory and feeling. Sharing your formative soundtrack is a profound act of trust.', comfort: 'lowkey' },
      { emoji: '🧩', name: 'A long puzzle or project', desc: "Something you return to over several evenings together.", why: 'Low-pressure shared time, without demand for emotional performance, builds safety brick by brick.', comfort: 'lowkey' },
      { emoji: '🌅', name: 'Watch the sunrise', desc: "Get up early enough to watch it together from somewhere beautiful.", why: 'Choosing to witness something beautiful together is an act of presence. It says: I want to be awake, with you.', comfort: 'lowkey' },
      { emoji: '🍵', name: 'Morning ritual together', desc: "Coffee, tea, no phones, no plan. Just the morning and each other.", why: 'Predictable, soft rituals build the felt sense of safety that both styles need over time.', comfort: 'lowkey' },
      { emoji: '🧘', name: 'Breathwork or body scan together', desc: 'A guided session from an app or YouTube. Do it side by side.', why: 'Nervous-system regulation done together builds co-regulation skills that help in difficult moments.', comfort: 'lowkey' },
      { emoji: '🐾', name: "Visit animals", desc: "Animal shelter, farm stay, dog park, petting zoo.", why: 'Animals offer uncomplicated, unconditional warmth. For both these styles, that is genuinely healing.', comfort: 'lowkey' },
      { emoji: '🌿', name: 'Plant something together', desc: 'Seeds, herbs, a small garden. Something that will grow over time.', why: 'Planting is an act of hope. Tending something together is a metaphor for what you are doing for each other.', comfort: 'lowkey' },
      { emoji: '🎶', name: 'Attend a small live performance', desc: 'A local band, acoustic show, or open mic. Somewhere intimate and unhurried.', why: 'Live music in a small setting creates shared emotional resonance without pressure.', comfort: 'moderate' },
    ]
  }
}

const SAFETY_ACTIONS = {
  secure: {
    forOther: (partnerName) => [
      `Keep choosing ${partnerName} actively and out loud -- don't let comfort become assumption.`,
      "Check in regularly about how the relationship feels, not just how life feels.",
      "Bring your full self to the relationship, including the messy or uncertain parts.",
      `Tell ${partnerName} specifically what you love about being with them -- often.`,
    ]
  },
  anxious: {
    forOther: (partnerName) => [
      `Reach out first after an argument, even just to say "I'm still here." For ${partnerName}, that means everything.`,
      "When you need space, say so gently: 'I need a little time to think, but I'm not going anywhere.'",
      "Small, consistent check-ins matter more than grand gestures. A good morning text. A quick 'thinking of you.'",
      `Let ${partnerName} know when something they do makes you feel loved. Specific appreciation is a deep comfort.`,
    ]
  },
  avoidant: {
    forOther: (partnerName) => [
      `You don't always have to have all the words. Showing up physically -- sitting nearby, a hand on the shoulder, making tea -- says "I'm here" without requiring emotional performance.`,
      "When you need space, claim it clearly and kindly before you disappear.",
      `Let ${partnerName} know what they can expect from you. Predictability is the soil trust grows in.`,
      "Practice one small act of emotional reach per day -- a text, a glance, a hand hold. These compound over time.",
    ]
  },
  disorganized: {
    forOther: (partnerName) => [
      `Be predictable, and then be more predictable. Show up when you say you will. Follow through. This is the most powerful gift you can offer ${partnerName}.`,
      "When they push you away, don't disappear -- but don't chase either. Stay calm and nearby.",
      `Celebrate every small moment of trust ${partnerName} extends to you. It took real courage to offer it.`,
      "Gently encourage professional support for both of you. It makes everything possible.",
    ]
  }
}

const JOURNAL_PROMPTS = [
  { id: 'self-1', category: 'self', prompt: "When did you first learn that love could feel uncertain? What was happening, and how old were you?", subtext: "You don't have to share this with anyone. This is just for you." },
  { id: 'self-2', category: 'self', prompt: "Think of a moment when you felt truly, completely safe with someone. What were they doing? What did it feel like in your body?", subtext: "Describe it like a place you could visit again." },
  { id: 'self-3', category: 'self', prompt: "Is there something you have wanted to say to someone you love but haven't found the words for? What would you say if you knew they could hear it without judgment?", subtext: "Let it be imperfect. First drafts are allowed." },
  { id: 'self-4', category: 'self', prompt: "What patterns do you notice yourself repeating in relationships? Without judgment -- just observation. What might they be protecting you from?", subtext: "Patterns are not flaws. They are adaptations that made sense once." },
  { id: 'self-5', category: 'self', prompt: "What is the bravest thing you have ever done in a relationship -- not dramatic, just genuinely brave?", subtext: "It might be smaller than you think." },
  { id: 'self-6', category: 'self', prompt: "If your younger self could see how you love now, what would they think? What would you want them to know?", subtext: "A letter to yourself across time." },
  { id: 'partner-1', category: 'partner', prompt: "What does safety feel like in your body? Describe it like a place you could visit.", subtext: "Answer this separately, then share your answers out loud to each other." },
  { id: 'partner-2', category: 'partner', prompt: "What is one thing your partner does that makes you feel deeply loved, that they might not even know they're doing?", subtext: "Share this with them. Watch what happens." },
  { id: 'partner-3', category: 'partner', prompt: "What is one thing you wish your partner understood about how you love?", subtext: "This one asks for honesty and gentleness in equal measure." },
  { id: 'partner-4', category: 'partner', prompt: "Describe a moment with your partner when you felt the most connected. What was happening? What made it feel that way?", subtext: "Notice the details. They tell you something important." },
  { id: 'partner-5', category: 'partner', prompt: "What fear do you carry into this relationship that belongs to a previous chapter of your life, not the one you're in now?", subtext: "Name it gently. You don't have to fix it -- just see it." },
  { id: 'partner-6', category: 'partner', prompt: "What would you most like your partner to understand about what you went through before them?", subtext: "Not to explain yourself. Just to let them know you." },
  { id: 'together-1', category: 'together', prompt: "Write a letter to your younger self about love. What would you tell them? What did you wish someone had said to you?", subtext: "There are no rules for this one. Let it be honest." },
  { id: 'together-2', category: 'together', prompt: "What I wish you knew about how I love: finish this sentence in at least five ways.", subtext: "Do this separately, then read each other's lists aloud." },
  { id: 'together-3', category: 'together', prompt: "When I am at my best in this relationship, I...", subtext: "Describe that version of yourself in detail. What does it feel like to be them?" },
  { id: 'together-4', category: 'together', prompt: "What do I want our relationship to feel like five years from now? What would need to be true for that to happen?", subtext: "Dream a little. Then notice where the realistic steps are." },
  { id: 'together-5', category: 'together', prompt: "What is something my partner has done in the last month that I haven't thanked them for?", subtext: "Then go thank them. It's that simple." },
  { id: 'together-6', category: 'together', prompt: "What does 'home' mean to you? Does this relationship feel like home? What would make it feel more like home?", subtext: "Take your time with this one." },
  { id: 'repair-1', category: 'repair', prompt: "What story did I tell myself during our last argument? Was it true? What might my partner's story have been?", subtext: "Try to hold both stories at once. Both can be real." },
  { id: 'repair-2', category: 'repair', prompt: "What do I do when I'm hurt that probably makes things harder rather than better? Where did I learn that?", subtext: "No judgment. Just honest seeing." },
  { id: 'repair-3', category: 'repair', prompt: "What does it feel like in my body when I am in conflict with my partner? Where does it live? What does it need?", subtext: "Getting to know this map changes everything." },
  { id: 'repair-4', category: 'repair', prompt: "Is there something I said or did that I haven't fully apologized for? What would a real, clean apology look like?", subtext: "No one is keeping score. This is just for you -- and then maybe for them." },
  { id: 'repair-5', category: 'repair', prompt: "After hard seasons, what has helped us find our way back? What does repair look like for us at our best?", subtext: "Name what works. Then do more of it on purpose." },
  { id: 'repair-6', category: 'repair', prompt: "What is one thing I could do differently in our next difficult moment that would make things better rather than worse?", subtext: "Write it down before the moment arrives. That's the work." },
]

// ---- State Management ----

const STORAGE_KEY = 'connected_app_v1'

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    return { ...defaultState(), ...JSON.parse(raw) }
  } catch { return defaultState() }
}

function defaultState() {
  return {
    partner1: { name: '', color: '#B8A9C9', answers: {}, style: null, scores: null },
    partner2: { name: '', color: '#8BAF8D', answers: {}, style: null, scores: null },
    usePartner2: true,
    currentSection: 'welcome',
    quizTaker: 1,
    savedDates: [],
    journalEntries: {},
    completedSections: [],
  }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch {}
}

let STATE = getState()

// ---- Utilities ----

function getPairingKey(s1, s2) {
  const order = ['secure', 'anxious', 'avoidant', 'disorganized']
  return [s1, s2].sort((a, b) => order.indexOf(a) - order.indexOf(b)).join('+')
}

function calculateScores(answers) {
  const scores = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 }
  QUESTIONS.forEach(q => { scores[q.style] += (answers[q.id] || 0) })
  return scores
}

function getPrimaryStyle(scores) {
  return Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b)
}

function getPercentages(scores) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  if (!total) return { secure: 25, anxious: 25, avoidant: 25, disorganized: 25 }
  const r = {}
  for (const k in scores) r[k] = Math.round((scores[k] / total) * 100)
  return r
}

function markComplete(section) {
  if (!STATE.completedSections.includes(section)) {
    STATE.completedSections.push(section)
    saveState(STATE)
  }
}

function n1() { return STATE.partner1.name || 'You' }
function n2() { return STATE.partner2.name || 'Your partner' }

// ---- Navigation ----

const NAV_ITEMS = [
  { id: 'welcome',    label: 'Welcome',       icon: '🏠' },
  { id: 'setup',      label: 'Setup',         icon: '👤' },
  { id: 'quiz',       label: 'Quiz',          icon: '📋' },
  { id: 'results',    label: 'Results',       icon: '🎨' },
  { id: 'connection', label: 'Connection',    icon: '🤝' },
  { id: 'dates',      label: 'Date Ideas',    icon: '💑' },
  { id: 'safety',     label: 'Safety Guide',  icon: '🛡️' },
  { id: 'journal',    label: 'Journal',       icon: '📓' },
  { id: 'dashboard',  label: 'Dashboard',     icon: '📈' },
]

function navigate(section) {
  STATE.currentSection = section
  saveState(STATE)
  render()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ---- Render Engine ----

function render() {
  const root = document.getElementById('root')
  if (!root) return
  root.innerHTML = buildNav() + buildSection(STATE.currentSection)
}

function buildNav() {
  const p1Initial = (n1()).charAt(0).toUpperCase()
  const p2Initial = (n2()).charAt(0).toUpperCase()
  const hasName = !!STATE.partner1.name

  // Avatar menu (shown when user has a name)
  const avatarMenu = hasName ? `
    <div class="avatar-menu-wrapper" id="avatarMenuWrapper">
      <button class="avatar-menu-btn" onclick="toggleAvatarMenu()" aria-label="Open navigation menu">
        <span class="avatar-dot" style="background:${STATE.partner1.color};width:34px;height:34px;font-size:0.85rem;cursor:pointer;">${p1Initial}</span>
        ${STATE.usePartner2 && STATE.partner2.name ? `<span class="avatar-dot" style="background:${STATE.partner2.color};width:34px;height:34px;font-size:0.85rem;cursor:pointer;margin-left:-8px;">${p2Initial}</span>` : ''}
        <span style="font-size:0.7rem;color:var(--charcoal-light);margin-left:4px;">&#9660;</span>
      </button>
      <div class="avatar-dropdown" id="avatarDropdown" style="display:none;">
        <div class="avatar-dropdown__header">
          <span class="avatar-dot" style="background:${STATE.partner1.color};width:38px;height:38px;font-size:0.95rem;">${p1Initial}</span>
          <div>
            <div style="font-weight:600;font-size:0.9rem;">${n1()}</div>
            ${STATE.partner1.style ? `<div style="font-size:0.75rem;color:var(--charcoal-light);">${STYLES[STATE.partner1.style].descriptor}</div>` : '<div style="font-size:0.75rem;color:var(--charcoal-light);">Quiz not taken yet</div>'}
          </div>
        </div>
        <div class="avatar-dropdown__divider"></div>
        ${NAV_ITEMS.map(item => `
          <a href="#" class="avatar-dropdown__item ${STATE.currentSection === item.id ? 'active' : ''}" onclick="navigate('${item.id}');closeAvatarMenu();return false;">
            <span class="avatar-dropdown__icon">${item.icon}</span>
            ${item.label}
          </a>
        `).join('')}
        <div class="avatar-dropdown__divider"></div>
        <a href="#" class="avatar-dropdown__item" onclick="navigate('setup');closeAvatarMenu();return false;">
          <span class="avatar-dropdown__icon">⚙️</span> Edit Names &amp; Settings
        </a>
        <a href="#" class="avatar-dropdown__item" onclick="navigate('welcome');closeAvatarMenu();return false;">
          <span class="avatar-dropdown__icon">🏠</span> Back to Beginning
        </a>
      </div>
    </div>
  ` : `<button class="btn btn-primary btn-sm" onclick="navigate('setup')" style="font-size:0.8rem;padding:8px 18px;">Get Started</button>`

  return `
    <nav class="app-nav">
      <div class="app-nav__inner">
        <a href="#" onclick="navigate('welcome');return false;" class="app-nav__logo">Connected</a>
        <ul class="app-nav__links">
          ${NAV_ITEMS.map(item => `
            <li><a href="#" onclick="navigate('${item.id}');return false;"
               class="${STATE.currentSection === item.id ? 'active' : ''}">${item.label}</a></li>
          `).join('')}
        </ul>
        ${avatarMenu}
      </div>
    </nav>
  `
}

function toggleAvatarMenu() {
  const d = document.getElementById('avatarDropdown')
  if (!d) return
  d.style.display = d.style.display === 'none' ? 'block' : 'none'
}

function closeAvatarMenu() {
  const d = document.getElementById('avatarDropdown')
  if (d) d.style.display = 'none'
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const w = document.getElementById('avatarMenuWrapper')
  if (w && !w.contains(e.target)) closeAvatarMenu()
})

function buildSection(id) {
  switch (id) {
    case 'welcome':    return buildWelcome()
    case 'setup':      return buildSetup()
    case 'quiz':       return buildQuiz()
    case 'results':    return buildResults()
    case 'connection': return buildConnection()
    case 'dates':      return buildDates()
    case 'safety':     return buildSafety()
    case 'journal':    return buildJournal()
    case 'dashboard':  return buildDashboard()
    default:           return buildWelcome()
  }
}

// ---- SECTION 0: WELCOME ----

function buildWelcome() {
  const hasProgress = !!STATE.partner1.style
  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div class="hero">
        <span class="hero__illustration">🌿</span>
        <span class="hero__accent">A safe, judgment-free guide for two</span>
        <h1 class="hero__title"><em>Connected</em></h1>
        <p class="hero__tagline">Understand yourself. Understand each other. Build something beautiful.</p>
        <p style="font-size:1.05rem;color:var(--charcoal);max-width:560px;margin:0 auto 16px;line-height:1.8;">
          Welcome. You're here because you want to understand -- yourself, the person you love, and the space between you. This guide is a safe, judgment-free space. There are no wrong answers. There is no failing. There is only curiosity, and that's the most powerful place to begin.
        </p>
        <p style="font-size:0.9rem;color:var(--charcoal-light);max-width:500px;margin:0 auto 36px;font-style:italic;">
          Attachment styles are not labels -- they are starting points. Every style can grow toward security with awareness and love.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" onclick="navigate('setup')">${hasProgress ? 'Continue Your Journey' : 'Begin Your Journey'}</button>
          ${hasProgress ? `<button class="btn btn-secondary" onclick="navigate('dashboard')">Go to Dashboard</button>` : ''}
        </div>
        ${hasProgress ? `<p style="margin-top:14px;font-size:0.82rem;color:var(--charcoal-light);">You have progress saved. Pick up right where you left off.</p>` : `<p style="margin-top:14px;font-size:0.82rem;color:var(--charcoal-light);">Takes about 10 minutes. You can pause and return any time.</p>`}
      </div>

      <div class="section-divider"><span>Why this matters</span></div>

      <div class="card" style="margin-bottom:24px;">
        <h3 style="margin-bottom:16px;">Why Attachment Style Is Everything in Love</h3>
        <p>Decades of research in psychology have shown that the patterns we develop in childhood -- how we learned to seek comfort, handle rejection, and trust the people closest to us -- don't disappear when we grow up. They travel with us into every relationship we form as adults, often without us even realizing it.</p>
        <p>Your attachment style is essentially your nervous system's blueprint for closeness. It shapes how you respond when your partner is distant, how you behave during conflict, whether you lean in or pull away when things get hard -- and whether love feels like a safe harbor or a constant source of anxiety.</p>
        <p>Here's the remarkable thing: <strong>most relationship pain is not about compatibility.</strong> It's about two people with different blueprints for love, each doing exactly what they learned to do, neither one understanding why the other keeps responding the way they do.</p>
        <div class="callout callout--sage" style="margin:20px 0;">
          <p><strong>When you understand your attachment style, everything shifts.</strong> You stop taking your partner's withdrawal personally. They stop feeling controlled by your need for reassurance. The cycle that used to feel like a character flaw becomes something you can actually name, talk about, and change together.</p>
        </div>
        <p>This guide will help you do exactly that. You'll discover your style, understand your partner's, and leave with real, specific tools for how to love each other better -- starting today.</p>
      </div>

      <div class="card-grid" style="margin-bottom:32px;">
        <div class="card card--sage">
          <div style="font-size:1.6rem;margin-bottom:10px;">🔄</div>
          <h4>Break the Cycle</h4>
          <p style="font-size:0.88rem;color:var(--charcoal-light);">Patterns repeat until they're understood. This guide helps you see your patterns clearly -- with compassion, not criticism.</p>
        </div>
        <div class="card card--rose">
          <div style="font-size:1.6rem;margin-bottom:10px;">🗣️</div>
          <h4>Speak the Same Language</h4>
          <p style="font-size:0.88rem;color:var(--charcoal-light);">Attachment awareness gives couples a shared vocabulary for the moments that used to end in silence, distance, or arguments.</p>
        </div>
        <div class="card card--lavender">
          <div style="font-size:1.6rem;margin-bottom:10px;">🌱</div>
          <h4>Build Real Security</h4>
          <p style="font-size:0.88rem;color:var(--charcoal-light);">No matter your starting style, every person can move toward greater security. This is not fixed. You are not stuck. Growth is genuinely possible.</p>
        </div>
      </div>

      <div class="section-divider"><span>How it works</span></div>

      <div class="steps-grid">
        ${[
          ['Enter your names', 'Personalize this guide so every insight feels like it was written for you.'],
          ['Take the quiz', 'Each person answers 20 gentle questions, one at a time.'],
          ['Read your styles', 'Discover your attachment style with warmth and no judgment.'],
          ['Explore together', 'See how your styles interact and what makes you work.'],
          ['Grow closer', 'Date ideas, safety guides, and journaling just for your pairing.'],
        ].map(([title, text], i) => `
          <div class="step-card">
            <div class="step-card__number">${i + 1}</div>
            <div style="font-weight:600;margin-bottom:6px;font-family:var(--font-heading);font-size:1rem;">${title}</div>
            <p class="step-card__text">${text}</p>
          </div>
        `).join('')}
      </div>

      <div class="callout callout--rose" style="margin-top:40px;">
        <p class="callout__title"><span class="callout__icon">💛</span>This guide is for you if...</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          ${[
            'You want to feel less reactive and more understood',
            'You want to stop repeating old patterns',
            'You want a relationship that feels genuinely safe',
            'You are exploring your own patterns, with or without a partner right now',
            'You have ever wondered "why do we keep having the same fight?"',
            'You want practical tools, not just insight',
          ].map(t => `<li style="display:flex;gap:8px;align-items:flex-start;font-size:0.93rem;"><span style="color:var(--rose-dark);">✦</span>${t}</li>`).join('')}
        </ul>
      </div>

      <div class="welcome-features">
        ${[
          ['🔒', 'Private & Safe', 'Everything stays on your device. No account needed, no data shared.'],
          ['💾', 'Always Saved', 'Your progress is saved automatically. Come back any time.'],
          ['📄', 'Save as PDF', 'Print your results or save as a PDF to keep forever.'],
          ['💑', 'Built for Two', 'Designed for couples and also beautifully useful for solo exploration.'],
        ].map(([icon, title, text]) => `
          <div class="feature-card">
            <div class="feature-card__icon">${icon}</div>
            <div class="feature-card__title">${title}</div>
            <p class="feature-card__text">${text}</p>
          </div>
        `).join('')}
      </div>

      <div style="text-align:center;padding:48px 0 0;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary btn-lg" onclick="navigate('setup')">${hasProgress ? 'Continue' : "Let's Begin"} &rarr;</button>
        ${hasProgress ? `<button class="btn btn-ghost" onclick="resetAll()">Start Fresh</button>` : ''}
      </div>
      ${!hasProgress ? `<p style="text-align:center;margin-top:16px;font-size:0.82rem;color:var(--charcoal-light);">Takes about 10 minutes. You can pause and return any time.</p>` : ''}

      <!-- PWA Install Banner (shown only when installable) -->
      <div id="pwa-install-btn" style="display:none;margin-top:24px;justify-content:center;">
        <div class="callout callout--lavender" style="max-width:480px;display:flex;align-items:center;gap:16px;padding:16px 20px;">
          <span style="font-size:1.4rem;">&#128241;</span>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:0.9rem;margin-bottom:2px;">Install Connected on your device</div>
            <p style="font-size:0.8rem;color:var(--charcoal-light);margin:0;">Add to your home screen for easy access, even offline.</p>
          </div>
          <button class="btn btn-primary btn-sm" style="white-space:nowrap;">Add to Home Screen</button>
        </div>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 1: SETUP ----

function buildSetup() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2
  const colorSwatches = (which) => COLORS.map(c => `
    <div class="color-swatch ${STATE[which].color === c.value ? 'active' : ''}"
         style="background:${c.value}"
         onclick="setColor('${which}','${c.value}')"
         title="${c.label}"></div>
  `).join('')

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:48px 0 32px;text-align:center;">
        <span class="hero__accent">Let's make this yours</span>
        <h2>Personalize Your Guide</h2>
        <p style="color:var(--charcoal-light);max-width:480px;margin:12px auto 0;">Your names will appear throughout this guide so every insight feels personal and real.</p>
      </div>

      <div class="card mt-8">
        <h3 style="margin-bottom:24px;">Your Names & Colors</h3>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;" class="setup-grid">
          <div>
            <div class="form-group">
              <label class="form-label">Your Name</label>
              <input class="form-input" type="text" id="p1name" value="${p1.name}" placeholder="Enter your name" oninput="updateName(1, this.value)" />
            </div>
            <div class="form-group">
              <label class="form-label">Your Color</label>
              <div class="color-picker">${colorSwatches('partner1')}</div>
              <div class="avatar-dot mt-4" style="background:${p1.color};width:48px;height:48px;font-size:1.1rem;">
                ${p1.name ? p1.name.charAt(0).toUpperCase() : '?'}
              </div>
            </div>
          </div>

          <div>
            <div class="form-group">
              <label class="form-label">Partner's Name <span style="font-weight:400;color:var(--charcoal-light);text-transform:none;font-size:0.8rem;">(optional)</span></label>
              <input class="form-input" type="text" id="p2name" value="${p2.name}" placeholder="Enter their name" oninput="updateName(2, this.value)" ${!STATE.usePartner2 ? 'disabled style="opacity:0.4"' : ''} />
            </div>
            <div class="form-group">
              <label class="form-label">Their Color</label>
              <div class="color-picker">${colorSwatches('partner2')}</div>
              <div class="avatar-dot mt-4" style="background:${p2.color};width:48px;height:48px;font-size:1.1rem;">
                ${p2.name ? p2.name.charAt(0).toUpperCase() : '?'}
              </div>
            </div>
          </div>
        </div>

        <div class="callout callout--sage" style="margin-top:24px;">
          <div class="toggle-group">
            <div class="toggle-option ${STATE.usePartner2 ? 'active' : ''}" onclick="setUsePartner2(true)">
              <span class="toggle-option__icon">💑</span>
              <div class="toggle-option__label">We're doing this together</div>
              <p style="font-size:0.8rem;color:var(--charcoal-light);margin:4px 0 0;">Both partners take the quiz and see your combined insights.</p>
            </div>
            <div class="toggle-option ${!STATE.usePartner2 ? 'active' : ''}" onclick="setUsePartner2(false)">
              <span class="toggle-option__icon">🧭</span>
              <div class="toggle-option__label">I'm exploring on my own</div>
              <p style="font-size:0.8rem;color:var(--charcoal-light);margin:4px 0 0;">Just your quiz results. You can add a partner later anytime.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="callout callout--lavender mt-6">
        <p style="font-size:0.9rem;"><strong>A note before you begin the quiz:</strong> Read each statement and choose the answer that feels most true -- not the one you wish were true. Honesty here is a gift to yourself. There are no right or wrong answers, only yours.</p>
      </div>

      <div style="text-align:center;margin-top:40px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-ghost" onclick="navigate('welcome')">Back</button>
        <button class="btn btn-primary btn-lg" onclick="startQuiz(1)">
          ${p1.name ? `Start ${p1.name}'s Quiz` : 'Start Your Quiz'} &rarr;
        </button>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 2: QUIZ ----

let quizQuestion = 0

function buildQuiz() {
  const taker = STATE.quizTaker
  const partner = taker === 1 ? STATE.partner1 : STATE.partner2
  const name = partner.name || (taker === 1 ? 'You' : 'Your partner')
  const answers = partner.answers || {}
  const q = QUESTIONS[quizQuestion]
  const pct = Math.round((quizQuestion / QUESTIONS.length) * 100)
  const selected = answers[q.id]
  const isFirstQ = quizQuestion === 0

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 0;text-align:center;">
        <div class="quiz-taker-badge" style="background:${partner.color}22;color:${partner.color};border:1px solid ${partner.color}44;">
          <span style="font-size:0.9rem;">●</span> ${name}'s Quiz
        </div>
        <div class="quiz-progress-bar" style="max-width:480px;margin:0 auto;">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <p class="quiz-progress-text" style="text-align:center;">Question ${quizQuestion + 1} of ${QUESTIONS.length}</p>
      </div>

      <div class="quiz-container">
        ${isFirstQ ? `
          <div class="quiz-tip">
            Read each statement and choose the answer that feels most true for you -- not the one you wish were true. Honesty here is a gift to yourself.
          </div>
        ` : ''}

        <div class="quiz-card" key="${quizQuestion}">
          <span class="quiz-card__greeting">${name}, how much does this sound like you?</span>
          <p class="quiz-card__question">"${q.text}"</p>

          <div class="quiz-scale">
            ${[1,2,3,4,5].map(val => `
              <label class="quiz-scale__option ${selected === val ? 'selected' : ''}" onclick="selectAnswer(${q.id},${val})">
                <input type="radio" name="q${q.id}" value="${val}" ${selected === val ? 'checked' : ''} />
                <div class="quiz-scale__dot"></div>
                <span class="quiz-scale__label">${SCALE_LABELS[val]}</span>
                <span class="quiz-scale__value">${val}</span>
              </label>
            `).join('')}
          </div>

          <div class="quiz-nav">
            <button class="btn btn-ghost btn-sm" onclick="quizPrev()" ${quizQuestion === 0 ? 'disabled style="opacity:0.3"' : ''}>
              &larr; Previous
            </button>
            ${quizQuestion < QUESTIONS.length - 1
              ? `<button class="btn btn-primary btn-sm" onclick="quizNext()" ${!selected ? 'disabled style="opacity:0.5"' : ''}>Next &rarr;</button>`
              : `<button class="btn btn-mauve" onclick="submitQuiz()" ${!selected ? 'disabled style="opacity:0.5"' : ''}>See My Results &rarr;</button>`
            }
          </div>
        </div>

        <p style="text-align:center;margin-top:20px;font-size:0.8rem;color:var(--charcoal-light);">Your answers are saved automatically as you go.</p>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 3: RESULTS ----

function buildResults() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2
  const p1done = !!p1.style
  const p2done = !!p2.style
  const showP2 = STATE.usePartner2

  if (!p1done) {
    return `
    <div class="section-page fade-in"><div class="app-container" style="text-align:center;padding:80px 0;">
      <p class="hero__illustration">🌿</p>
      <h2>No results yet</h2>
      <p style="color:var(--charcoal-light);margin:16px 0 32px;">Take the quiz first to see your attachment style results.</p>
      <button class="btn btn-primary" onclick="startQuiz(1)">Take the Quiz</button>
    </div></div>`
  }

  const tabs = []
  if (p1done) tabs.push({ name: p1.name || 'You', partner: 1 })
  if (p2done && showP2) tabs.push({ name: p2.name || 'Your Partner', partner: 2 })

  const activeTab = STATE.resultsTab || 1
  const activePerson = activeTab === 1 ? p1 : p2
  const activePartnerName = activeTab === 1 ? (p2.name || 'your partner') : (p1.name || 'your partner')

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 16px;text-align:center;">
        <span class="hero__accent">Your attachment style</span>
        <h2>Your Results</h2>
      </div>

      ${tabs.length > 1 ? `
        <div style="display:flex;gap:12px;justify-content:center;margin-bottom:32px;">
          ${tabs.map(t => `
            <button class="tab-btn ${activeTab === t.partner ? 'active' : ''}"
                    onclick="setResultsTab(${t.partner})">${t.name}</button>
          `).join('')}
        </div>
      ` : ''}

      ${buildStyleCard(activePerson, activePartnerName)}

      ${!showP2 || !p2done ? `
        <div class="callout callout--rose" style="margin-top:32px;text-align:center;">
          <p class="callout__title"><span class="callout__icon">💑</span>Ready to add a partner?</p>
          <p style="font-size:0.92rem;margin-bottom:16px;color:var(--charcoal);">You can explore your styles together, see your pairing analysis, and get personalized date ideas and safety guides for both of you.</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            ${!showP2 ? `<button class="btn btn-rose" onclick="addPartnerPrompt()">+ Add a Partner</button>` : ''}
            ${showP2 && !p2done ? `<button class="btn btn-rose" onclick="startQuiz(2)">${p2.name ? 'Start ' + p2.name + "'s Quiz" : 'Start Partner\'s Quiz'} &rarr;</button>` : ''}
          </div>
        </div>
      ` : ''}

      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:32px;">
        ${p1done && (!showP2 || p2done) ? `
          <button class="btn btn-primary" onclick="navigate('connection')">See Your Connection &rarr;</button>
        ` : ''}
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
        <button class="btn btn-ghost" onclick="navigate('welcome')">Back to Beginning</button>
        <button class="btn btn-print btn-sm no-print" onclick="window.print()">🖨️ Print Results</button>
      </div>
    </div>
  </div>
  `
}

function buildStyleCard(person, partnerName) {
  if (!person || !person.style) return ''
  const s = STYLES[person.style]
  const name = person.name || 'You'
  const pct = getPercentages(person.scores || {})
  const bars = [
    { key: 'secure', label: 'Secure 🌿', color: '#6A9370' },
    { key: 'anxious', label: 'Deep Feeler 🌊', color: '#7A5C9A' },
    { key: 'avoidant', label: 'Independent 🌬️', color: '#B05A5A' },
    { key: 'disorganized', label: 'Brave Paradox 🌀', color: '#9B7D30' },
  ]

  return `
    <div class="card" style="border-top:4px solid ${s.color};">
      <div class="results-hero" style="padding:0 0 24px;">
        <div class="style-badge" style="background:${s.bgColor};color:${s.color};">
          <span class="style-icon">${s.icon}</span>
          <strong>${s.descriptor}</strong>
        </div>
        <h2 style="color:${s.color};">${name}'s Primary Style: ${s.name}</h2>
      </div>

      <div class="results-section">
        <div class="results-section__label">About Your Style</div>
        ${s.summary.map(p => `<p>${p.replace('{name}', name)}</p>`).join('')}
      </div>

      <div class="results-section mt-8">
        <div class="results-section__label">Your Superpowers</div>
        <ul class="superpower-list">
          ${s.superpowers.map(sp => `<li class="superpower-tag">${sp}</li>`).join('')}
        </ul>
      </div>

      <div class="results-section mt-8">
        <div class="results-section__label">Your Growth Edge</div>
        <div class="callout callout--sage"><p>${s.growthEdge}</p></div>
      </div>

      <div class="results-section mt-8">
        <div class="results-section__label">What ${name} Needs to Feel Safe in Love</div>
        <ul class="needs-list">
          ${s.needs.map(n => `<li>${n}</li>`).join('')}
        </ul>
      </div>

      <div class="results-section mt-8">
        <div class="results-section__label">Your Style Breakdown</div>
        <div class="secondary-style-bar">
          ${bars.map(b => `
            <div class="style-bar-row">
              <span class="style-bar-label">${b.label}</span>
              <div class="style-bar-track">
                <div class="style-bar-fill" style="width:${pct[b.key]}%;background:${b.color};"></div>
              </div>
              <span class="style-bar-pct">${pct[b.key]}%</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="results-section mt-8">
        <div class="results-section__label">A Note to ${partnerName}</div>
        <div class="note-to-partner">
          <p style="position:relative;z-index:1;padding-top:16px;">${s.noteToPartner(name, partnerName)}</p>
        </div>
      </div>
    </div>
  `
}

// ---- SECTION 4: CONNECTION ----

function buildConnection() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2

  if (!p1.style) {
    return `<div class="section-page fade-in"><div class="app-container" style="text-align:center;padding:80px 0;">
      <p class="hero__illustration">🤝</p>
      <h2>Complete the quiz first</h2>
      <p style="color:var(--charcoal-light);margin:16px 0 32px;">Both partners need to complete the quiz to see your connection.</p>
      <button class="btn btn-primary" onclick="startQuiz(1)">Take the Quiz</button>
    </div></div>`
  }

  if (STATE.usePartner2 && !p2.style) {
    return `<div class="section-page fade-in"><div class="app-container" style="text-align:center;padding:80px 0;">
      <p class="hero__illustration">🤝</p>
      <h2>One more quiz to go</h2>
      <p style="color:var(--charcoal-light);margin:16px 0 32px;">${p2.name || 'Your partner'} hasn't taken the quiz yet.</p>
      <button class="btn btn-rose" onclick="startQuiz(2)">Start ${p2.name ? p2.name + "'s" : "Partner's"} Quiz &rarr;</button>
    </div></div>`
  }

  const style2 = STATE.usePartner2 ? p2.style : p1.style
  const key = getPairingKey(p1.style, style2)
  const pairing = PAIRINGS[key]
  if (!pairing) return ''

  markComplete('connection')

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 16px;text-align:center;">
        <span class="hero__accent">How you work together</span>
        <h2>${pairing.name}</h2>
        <p style="font-family:var(--font-accent);font-size:1.1rem;color:var(--mauve);margin:8px 0 0;">${pairing.tagline}</p>
      </div>

      <div class="card mt-8">
        <div class="pairing-combo">
          <div class="pairing-combo__person">
            <div class="pairing-combo__avatar" style="background:${p1.color}22;font-size:1.8rem;">${STYLES[p1.style].icon}</div>
            <div class="pairing-combo__name" style="color:${p1.color};">${n1()}</div>
            <div class="pairing-combo__style">${STYLES[p1.style].descriptor}</div>
          </div>
          <div class="pairing-combo__divider">+</div>
          <div class="pairing-combo__person">
            <div class="pairing-combo__avatar" style="background:${(STATE.usePartner2 ? p2 : p1).color}22;font-size:1.8rem;">${STYLES[style2].icon}</div>
            <div class="pairing-combo__name" style="color:${(STATE.usePartner2 ? p2 : p1).color};">${STATE.usePartner2 ? n2() : n1()}</div>
            <div class="pairing-combo__style">${STYLES[style2].descriptor}</div>
          </div>
        </div>

        <div class="section-divider"><span>Your compatibility</span></div>

        ${pairing.compat.map(a => `
          <div class="compatibility-bar">
            <div class="compatibility-bar__label">
              <span>${a.label}</span>
              <span>${a.score}%</span>
            </div>
            <div class="compatibility-bar__track">
              <div class="compatibility-bar__fill" style="width:${a.score}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card mt-6 card--sage">
        <div class="results-section__label">How You Connect</div>
        <p>${pairing.howYouConnect}</p>
      </div>

      <div class="card mt-6 card--rose">
        <div class="results-section__label">Where You May Struggle</div>
        <p style="font-style:italic;color:var(--charcoal-light);margin-bottom:12px;">${n1()} and ${n2()}, the place where your styles rub against each other isn't a flaw in your love -- it's an invitation to grow.</p>
        <p>${pairing.whereYouStruggle}</p>
      </div>

      <div class="card mt-6 card--lavender">
        <div class="results-section__label">How to Build a Bridge</div>
        <ul class="safety-actions">
          ${pairing.bridgeActions.map(action => `
            <li><span class="action-icon">🌉</span>${action}</li>
          `).join('')}
        </ul>
      </div>

      <div class="card mt-6" style="text-align:center;background:linear-gradient(135deg,rgba(184,169,201,0.1),rgba(212,165,165,0.08));">
        <div class="results-section__label">Your Shared Practice</div>
        <p class="repair-phrase__quote">${pairing.sharedPractice(n1(), n2())}</p>
      </div>

      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:40px;">
        <button class="btn btn-primary" onclick="navigate('dates')">Date Ideas for You &rarr;</button>
        <button class="btn btn-secondary" onclick="navigate('safety')">Your Safety Guide &rarr;</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
        <button class="btn btn-ghost" onclick="navigate('welcome')">← Beginning</button>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 5: DATES ----

function buildDates() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2

  if (!p1.style) {
    return `<div class="section-page fade-in"><div class="app-container" style="text-align:center;padding:80px 0;">
      <p class="hero__illustration">💑</p>
      <h2>Complete the quiz first</h2>
      <button class="btn btn-primary mt-6" onclick="startQuiz(1)">Take the Quiz</button>
    </div></div>`
  }

  const style2 = (STATE.usePartner2 && p2.style) ? p2.style : p1.style
  const key = getPairingKey(p1.style, style2)
  const pairing = PAIRINGS[key]
  if (!pairing) return ''

  markComplete('dates')
  const saved = STATE.savedDates || []
  const comfortLabels = { lowkey: 'Low-Key 🌿', moderate: 'Moderate ☀️', adventure: 'Adventure 🌊' }
  const comfortClass = { lowkey: 'lowkey', moderate: 'moderate', adventure: 'adventure' }

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 16px;text-align:center;">
        <span class="hero__accent">Curated for your pairing</span>
        <h2>Date Ideas for ${n1()}${STATE.usePartner2 && n2() !== 'Your partner' ? ' & ' + n2() : ''}</h2>
        <p style="color:var(--charcoal-light);margin:8px 0 0;">These ideas are chosen with both of your styles in mind. Heart your favorites.</p>
      </div>

      <div class="card-grid mt-8">
        ${pairing.dates.map((d, i) => {
          const isHearted = saved.includes(d.name)
          return `
          <div class="date-card">
            <div class="date-card__header">
              <span class="date-card__emoji">${d.emoji}</span>
              <button class="date-card__heart ${isHearted ? 'hearted' : ''}"
                      onclick="toggleDate('${d.name.replace(/'/g, "\\'")}')"
                      title="${isHearted ? 'Remove from favorites' : 'Save to favorites'}">
                ${isHearted ? '❤️' : '🤍'}
              </button>
            </div>
            <div class="date-card__body">
              <div class="date-card__name">${d.name}</div>
              <p class="date-card__desc">${d.desc}</p>
              <div class="date-card__why">Why this works for you: ${d.why}</div>
              <span class="comfort-tag comfort-tag--${comfortClass[d.comfort]}">${comfortLabels[d.comfort]}</span>
            </div>
          </div>
          `
        }).join('')}
      </div>

      ${saved.length > 0 ? `
        <div class="card mt-8 card--rose">
          <div class="results-section__label">Your Saved Favorites ❤️</div>
          <div class="saved-dates-grid mt-4">
            ${saved.map(name => `
              <div class="saved-date-chip">
                <span class="saved-date-chip__emoji">❤️</span>
                <span class="saved-date-chip__name">${name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:40px;">
        <button class="btn btn-primary" onclick="navigate('safety')">Your Safety Guide &rarr;</button>
        <button class="btn btn-ghost" onclick="navigate('connection')">&larr; Connection</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
        <button class="btn btn-ghost" onclick="navigate('welcome')">← Beginning</button>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 6: SAFETY ----

function buildSafety() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2

  if (!p1.style) {
    return `<div class="section-page fade-in"><div class="app-container" style="text-align:center;padding:80px 0;">
      <p class="hero__illustration">🛡️</p>
      <h2>Complete the quiz first</h2>
      <button class="btn btn-primary mt-6" onclick="startQuiz(1)">Take the Quiz</button>
    </div></div>`
  }

  markComplete('safety')

  const style2 = (STATE.usePartner2 && p2.style) ? p2.style : p1.style
  const name2 = STATE.usePartner2 ? n2() : 'your partner'
  const key = getPairingKey(p1.style, style2)
  const pairing = PAIRINGS[key]

  const p1SafetyActions = SAFETY_ACTIONS[p1.style].forOther(name2)
  const p2SafetyActions = SAFETY_ACTIONS[style2].forOther(n1())

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 16px;text-align:center;">
        <span class="hero__accent">Making each other feel safe</span>
        <h2>Your Safety Guide</h2>
        <p style="color:var(--charcoal-light);margin:8px 0 0;">Specific, loving guidance for how to help each other feel truly secure.</p>
      </div>

      <div class="card mt-8 card--sage">
        <div class="safety-person-section">
          <h3>For ${n1()} -- How to Help ${name2} Feel Safe</h3>
          <p style="color:var(--charcoal-light);font-size:0.9rem;margin:8px 0 16px;">Based on ${name2}'s ${STYLES[style2].descriptor} style</p>
          <ul class="safety-actions">
            ${p1SafetyActions.map(action => `
              <li><span class="action-icon">🌱</span>${action}</li>
            `).join('')}
          </ul>
        </div>
      </div>

      ${STATE.usePartner2 && p2.style ? `
      <div class="card mt-6 card--rose">
        <div class="safety-person-section">
          <h3>For ${name2} -- How to Help ${n1()} Feel Safe</h3>
          <p style="color:var(--charcoal-light);font-size:0.9rem;margin:8px 0 16px;">Based on ${n1()}'s ${STYLES[p1.style].descriptor} style</p>
          <ul class="safety-actions">
            ${p2SafetyActions.map(action => `
              <li><span class="action-icon">🌸</span>${action}</li>
            `).join('')}
          </ul>
        </div>
      </div>
      ` : ''}

      ${pairing ? `
      <div class="card mt-6 card--lavender">
        <h3 style="margin-bottom:20px;">Shared Safety Practices</h3>

        <div class="results-section">
          <div class="results-section__label">Your Weekly Practice</div>
          <div class="callout callout--sage">
            <p>${pairing.sharedPractice(n1(), name2)}</p>
          </div>
        </div>

        <div class="results-section mt-6">
          <div class="results-section__label">Your Repair Phrase</div>
          <div class="repair-phrase">
            <p style="font-size:0.85rem;color:var(--charcoal-light);">When things get hard between ${n1()} and ${name2}, try saying:</p>
            <p class="repair-phrase__quote">${pairing.repairPhrase(n1(), name2)}</p>
            <p style="font-size:0.8rem;color:var(--charcoal-light);font-style:italic;">Speak it slowly. Meaning it matters more than saying it perfectly.</p>
          </div>
        </div>

        <div class="results-section mt-6">
          <div class="results-section__label">A Grounding Practice</div>
          <div class="callout callout--lavender">
            <p><strong>When one of you feels dysregulated:</strong> Place one hand on your heart and one on your belly. Take three slow breaths together. Then one person says: "I'm here with you. We have time." Let the nervous system settle before any words of explanation.</p>
          </div>
        </div>
      </div>
      ` : ''}

      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:40px;">
        <button class="btn btn-primary" onclick="navigate('journal')">Journaling Exercises &rarr;</button>
        <button class="btn btn-ghost" onclick="navigate('dates')">&larr; Date Ideas</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
        <button class="btn btn-ghost" onclick="navigate('welcome')">← Beginning</button>
        <button class="btn btn-print btn-sm no-print" onclick="window.print()">🖨️ Print Safety Guide</button>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 7: JOURNAL ----

let journalCategory = 'self'

function buildJournal() {
  markComplete('journal')

  const categories = [
    { id: 'self',     label: 'Know Yourself', emoji: '🪞' },
    { id: 'partner',  label: 'Know Each Other', emoji: '💛' },
    { id: 'together', label: 'Grow Together', emoji: '🌱' },
    { id: 'repair',   label: 'Repair & Reset', emoji: '🕊️' },
  ]

  const prompts = JOURNAL_PROMPTS.filter(p => p.category === journalCategory)

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div style="padding:32px 0 16px;text-align:center;">
        <span class="hero__accent">Reflect. Discover. Grow.</span>
        <h2>Journaling Exercises</h2>
        <p style="color:var(--charcoal-light);margin:8px 0 0;">Take your time. Type your thoughts here or use these as prompts for a physical journal.</p>
      </div>

      <div class="journal-category-tabs mt-6">
        ${categories.map(cat => `
          <button class="tab-btn ${journalCategory === cat.id ? 'active' : ''}"
                  onclick="setJournalCategory('${cat.id}')">
            ${cat.emoji} ${cat.label}
          </button>
        `).join('')}
      </div>

      <div class="mt-4">
        ${prompts.map(p => {
          const saved = STATE.journalEntries[p.id] || ''
          return `
          <div class="journal-prompt-card">
            <div class="journal-prompt-card__tag">${categories.find(c => c.id === p.category).emoji} ${categories.find(c => c.id === p.category).label}</div>
            <p class="journal-prompt-card__prompt">${p.prompt}</p>
            ${p.subtext ? `<p style="font-size:0.85rem;color:var(--charcoal-light);font-style:italic;margin-bottom:16px;">${p.subtext}</p>` : ''}
            <textarea
              class="journal-textarea"
              placeholder="Write your thoughts here..."
              oninput="saveJournalEntry('${p.id}', this.value)"
            >${saved}</textarea>
            <div class="journal-actions">
              <button class="btn btn-ghost btn-sm no-print" onclick="clearJournalEntry('${p.id}')">Clear</button>
              <button class="btn btn-print btn-sm no-print" onclick="printPrompt('${p.id}')">🖨️ Print this prompt</button>
            </div>
          </div>
          `
        }).join('')}
      </div>

      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:40px;">
        <button class="btn btn-primary" onclick="navigate('dashboard')">Your Dashboard &rarr;</button>
        <button class="btn btn-ghost" onclick="navigate('safety')">&larr; Safety Guide</button>
        <button class="btn btn-ghost" onclick="navigate('welcome')">← Beginning</button>
      </div>
    </div>
  </div>
  `
}

// ---- SECTION 8: DASHBOARD ----

function buildDashboard() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2
  const completed = STATE.completedSections || []
  const journalCount = Object.values(STATE.journalEntries || {}).filter(v => v.trim()).length
  const savedDates = (STATE.savedDates || []).length

  const sections = [
    { id: 'setup',      icon: '👤', title: 'Names & Setup', sub: p1.name ? `${p1.name}${p2.name ? ' & ' + p2.name : ''}` : 'Not started', done: !!p1.name },
    { id: 'quiz',       icon: '📋', title: `${p1.name || 'Partner 1'}'s Quiz`, sub: p1.style ? `${STYLES[p1.style].descriptor}` : 'Not taken', done: !!p1.style },
    { id: 'quiz',       icon: '📋', title: `${p2.name || 'Partner 2'}'s Quiz`, sub: p2.style ? `${STYLES[p2.style].descriptor}` : 'Not taken', done: !!p2.style, skip: !STATE.usePartner2 },
    { id: 'results',    icon: '🎨', title: 'Style Results', sub: p1.style ? 'Completed' : 'Pending quiz', done: !!p1.style },
    { id: 'connection', icon: '🤝', title: 'Your Connection', sub: completed.includes('connection') ? 'Explored' : 'Pending', done: completed.includes('connection') },
    { id: 'dates',      icon: '💑', title: 'Date Ideas', sub: savedDates > 0 ? `${savedDates} saved` : 'Not explored', done: completed.includes('dates') },
    { id: 'safety',     icon: '🛡️', title: 'Safety Guide', sub: completed.includes('safety') ? 'Completed' : 'Not yet', done: completed.includes('safety') },
    { id: 'journal',    icon: '📓', title: 'Journaling', sub: journalCount > 0 ? `${journalCount} entries written` : 'Not started', done: journalCount > 0 },
  ].filter(s => !s.skip)

  const doneCount = sections.filter(s => s.done).length
  const totalCount = sections.length

  const milestones = []
  if (p1.style) milestones.push({ icon: '🌿', title: 'You know yourself better', text: `You've discovered your attachment style. That awareness is already changing things.` })
  if (p2.style && STATE.usePartner2) milestones.push({ icon: '💛', title: 'Two stories, explored with care', text: `Both of you have done the brave work of self-reflection. That matters enormously.` })
  if (completed.includes('safety')) milestones.push({ icon: '🛡️', title: 'You built a safety guide', text: `That means you've already taken one of the most loving steps a person can take -- learning how someone else needs to be loved.` })
  if (journalCount >= 3) milestones.push({ icon: '📓', title: "You're journaling with courage", text: `You've written ${journalCount} entries. That kind of honest reflection is rare and it will show up in your relationship.` })

  return `
  <div class="section-page fade-in">
    <div class="app-container">
      <div class="dashboard-header">
        <span class="hero__accent">Your home base</span>
        <h2>Your Journey, ${n1()}</h2>
        <p style="color:var(--charcoal-light);">Look at everything you've already discovered. This takes courage.</p>
        <div style="margin-top:20px;">
          <div class="quiz-progress-bar" style="max-width:300px;margin:0 auto;">
            <div class="quiz-progress-fill" style="width:${Math.round((doneCount/totalCount)*100)}%"></div>
          </div>
          <p style="font-size:0.82rem;color:var(--charcoal-light);margin-top:6px;">${doneCount} of ${totalCount} sections complete</p>
        </div>
      </div>

      <div class="progress-timeline">
        ${sections.map(s => `
          <div class="progress-item" onclick="navigate('${s.id}')" style="cursor:pointer;">
            <div class="progress-item__check ${s.done ? 'progress-item__check--done' : 'progress-item__check--pending'}">
              ${s.done ? '✓' : s.icon}
            </div>
            <div class="progress-item__info">
              <div class="progress-item__title">${s.title}</div>
              <div class="progress-item__sub">${s.sub}</div>
            </div>
            <span class="progress-item__action">${s.done ? 'Revisit' : 'Start'} &rarr;</span>
          </div>
        `).join('')}
      </div>

      ${milestones.length > 0 ? `
        <div class="section-divider mt-8"><span>Milestones</span></div>
        ${milestones.map(m => `
          <div class="milestone">
            <div class="milestone__icon">${m.icon}</div>
            <div class="milestone__text">
              <div class="milestone__title">${m.title}</div>
              <p>${m.text}</p>
            </div>
          </div>
        `).join('')}
      ` : ''}

      ${(STATE.savedDates || []).length > 0 ? `
        <div class="card mt-8 card--rose">
          <div class="results-section__label">Your Saved Date Ideas ❤️</div>
          <div class="saved-dates-grid mt-4">
            ${STATE.savedDates.map(name => `
              <div class="saved-date-chip">
                <span class="saved-date-chip__emoji">❤️</span>
                <span class="saved-date-chip__name">${name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="card mt-8" style="text-align:center;border:1px dashed rgba(155,107,138,0.3);">
        <h4 style="margin-bottom:12px;">Life changes, and so do we.</h4>
        <p style="color:var(--charcoal-light);margin-bottom:20px;font-size:0.9rem;">You can retake the quiz any time to see how you've grown. Your previous results are always saved.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="resetQuiz()">Retake the Quiz</button>
          ${!STATE.usePartner2 || !STATE.partner2.name ? `<button class="btn btn-rose btn-sm" onclick="addPartnerPrompt()">+ Add a Partner</button>` : ''}
          <button class="btn btn-ghost btn-sm" onclick="navigate('welcome')">Back to Beginning</button>
        </div>
      </div>

      <div class="card mt-6" style="background:linear-gradient(135deg,rgba(139,175,141,0.08),rgba(184,169,201,0.08));border:1px solid rgba(139,175,141,0.2);text-align:center;">
        <h4 style="margin-bottom:8px;">🖨️ Save or Print Your Complete Guide</h4>
        <p style="color:var(--charcoal-light);font-size:0.88rem;margin-bottom:16px;">This will open a print-friendly version of everything: your quiz answers, both style cards, your pairing analysis, all date ideas, your safety guide, and your journal entries.</p>
        <div style="background:rgba(155,107,138,0.08);border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:16px;font-size:0.85rem;color:var(--charcoal);">
          <strong>Tip: Save as PDF</strong> -- In the print dialog, choose <em>"Save as PDF"</em> (instead of a printer) to create a beautiful digital copy you can keep forever. On iPhone, tap the Share button and choose "Print," then pinch outward on the preview to save as PDF.
        </div>
        <button class="btn btn-primary no-print" onclick="printCompleteGuide()">🖨️ Print Complete Guide</button>
      </div>

      <div style="text-align:center;margin-top:48px;padding-bottom:32px;">
        <p style="font-family:var(--font-accent);font-size:1.3rem;color:var(--mauve);">You are doing something brave.</p>
        <p style="color:var(--charcoal-light);font-size:0.9rem;margin-top:8px;">Understanding is where it begins. Keep going.</p>
      </div>
    </div>
  </div>
  `
}

// ---- Event Handlers ----

function updateName(which, value) {
  if (which === 1) { STATE.partner1.name = value }
  else { STATE.partner2.name = value }
  saveState(STATE)
  // Update just the nav avatars without losing input focus
  const navEl = document.querySelector('.app-nav__inner')
  if (navEl) {
    const p1Initial = (STATE.partner1.name || 'You').charAt(0).toUpperCase()
    // Update avatar dots text if visible
    document.querySelectorAll('.avatar-dot').forEach(dot => {
      if (which === 1 && dot.dataset.partner === '1') dot.textContent = p1Initial
      if (which === 2 && dot.dataset.partner === '2') dot.textContent = (STATE.partner2.name || 'P').charAt(0).toUpperCase()
    })
  }
}

function renderNav() {
  // Full re-render handles nav update
  render()
}

function setColor(which, value) {
  STATE[which].color = value
  saveState(STATE)
  render()
}

function setUsePartner2(val) {
  STATE.usePartner2 = val
  saveState(STATE)
  render()
}

function startQuiz(taker) {
  STATE.quizTaker = taker
  quizQuestion = 0
  saveState(STATE)
  navigate('quiz')
}

function selectAnswer(qId, val) {
  const partner = STATE.quizTaker === 1 ? STATE.partner1 : STATE.partner2
  partner.answers[qId] = val
  saveState(STATE)
  // Re-render quiz card area only for snappiness
  const container = document.querySelector('.quiz-container')
  if (container) {
    const q = QUESTIONS[quizQuestion]
    const selected = partner.answers[q.id]
    // Update scale options
    document.querySelectorAll('.quiz-scale__option').forEach((el, i) => {
      el.classList.toggle('selected', (i + 1) === val)
    })
    // Enable/disable next button
    const nextBtn = document.querySelector('.quiz-nav button:last-child')
    if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1' }
  }
}

function quizNext() {
  if (quizQuestion < QUESTIONS.length - 1) {
    quizQuestion++
    render()
  }
}

function quizPrev() {
  if (quizQuestion > 0) {
    quizQuestion--
    render()
  }
}

function submitQuiz() {
  const partner = STATE.quizTaker === 1 ? STATE.partner1 : STATE.partner2
  const scores = calculateScores(partner.answers)
  partner.scores = scores
  partner.style = getPrimaryStyle(scores)
  markComplete('quiz')
  saveState(STATE)
  STATE.resultsTab = STATE.quizTaker
  navigate('results')
}

function setResultsTab(tab) {
  STATE.resultsTab = tab
  saveState(STATE)
  // Just re-render results section
  const section = document.querySelector('.section-page')
  if (section) section.outerHTML = buildResults()
  render()
}

function toggleDate(name) {
  const saved = STATE.savedDates || []
  const idx = saved.indexOf(name)
  if (idx >= 0) saved.splice(idx, 1)
  else saved.push(name)
  STATE.savedDates = saved
  saveState(STATE)
  // Toggle heart button in DOM
  const btns = document.querySelectorAll('.date-card__heart')
  btns.forEach(btn => {
    const card = btn.closest('.date-card')
    const cardName = card.querySelector('.date-card__name').textContent
    if (cardName === name) {
      const isNowHearted = saved.includes(name)
      btn.classList.toggle('hearted', isNowHearted)
      btn.textContent = isNowHearted ? '❤️' : '🤍'
    }
  })
  // Update saved section
  const savedSection = document.querySelector('.card--rose .saved-dates-grid')
  if (saved.length > 0) {
    if (savedSection) {
      savedSection.innerHTML = saved.map(n => `
        <div class="saved-date-chip">
          <span class="saved-date-chip__emoji">❤️</span>
          <span class="saved-date-chip__name">${n}</span>
        </div>`).join('')
    } else {
      // Re-render to show saved section
      const datesPage = document.querySelector('.section-page')
      if (datesPage) datesPage.innerHTML = buildDates().replace('<div class="section-page fade-in">', '').replace(/<\/div>\s*$/, '')
      render()
    }
  }
}

function setJournalCategory(cat) {
  journalCategory = cat
  render()
}

function saveJournalEntry(id, value) {
  if (!STATE.journalEntries) STATE.journalEntries = {}
  STATE.journalEntries[id] = value
  saveState(STATE)
}

function clearJournalEntry(id) {
  STATE.journalEntries[id] = ''
  saveState(STATE)
  const ta = document.querySelector(`[oninput="saveJournalEntry('${id}', this.value)"]`)
  if (ta) ta.value = ''
}

function printPrompt(id) {
  window.print()
}

function resetQuiz() {
  if (confirm('This will clear your quiz answers so you can retake them. Your journal entries and saved dates will be kept. Continue?')) {
    STATE.partner1.answers = {}
    STATE.partner1.style = null
    STATE.partner1.scores = null
    STATE.partner2.answers = {}
    STATE.partner2.style = null
    STATE.partner2.scores = null
    STATE.completedSections = []
    saveState(STATE)
    navigate('quiz')
  }
}

function resetAll() {
  if (confirm('Start completely fresh? This will clear all your progress, names, and quiz answers. Your browser data will be reset.')) {
    localStorage.removeItem(STORAGE_KEY)
    STATE = defaultState()
    navigate('welcome')
  }
}

function addPartnerPrompt() {
  // Enable partner mode and send to setup
  STATE.usePartner2 = true
  saveState(STATE)
  navigate('setup')
}

// ---- Print Complete Guide ----
function printCompleteGuide() {
  const p1 = STATE.partner1
  const p2 = STATE.partner2
  const style2Key = (STATE.usePartner2 && p2.style) ? p2.style : p1.style
  const pairingKey = p1.style ? getPairingKey(p1.style, style2Key) : null
  const pairing = pairingKey ? PAIRINGS[pairingKey] : null
  const name2 = STATE.usePartner2 ? n2() : 'your partner'

  const printWindow = window.open('', '_blank')
  if (!printWindow) { window.print(); return }

  const answerRows = (person, label) => {
    if (!person.answers || !Object.keys(person.answers).length) return ''
    return `<div class="print-section"><h3>${label}'s Quiz Answers</h3>` +
      QUESTIONS.map(q => {
        const val = person.answers[q.id] || 0
        return `<div class="qa-row"><span class="qa-q">${q.text}</span><span class="qa-a">${val} -- ${SCALE_LABELS[val] || 'Not answered'}</span></div>`
      }).join('') + `</div>`
  }

  const styleSection = (person, partnerName) => {
    if (!person.style) return ''
    const s = STYLES[person.style]
    const name = person.name || 'You'
    const pct = getPercentages(person.scores || {})
    return `
      <div class="print-section">
        <h2>${name}'s Attachment Style: ${s.icon} ${s.descriptor} (${s.name})</h2>
        ${s.summary.map(para => `<p>${para.replace('{name}', name)}</p>`).join('')}
        <h3>Superpowers</h3><p>${s.superpowers.join(', ')}</p>
        <h3>Growth Edge</h3><p>${s.growthEdge}</p>
        <h3>What ${name} Needs to Feel Safe</h3>
        <ul>${s.needs.map(n => `<li>${n}</li>`).join('')}</ul>
        <h3>Style Breakdown</h3>
        <p>Secure: ${pct.secure}% | Anxious: ${pct.anxious}% | Avoidant: ${pct.avoidant}% | Disorganized: ${pct.disorganized}%</p>
        <h3>A Note to ${partnerName}</h3>
        <p><em>${s.noteToPartner(name, partnerName)}</em></p>
      </div>
    `
  }

  const pairingSection = () => {
    if (!pairing || !p1.style) return ''
    return `
      <div class="print-section">
        <h2>Your Connection: ${pairing.name}</h2>
        <p><em>${pairing.tagline}</em></p>
        <h3>How You Connect</h3><p>${pairing.howYouConnect}</p>
        <h3>Where You May Struggle</h3><p>${pairing.whereYouStruggle}</p>
        <h3>How to Build a Bridge</h3>
        <ul>${pairing.bridgeActions.map(a => `<li>${a}</li>`).join('')}</ul>
        <h3>Your Shared Practice</h3><p>${pairing.sharedPractice(n1(), name2)}</p>
        <h3>Your Repair Phrase</h3><p><em>${pairing.repairPhrase(n1(), name2)}</em></p>
      </div>
    `
  }

  const datesSection = () => {
    if (!pairing) return ''
    const comfortLabels = { lowkey: 'Low-Key', moderate: 'Moderate', adventure: 'Adventure' }
    return `
      <div class="print-section">
        <h2>Date Ideas for ${n1()}${STATE.usePartner2 && p2.name ? ' & ' + p2.name : ''}</h2>
        ${pairing.dates.map(d => `
          <div class="date-print">
            <strong>${d.emoji} ${d.name}</strong> (${comfortLabels[d.comfort]})<br>
            ${d.desc}<br>
            <em>Why this works: ${d.why}</em>
          </div>
        `).join('')}
        ${(STATE.savedDates || []).length > 0 ? `<p><strong>Your favorites:</strong> ${STATE.savedDates.join(', ')}</p>` : ''}
      </div>
    `
  }

  const safetySection = () => {
    if (!p1.style) return ''
    const sActions = SAFETY_ACTIONS[p1.style].forOther(name2)
    const s2Actions = (STATE.usePartner2 && p2.style) ? SAFETY_ACTIONS[p2.style].forOther(n1()) : []
    return `
      <div class="print-section">
        <h2>Safety Guide</h2>
        <h3>For ${n1()} -- How to Help ${name2} Feel Safe</h3>
        <ul>${sActions.map(a => `<li>${a}</li>`).join('')}</ul>
        ${s2Actions.length ? `<h3>For ${name2} -- How to Help ${n1()} Feel Safe</h3><ul>${s2Actions.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}
        ${pairing ? `
          <h3>Weekly Practice</h3><p>${pairing.sharedPractice(n1(), name2)}</p>
          <h3>Repair Phrase</h3><p><em>${pairing.repairPhrase(n1(), name2)}</em></p>
          <h3>Grounding Practice</h3><p>When one of you feels dysregulated: Place one hand on your heart and one on your belly. Take three slow breaths together. Then one person says: "I'm here with you. We have time."</p>
        ` : ''}
      </div>
    `
  }

  const journalSection = () => {
    const entries = STATE.journalEntries || {}
    const written = JOURNAL_PROMPTS.filter(p => entries[p.id] && entries[p.id].trim())
    if (!written.length) return ''
    const catLabels = { self: 'Know Yourself', partner: 'Know Each Other', together: 'Grow Together', repair: 'Repair & Reset' }
    return `
      <div class="print-section">
        <h2>Journal Entries</h2>
        ${written.map(p => `
          <div class="journal-print">
            <p class="prompt-label">${catLabels[p.category]}</p>
            <p class="prompt-q"><em>${p.prompt}</em></p>
            <p class="prompt-a">${entries[p.id].replace(/\n/g, '<br>')}</p>
          </div>
        `).join('')}
      </div>
    `
  }

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Connected -- Complete Attachment Guide for ${n1()}${STATE.usePartner2 && p2.name ? ' & ' + p2.name : ''}</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
      body { font-family: 'DM Sans', sans-serif; color: #3D3D3D; max-width: 800px; margin: 0 auto; padding: 32px 24px; background: white; line-height: 1.7; }
      h1, h2, h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; }
      h1 { font-size: 2.2rem; color: #9B6B8A; text-align: center; margin-bottom: 4px; }
      h2 { font-size: 1.6rem; color: #3D3D3D; margin: 28px 0 10px; border-bottom: 1px solid #e8e0d8; padding-bottom: 6px; }
      h3 { font-size: 1.15rem; color: #6A9370; margin: 18px 0 6px; }
      p { margin: 0 0 10px; font-size: 0.95rem; }
      ul { padding-left: 20px; margin: 8px 0; }
      li { margin-bottom: 6px; font-size: 0.93rem; }
      .cover { text-align: center; padding: 40px 0 32px; border-bottom: 2px solid #8BAF8D; margin-bottom: 32px; }
      .tagline { font-style: italic; color: #6B6B6B; font-size: 1.05rem; }
      .print-section { margin-bottom: 40px; page-break-inside: avoid; }
      .qa-row { display: flex; gap: 16px; padding: 8px 0; border-bottom: 1px solid #f0ebe3; font-size: 0.88rem; }
      .qa-q { flex: 1; color: #3D3D3D; }
      .qa-a { width: 200px; color: #6A9370; font-weight: 500; flex-shrink: 0; }
      .date-print { padding: 12px 0; border-bottom: 1px solid #f0ebe3; font-size: 0.9rem; }
      .journal-print { padding: 14px 0; border-bottom: 1px solid #f0ebe3; }
      .prompt-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #8BAF8D; font-weight: 600; margin-bottom: 4px; }
      .prompt-q { font-style: italic; color: #3D3D3D; font-size: 1rem; margin-bottom: 8px; }
      .prompt-a { background: #FAF7F2; padding: 10px 14px; border-radius: 6px; font-size: 0.9rem; }
      .pdf-tip { background: #f5f0f9; border: 1px solid #B8A9C9; border-radius: 8px; padding: 14px 18px; margin: 0 0 32px; font-size: 0.87rem; }
      @media print { .pdf-tip { display: none; } }
    </style>
  </head>
  <body>
    <div class="cover">
      <h1>Connected</h1>
      <p class="tagline">An Attachment Style Guide for ${n1()}${STATE.usePartner2 && p2.name ? ' & ' + p2.name : ''}</p>
      <p style="font-size:0.82rem;color:#9B7D30;margin-top:8px;">Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
    <div class="pdf-tip">
      <strong>Save as PDF:</strong> In the print dialog, choose "Save as PDF" to create a digital copy. On iPhone: tap Share, then "Print," then pinch outward on the preview.
    </div>
    ${answerRows(p1, p1.name || 'Your')}
    ${STATE.usePartner2 && p2.name ? answerRows(p2, p2.name) : ''}
    ${styleSection(p1, name2)}
    ${STATE.usePartner2 && p2.style ? styleSection(p2, n1()) : ''}
    ${pairingSection()}
    ${datesSection()}
    ${safetySection()}
    ${journalSection()}
    <div style="text-align:center;padding:40px 0 0;border-top:1px solid #e8e0d8;margin-top:40px;">
      <p style="font-family:Georgia,serif;font-style:italic;font-size:1.2rem;color:#9B6B8A;">You are doing something brave.</p>
      <p style="font-size:0.85rem;color:#6B6B6B;">Understanding is where it begins. Keep going.</p>
    </div>
  </body>
  </html>`

  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => printWindow.print(), 500)
}

// ---- Expose globals ----
window.navigate = navigate
window.updateName = updateName
window.setColor = setColor
window.setUsePartner2 = setUsePartner2
window.startQuiz = startQuiz
window.selectAnswer = selectAnswer
window.quizNext = quizNext
window.quizPrev = quizPrev
window.submitQuiz = submitQuiz
window.setResultsTab = setResultsTab
window.toggleDate = toggleDate
window.setJournalCategory = setJournalCategory
window.saveJournalEntry = saveJournalEntry
window.clearJournalEntry = clearJournalEntry
window.printPrompt = printPrompt
window.resetQuiz = resetQuiz
window.resetAll = resetAll
window.addPartnerPrompt = addPartnerPrompt
window.printCompleteGuide = printCompleteGuide
window.toggleAvatarMenu = toggleAvatarMenu
window.closeAvatarMenu = closeAvatarMenu

// ---- Init ----
document.addEventListener('DOMContentLoaded', render)
