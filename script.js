let achievements = [];

fetch('achievements.json')
    .then(response => response.json())
    .then(data => {
        achievements = data;
    });

document.getElementById('randomiseBtn').addEventListener('click', () => {
    if (achievements.length === 0) return;

    const random = achievements[Math.floor(Math.random() * achievements.length)];
    document.getElementById('result').innerHTML = `
    <h2>${random.title}</h2>
    <p>${random.description}</p>
    <p><strong>Difficulty:</strong> ${random.difficulty}</p>
    <p><strong>DLC:</strong> ${random.dlc}</p>
  `;
});
