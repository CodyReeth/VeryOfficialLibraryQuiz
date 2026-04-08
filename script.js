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

let currentQuestion = 0;
let answers = {};

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

    showScreen(resultScreen);
}

beginBtn.addEventListener("click", () => {
    currentQuestion = 0;
    answers = {};
    showScreen(quizScreen);
    loadQuestion();
});

nextBtn.addEventListener("click", () => {
    const q = questions[currentQuestion];
    if (q.key) {
        answers[q.key] = parseInt(slider.value);
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
