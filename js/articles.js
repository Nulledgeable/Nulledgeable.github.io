// Article Database
const articles = {
    'programming-lessons-1': {
        title: "Pervasive Patterns In Programming: Iterations, Recursion, and Algorithms",
        date: "November 21, 2025",
        readTime: "10 min",
        tag: "Programming Lessons",
        author: "Nulledgeable",
        content: `
            <p>While learning and creating programs, I realize something that takes away some complexity when programming. Before now, it always seemed like programming was magical. Even though I knew programming was basically the computer processing and manipulating data. Nothing started clicked until I focus on three concepts. But more about that later. First, let's talk about how computers work.</p>

            <h2>How Computer's Work</h2>
            <p>Computers communicate with each other via binary. They only have two letters in their language: 0 and 1. These two letters, also called a bit, can form words called bytes. A byte is a word that typically has 8 bits in it. So, 1 byte has a total of 8 binary letters. It passes from computer to computer as a stream of bytes.</p>
            
            <p>Since the binary language is so limited, computers have other superlanguages they use to communicate with people and other computers. For example, ASCII has a total of 128 different characters. To represent the lower case "a", it is written as 01100001 in binary.</p>
            
            <p>Often patterns are reflective and reoccurring. The lower the level, the more pervasive it will be on the higher levels. This phenomenon reflects the concept of abstraction. Let's explore some patterns that are visible throughout all of programming.</p>

            <h2>Programming Structural Patterns</h2>
            <p>In programming there are three special concepts that are present in all of computer science and in life: iteration, recursions, and algorithms. Let's go through each of them.</p>

            <h3>Iteration</h3>
            <p>When thinking about iteration, I like to imagine adding 1+ or n+ to something. There is a link between iteration and summation. However, let's avoid the heavy mathematics for now. We have simpler examples of iteration.</p>
            
            <p>Say you are building a paper airplane. You do not automatically complete this task by just waiting around. You would have to fold it this or that way to create a paper airplane. Depending on how you fold and the techniques you use, determines the effectiveness of the airplane. Iteration works similar to this in adding one more step towards the goal until it is complete.</p>
            
            <p>Iterations are one of the things that make programming so powerful. Task can be iterated for actual projects as well (iterative development). Just as computers process streams of bytes one at a time, iteration lets us process data step by step until we reach our goal. Iteration is important to agile development.</p>
            
            <p>People can do wonderful things with iteration. When creating a project, one feature will not be enough to create an app, but a multitude of features is enough to make the app how one would envision (or not deeping on the trade-offs). This brings us to our next tool.</p>

            <h3>Recursions</h3>
            <p>If you ever seen a Matryoshka nesting dolls you would know that opening one doll leaves you with a smaller doll. Recursions work almost the same way. Recursions can use itself to solve a problem. It is about breaking the problem into smaller more manageable bits of information so it can be solved little by little. We do recursions everyday.</p>
            
            <p>Say for instance a chocolate snowman suddenly became sentient, broke into your house, and covered the whole house with chocolate. At first you will be furious. How dare that sentient chocolate snowman! You would probably look to eat or melt him first. It may feel impossible to clean up mess the snowman made. However, you decided to start cleaning up in the bathroom since you have access to water and cleaning supplies there.</p>
            
            <p>While you made your way to the bathroom, you are covered with chocolate. Not only you made a mess on yourself, but you are making an even bigger mess by trying to move around your house. You finally made it to your bathroom only to find that it is covered with chocolate too. The toilet sit is covered with chocolatey-goodness. You start to clean. It may be a lot of chocolate in the bathroom but you slowly start to clean it up. Eventually, the bathroom is as good as new.</p>
            
            <p>Next, you clean the hallway. Then your bedroom. Slowly but surely, you will win the chocolate war. It may have been tough, but you eventually cleaned everything in your house. You never want to see chocolate again.</p>
            
            <p>This is how recursions can help us solve difficult problems. Typically, when there is recursion there is iteration in some way. You had to slowly work your way up to clean your entire house which is using iteration. To even begin you had to isolate the mess and start cleaning there which is using recursions.</p>
            
            <p>Recursions are used in everything from data structures and algorithms to functions and classes. In fact, many data structure and information are recursions. Take for instance polygons. The minimum a polygon can be is a triangle which has three sides and three angles. If you remove one side, it will just be two lines. However, if you add more sides, the polygon becomes more and more like a circle.</p>
            
            <p>Recursions always have the minimum of a thing it can be reduced to in order to solve a problem. In the chocolate snowman example, you had to reduce your working area to a single room: the bathroom.</p>
            
            <p>Triangles are also used in computer graphics. The more triangles an asset has, the more detailed it becomes. Recursions are also in associative arrays. If you remove one element of an array, it is still an array. You may even have an empty array if you feel like it. Functions can have other functions nested inside of it. In order to solve the function, you must first solve the other smaller functions. Most complex function and formula are just nested functions. You need to follow a specific order to solve the function which leads to the next tool.</p>

            <h3>Algorithms</h3>
            <p>Me: "Hey! Can you get me that red book off my desk?"</p>
            <p>You would be able to find the red book from my desk and you will be able to hand it to me. However, if I were to ask a computer to do the same:</p>
            <p>Me: "Hey! Can you get me that red book off my desk?"</p>
            <p>Computer: "Error cannot comprehend command 😢"</p>
            
            <p>Why didn't the computer automatically know how to get the red book off my desk? The amazing thing about people we are able to infer information. However, computers do not have the ability of inference. If you do not say exactly what you want and how to get to it, the computer will never infer it. This is why building features and fixing bugs can be so frustrating at times.</p>
            
            <p>Computers are tireless fast workers, but they are bloody stupid. They never see the obvious nor do they use intuition since they do not have any. Even AI, while one can train the AI and add more constraints to prevent inefficiencies, the AI cannot "infer" everything.</p>
            
            <p>This is where algorithms come into play. Since we have the superpower of inference, it is sometimes difficult to grasp what algorithms are truly are since we infer naturally. However, an algorithm is just a step by step process. If you ever read a complex cooking recipe, then you already know what an algorithm is. Sometimes before you make the main dish, you have to prepare the indigerents and the sauce.</p>
            
            <p>Naturally, iterations, recursions, and algorithms all share a specials relationship. In order to follow a recipe, one must iterate through the steps. You may even need to break the recipe into smaller task in order to complete it.</p>
            
            <p>Now if I would code an algorithm to the computer, it will able to identify and retrieve the red book assuming it has the necessary components to physically grab the book and hand it to me. Algorithm is a powerful concept which can be applied to anything. It can save you a lot of physical work if you just have a machine that runs an algorithm and does all the work for you.</p>

            <h2>Conclusions</h2>
            <p>I believe that everyone should have these concept in mind when writing and reading computer programs. It is what helped me with writing better code. You are like a wizard who is directing a very stupid dragon. The dragon is powerful but it is slow. It is up to the wizard summoner to communicate with the dragon and make it do amazing things. The computer is only as great as the people who built it.</p>
        `
    },
    
    'javascript-closures': {
        title: "Understanding JavaScript Closures",
        date: "November 16, 2025",
        readTime: "5 min",
        tag: "JavaScript",
        author: "Nulledgeable",
        content: `
            <h2>What Are Closures?</h2>
            <p>A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.</p>
            
            <h3>Simple Example</h3>
            <pre><code>function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3</code></pre>
            
            <h3>Why This Works</h3>
            <p>The inner function "closes over" the <code>count</code> variable, maintaining access to it even after <code>createCounter()</code> has finished executing.</p>
            
            <h3>Practical Uses</h3>
            <ul>
                <li>Data privacy and encapsulation</li>
                <li>Creating factory functions</li>
                <li>Event handlers and callbacks</li>
                <li>Partial application and currying</li>
            </ul>
        `
    }
};

// Load and render article
function loadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const container = document.getElementById('articleContent');
    
    if (!articleId || !articles[articleId]) {
        container.innerHTML = `
            <div class="article-error">
                <h2>Article Not Found</h2>
                <p>Sorry, the article you're looking for doesn't exist.</p>
                <a href="posts.html" class="read-more">← Back to Posts</a>
            </div>
        `;
        return;
    }
    
    const article = articles[articleId];
    document.title = `${article.title} - Nulledgeable`;
    
    container.innerHTML = `
        <div class="article-header">
            <a href="posts.html" class="back-link">← Back to Posts</a>
            <h1>${article.title}</h1>
            <div class="article-meta">
                <span class="tag">${article.tag}</span>
                <span>${article.date}</span>
                <span>•</span>
                <span>${article.readTime} read</span>
                <span>•</span>
                <span>By ${article.author}</span>
            </div>
        </div>
        <div class="article-body">
            ${article.content}
        </div>
        <div class="article-footer">
            <a href="posts.html" class="read-more">← Back to Posts</a>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadArticle);
