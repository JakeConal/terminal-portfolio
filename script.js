const input = document.getElementById("input");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal-window");
const titleBar = document.getElementById("title-bar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        terminal.style.left = (e.clientX - offsetX) + "px";
        terminal.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

const commands = {
    help: "Available commands: about, projects, contact, clear",
    about: "Hi! I'm Hieu Nguyen, a software developer passionate about backend & databases.",
    projects: "- Portfolio Website\n- REST API Backend\n- Database Management Tools",
    contact: "Email: you@example.com\nGitHub: github.com/yourname",
    clear: "clear"
};

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let cmd = input.value.trim();
        handleCommand(cmd);
        input.value = "";
    }
});

function handleCommand(cmd) {
    if (commands[cmd]) {
        if (cmd === "clear") {
            output.innerHTML = "";
        } else {
            output.innerHTML += `<div><span class="prompt">acer@DarkCore:~$</span> ${cmd}</div>`;
            output.innerHTML += `<div>${commands[cmd]}</div>`;
        }
    } else {
        output.innerHTML += `<div><span class="prompt">acer@DarkCore:~$</span> ${cmd}</div>`;
        output.innerHTML += `<div>Command not found. Type 'help' to see available commands.</div>`;
    }
    // Tự scroll xuống cuối
    document.getElementById("terminal-content").scrollTop = document.getElementById("terminal-content").scrollHeight;
}
