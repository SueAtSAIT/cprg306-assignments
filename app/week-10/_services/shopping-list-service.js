import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Read all entries
export const getItems = async (userID, subcollectionName = "items") => {
  try {
    const userSubcollectionRef = collection(
      db,
      "users",
      userID,
      subcollectionName
    );
    const querySnapshot = await getDocs(userSubcollectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(
      `Error reading collection: ${subcollectionName} for user ${userID} \n`,
      error
    );
  }
};
// Create new entry
export const addItem = async (userID, item, subcollectionName = "items") => {
  try {
    // TODO: Check item data before passing it
    const userSubcollectionRef = collection(
      db,
      "users",
      userID,
      subcollectionName
    );
    const docRef = await addDoc(userSubcollectionRef, item);
    console.log("Item added: ", item);
    return docRef.id;
  } catch (error) {
    console.error(
      `Error adding ${item} to ${subcollectionName} for user ${userID} \n`,
      error
    );
  }
};
// Delete an entry
export const deleteItem = async (userID, id, subcollectionName = "items") => {
  try {
    const itemDoc = doc(db, "users", userID, subcollectionName, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(
      `Error Deleting ${id} from ${subcollectionName} for user ${userID}\n`,
      error
    );
  }
};
