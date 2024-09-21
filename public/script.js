// In script.js

window.onload = () => {
    fetch('/api/concertsx/active-fundraisers')
        .then(response => response.json())
        .then(data => {
            const fundraiserList = document.getElementById('fundraiser-list');
            fundraiserList.innerHTML = '';

            data.forEach(fundraiser => {
                const fundraiserItem = document.createElement('div');
                fundraiserItem.innerHTML = `
                    <h3>${fundraiser.CAPTION}</h3>
                    <p><strong>Organiser:</strong> ${fundraiser.ORGANIZER}</p>
                    <p><strong>Category:</strong> ${fundraiser.CATEGORY}</p>
                    <p><strong>Target Funding:</strong> $${fundraiser.TARGET_FUNDING}</p>
                    <p><strong>Current Funding:</strong> $${fundraiser.CURRENT_FUNDING}</p>
                    <p><strong>City:</strong> ${fundraiser.CITY}</p>
                `;
                fundraiserList.appendChild(fundraiserItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};
