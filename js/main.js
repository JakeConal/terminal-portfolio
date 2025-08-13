import welcomeCommand from './commands.js';

const input = document.getElementById("input");
const output = document.getElementById("output");

const commandMap = new Map([
    ['welcome', welcomeCommand]
]);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = input.value.trim();
        const [cmd, ...argsArr] = command.split(" ");
        const arg = argsArr.join(" ");

        output.innerHTML += `
            <div class="command">
                <span class="prompt">
                    <span class="user">guest</span>
                    <span class="host">@hieunguyen.portfolio</span>
                    <span class="path">:~$</span>
                </span> 
                <span class="command-text">${command}</span>
            </div>
        `;

        if (commandMap.has(cmd)) {
            const result = commandMap.get(cmd)(arg);
            if (result) {
                output.innerHTML += `<div class="output">${result}</div>`;
            }
        } else {
            output.innerHTML += `<div class="output">Command not found. Type 'help' to see available commands.</div>`;
        }

        const terminalContent = document.getElementById("terminal-content");
        terminalContent.scrollTop = terminalContent.scrollHeight;

        input.value = "";
    }
});

output.innerHTML += `
            <div class="command">
                <span class="prompt">
                    <span class="user">guest</span>
                    <span class="host">@hieunguyen.portfolio</span>
                    <span class="path">:~$</span>
                </span> 
                <span class="command-text">welcome</span>
            </div>
        `;
output.innerHTML += welcomeCommand();

const terminalBar = document.getElementById("terminal-header");
const terminal = document.getElementById("terminal");

let offsetX = 0, offsetY = 0;
let isDragging = false;

terminalBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;
    document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        terminal.style.position = "absolute";
        terminal.style.left = (e.clientX - offsetX) + "px";
        terminal.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
});