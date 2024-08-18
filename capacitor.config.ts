import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cyberCrimeRepoter',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorConfig: {
      android: {
        compileSdkVersion: 34, // Set the desired compile SDK version
        targetSdkVersion: 34, // Set the desired target SDK version
        minSdkVersion: 21 // Set the desired minimum SDK version
      }
    }
  }
};

export default config;
