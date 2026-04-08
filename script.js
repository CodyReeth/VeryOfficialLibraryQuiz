const questions = [
    { text: "I consider myself a morning person.", key: null },
    { text: "I have strong opinions about font choices.", key: null },
    { text: "I always finish my homework before going out.", key: null },
    { text: "I'd rather study with a group than alone.", key: "social" },
    { text: "I think the dining halls are underrated.", key: null },
    { text: "I've pulled an all-nighter at least once this semester.", key: null },
    { text: "I enjoy subjects where there's one correct answer.", key: "stem" },
    { text: "I judge people by their laptop stickers.", key: null },
    { text: "I know what I'm doing after graduation.", key: null },
    { text: "Coffee is a personality trait.", key: null },
    { text: "I'd rather work on a passion project than study for an exam.", key: "passion" },
    { text: "I have a go-to seat and I will fight for it.", key: null },
];

const libraries = {
    stacks: {
        name: "The Stacks",
        emoji: "\u{1F3DB}\u{FE0F}",
        tagline: "The Academic Hermit",
        color: "#FFD200",
        description: "You haven't seen natural light since syllabus week and honestly? You don't miss it. Your social life is a Wikipedia rabbit hole at 3am. You have a favorite study carrel and you've considered leaving a toothbrush there. People think you're mysterious \u2014 really you just forgot how to make small talk. Your GPA is immaculate. Your vitamin D levels are not.",
        stats: [
            { value: "0.3", label: "Hours of sunlight/week" },
            { value: "3.97", label: "GPA" },
            { value: "2", label: "Friends (both online)" },
        ],
    },
    carlson: {
        name: "Carlson",
        emoji: "\u26A1",
        tagline: "The STEM Warrior",
        color: "#4a90d9",
        description: "You've been here since 6am and you want everyone to know it. Your backpack weighs more than some freshmen. You have a ranking of every outlet in the building by proximity to a table. You say \"it's not that hard\" about things that are, in fact, very hard. Your blood type is Monster Energy. You will absolutely correct someone's math on a whiteboard you weren't invited to.",
        stats: [
            { value: "14", label: "Hours in Carlson today" },
            { value: "6", label: "Energy drinks consumed" },
            { value: "\u221E", label: "Unsolicited study tips given" },
        ],
    },
    gleason: {
        name: "Gleason",
        emoji: "\u{1F319}",
        tagline: "The Social Studier",
        color: "#50c878",
        description: "You told your roommate you'd be at the library all night. Technically true. You've been here for 4 hours and opened your laptop twice \u2014 once to check your playlist, once to open Blackboard and double check that there's still time. You know everyone on your floor of Gleason by name, major, and relationship status. Your study group is 8 people and a group therapy session. You'll cram everything into the last 45 minutes and somehow pass.",
        stats: [
            { value: "7%", label: "Time actually studying" },
            { value: "47", label: "People greeted on entry" },
            { value: "B-", label: "Average grade (vibes-based)" },
        ],
    },
    izone: {
        name: "iZone",
        emoji: "\u{1F680}",
        tagline: "The Disruptor",
        color: "#ff6b6b",
        description: "You're not studying \u2014 you're \"building.\" Your LinkedIn is more active than your social life. You've pitched a startup idea to at least 3 people today and it's not even noon. You use words like \"synergy,\" \"pivot,\" and \"minimum viable product\" in casual conversation. Your to-do list app that's going to \"change productivity forever\" is actually just a worse version of Apple Reminders. But the hustle is real and honestly? Respect.",
        stats: [
            { value: "12", label: "Startup ideas this week" },
            { value: "0", label: "Launched products" },
            { value: "500+", label: "LinkedIn connections" },
        ],
    },
    poa: {
        name: "POA",
        emoji: "\u{1F52D}",
        tagline: "The Enlightened One",
        color: "#b388ff",
        description: "You once corrected a professor and were right. You've explained your research to your family 11 times and they still think you \"do something with lasers.\" You have opinions about telescope mirrors that you will share unprompted. Your idea of a fun Friday night is reading papers that haven't been peer-reviewed yet. You don't study \u2014 you \"investigate.\" The universe is your passion and your curse.",
        stats: [
            { value: "3", label: "Professors corrected" },
            { value: "1", label: "Friends who get your thesis" },
            { value: "42", label: "Answer to everything" },
        ],
    },
    artmusic: {
        name: "Art & Music Library",
        emoji: "\u{1F3A8}",
        tagline: "The Misunderstood Creative",
        color: "#ff9a76",
        description: "You didn't choose this library \u2014 it chose you. You're wearing something no one else could pull off and you know it. You have headphones on but they're playing something you'd describe as \"experimental.\" You've said \"you wouldn't get it\" at least once today. Your notes are color-coded not for efficiency but for ~aesthetic~. Or maybe you're just here because it's the warmest library.",
        stats: [
            { value: "0", label: "Mainstream songs in rotation" },
            { value: "\u221E", label: "Unfinished creative projects" },
            { value: "$$$", label: "Spent on supplies this month" },
        ],
    },
};

const redHerringRoasts = {
    0: { // morning person
        "-2": "You strongly disagree that you're a morning person. We didn't need a quiz to know that. Your alarm has given up on you.",
        "-1": "You slightly disagree about being a morning person. So you're not a morning person but you want credit for considering it.",
        "0": "You went neutral on being a morning person. You couldn't even commit to having an opinion about waking up. Incredible.",
        "1": "You slightly agree you're a morning person. You set one alarm and hit snooze twice and call that 'being a morning person.'",
        "2": "You strongly agree you're a morning person. Congrats. Nobody asked and this question didn't count for anything.",
    },
    1: { // font choices
        "-2": "You strongly disagree about having font opinions. You probably use Comic Sans unironically and sleep fine at night.",
        "-1": "You slightly disagree about font opinions. You have one but you're too embarrassed to admit it. It's okay. We all know it's Papyrus.",
        "0": "You went neutral on font opinions. The most aggressively beige answer possible. You probably use whatever the default is.",
        "1": "You slightly agree about having font opinions. You've definitely typed a paper in something other than Times New Roman and felt edgy about it.",
        "2": "You strongly agree about having font opinions. You spent 20 minutes on this answer and it meant absolutely nothing.",
    },
    2: { // homework before going out
        "-2": "You strongly disagree about finishing homework first. Your GPA is a vibe and your professors are concerned.",
        "-1": "You slightly disagree about homework first. You'll 'do it later' and we both know how that ends.",
        "0": "Neutral on homework before going out? You're the person who brings a textbook to the party and opens it zero times.",
        "1": "You slightly agree you finish homework first. Sometimes. When the assignment is easy. And there's nothing else to do.",
        "2": "You strongly agree you finish homework first. You put real thought into this answer and it did literally nothing. That's kind of poetic actually.",
    },
    4: { // dining halls
        "-2": "You strongly disagree that dining halls are underrated. You have passionate opinions about institutional food and none of them mattered here.",
        "-1": "You slightly disagree about dining halls. You've accepted your fate but you're not happy about it. This question was meaningless, much like dinner tonight.",
        "0": "Neutral on dining halls. You eat there but you won't talk about it. Like a dining hall witness protection program.",
        "1": "You slightly agree dining halls are underrated. You've found the one good station and you guard that knowledge with your life. Also this didn't count.",
        "2": "You strongly agree dining halls are underrated. You genuinely thought this would affect your result. It didn't. But we respect the dining hall advocacy.",
    },
    5: { // all-nighter
        "-2": "You strongly disagree about pulling all-nighters. Either you have incredible time management or you're lying. This question was fake either way.",
        "-1": "You slightly disagree about all-nighters. You've stayed up until 2am and called it 'basically an all-nighter' to your friends.",
        "0": "Neutral on all-nighters? How do you go neutral on this? You either have or you haven't. This indecisiveness is concerning.",
        "1": "You slightly agree about all-nighters. One time. It was finals. You still talk about it. This question didn't count.",
        "2": "You strongly agree about all-nighters. You're proud of your sleep deprivation. That's not the flex you think it is, and also it was irrelevant.",
    },
    7: { // laptop stickers
        "-2": "You strongly disagree about judging laptop stickers. Your laptop is probably naked. Cold. Undecorated. Like your personality.",
        "-1": "You disagree about judging stickers. You say you don't judge but you absolutely noticed the guy with the 'Live Laugh Code' sticker.",
        "0": "Neutral on laptop stickers. You have one sticker from orientation and you never thought about it again. This question was also forgotten.",
        "1": "You slightly agree about judging stickers. You've made at least one friend based entirely on a shared sticker. This didn't affect your result at all.",
        "2": "You strongly agree about judging laptop stickers. You looked at someone's laptop, saw a Vim sticker, and decided their entire personality. This question was decoration, just like those stickers.",
    },
    8: { // after graduation
        "-2": "You strongly disagree about knowing your post-grad plans. The existential dread is real. Also this question was completely fake. Just like your five-year plan.",
        "-1": "You slightly disagree about post-grad plans. You have a vague idea that involves 'figuring it out.' This question was as directionless as your career path.",
        "0": "Neutral on post-grad plans. You're not panicking but you're not not panicking. This question didn't count, much like your LinkedIn profile.",
        "1": "You slightly agree you know your plans. You have a Google Doc titled 'Life Plan' with three bullet points from sophomore year. This didn't matter.",
        "2": "You strongly agree you know your post-grad plans. You put genuine emotional energy into this answer and it counted for absolutely nothing. Welcome to adulthood.",
    },
    9: { // coffee personality
        "-2": "You strongly disagree that coffee is a personality trait. You're either a tea person or a psychopath. This question was decaf — completely pointless.",
        "-1": "You slightly disagree about coffee as personality. You drink it but you don't make it your whole identity. Restraint. This was still meaningless though.",
        "0": "Neutral on coffee as a personality trait. You have no opinion on the most universally opinionated topic on campus. Fascinating. And useless.",
        "1": "You slightly agree coffee is a personality trait. Your Starbucks order is 'medium coffee' and you think that counts. This didn't count either.",
        "2": "You strongly agree coffee is a personality trait. Your blood is 40% cold brew and you've told everyone within earshot. This question did nothing but we already knew everything about you.",
    },
    11: { // go-to seat
        "-2": "You strongly disagree about having a go-to seat. You're a free spirit. A wanderer. Also slightly suspicious. This question was as meaningless as your seating arrangement.",
        "-1": "You slightly disagree about a go-to seat. You have preferences but you won't fight for them. You'll just seethe quietly. This didn't count.",
        "0": "Neutral on having a go-to seat. You sit wherever. You're the human equivalent of a default setting. This question was also default: useless.",
        "1": "You slightly agree about a go-to seat. You have a spot but you'll give it up if someone's there. Pushover energy. Also irrelevant.",
        "2": "You strongly agree about having a go-to seat. You've made eye contact with someone in YOUR seat and considered violence. This question meant nothing but your territorial instincts are noted.",
    },
};

let currentQuestion = 0;
let answers = {};
let allAnswers = [];

const landingScreen = document.getElementById("landing");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");

const beginBtn = document.getElementById("begin-btn");
const nextBtn = document.getElementById("next-btn");
const retakeBtn = document.getElementById("retake-btn");
const slider = document.getElementById("slider");
const questionText = document.getElementById("question-text");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    slider.value = 0;
    progressFill.style.width = ((currentQuestion + 1) / questions.length * 100) + "%";
    progressText.textContent = (currentQuestion + 1) + " / " + questions.length;
}

function calculateResult() {
    const social = answers.social || 0;
    const stem = answers.stem || 0;
    const passion = answers.passion || 0;

    // Both axes neutral — use tiebreaker only
    if (social === 0 && stem === 0) {
        if (passion > 0) return "izone";
        if (passion < 0) return "stacks";
        return "carlson";
    }

    // Social axis neutral — tiebreaker resolves
    if (social === 0) {
        if (stem > 0) {
            if (passion > 0) return "izone";
            if (passion < 0) return "poa";
            return "carlson";
        } else {
            if (passion > 0) return "artmusic";
            if (passion < 0) return "stacks";
            return "gleason";
        }
    }

    // STEM axis neutral — tiebreaker resolves
    if (stem === 0) {
        if (social > 0) {
            if (passion > 0) return "izone";
            return "gleason";
        } else {
            if (passion > 0) return "artmusic";
            if (passion < 0) return "stacks";
            return "poa";
        }
    }

    // Both axes have clear values — direct grid lookup
    if (social > 0 && stem > 0) return "izone";
    if (social > 0 && stem < 0) return "gleason";
    if (social < 0 && stem > 0) return "poa";
    if (social < 0 && stem < 0) return "stacks";

    return "carlson";
}

function showResult() {
    const resultKey = calculateResult();
    const lib = libraries[resultKey];

    document.getElementById("result-card").style.setProperty("--result-color", lib.color);
    document.getElementById("result-emoji").textContent = lib.emoji;
    document.getElementById("result-name").textContent = lib.name;
    document.getElementById("result-tagline").textContent = lib.tagline;
    document.getElementById("result-description").textContent = lib.description;

    const statsGrid = document.getElementById("stats-grid");
    statsGrid.innerHTML = lib.stats.map(s =>
        '<div class="stat-card">' +
            '<div class="stat-value">' + s.value + '</div>' +
            '<div class="stat-label">' + s.label + '</div>' +
        '</div>'
    ).join("");

    // Pick a random red herring to roast
    const herringIndices = Object.keys(redHerringRoasts).map(Number);
    const nonNeutral = herringIndices.filter(i => allAnswers[i] !== 0);
    const pool = nonNeutral.length > 0 ? nonNeutral : herringIndices;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const val = allAnswers[picked];
    const labels = { "-2": "Strongly Disagree", "-1": "Disagree", "0": "Neutral", "1": "Agree", "2": "Strongly Agree" };

    document.getElementById("red-herring-title").textContent = "This question was completely meaningless";
    document.getElementById("red-herring-question").textContent = '"' + questions[picked].text + '"';
    document.getElementById("red-herring-answer").textContent = "Your answer: " + labels[val];
    document.getElementById("red-herring-roast").textContent = redHerringRoasts[picked][val];

    showScreen(resultScreen);
}

beginBtn.addEventListener("click", () => {
    currentQuestion = 0;
    answers = {};
    allAnswers = [];
    showScreen(quizScreen);
    loadQuestion();
});

nextBtn.addEventListener("click", () => {
    const q = questions[currentQuestion];
    const val = parseInt(slider.value);
    allAnswers.push(val);
    if (q.key) {
        answers[q.key] = val;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

retakeBtn.addEventListener("click", () => {
    showScreen(landingScreen);
});
