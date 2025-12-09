const operatorSelect = document.getElementById("operatorSelect");
const bugSelect = document.getElementById("bugSelect");
const payloadSelect = document.getElementById("payloadSelect");
const proxySelect = document.getElementById("proxySelect");

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

    let selectedBug = DATA.operators[op].bugs[bug];

    selectedBug.payload.forEach(v =>
        payloadSelect.innerHTML += `<option>${v}</option>`
    );

    selectedBug.proxy.forEach(v =>
        proxySelect.innerHTML += `<option>${v}</option>`
    );
});

function copyText(type) {
    let text;

    if (type === "bug") text = bugSelect.options[bugSelect.selectedIndex].text;
    if (type === "payload") text = payloadSelect.value;
    if (type === "proxy") text = proxySelect.value;

    if (!text) return alert("Tidak ada yang disalin!");

    navigator.clipboard.writeText(text);
    alert("Disalin:\n" + text);
}

function openVideoTab() {
    window.open("GANTI_LINK_GITHUB_RAW_VIDEO", "_blank");
}