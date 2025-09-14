import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <ul>
        <li>Sue Steckle</li>
        <li>
          <Link
            target="_blank"
            href="https://github.com/SueAtSAIT/cprg306-assignments">
            My SueAtSAIT GitHub Repo for cprg306 Assignments
          </Link>
        </li>
      </ul>
    </main>
  );
}
