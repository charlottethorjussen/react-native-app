import { collection, query } from "firebase/firestore";
const classRef = collection(db, "class")

export const getClasses = () => {
    const classes = query(classRef)

    return classes
}