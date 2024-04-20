document.addEventListener("DOMContentLoaded", function () {
    const teamForm = document.getElementById("teamForm");
    const teamButton = document.getElementById("teamButton");
    const leaderInput = document.getElementById("leader");
    const memberInput = document.getElementById("member");
    const mentorInput = document.getElementById("mentor");

    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = `
        <h2>チーム情報</h2>
        <p><strong>リーダー:</strong> ${leader}</p>
        <p><strong>メンバー:</strong> ${member}</p>
        <p><strong>メンター:</strong> ${mentor}</p>
    `;

    // フォームの送信を防ぐ
    teamForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    teamButton.addEventListener("click", function () {
        const leaders = leaderInput.value.trim().split('\n');
        const members = memberInput.value.trim().split('\n');
        const mentors = mentorInput.value.trim().split('\n');

        const teams = [];
        for (let i = 0; i < leaders.length; i++) {
            teams[i] = {
                leader: leaders[i],
                members: [],
                mentor: mentors[i % mentors.length]
            };
        }

        for (let i = 0; i < members.length; i++) {
            teams[i % teams.length].members.push(members[i]);
        }

        let output = '';
        teams.forEach((team, index) => {
            output += `チーム${index + 1}:\n`;
            output += `リーダー: ${team.leader}\n`;
            output += `メンバー: ${team.members.join(', ')}\n`;
            output += `メンター: ${team.mentor}\n\n`;
        });

        resultDiv.textContent = output;
    });
});