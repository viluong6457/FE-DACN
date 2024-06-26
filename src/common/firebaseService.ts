import { v4 } from 'uuid';
import { storage } from './firebaseConfig';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

export enum DocumentType {
  avatarType = 'avatar',
  companyAvatarType = 'companyAvatar',
  companyCoverType = 'companyCover',
  cvType = 'employeeCV'
}

// Version 1: When there is no column to store the file url in database
export async function GetFileByUserId(userId: number, kind: DocumentType) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  console.log(fileRef);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL.toString();
}

export async function UploadFileByUserId(
  userId: number,
  image: File,
  kind: DocumentType
) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  uploadBytes(fileRef, image);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL.toString();
}

export async function RemoveFileByUserId(userId: number, kind: DocumentType) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  try {
    await getDownloadURL(fileRef);
    await deleteObject(fileRef);
    console.log('Đã xóa thành công.');
  } catch (error) {
    console.error('Không thể xóa ảnh. Lỗi: ', error);
  }
}

// Version 2: When there is a column to store the file url in database
export async function getFileByUrl(url: string) {
  if (!url) return '';
  const fileName = decodeURIComponent(url.split('%2F')[1].split('?')[0]);
  const fileRef = ref(storage, `userDocument/${fileName}`);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL.toString();
}

export async function uploadFile(file: File) {
  const fileRef = ref(storage, `userDocument/${file.name}${v4()}`);
  await uploadBytes(fileRef, file);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL.toString();
}

export async function removeFileByUrl(url: string) {
  if (!url) return;
  const fileName = decodeURIComponent(url.split('%2F')[1].split('?')[0]);
  const fileRef = ref(storage, `userDocument/${fileName}`);
  try {
    await getDownloadURL(fileRef);
    await deleteObject(fileRef);
    console.log('Đã xóa thành công.');
  } catch (error) {
    console.error('Không thể xóa ảnh. Lỗi: ', error);
  }
}

export async function downloadFileByUrl(url: string) {
  if (!url) return '';
  const fileName = decodeURIComponent(url.split('%2F')[1].split('?')[0]);
  const fileRef = ref(storage, `userDocument/${fileName}`);

  getDownloadURL(fileRef)
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };

      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element
      // const img = document.getElementById('myimg');
      // img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
}
