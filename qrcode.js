const userdata = document.getElementById('userdata');
    const qrcodeImage = document.getElementById('qrcodeImage');
    const downloadText = document.getElementById('download-text');
    function generateQRCode() {
        if (userdata.value) {
            console.log(userdata.value);
            qrcodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+ encodeURIComponent(userdata.value);
            qrcodeImage.style.display = 'block';
            downloadText.style.display = 'block';
        } else {
            alert('NO INPUT, Please enter some text to generate a QR code.');
            qrcodeImage.style.display = 'none';
            downloadText.style.display = 'none';
        }
    }
    function resetTextQRCode() {
        userdata.value = '';
        qrcodeImage.src = '';
        qrcodeImage.style.display = 'none';
        downloadText.style.display = 'none';
    }

    const wifiSsid = document.getElementById('wifi-ssid');
    const wifiPassword = document.getElementById('wifi-password');
    const wifiEncryption = document.getElementById('wifi-encryption');
    const wifiQrcodeImage = document.getElementById('wifiQrcodeImage');
    const downloadWifi = document.getElementById('download-text-wifi');
    function generateWifiQRCode() {
        const ssid = wifiSsid.value;
        const password = wifiPassword.value;
        const encryption = wifiEncryption.value;

        if (ssid && (encryption === "nopass" || password)) {
            const wifiData = `WIFI:S:${ssid};T:${encryption};P:${encryption === "nopass" ? "" : password};;`;
            wifiQrcodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(wifiData);
            wifiQrcodeImage.style.display = 'block';
            downloadWifi.style.display = 'block';
        } 
        else {
            alert('Please enter both SSID and Password, or select "None" for encryption if no password is required.');
            wifiQrcodeImage.style.display = 'none';
            downloadWifi.style.display = 'none';
        }
    }
    function resetWifiQRCode() {
        wifiSsid.value = '';
        wifiPassword.value = '';
        wifiEncryption.value = 'WPA';
        wifiQrcodeImage.src = '';
        wifiQrcodeImage.style.display = 'none';
        downloadWifi.style.display = 'none';
    }

    const hidePassword = document.getElementById('wifi-password');
    const toggleWifiPassword = document.getElementById('eye-icon');

   function hide(){
    if (hidePassword.type === 'password') {
        hidePassword.type = 'text';
        toggleWifiPassword.src = 'open-eye.png';
    } else {
        hidePassword.type = 'password';
        toggleWifiPassword.src = 'Hide-eye.png';
    }
}