const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');

async function fetchAppDetails() {
    try {
        const response = await axios.get('http://localhost:8083/getProperties');

        if (response.data) {
            updateReactNativeConfig(response.data);
          updateTheme(response.data);
            buildApk();
        }
    } catch (error) {
        console.error('Bilgileri alırken bir hata oluştu:', error);
    }
}

function updateReactNativeConfig(data) {
    const androidStringsPath = 'android/app/src/main/res/values/strings.xml';

    let androidStringsContent = fs.readFileSync(androidStringsPath, 'utf8');
    androidStringsContent = androidStringsContent.replace(/<string name="app_name">.*<\/string>/, `<string name="app_name">${data.app_name}</string>`);
    
    fs.writeFileSync(androidStringsPath, androidStringsContent);
    console.log('Uygulama adı güncellendi!');
}

const appConfigPath = 'D:\\src\\react_projects\\rickAndMorty\\appConfig.json';

function updateTheme(data) {
    let appConfig = require(appConfigPath);
    
  appConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf8'));
    appConfig.backgroundColor = data.color;
    fs.writeFileSync(appConfigPath, JSON.stringify(appConfig, null, 2));
    console.log('Tema rengi güncellendi!');
}






function buildApk() {
    // Windows için uygun komut formatı
    exec('cd android && gradlew.bat assembleRelease', (error, stdout, stderr) => {
        if (error) {
            console.error(`APK oluşturma hatası: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`APK oluşturma stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
        console.log('APK başarıyla oluşturuldu!');
    });
}


fetchAppDetails();
