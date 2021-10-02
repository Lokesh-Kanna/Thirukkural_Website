async function getKural() {
    document.getElementById('hidden').style.display = 'inline';
    let kural_num = document.getElementById('number').value;
    console.log(kural_num);

    let kuralLink = await fetch(`https://api-thirukkural.vercel.app/api?num=${kural_num}`);
    let kural = await kuralLink.json();
    let kuralNo = kural.number;
    let kuralLine1 = kural.line1;
    let kuralLine2 = kural.line2;
    let pirivu = kural.sect_tam;
    let adhigaram = kural.chap_tam;
    let vilakkam = kural.tam_exp;
    let section = kural.sect_eng;
    let chapter = kural.chap_eng;
    let engExp = kural.eng_exp;
    console.log(kuralNo);
    
    document.getElementById("kuralAndNumber").innerHTML = `Kural No. ${kuralNo} <br> ${kuralLine1} <br> ${kuralLine2}`;
    document.getElementById("kuralDetailsTam").innerHTML = `Pirivu: ${pirivu} <br> <br> Adhigaram: ${adhigaram}`;
    document.getElementById("tamilMeaning").innerHTML = `Vilakkam:<br> ${vilakkam}`;
    document.getElementById("kuralDetailsEng").innerHTML = `Section:<br> ${section} <br> <br> Chapter: ${chapter}`;
    document.getElementById("englishMeaning").innerHTML = `Explanation:<br> ${engExp}`;
}

