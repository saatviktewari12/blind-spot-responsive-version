const checkBtn = document.getElementById('checkBtn');
const resultSection = document.getElementById('resultSection');
const verdictText = document.getElementById('verdictText');
const evidenceList = document.getElementById('evidenceList');
const analyzingText = document.getElementById('analyzingText');

checkBtn.addEventListener('click', () => {
  const input = document.getElementById('newsInput').value.trim();
  if (!input) {
    alert("Please enter some text or headline.");
    return;
  }

  analyzingText.style.display = "block";
  resultSection.classList.remove("show");

  setTimeout(() => {
    const verdicts = ["Likely Real", "Likely False", "Unverified"];
    const randomVerdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    const confidence = Math.floor(Math.random() * 41) + 60;

    verdictText.innerHTML = `<strong>${randomVerdict}</strong> — Confidence: ${confidence}%`;

    const evidenceSamples = [
      { title: "Wikipedia - Related Topic", link: "https://en.wikipedia.org" },
      { title: "PolitiFact - Claim Review", link: "https://www.politifact.com" },
      { title: "Snopes - Fact Check", link: "https://www.snopes.com" }
    ];

    const ul = evidenceList.querySelector("ul");
    ul.innerHTML = "";
    for (let i = 0; i < 2; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const sample = evidenceSamples[Math.floor(Math.random() * evidenceSamples.length)];
      a.href = sample.link;
      a.target = "_blank";
      a.textContent = sample.title;
      li.appendChild(a);
      ul.appendChild(li);
    }

    analyzingText.style.display = "none";
    resultSection.classList.add("show");
  }, 2000);
});
