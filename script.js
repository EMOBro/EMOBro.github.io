document.addEventListener('DOMContentLoaded', () => {
    // Get references to progress bar and quote elements
    const progressBar = document.getElementById('progressBar');
    const quoteElement = document.getElementById('quote');
    
    // Large array of motivational quotes
    const quotes = [
        "Every moment is a fresh beginning.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "Don't watch the clock; do what it does. Keep going.",
        "Your attitude determines your direction.",
        "The only way to do great work is to love what you do.",
        "In the middle of difficulty lies opportunity.",
        "Great things never come from comfort zones.",
        "Never give up on a dream just because of the time it will take to accomplish it.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Difficulties in life are intended to make us better, not bitter.",
        "Your limitation—it's only your imagination.",
        "Embrace the journey, not just the destination.",
        "Persist and persevere, and you will find success.",
        "Dream big and dare to fail.",
        "The only limit is the one you set yourself.",
        "Creativity is intelligence having fun.",
        "Strive not to be a success, but to be of value.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Small progress is still progress.",
        "Your energy introduces you before you even speak.",
        "The best revenge is massive success.",
        "Focus on the solution, not the problem.",
        "You are capable of amazing things.",
        "Kindness is free, sprinkle it everywhere.",
        "Your potential is limitless.",
        "Start where you are. Use what you have. Do what you can.",
        "Believe in yourself and all that you are.",
        "The only way to do great work is to love what you do.",
        "Success doesn't come to you, you go to it.",
        "Every day is a second chance.",
        "Don't stop when you're tired. Stop when you're done.",
        "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
        "The best time to start was yesterday. The next best time is now.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "It always seems impossible until it's done.",
        "What you do today can improve all your tomorrows.",
        "The future depends on what you do today.",
        "You miss 100% of the shots you don't take.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "Don't wait for opportunity. Create it.",
        "Your attitude, not your aptitude, will determine your altitude.",
        "The only person you are destined to become is the person you decide to be.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        "Success is walking from failure to failure with no loss of enthusiasm."
    ];
    
    // Select and display a random quote when page loads
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
    quoteElement.parentElement.style.opacity = '1';
    
    // Function to simulate loading progress
    function simulateLoading() {
        let progress = 0;
        // Interval to gradually increase progress bar width
        const interval = setInterval(() => {
            // Randomly increase progress, max at 100%
            progress += Math.random() * 20;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
            
            // Stop interval when progress reaches 100%
            if (progress >= 100) {
                clearInterval(interval);
                // Redirect to the target website after loading is complete
                window.location.href = 'http://emo.kesug.com'; // Replace with your target URL
            }
        }, 500);
    }
    
    // Start the loading simulation
    simulateLoading();
});
