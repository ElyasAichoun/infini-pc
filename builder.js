// نقرأ كل المكونات من الرابط URL
const urlParams = new URLSearchParams(window.location.search);

const cpu = urlParams.get('cpu');
const gpu = urlParams.get('gpu');
const ram = urlParams.get('ram');
const storage = urlParams.get('storage');
const pcCase = urlParams.get('case');
const psu = urlParams.get('psu');

// نظهر القطع التي اخترناها في الصفحة
if (cpu) document.getElementById('cpu-result').innerText = `✔️ المعالج المختار: ${cpu}`;
if (gpu) document.getElementById('gpu-result').innerText = `✔️ كارت الشاشة المختار: ${gpu}`;
if (ram) document.getElementById('ram-result').innerText = `✔️ الرام المختار: ${ram}`;
if (storage) document.getElementById('storage-result').innerText = `✔️ التخزين المختار: ${storage}`;
if (pcCase) document.getElementById('case-result').innerText = `✔️ الكيس المختار: ${pcCase}`;
if (psu) document.getElementById('psu-result').innerText = `✔️ الباور سبلاي المختار: ${psu}`;

// عند الضغط على احسب
function calculate() {
    let totalPrice = 0;
    let totalWatt = 0;

    const components = ['cpu', 'gpu', 'ram', 'storage', 'case', 'psu'];

    components.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            const selectedOption = select.options[select.selectedIndex];
            totalPrice += parseInt(selectedOption.dataset.price || 0);
            totalWatt += parseInt(selectedOption.dataset.watt || 0);
        }
    });

    document.getElementById('total-price').innerText = `💵 السعر الإجمالي: ${totalPrice} $`;
    document.getElementById('total-watt').innerText = `⚡ مجموع الاستهلاك: ${totalWatt} W`;

    if (totalWatt <= 650) {
        document.getElementById('psu-advice').innerText = '🔋 650W يكفيك.';
    } else if (totalWatt <= 850) {
        document.getElementById('psu-advice').innerText = '🔋 850W مناسب.';
    } else {
        document.getElementById('psu-advice').innerText = '🔋 تحتاج باور سبلاي أكبر من 850W.';
    }
}
