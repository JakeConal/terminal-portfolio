// Command welcome

export default function welcomeCommand() {
    return `
    <div style="color: lightgreen; font-weight: bold; font-size: 1.2em;">
        Welcome! You’ve just landed in Hieu Nguyen's interactive terminal.
    </div>
    <div>
        Type <span style="color: yellow;">help</span> to see all available commands.
    </div>
    <div>
        Tip: Try <span style="color: yellow;">play &lt;SpotifyLink&gt;</span> to listen to music in a mini player.
    </div>
    `;
}
