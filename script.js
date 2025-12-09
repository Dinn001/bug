const operatorSelect = document.getElementById("operatorSelect");
const bugSelect = document.getElementById("bugSelect");
const payloadSelect = document.getElementById("payloadSelect");
const proxySelect = document.getElementById("proxySelect");

const bugResult = document.getElementById("bugResult");
const payloadResult = document.getElementById("payloadResult");
const proxyResult = document.getElementById("proxyResult");

window.onload = () => {
    for (let key in DATA.operators) {
        operatorSelect.innerHTML += `<option value="${key}">${DATA.operators[key].name}</option>`;
    }
};

operatorSelect.addEventListener("change", () => {
    let op = operatorSelect.value;
    
    bugSelect.innerHTML = "<option value=''>Pilih Bug</option>";
    payloadSelect.innerHTML = "<option value=''>Pilih Payload</option>";
    proxySelect.innerHTML = "<option value=''>Pilih Proxy</option>";
    
    bugResult.textContent = "Belum ada bug dipilih";
    payloadResult.textContent = "Belum ada payload dipilih";
    proxyResult.textContent = "Belum ada proxy dipilih";
    
    if (!op) return;
    
    let bugs = DATA.operators[op].bugs;
    
    for (let key in bugs) {
        bugSelect.innerHTML += `<option value="${key}">${bugs[key].name}</option>`;
    }
});

bugSelect.addEventListener("change", () => {
    let op = operatorSelect.value;
    let bug = bugSelect.value;
    
    payloadSelect.innerHTML = "<option value=''>Pilih Payload</option>";
    proxySelect.innerHTML = "<option value=''>Pilih Proxy</option>";
    
    if (!bug) return;
    
    let selected = DATA.operators[op].bugs[bug];
    
    bugResult.textContent = selected.name;
    
    selected.payload.forEach((v, i) => {
        payloadSelect.innerHTML += `<option value="${v}">Payload ${i + 1}</option>`;
    });
    
    selected.proxy.forEach((v, i) => {
        proxySelect.innerHTML += `<option value="${v}">Proxy ${i + 1}</option>`;
    });
});

payloadSelect.addEventListener("change", () => {
    payloadResult.textContent = payloadSelect.value || "Belum ada payload dipilih";
});

proxySelect.addEventListener("change", () => {
    proxyResult.textContent = proxySelect.value || "Belum ada proxy dipilih";
});

function copyResult(id) {
    let text = document.getElementById(id).textContent;
    
    if (!text || text.includes("Belum"))
        return alert("Tidak ada data yang disalin!");
    
    navigator.clipboard.writeText(text);
    alert("Disalin:\n" + text);
}

function openVideoTab() {
    // GANTI INI setelah upload video ke GitHub
    const videoURL = "GANTI_DENGAN_LINK_RAW_GITHUB";
    
    if (videoURL.includes("GANTI")) {
        alert("⚠️ Link video belum dipasang, silakan edit script.js");
        return;
    }
    
    window.open(videoURL, "_blank");
}