// Ambil elemen
const operatorSelect = document.getElementById("operatorSelect");
const bugSelect = document.getElementById("bugSelect");
const payloadSelect = document.getElementById("payloadSelect");
const proxySelect = document.getElementById("proxySelect");

// Saat halaman loading
window.onload = () => {
    console.log("DATA Loaded:", DATA); // Debug aman
    loadOperators();
};

// Load operator dari data.js
function loadOperators() {
    operatorSelect.innerHTML = `<option value="">Pilih Operator</option>`;

    for (let key in DATA.operators) {
        operatorSelect.innerHTML += `
            <option value="${key}">
                ${DATA.operators[key].name}
            </option>
        `;
    }
}

// Saat operator dipilih
operatorSelect.addEventListener("change", () => {
    let op = operatorSelect.value;

    // Reset dropdown
    bugSelect.innerHTML = `<option value="">Pilih Bug</option>`;
    payloadSelect.innerHTML = `<option value="">Pilih Payload</option>`;
    proxySelect.innerHTML = `<option value="">Pilih Proxy</option>`;

    if (!op) return;

    let bugs = DATA.operators[op].bugs;

    // Loop setiap bug
    for (let key in bugs) {
        bugSelect.innerHTML += `
            <option value="${key}">
                ${bugs[key].name}
            </option>
        `;
    }
});

// Saat bug dipilih → tampilkan payload + proxy
bugSelect.addEventListener("change", () => {
    let op = operatorSelect.value;
    let bug = bugSelect.value;

    payloadSelect.innerHTML = `<option value="">Pilih Payload</option>`;
    proxySelect.innerHTML = `<option value="">Pilih Proxy</option>`;

    if (!op || !bug) return;

    let dataBug = DATA.operators[op].bugs[bug];

    // Isi payload
    dataBug.payload.forEach(item => {
        payloadSelect.innerHTML += `<option>${item}</option>`;
    });

    // Isi proxy
    dataBug.proxy.forEach(item => {
        proxySelect.innerHTML += `<option>${item}</option>`;
    });
});

// Fungsi salin
function copyText(type) {
    let text = "";

    if (type === "bug") {
        text = bugSelect.options[bugSelect.selectedIndex]?.text || "";
    } else if (type === "payload") {
        text = payloadSelect.value;
    } else if (type === "proxy") {
        text = proxySelect.value;
    }

    if (!text) return alert("Tidak ada yang disalin!");

    navigator.clipboard.writeText(text);
    alert("Disalin:\n" + text);
}

// Buka video di tab baru
function openVideoTab() {
    window.open("GANTI_LINK_GITHUB_RAW_VIDEO", "_blank");
}