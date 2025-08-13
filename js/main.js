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
output.innerHTML += welcomeCommand();