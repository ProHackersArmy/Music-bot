module.exports = {
    app: {
        px: '?',
        token: 'OTk2OTgzMzgyODkyMzQ3NDIy.Go9KxA.efo9lqnL8T5rXjkO0eE3UKPnB0n9dqFHZtlsRY',
        playing: 'Koraidon Bot Dèvelopment Ⓒ︎ 2022 ❤'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
