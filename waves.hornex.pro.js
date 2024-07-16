// ==UserScript==
// @name         hornex wave data
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  https://github.com/kit2d2alt/florr.io | pornex wave data (takes a second to load)
// @author       kit2d2
// @match        https://hornex.pro
// @grant        GM_xmlhttpRequest
// @connect      zcxjames.top
// @icon         data:image/gif;base64,R0lGODlhIAAgAPcAABgTDxsWFB0ZFh0bGRUSEyIeGyQgHiskHTAnHislIS0pJS4sKDEqIjMuKzgtJTYyLjo0LDYzMTs2MT05NEE8LUM9NUM/OUo+NUVBO0pEPElAN1JIPkxGQUxKREdEQFJLRFNNSFtMQ1RSTFtUTVZUUlpWVFxbVV1cWVdYU2JdVmZcVWNWS2JhV2ViW2xkXHFhWG1rZW1mYnxrZHVsanZqZHtyZnJxa313bHVxZXp3cYNyX4Jtaot5ZIR0aoV6b4p6a4R1ZJF7aoV9cYt9dYR+eIh7eJF8dJJ6dqF+dZSDbYuDdYyFfIiFfJGAc5mGdZyKdJOJfJmKe5SFe5mQeqSOfKKTfIyKhZaHgpyNg5KPjJSJgp6Si5yZi5eRg56akrGChqOTg6WZhKKViqWai6ybjKqUg7SeibaZh7uLlK2XkqWdk6ydk6uZmrmZl62ijrCjjrikja2jlK2km6mnnbOklLujlrSlm7Wqnbytnbihnr6wnraxmKytqbqsobSuqbOoo72zpLe1rr20rbewo7y4s8SZm8KjlMKvncW1nMaWosSjqcCpqMKzo8S5pcu9psO1q8O6rMy8rM63qtC8r8mussW9s8u+tMO/ucq0ttKttL3Bvc3Drc7DpNLDqtrGq9TIrtbFqszDtMXDvcvEutPEtNTKtd3MtdTGutnOv9XJu9bRvdzRveLLr+TPtta7xOK6xcTHw8rKxMzOysrJwtTNxdrOwtbJyc7QzNzTxdPRy93Vy97azdLUxtTW09ba1d3a093e29vR1OLWxOLazeLc1eLf2t3g2+Pi3Onk3Ojk1+De4N7i4uPk4+nm4ufq5+rq5evt6ufr6+7w7fLy7u/z9fL08vb59v39+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAgACAAAAj/AAcUMJBAgQIDAw0oNDCgocOHAwQEABCgoQACDCBU0FABAoQGIEOCXEDSoIIFCQwcQHDAgUcIBiRszFBhgoaPInM2IEkygcYLGTJQYFCgQoWgNDNMeBChaYQHUKM+aPBgI4gPGSAwOIAwAwevNLFOGEt2ggQJHo9+2JBhg4SdcCFoACHCwsYRHSxYwKBX78YOIALTlCnVQoMEHzRw+GDhQwsRGDx4yIABg4bIHT5w0FvZglkJSz98eARlxIfMMFJ4+ACig+vXHbxycC3ZswkYXgRtiRQJUJwaLXDAGDGiRAkTJJInFyGiwwgRJjKAyDEIEiQxQ/A02n6nxw0cLsK3/zhhwoTxEyVSwHChIoUKOaEaPSJNAw+kR4zwjIEiRAgUNVxwMYcXWfBBiB9zqLJHHFM0sgkjjNyxhhIrkIEHhPqF8cYhjqSySzLIHMNMNdVA88wupZTyCSeIOILHGmL0cIEZF0KoByKcsOIJKck844wz0JS4DDPBhKLKKp90sgkgdoihggZO2HGhI5104oknn5RyzI/QSGONM774kgsvu6iS5CeRMCJGCBkkEcYmpJjSSiummIIKLsQ0A82e0AATSyyw5ELLKJuEUqggXTT3BB3C4GKKJ4jAEUcfkAzzDJ/H+CJLLJrMkcUSSkDhBiCRjGGCCEm8IcwqpjgShQ83xP9QQyjTVDMNNMwA00svfMDQQgswiFHJI5XMwYIIVeghjDDDgBhLIIFcQkuttzLDjDHAwKKJKLAAA40yuYwCCRMo0IGLLsMgc6k117RrDZ/NFHNML74wQ4011ESzjC+xCCKHGiQwMszAyQAJTa0kQtMMMbY0fEm30TCzjK6iEHLHGFzAwOgw5/qyZZDTSONMMIvk0UYaW8wBzDIT9/LsHGuE0YUNZKSCCy6nQJKLntAY/MsRQMtABCGzyCLLLb2IMocaaoghRApg9FFLLZbcUQkyzRxTDDC/0LLGDjL0QMgo0YoiyiyXMC3HGkTkEIYdtNASCiCV6EIMMb/kMgsgaxz/IcMWgvjxhx8MyiHGFmKosUUMJ1ShBi3E1EKsJaNY8kgfdqxxRREuFLHFFVpIgYUYY6yBxelLzGCDEktcgowullhCyiOL1FGGET3sMMMMPsxAwwtANAEGHWCsQYYaPkyAQQ5WiIIMMbrUcsokktRBRRBSsKH9H2ykYYQMP0QhBh1i2NHHEB1MwAQRojzzyy64kBKJI4eYUUYmmCxCCSb8p/GDEU0YwvjIsAYfsAADLLCBLOLFsVDkBw+GMEQmFKGI/bnCFW1Iwg968AMnkIEOY6iBemBgBWAwUBeneAQe3GAGCSaiDRUMxisKwQMdAKGDYBheFCpjgyz4qBjRq4X8RRhhhjMUIhFoQIMibPGKL9iQB0l4QhXC4AY7iCACNrACkJKhC1xMDRWpaEQd2tAGNHyhDYkoBBJ4EIQoUkFDdLhDCiIQEAA7
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.innerHTML = 'Show Data';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1000';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(button);

    const dataContainer = document.createElement('div');
    dataContainer.style.position = 'fixed';
    dataContainer.style.bottom = '60px';
    dataContainer.style.right = '20px';
    dataContainer.style.width = '400px';
    dataContainer.style.maxHeight = '400px';
    dataContainer.style.overflowY = 'auto';
    dataContainer.style.backgroundColor = 'white';
    dataContainer.style.border = '1px solid #ccc';
    dataContainer.style.borderRadius = '5px';
    dataContainer.style.padding = '10px';
    dataContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    dataContainer.style.display = 'none';
    dataContainer.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(dataContainer);

    const loadingMessage = document.createElement('div');
    loadingMessage.innerHTML = 'Loading...';
    loadingMessage.style.position = 'absolute';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.fontSize = '18px';
    loadingMessage.style.fontWeight = 'bold';
    loadingMessage.style.color = '#666';
    loadingMessage.style.display = 'none';
    document.body.appendChild(loadingMessage);

    // Fetch data from the URL
    function fetchData() {
        loadingMessage.style.display = 'block';
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://zcxjames.top/data.json',
            onload: function(response) {
                const data = JSON.parse(response.responseText);
                displayData(data);
                loadingMessage.style.display = 'none';
            },
            onerror: function() {
                loadingMessage.style.display = 'none';
                alert('Failed to fetch data');
            }
        });
    }

    function displayData(data) {
        dataContainer.innerHTML = '';

        const titleRow = document.createElement('div');
        titleRow.style.display = 'flex';
        titleRow.style.justifyContent = 'space-between';
        titleRow.style.marginBottom = '10px';
        titleRow.innerHTML = `
            <div style="flex: 1; text-align: left;"><strong>Server</strong></div>
            <div style="flex: 1; text-align: right;"><strong>Progress</strong></div>
        `;
        dataContainer.appendChild(titleRow);

        for (const server in data) {
            if (data.hasOwnProperty(server)) {
                const itemRow = document.createElement('div');
                itemRow.style.display = 'flex';
                itemRow.style.justifyContent = 'space-between';
                itemRow.style.marginBottom = '10px';
                itemRow.style.padding = '10px';
                itemRow.style.borderBottom = '1px solid #eee';
                itemRow.style.fontSize = '14px';
                itemRow.innerHTML = `
                    <div style="flex: 1; text-align: left; color: #333;">${server}</div>
                    <div style="flex: 1; text-align: right; color: #666;">${data[server].progress}</div>
                `;
                dataContainer.appendChild(itemRow);
            }
        }
    }

    button.addEventListener('click', function() {
        if (dataContainer.style.display === 'none') {
            dataContainer.style.display = 'block';
            fetchData();
        } else {
            dataContainer.style.display = 'none';
        }
    });
})();
