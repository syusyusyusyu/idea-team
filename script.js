let allMembers = [];

const teamForm = document.getElementById("teamForm");
const teamButton = document.getElementById("teamButton");
const leaderInput = document.getElementById("leader");
const memberInput = document.getElementById("member");
const mentorInput = document.getElementById("mentor");
const resultDiv = document.getElementById('resultDiv');

teamForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const leader = leaderInput.value;
    const members = memberInput.value.split('\n');
    const mentor = mentorInput.value;

    if (allMembers.includes(leader) || members.some(member => allMembers.includes(member)) || allMembers.includes(mentor)) {
        alert("一人以上のメンバーが既に他のチームのメンバーです");
        return;
    }

    allMembers.push(leader, ...members, mentor);

    resultDiv.innerHTML = `
        <h2>チーム情報</h2>
        <p><strong>リーダー:</strong> ${leader}</p>
        <p><strong>メンバー:</strong> ${members.join(', ')}</p>
        <p><strong>メンター:</strong> ${mentor}</p>
    `;
});