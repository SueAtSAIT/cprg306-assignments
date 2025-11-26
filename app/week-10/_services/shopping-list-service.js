import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Read all entries
export const getItems = async (user, subcollectionName = "items") => {
  try {
    const userSubcollectionRef = collection(
      db,
      "users",
      user,
      subcollectionName
    );
    const querySnapshot = await getDocs(userSubcollectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(
      `Error reading collection: ${subcollectionName} for user ${user.userName} \n`,
      error
    );
  }
};
// Create new entry
export const addItem = async (user, subcollectionName, item) => {
  try {
    // TODO: Check item data before passing it
    const userSubcollectionRef = collection(
      db,
      "users",
      user,
      subcollectionName
    );
    const docRef = await addDoc(userSubcollectionRef, item);
    console.log("Item added: ", item);
    return docRef.id;
  } catch (error) {
    console.error(
      `Error adding ${item} to ${subcollectionName} for user ${user.userName} \n`,
      error
    );
  }
};
