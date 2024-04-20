let allMembers = [];

const teamForm = document.getElementById("teamForm");
const leaderInput = document.getElementById("leader");
const memberInput = document.getElementById("member");
const mentorInput = document.getElementById("mentor");
const resultDiv = document.getElementById('resultDiv');

teamForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const leaders = leaderInput.value.split('\n');
    const members = memberInput.value.split('\n');
    const mentors = mentorInput.value.split('\n');

    if (allMembers.some(member => leaders.includes(member) || members.includes(member) || mentors.includes(member))) {
        alert("一人以上のメンバーが既に他のチームのメンバーです");
        return;
    }

    allMembers.push(...leaders, ...members, ...mentors);

    resultDiv.innerHTML = '';
    leaders.forEach((leader, i) => {
        const member = members[i] ? members[i] : 'なし';
        const mentor = mentors[i] ? mentors[i] : 'なし';
        resultDiv.innerHTML += `
            <h2>チーム${i + 1}</h2>
            <p><strong>リーダー:</strong> ${leader}</p>
            <p><strong>メンバー:</strong> ${member}</p>
            <p><strong>メンター:</strong> ${mentor}</p>
        `;
    });
});