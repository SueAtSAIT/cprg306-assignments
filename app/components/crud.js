import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// import { db } from "@/app/firebase/config";
import { db } from "@/app/utils/firebase";

// CRUD Operations

// Create new entry
export const addItem = async (userID, subcollectionName, itemData) => {
  try {
    // TODO: Check item data before passing it
    const userSubcollectionRef = collection(
      db,
      "users",
      userID,
      subcollectionName
    );
    const docRef = await addDoc(userSubcollectionRef, itemData);
    console.log("Item added: ", itemData);
    return docRef.id;
  } catch (error) {
    console.error(
      `Error adding ${itemData} to ${subcollectionName} for user ${user.userName} \n`,
      error
    );
  }
};
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
      `Error reading collection: ${subcollectionName} for user ${user.userName} \n`,
      error
    );
  }
};
// Update an entry
export const updateItem = async (userID, subcollectionName, itemData) => {
  try {
    const itemDoc = doc(db, "users", userID, subcollectionName, id);
    await updateDoc(itemDoc, itemData);
    console.log(`Item ${id} updated`);
  } catch (error) {
    console.error(
      `Error updating ${id} to ${itemData} in ${subcollectionName} for user ${user.userName}\n`,
      error
    );
  }
};
// Delete an entry
export const deleteItem = async (userID, subcollectionName, id) => {
  try {
    const itemDoc = doc(db, "users", userID, subcollectionName, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(
      `Error Deleting ${id} from ${subcollectionName} for user ${user.userName}\n`,
      error
    );
  }
};
