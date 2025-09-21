import StudentInfo from "./student-info";

import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
      <Link href="../.">Back to home page...</Link>
    </main>
  );
}
