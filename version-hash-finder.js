Array.from(document.scripts)
    .filter(script => script.src.includes('client.js'))
    .forEach(script => {
        const hash = script.src.match(/\/([a-f0-9]{40})\//);
        if (hash) {
            console.log(hash[1]);
        }
    });
// Made by me, log in console to find hash if super-petals.js doesn't work, then replace the updated hash with the old hash.
// If you ever have to use this to update super-petals.js, ping me on Discord or make a PR to fix it.
