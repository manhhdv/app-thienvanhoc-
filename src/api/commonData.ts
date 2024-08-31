import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseDb } from "../firebase";
import { CommonData } from "../types/dataType";
export async function getAllCommonData() {
  // get data from firebase colelction headerSlideData
  const querySnapshot = await getDocs(
    collection(firebaseDb, "commonData")
  );
  const data: CommonData[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as CommonData); 
  });
  return data;
}
export async function getCommonDataById(id: string) {
  // get data from firebase colelction headerSlideData
  let docRef = doc(firebaseDb, "commonData", id);
  const querySnapshot = await getDoc(docRef);
  return querySnapshot.data();
}
