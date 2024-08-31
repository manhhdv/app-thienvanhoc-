import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseDb } from "../firebase";
import { PlanetData } from "../types/dataType";
export async function getAllPlanetData() {
  // get data from firebase colelction headerSlideData
  const querySnapshot = await getDocs(
    collection(firebaseDb, "planetData")
  );
  const data: PlanetData[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as PlanetData);
  });
  return data;
}
export async function getPlanetDataById(id: string) {
  // get data from firebase colelction headerSlideData
  let docRef = doc(firebaseDb, "planetData", id);
  const querySnapshot = await getDoc(docRef);
  return querySnapshot.data();
}