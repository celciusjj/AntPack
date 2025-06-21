import AsyncStorage from '@react-native-async-storage/async-storage';

export enum Keys {
  FAVORITE = '@favorites',
}

export async function saveData<T>(key: Keys, value: T) {
  try {
    const parseData = JSON.stringify(value);
    await AsyncStorage.setItem(key, parseData);
  } catch (e) {
    return e as T;
  }
}

export async function getData<T>(key: Keys) {
  try {
    const asyncStorageData = await AsyncStorage.getItem(key);
    return asyncStorageData != null ? JSON.parse(asyncStorageData) : null;
  } catch (e) {
    return e as T;
  }
}

export async function removeData(key: Keys) {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error('Error: ' + e);
  }
}
