import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseDb } from "../firebase";
import { HeaderSlide } from "../types/dataType";
export async function getAllHeaderSlideData() {
  // get data from firebase colelction headerSlideData
  const querySnapshot = await getDocs(
    collection(firebaseDb, "headerSlideData")
  );
  const data: HeaderSlide[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as HeaderSlide);
  });
  return data;
}
export async function getHeaderSlideDataById(id: string) {
  // get data from firebase colelction headerSlideData
  let docRef = doc(firebaseDb, "headerSlideData", id);
  const querySnapshot = await getDoc(docRef);
  return querySnapshot.data();
}