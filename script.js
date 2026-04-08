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
        "-2": "You sat there and carefully moved that slider all the way to Strongly Disagree for a question about being a morning person. That question did nothing. It was filler. You agonized over your sleep schedule for a website that threw your answer directly into the garbage. Your alarm clock is embarrassed for you.",
        "-1": "You nudged the slider one tick toward 'not a morning person' like you were making some nuanced philosophical statement. This question was a decoy. You could have picked anything. You could have licked the screen. Same outcome.",
        "0": "You left the slider on Neutral for the morning person question. You couldn't even muster an opinion about what time you wake up. This question was fake and somehow you still found the most boring possible answer to it.",
        "1": "You slightly agreed that you're a morning person. You thought that was a meaningful data point about your personality. It wasn't. This question existed purely to waste your time, and brother, it worked.",
        "2": "Strongly Agree on being a morning person. You dragged that slider with conviction. You felt something. You thought 'yes, this defines me.' It defined nothing. You just told a fake survey you wake up early and it couldn't have cared less.",
    },
    1: { // font choices
        "-2": "You strongly disagreed about having font opinions. You answered a question about FONTS. On a LIBRARY QUIZ. And it didn't even matter. You have no font opinions and also no results from this question. You have nothing.",
        "-1": "You slightly disagreed about fonts. You were cautious. Measured. You thought 'I don't want to overcommit on the font question.' There was no font question. There was a trap and you walked into it thoughtfully.",
        "0": "Neutral on font opinions. You saw a question about fonts on a library personality quiz and your brain said 'I will engage with this seriously.' It was a fake question. The fonts won.",
        "1": "You slightly agreed you have font opinions. You do, don't you. You've gotten into an argument about serif vs sans-serif. You've called a font 'clean.' This question was completely meaningless but it exposed you anyway.",
        "2": "You STRONGLY AGREE you have font opinions. You moved that slider with the passion of someone who has cried over kerning. This question was invented to waste exactly your kind of person's time. Mission accomplished.",
    },
    2: { // homework before going out
        "-2": "You strongly disagreed about finishing homework before going out. You answered that with your whole chest like it was a personality trait. It was a throwaway question. Your homework is still not done and now this quiz has also failed you.",
        "-1": "You slightly disagreed. You wanted to seem fun but responsible. A little wild but not reckless. You calibrated your answer to a question that was connected to absolutely nothing. The slider was decorative.",
        "0": "Neutral. You're the person who sits at a party with an open textbook on your lap 'just in case.' This question didn't determine anything except that you're afraid of commitment on every level.",
        "1": "You slightly agreed you do homework first. You wanted the quiz to know you're responsible. The quiz does not know. The quiz never knew. That slider was a prop.",
        "2": "Strongly agree you finish homework first. You answered this like you were filling out a grad school application. This was a joke quiz and that was a joke question and you gave it your most earnest, try-hard answer. Devastating.",
    },
    4: { // dining halls
        "-2": "You strongly disagreed that the dining halls are underrated. You have FEELINGS about the dining halls. Strong ones. You moved that slider like you were filing a formal complaint. This question had no effect on anything. Your dining hall rage is unheard.",
        "-1": "You slightly disagreed about dining halls. A measured, diplomatic take on cafeteria food. You brought nuance to a question about chicken tenders. It was a decoy. Your thoughtful dining critique fell into a void.",
        "0": "Neutral on dining halls. You eat there three times a day and refuse to form an opinion. You are the human equivalent of the mystery meat. This question was also mystery meat — looked real, wasn't.",
        "1": "You slightly agreed the dining halls are underrated. You're a dining hall apologist. A defender of the realm. You thought this would shape your result. It shaped nothing. The mac and cheese station doesn't know you exist.",
        "2": "STRONGLY AGREE the dining halls are underrated. You went to WAR for Danforth on a fake question. You are out here being a dining hall lobbyist on a quiz that used your passionate advocacy as kindling. Absolute legend. Zero impact.",
    },
    5: { // all-nighter
        "-2": "You strongly disagreed about pulling all-nighters. You wanted us to know you have your life together. You don't pull all-nighters. You're DISCIPLINED. Cool. This question was a scarecrow. It stood there looking important and did absolutely nothing.",
        "-1": "You slightly disagreed about all-nighters, like someone who's been up until 3am and needs you to know that's different. It is different. It's also irrelevant. This question was a void and you whispered your sleep schedule into it.",
        "0": "You went NEUTRAL on whether you've pulled an all-nighter. How. How do you go neutral on a yes or no life experience. This question was meaningless but your inability to answer it is deeply meaningful.",
        "1": "You slightly agreed about all-nighters. One time. You remember the exact date. You've told the story at least four times. This question existed to catch people who romanticize sleep deprivation and you walked right into it.",
        "2": "Strongly agree. You pull all-nighters and you're PROUD. You thought this quiz was measuring your grind. It was not measuring your grind. Your eye bags are visible through the screen and this question was a lie.",
    },
    7: { // laptop stickers
        "-2": "You strongly disagreed about judging people by their laptop stickers. Your laptop is bare. Naked. A sad rectangle. You brought that energy to a question that was never going to count and somehow your answer still feels lonely.",
        "-1": "You slightly disagreed about judging stickers. You absolutely judge them. You just didn't want the quiz to know. The quiz doesn't care. The quiz was never listening. You performed restraint for an empty room.",
        "0": "Neutral on laptop stickers. You have one faded sticker from a campus event in 2023 and you've never acknowledged it. This question was equally forgettable. You were made for each other.",
        "1": "You slightly agreed about judging stickers. You've locked eyes with a stranger's ThinkPad across a lecture hall and formed a complete psychological profile. This question was bait. You bit. Hard.",
        "2": "STRONGLY AGREE. You judge people by their laptop stickers with the intensity of a forensic profiler. You saw this question and thought 'finally, someone asking the real questions.' It was the fakest question on the entire quiz. You gave your most authentic answer to our most fraudulent question.",
    },
    8: { // after graduation
        "-2": "You strongly disagreed about knowing your post-grad plans. You grabbed that slider and dragged it to 'I am LOST' with both hands. This question was completely fake. But the existential crisis it triggered in you? That was real. You're welcome.",
        "-1": "You slightly disagreed. You have a vague plan that involves the word 'maybe' and a city you've never been to. You shared this uncertainty with a question that was designed from the ground up to waste your time.",
        "0": "Neutral on post-grad plans. You're standing at the crossroads of your life and you went 'eh.' This question was meaningless but it accidentally revealed that you'll bring that same energy to your career.",
        "1": "You slightly agreed you know your plans. You have a LinkedIn headline and a dream. This question fed on your fragile optimism and gave nothing back. Your five-year plan just became a four-year plan with a gap.",
        "2": "You STRONGLY AGREE you know what you're doing after graduation. You put that answer down with the confidence of someone whose parents already made some calls. This question was a complete fabrication, just like your sense of certainty about the future.",
    },
    9: { // coffee personality
        "-2": "You strongly disagreed that coffee is a personality trait. You're a tea person, aren't you. You saw this question and felt ATTACKED and you responded with force. The question was fake. Your defensiveness about hot leaf water was real.",
        "-1": "You slightly disagreed. You drink coffee but you want us to know you're not OBSESSED. You have OTHER interests. Sure you do. This question didn't count but your need to seem well-rounded has been documented.",
        "0": "Neutral on coffee as a personality trait. You have consumed caffeine and formed zero opinions about it. You are a miracle of modern apathy. This question was nothing and you matched its energy perfectly.",
        "1": "You slightly agreed. You've described your coffee order to someone who didn't ask. You've posted a picture of a latte. You thought this question would sort you into the 'quirky' category. There is no quirky category. There is only the void.",
        "2": "STRONGLY AGREE. Coffee IS your personality. You read this question and felt SEEN. Finally, a quiz that gets you. It didn't get you. It was using you. Your oat milk latte was a distraction while the real questions snuck past.",
    },
    11: { // go-to seat
        "-2": "You strongly disagreed about having a go-to seat. You're a nomad. A wanderer. You sit in a different spot every time like you're on the run from something. This question was nothing. But your refusal to commit to a CHAIR says everything.",
        "-1": "You slightly disagreed. You don't have a go-to seat but you got a little defensive about it. Like maybe you DO have one but you don't want to be the kind of person who does. This question didn't count. Your identity crisis did.",
        "0": "Neutral on having a go-to seat. You sit where there's space. You are an ambient presence in the library. Background noise. Wallpaper. This question was equally inert. You've found your match.",
        "1": "You slightly agreed about having a go-to seat. You have a spot. You don't fight for it but you definitely do that thing where you stand near it hoping the person leaves. This question was fake and your passive-aggressive seating strategy is real.",
        "2": "STRONGLY AGREE. You have a seat and you will FIGHT for it. You have made eye contact with someone sitting in YOUR chair and contemplated genuine violence. You dragged that slider like you were defending territory. This question was completely, entirely, 100% meaningless. But you weren't. You were ready for war over a wooden chair in a public building.",
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
