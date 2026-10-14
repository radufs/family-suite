/* Brief ideas rotate by Copenhagen calendar day; they do not add entries to the hack list. */
const DAILY_LONGEVITY_IDEAS = [
  'Practise standing on one leg briefly beside a firm support.',
  'Add a few slow, controlled direction changes to a comfortable walk.',
  'Try a short beginner tai chi session focused on balance.',
  'Try a few heel-to-toe steps alongside a stable support.',
  'Give your shoulders a gentle stretch within a comfortable range.',
  'Move your neck gently through a comfortable range after desk work.',
  'Move your ankles gently while seated during a break.',
  'Add a gentle calf stretch to your comfortable post-ride routine.',
  'Brush with fluoride toothpaste twice today.',
  'Clean between your teeth with floss or an interdental brush.',
  'Ask your dentist which interdental tool suits your teeth.',
  'Replace a worn toothbrush to make daily cleaning easier.',
  'Turn your headphones down a little to protect your hearing.',
  'Use appropriate hearing protection for a noisy workshop task.',
  'Move farther from a loud speaker at your next event.',
  'Take a quiet break from prolonged loud sound.',
  'Check the UV forecast before planning a long outdoor activity.',
  'Choose a shady route when the sun is strong.',
  'Keep a protective hat handy for sunny outdoor days.',
  'Use broad-spectrum sunscreen on exposed skin when spending time in the sun.',
  'Arrange a relaxed catch-up with someone you have not seen lately.',
  'Try a walking group that adds conversation to your exercise.',
  'Invite a colleague to share an enjoyable hobby outside work.',
  'Explore a small volunteering opportunity that interests you.',
  'Practise one new Danish phrase aloud today.',
  'Spend ten minutes learning a new practical skill.',
  'Play a short strategy game with your family.',
  'Explain one thing you learned today to someone else.'
];
const DAILY_LONGEVITY_SOURCES=[
  'https://www.nia.nih.gov/health/four-types-exercise-can-improve-your-health-and-physical-ability',
  'https://www.nia.nih.gov/health/four-types-exercise-can-improve-your-health-and-physical-ability',
  'https://www.nidcr.nih.gov/health-info/oral-hygiene',
  'https://www.nidcd.nih.gov/health/how-loud-too-loud',
  'https://www.cdc.gov/skin-cancer/sun-safety/index.html',
  'https://www.nia.nih.gov/health/loneliness-and-social-isolation/loneliness-and-social-isolation-tips-staying-connected',
  'https://www.nia.nih.gov/health/brain-health/cognitive-health-and-older-adults'
];
function longevityDateKey(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Copenhagen',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
}
function dailyLongevityIdea(now = new Date()) {
  const key=longevityDateKey(now);
  const [y,m,d]=key.split('-').map(Number);
  const day=Math.floor(Date.UTC(y,m-1,d)/86400000);
  return DAILY_LONGEVITY_IDEAS[((day % DAILY_LONGEVITY_IDEAS.length)+DAILY_LONGEVITY_IDEAS.length)%DAILY_LONGEVITY_IDEAS.length];
}
function dailyLongevitySource(now=new Date()){
  const index=DAILY_LONGEVITY_IDEAS.indexOf(dailyLongevityIdea(now));
  return DAILY_LONGEVITY_SOURCES[Math.floor(index/4)];
}
function refreshLongevityIdea(){
  document.querySelectorAll('[data-daily-longevity]').forEach(el=>el.textContent=dailyLongevityIdea());
  document.querySelectorAll('[data-daily-longevity-source]').forEach(el=>el.href=dailyLongevitySource());
}
refreshLongevityIdea();
setInterval(refreshLongevityIdea,60000);
