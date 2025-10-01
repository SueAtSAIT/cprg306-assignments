import Link from "next/link";
import StudentInfo from "../week-2/student-info";

export default function FooterLink() {
  return (
    <footer className="text-center my-10 font-bold">
      <StudentInfo />
      <Link href="../.">Back to home page...</Link>
    </footer>
  );
}
