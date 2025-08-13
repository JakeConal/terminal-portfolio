export function welcomeCommand() {
    return `
        <div style="display: flex; align-items: flex-start; gap: 20px;">
            <div style="flex: 1;">
                <div class="output"> 
                    Welcome! You've just landed in Hieu Nguyen's interactive terminal. <br>
                    ------------------------------------------------------------------ <br>
                    Type <span style="color: yellow;">help</span> to see all available commands. <br><br>
                </div>
            </div>
            <div style="color: #00ff00; font-family: monospace; white-space: pre; font-size: 0.8em; line-height: 1;">             ,
            /|      __
           / |   ,-~ /
          Y :|  //  /
          | jj /( .^
          >-"~"-v"
         /       Y
        jo  o    |
       ( ~T~     j
        >._-' _./
       /   "~"  |
      Y     _,  |
     /| ;-"~ _  l
    / l/ ,-"~    \\
    \\//\\/      .- \\
     Y        /    Y    -Row
     l       I     !
     ]\\      _\\    /\"\\
    (\" ~----( ~   Y.  )
~~~~~~~~~~~~~~~~~~~~~~~~~</div>
        </div>
    `;
}

export function aboutCommand() {
    return `
        Hi, my name is <strong>Hieu Nguyen</strong>!<br>
        I'm a <strong>full-stack developer</strong> based in Viet Nam.<br>
        I love coding, solving problems, and building web applications.<br>
        🌐 <strong>Social:</strong><br>
        📘 <a href="https://www.facebook.com/your_facebook" target="_blank" class="link" style="link">Facebook</a><br>
        🐱 <a href="https://github.com/JakeConal" target="_blank" class="link" style="link">GitHub</a><br>
        📧 <a href="mailto:hieunguyen.jc@gmail.com" class="link" style="link">hieunguyen.jc@gmail.com</a><br>
    `;
}

export function skillsCommand() {
    return `
        <span style="color:lightgreen;">Technical Skills:</span><br>
        <b>Languages:</b> Java, Python, C/C++, JavaScript<br>
        <b>Frameworks:</b> Spring Boot, Django, Flask<br>
        <b>Databases:</b> MySQL, MongoDB<br>
        <b>Tools:</b> Git, Docker, Postman<br>
        <b>Others:</b> REST API, OOP, Data Structures & Algorithms
    `;
}

export async function projectsCommand() {
    const username = "JakeConal"; 

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await response.json();
        
        if (repos.length === 0) {
            return "No projects found.";
        }

        let html = `<strong>My Projects:</strong><br><br>`;
        repos.slice(0, 10).forEach(repo => { 
            html += `
                <div style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #00ff00;">
                    <a href="${repo.html_url}" target="_blank" style="color: #00ff00; text-decoration: none; font-weight: bold;">${repo.name}</a><br>
                    <span style="color: #ccc;">${repo.description || "No description"}</span><br>
                    <span style="color: yellow; font-size: 0.9em;">Language: ${repo.language || "Unknown"}</span>
                </div>
            `;
        });
        return html;
    } catch (error) {
        return "Error fetching projects from GitHub API.";
    }
}

export async function jokeCommand() {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/any?type=single");
        const data = await res.json();
        if (data && data.joke) {
            return `<span style="color:yellow;">${data.joke}</span>`;
        } else {
            return `<span style="color:red;">There are no jokes at the moment, try again!</span>`;
        }
    } catch (error) {
        return `<span style="color:red;">Error connecting to API!</span>`;
    }
}

export function clearCommand() {
    
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.innerHTML = "";
    }
    return ""; 
}

export function helpCommand()
{
    return `
        <div style="color: lightblue; font-weight: bold; margin-bottom: 10px;">
            Available Commands:
        </div>
        <div style="margin-left: 20px;">
            <div><span style="color: yellow;">welcome</span> - Display welcome message with ASCII art</div>
            <div><span style="color: yellow;">about</span> - Learn more about Hieu Nguyen</div>
            <div><span style="color: yellow;">skills</span> - View technical skills and expertise</div>
            <div><span style="color: yellow;">projects</span> - Browse GitHub projects and repositories</div>
            <div><span style="color: yellow;">joke</span> - Get a random programming joke</div>
            <div><span style="color: yellow;">help</span> - Show this help message</div>
            <div><span style="color: yellow;">clear</span> - Clear the terminal screen</div>
        </div>
        <div style="margin-top: 10px; color: lightgreen;">
            Tip: Commands are case-sensitive. Type any command above to get started!
        </div>
    `;
}
