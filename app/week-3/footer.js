import Link from "next/link";
import StudentInfo from "../week-2/student-info";

export default function FooterLink() {
  return (
    <footer className="text-center my-10 ">
      <StudentInfo />
      <Link href="../." className="font-bold">
        Back to home page...
      </Link>
    </footer>
  );
}
