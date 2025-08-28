// ============================================
// JAVASCRIPT FUNDAMENTALS ASSIGNMENT
// Simple demonstration of core concepts
// ============================================

// ============================================
// PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators, Conditionals
// ============================================

// Global variables with different data types
let userName = "";
let userAge = 0;
let isAdult = false;
let hobbies = ["reading", "coding", "gaming"];
const minimumAge = 18;

// Function to check user information (Part 1 demo)
function checkUser() {
    // Get input values
    userName = document.getElementById("userName").value;
    userAge = parseInt(document.getElementById("userAge").value);
    
    let result = "";
    
    // Input validation
    if (!userName || !userAge) {
        result = "Please enter both name and age!";
    } else {
        // Conditional logic
        if (userAge >= minimumAge) {
            isAdult = true;
            result = `Hello ${userName}! You are ${userAge} years old and you are an adult.`;
        } else {
            isAdult = false;
            result = `Hello ${userName}! You are ${userAge} years old and you are a minor.`;
        }
        
        // Additional conditionals
        if (userAge >= 65) {
            result += " You qualify for senior discounts!";
        } else if (userAge >= 21) {
            result += " You can participate in all activities.";
        } else if (userAge >= 18) {
            result += " You can vote!";
        } else {
            result += " Enjoy your youth!";
        }
    }
    
    // Display result and log to console
    document.getElementById("userResult").textContent = result;
    console.log("User check result:", result);
    console.log("User data:", {name: userName, age: userAge, isAdult: isAdult});
}

// ============================================
// PART 2: FUNCTIONS (2 custom functions required)
// ============================================

// Function 1: Calculator function
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcResult").textContent = "Please enter valid numbers!";
        return;
    }
    
    // Perform calculations
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
    
    let result = `Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`;
    
    document.getElementById("calcResult").textContent = result;
    console.log("Calculation result:", result);
    
    return sum; // Return value for reusability
}

// Function 2: Text formatter function
function formatText() {
    let inputText = document.getElementById("textInput").value;
    
    if (!inputText) {
        document.getElementById("textResult").textContent = "Please enter some text!";
        return;
    }
    
    // Text processing
    let upperCase = inputText.toUpperCase();
    let lowerCase = inputText.toLowerCase();
    let wordCount = inputText.split(" ").length;
    let charCount = inputText.length;
    let reversed = inputText.split("").reverse().join("");
    
    let result = `Original: "${inputText}" | Uppercase: "${upperCase}" | Lowercase: "${lowerCase}" | Words: ${wordCount} | Characters: ${charCount} | Reversed: "${reversed}"`;
    
    document.getElementById("textResult").textContent = result;
    console.log("Text formatting result:", result);
    
    return {
        original: inputText,
        upper: upperCase,
        lower: lowerCase,
        words: wordCount,
        characters: charCount,
        reversed: reversed
    };
}

// ============================================
// PART 3: LOOPS (2 loop examples required)
// ============================================

// Loop Example 1: For loop
function runForLoop() {
    let count = parseInt(document.getElementById("loopCount").value) || 5;
    let result = "For Loop Results:\n";
    
    console.log("=== FOR LOOP DEMO ===");
    
    // For loop to generate numbered list
    for (let i = 1; i <= count; i++) {
        let message = `Item ${i}: ${hobbies[i % hobbies.length]}`;
        result += message + "\n";
        console.log(message);
    }
    
    document.getElementById("forLoopResult").innerHTML = result.replace(/\n/g, "<br>");
}

// Loop Example 2: Array processing with forEach
function processArray() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumbers = [];
    let oddNumbers = [];
    let sum = 0;
    
    console.log("=== FOREACH LOOP DEMO ===");
    
    // forEach loop to process array
    numbers.forEach(function(number, index) {
        console.log(`Processing index ${index}: ${number}`);
        
        // Add to sum
        sum += number;
        
        // Separate even and odd numbers
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    });
    
    let result = `Original Array: [${numbers.join(", ")}]\n`;
    result += `Even Numbers: [${evenNumbers.join(", ")}]\n`;
    result += `Odd Numbers: [${oddNumbers.join(", ")}]\n`;
    result += `Sum of all numbers: ${sum}`;
    
    document.getElementById("arrayResult").innerHTML = result.replace(/\n/g, "<br>");
}

// ============================================
// PART 4: DOM MANIPULATION (3 interactions required)
// ============================================

// DOM Interaction 1: Change content dynamically
function changeHeading() {
    let headings = [
        "JavaScript Fundamentals Demo",
        "Welcome to Interactive Programming!",
        "DOM Manipulation in Action",
        "Learning JavaScript Step by Step"
    ];
    
    let currentHeading = document.querySelector("header h1").textContent;
    let currentIndex = headings.indexOf(currentHeading);
    let nextIndex = (currentIndex + 1) % headings.length;
    
    // Change the heading
    document.querySelector("header h1").textContent = headings[nextIndex];
    
    // Update the demo content
    document.getElementById("dynamicContent").textContent = `Heading changed to: "${headings[nextIndex]}"`;
    
    console.log(`Heading changed from "${currentHeading}" to "${headings[nextIndex]}"`);
}

// DOM Interaction 2: Add elements dynamically
function addItem() {
    let newItemText = document.getElementById("newItem").value;
    
    if (!newItemText) {
        alert("Please enter an item to add!");
        return;
    }
    
    // Create new list item
    let listItem = document.createElement("li");
    listItem.textContent = newItemText;
    
    // Add click event to remove item
    listItem.addEventListener("click", function() {
        this.remove();
        console.log(`Removed item: ${newItemText}`);
    });
    
    // Add to list
    document.getElementById("itemList").appendChild(listItem);
    
    // Clear input
    document.getElementById("newItem").value = "";
    
    console.log(`Added new item: ${newItemText}`);
}

// DOM Interaction 3: Toggle styles and classes
function toggleStyle() {
    let element = document.getElementById("styleDemo");
    
    // Toggle between different CSS classes
    if (element.classList.contains("highlight")) {
        element.classList.remove("highlight");
        element.classList.add("colorful");
        element.textContent = "Now I'm green and bold!";
    } else if (element.classList.contains("colorful")) {
        element.classList.remove("colorful");
        element.textContent = "Back to normal styling!";
    } else {
        element.classList.add("highlight");
        element.textContent = "Now I'm highlighted in yellow!";
    }
    
    console.log("Style toggled. Current classes:", element.className);
}

// ============================================
// NAVIGATION FUNCTION (Additional DOM manipulation)
// ============================================

function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
    
    console.log(`Switched to section: ${sectionId}`);
}

// ============================================
// INITIALIZATION
// ============================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== JavaScript Fundamentals Assignment Loaded ===');
    console.log('This assignment demonstrates:');
    console.log('1. Variables, data types, operators, conditionals');
    console.log('2. Custom functions for reusability');
    console.log('3. Different types of loops');
    console.log('4. DOM manipulation and event handling');
    
    // Show first section by default
    showSection('part1');
    
    // Log initial variables
    console.log('Initial variables:', {
        userName, userAge, isAdult, hobbies, minimumAge
    });
});
