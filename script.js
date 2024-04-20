let allMembers = [];

const teamForm = document.getElementById("teamForm");
const teamButton = document.getElementById("teamButton");
const leaderInput = document.getElementById("leader");
const memberInput = document.getElementById("member");
const mentorInput = document.getElementById("mentor");
const resultDiv = document.getElementById('resultDiv');

teamButton.addEventListener("click", function () {
    const leader = leaderInput.value;
    const members = memberInput.value.split('\n');
    const mentor = mentorInput.value;

    if (allMembers.includes(leader)) {
        alert("リーダーは既に他のチームのメンバーです");
        return;
    }

    for (let i = 0; i < members.length; i++) {
        if (allMembers.includes(members[i])) {
            alert("一人以上のメンバーが既に他のチームのメンバーです");
            return;
        }
    }

    if (allMembers.includes(mentor)) {
        alert("メンターは既に他のチームのメンバーです");
        return;
    }

    allMembers.push(leader);
    allMembers = allMembers.concat(members);
    allMembers.push(mentor);

    resultDiv.innerHTML = `
        <h2>チーム情報</h2>
        <p><strong>リーダー:</strong> ${leader}</p>
        <p><strong>メンバー:</strong> ${members.join(', ')}</p>
        <p><strong>メンター:</strong> ${mentor}</p>
    `;
});