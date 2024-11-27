// Quiz data (updated to include options for multiple-choice questions)
const quizData = {
    game1: {
        title: "Fortnite Quiz",
        questions: [
            { //1
                question: "When did fortnite came out?",
                options: ["2010", "2013", "2018", "2017"],
                answer: "2017",
            },
            {//2
                question: "How many modes are in fortnite?",
                options: ["2", "6", "3", "5"],
                answer: "6",
            },
            {//3
                question: "What is the weapon that all the players of fortnite start with?",
                options: ["Pickaxe", "RPG", "Shotgun", "Assault Rifle"],
                answer: "Pickaxe",
            },

            {//4
                question: "what is the currency in Fortnite item shop?",
                options: ["$", "V-Bucks", "€", "£"],
                answer: "V-Bucks",
            },

            {//5
                question: "how many different weapon rarity level are there in Fortnite (basic)?",
                options: ["4", "6", "5", "7"],
                answer: "5",
            },

            {//6
                question: "what is the maximum number of each material the player can carry in fortnite (in the last seaon)?",
                options: ["999", "500", "400", "1000"],
                answer: "500",
            },

            {//7
                question: "how many inventory slots does a fortnite player have?",
                options: ["4", "6", "7", "5"],
                answer: "5",
            },

            {//8
                question: "how many game modes are there in fortnite battle royale?",
                options: ["4", "3", "2", "5"],
                answer: "4",
            },
        ],
    },
    game2: {
        title: "Formula 1 Quiz",
        questions: [
            { //1
                question: "what color is the finishing flag in formula one?",
                options: ["red & blue", "green & yellow", "black & white", "orange & purple"],
                answer: "black & white",
            },
            {//2
                question: "how many teams there are in formula one?",
                options: ["20", "10", "15", "13"],
                answer: "10",
            },
            {//3
                question: "how many drivers there are on the tracks?",
                options: ["26", "30", "40", "20"],
                answer: "20",
            },

            {//4
                question: "which driver has the most race wins?",
                options: ["Lewis Hamilton", "Michael Schumakher", "Max Verstappen", "Sebastian Vettel"],
                answer: "Lewis Hamilton",
            },

            {//5
                question: "how many World Champion Driver's Michael Schumacher win in his career?",
                options: ["8", "7", "3", "2"],
                answer: "7",
            },

            {//6
                question: "what is the color of the flag if there was a accidant in f1?",
                options: ["green", "yellow", "black", "red"],
                answer: "yellow",
            },

            {//7
                question: "what is the color of the flag if the session was stopped in f1?",
                options: ["blue", "black", "red", "yellow"],
                answer: "red",
            },

            {//8
                question: "how many red light there are before the start of the race in f1?",
                options: ["7", "5", "6", "4"],
                answer: "5",
            },
        ],
        
    },
    game3: {
        title: "Rocket League Quiz",
        questions: [
            { //1
                question: "Which year rocket league cames out?",
                options: ["2014", "2015", "2013", "2017"],
                answer: "2015",
            },
            {//2
                question: "how many boost each player have in the beginning of a game in rocket league?",
                options: ["33", "25", "40", "30"],
                answer: "30",
            },
            {//3
                question: "what is the lenghts of a game in rocket league?",
                options: ["4 min", "10 min", "7 min", "5 min"],
                answer: "5 min",
            },

            {//4
                question: "how many game mode there are in rocket league private match?",
                options: ["6", "5", "7", "4"],
                answer: "5",
            },

            {//5
                question: "in each playlist how many game mode there are (casuel, competitive)?",
                options: ["(6,6)", "(4,3)", "(3,6)", "(6,3)"],
                answer: "(6,6)",
            },

            {//6
                question: "how many ranks there are in general (including unranked)?",
                options: ["7", "9", "8", "10"],
                answer: "9",
            },

            {//7
                question: "how many tiers there are in each rank?",
                options: ["3", "2", "4", "1"],
                answer: "3",
            },

            {//8
                question: "how many rarities there are in rocket league?",
                options: ["7", "5", "9", "8"],
                answer: "8",
            },
        ],
        
    },
    game4: {
        title: "Football Quiz",
        questions: [
            { //1
                question: "Who is the only deffender has own a bollon d'or?",
                options: ["Van Djik", "Ramos", "Maldini", "Cannavaro"],
                answer: "Cannavaro",
            },
            {//2
                question: "Which team did porto defeat to win the ucl in 2004?",
                options: ["peportivo la corona", "bayern munich", "monaco", "real madrid"],
                answer: "monaco",
            },
            {//3
                question: "In which team did ronaldo nazario start his career in europe?",
                options: ["Barcelona", "AJAX", "PSV", "Real madrid"],
                answer: "PSV",
            },

            {//4
                question: "who scored the 3rd goal in 1998 world cup?",
                options: ["Zinedine zidane", "Thierry henry", "Lilliane thuram", "Emmanuel petit"],
                answer: "Emmanuel petit",
            },

            {//5
                question: "which team did diego maradona scoe his (hand of god) goal against?",
                options: ["Germany", "England", "Italy", "Brazil"],
                answer: "England",
            },

            {//6
                question: "who were the ucl finalists in 2010?",
                options: ["bayern vs real", "inter vs barca", "barca vs real", "inter vs bayern"],
                answer: "inter vs barca",
            },

            {//7
                question: "which world cup had the most goals scored in history?",
                options: ["2018", "2022", "2010", "2014"],
                answer: "2022",
            },

            {//8
                question: "who win the ballon d'or in 2003?",
                options: ["Thierry henry", "Andrey Shevchenko", "Pavel nedved", "Ronaldo nazario"],
                answer: "Pavel nedved",
            },
        ],
        
    },
    game5: {
        title: "The Crew Motorfest Quiz",
        questions: [
            { //1
                question: "what is the primary location setting for the crew motorfest?",
                options: ["Hawaii", "Los Angeles", "Miami", "Paris"],
                answer: "Hawaii",
            },
            {//2
                question: "which year was the crew motorfest released?",
                options: ["2024", "2021", "2023", "2022"],
                answer: "2023",
            },
            {//3
                question: "which game development studio created the crew motorfest?",
                options: ["EA sports", "Naughty dog", "Ubisoft Ivory Tower", "rockstar games"],
                answer: "Ubisoft Ivory Tower",
            },

            {//4
                question: "how many type of vehicles for exploration in the crew motorfest?",
                options: ["4", "3", "2", "1"],
                answer: "3",
            },

            {//5
                question: "how many players can participate simultaneously in multiplayer modes?",
                options: ["8", "99", "32", "4"],
                answer: "32",
            },

            {//6
                question: "which feature from the crew 2 was notably improved in the crew motorfest??",
                options: ["off-road physics", "vehicle switching dynamics", "urban street design", "graphics fidelity"],
                answer: "graphics fidelity",
            },

            {//7
                question: "Which feature allows players to explore the island freely in The Crew Motorfest?",
                options: ["island discovery mode", "free drive", "explore & race", "horizon tour"],
                answer: "free drive",
            },

            {//8
                question: "What new weather feature was introduced in The Crew Motorfest?",
                options: ["snowstorms", "fog mechanics", "hailstorms", "dynamic tropical storms"],
                answer: "dynamic tropical storms",
            },
        ],
        
    },
    game6: {
        title: "Basketball Quiz",
        questions: [
            { //1
                question: "what 2 teams have the most heated rivalry in nba history?",
                options: ["Bulls and Lakers", "Pistons and Celtics", "Lakers and Warriors", "Lakers and Celtics"],
                answer: "Lakers and Celtics",
            },
            {//2
                question: "who is the most decorated player in nba history?",
                options: ["Michael Jordan", "John Havlicek", "Bill Russel", "Kareem Abdul-Jabbar"],
                answer: "Bill Russel",
            },
            {//3
                question: "what score did the 2006 final end?",
                options: ["4-2 Heat", "4-3 Mavericks", "4-3 Heat", "4-1 Heat"],
                answer: "4-2 Heat",
            },

            {//4
                question: "which NBA team holds the record for the longest winning streak in a single season?",
                options: ["Houston Rockets", "Golden State Warriors", "Los Angeles Lakers", "Bostons Celtics"],
                answer: "Los Angeles Lakers",
            },

            {//5
                question: "Which player holds the record for the most points scored in a single NBA game?",
                options: ["Michael Jordan", "Wilt Chamberlian", "Kobe Bryant", "Kareem Abdul-Jabbar"],
                answer: "Wilt Chamberlian",
            },

            {//6
                question: "which NBA player has the most career triple-double?",
                options: ["Oscar Robertson", "Russel Westebrook", "Magic Johnson", "Lebron James"],
                answer: "Russel Westebrook",
            },

            {//7
                question: "Which team became the first to win 70 games in a single season?",
                options: ["Chicago Bulls", "Golden State Warriors", "Boston Celtics", "Los Angelos Lakers"],
                answer: "Chicago Bulls",
            },

            {//8
                question: "What is the largest margin of victory in an NBA game?",
                options: ["68 points", "72 points", "76 points", "73 points"],
                answer: "73 points",
            },
        ],
        
    },
    game7: {
        title: "Grand Theft Auto Five Quiz",
        questions: [
            { //1 elie
                question: "What are the names of the three protagonists in GTA V?",
                options: ["CJ, Tommy, and Nico", "Trevor, Luis, and Carl", "Michael, Brad, and Lamar", "Michael, Trevor, and Franklin"],
                answer: "Michael, Trevor, and Franklin",
            },
            {//2
                question: "What is the name of Franklin’s dog?",
                options: ["Max", "Chop", "Buddy", "Bruno"],
                answer: "Chop",
            },
            {//3
                question: "Who betrays Trevor and Michael during the prologue?",
                options: ["Brad", "Dave Norton", "Lester Crest", "Stretch"],
                answer: "Dave Norton",
            },

            {//4
                question: "What is the name of the casino added in GTA Online?",
                options: ["Lucky 38", "Fortune City Casino", "The Diamond Casino & Resort", "Four Dragons Casino"],
                answer: "The Diamond Casino & Resort",
            },

            {//5
                question: "Which character runs the (Vanilla Unicorn) strip club in GTA V?",
                options: ["Franklin", "Michael", "Trevor", "Lamar"],
                answer: "Trevor",
            },

            {//6
                question: "What is the maximum wanted level you can achieve in GTA V?",
                options: ["7 stars", "4 stars", "6 stars", "5 stars"],
                answer: "5 stars",
            },

            {//7
                question: "Who introduces Franklin to Michael in the storyline?",
                options: ["Lamar", "Simeon", "Lester", "Trevor"],
                answer: "Simeon",
            },

            {//8
                question: "What happens if you complete all 50 Stunt Jumps in GTA V?",
                options: [" You unlock a special car", "You gain infinite health", "You unlock a hidden mission", "You earn an achievement/trophy"],
                answer: "You earn an achievement/trophy",
            },
        ],
        
    },
    game8: {
        title: "Clash Royal Quiz",
        questions: [
              {//8
                question: "what platform are used to play clash royal?",
                options: ["nintendo switch", "ps/xbox", "windows", "ios and android"],
                answer: "ios and android",
            },

            { //1
                question: "who is the developper of this game?",
                options: ["socialpoint", "supercell", "miniclip", "meta"],
                answer: "supercell",
            },
            {//2
                question: "what year clash royel was released?",
                options: ["2017", "2016", "2014", "2015"],
                answer: "2016",
            },
            {//3
                question: "how many cards a player need to have in his deck?",
                options: ["10", "6", "4", "8"],
                answer: "8",
            },

            {//4
                question: "how many cards should players havet at the start of each game?",
                options: ["6", "4", "10", "8"],
                answer: "4",
            },

            {//5
                question: "what is the cost of each card?",
                options: ["gems", "coins", "elexir", "$"],
                answer: "elexir",
            },

            {//6
                question: "how many elexir each palyer start with at each battle?",
                options: ["5", "8", "4", "3"],
                answer: "5",
            },

            {//7
                question: "how much each playerhave to have full elexir?",
                options: ["7", "10", "8", "9"],
                answer: "10",
            },
        ],
        
    },
};

let currentGame = null;
let currentQuestionIndex = 0;
let score = 0;
let userName = ""; // Store user's full name

// DOM elements
const quizModal = document.getElementById("quizModal");
const closeQuiz = document.getElementById("closeQuiz");
const quizTitle = document.getElementById("quizTitle");
const quizQuestion = document.getElementById("quizQuestion");
const feedback = document.getElementById("feedback");
const prevQuestion = document.getElementById("prevQuestion");
const nextQuestion = document.getElementById("nextQuestion");
const optionsContainer = document.createElement("div"); // Container for options
const nameModal = document.createElement("div"); // Name input modal
const overlay = document.createElement("div"); // Overlay for the name modal

// Prompt for user's name on page load
window.onload = () => {
    userName = prompt("Welcome to the Quiz Platform! Please enter your full name:");
    if (!userName || userName.trim() === "") {
        userName = "Anonymous"; // Default to 'Anonymous' if the user doesn't provide a name
    }
};

// Append options container to the quiz modal
quizModal.querySelector(".quiz-content").appendChild(optionsContainer);
optionsContainer.className = "quiz-options";



// Show quiz modal
document.querySelectorAll(".game-logo").forEach((logo) => {
    logo.addEventListener("click", () => {
        const gameId = logo.id;
        currentGame = quizData[gameId];
        currentQuestionIndex = 0;
        score = 0; // Reset score for the new quiz

        loadQuestion();
        quizModal.style.display = "flex";
    });
});

// Close modal
closeQuiz.addEventListener("click", resetQuiz);

// Load question
function loadQuestion() {
    if (currentQuestionIndex < currentGame.questions.length) {
        const questionData = currentGame.questions[currentQuestionIndex];
        quizTitle.textContent = currentGame.title;
        quizQuestion.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
        feedback.textContent = "";
        feedback.className = "feedback";

        // Clear previous options
        optionsContainer.innerHTML = "";

        // Generate options as buttons
        questionData.options.forEach((option) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.className = "option-btn";
            optionButton.addEventListener("click", () => checkAnswer(option, questionData.answer));
            optionsContainer.appendChild(optionButton);
        });

        // Enable/disable navigation buttons
        prevQuestion.disabled = currentQuestionIndex === 0;
        nextQuestion.disabled = true; // Initially disable 'Next' until an option is selected
    } else {
        showScore(); // Show score when quiz ends
    }
}

// Check answer
function checkAnswer(selectedOption, correctAnswer) {
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn) => (btn.disabled = true)); // Disable all options after selection

    if (selectedOption === correctAnswer) {
        feedback.textContent = "Correct! 🎉";
        feedback.className = "feedback correct";
        score++;
    } else {
        feedback.textContent = `Incorrect! Correct answer: ${correctAnswer}`;
        feedback.className = "feedback incorrect";
    }

    nextQuestion.disabled = false; // Enable 'Next' button after answering
}

// Navigation
prevQuestion.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextQuestion.addEventListener("click", () => {
    if (currentQuestionIndex < currentGame.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScore();
    }
});

// Show final score
function showScore() {
    quizTitle.textContent = `Quiz Completed! 🎉`;
    quizQuestion.textContent = `${userName}, your score is ${score} out of ${currentGame.questions.length}!`;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";

    // Hide navigation buttons
    prevQuestion.style.display = "none";
    nextQuestion.style.display = "none";

    // Add restart button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Take Another Quiz";
    restartBtn.className = "restart-btn";
    optionsContainer.appendChild(restartBtn);

    restartBtn.addEventListener("click", resetQuiz);
}

// Reset quiz to allow another quiz to start
function resetQuiz() {
    quizModal.style.display = "none";

    // Reset UI elements
    feedback.textContent = "";
    feedback.className = "feedback";
    prevQuestion.style.display = "inline-block";
    nextQuestion.style.display = "inline-block";

    currentGame = null;
    currentQuestionIndex = 0;
    score = 0; // Reset score
}

// Redirect to GTL.html when Home button is clicked
document.getElementById("homeButton").addEventListener("click", () => {
    window.location.href = "main.html";
});
