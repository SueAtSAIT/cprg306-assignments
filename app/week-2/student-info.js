import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <ul>
        <li className="text-purple-500 hover:text-purple-700">
          Sue Steckle (00987166)
        </li>
        <li>
          <Link
            className="hover:font-semibold"
            target="_blank"
            href="https://github.com/SueAtSAIT/cprg306-assignments">
            My SueAtSAIT GitHub Repo for cprg306 Assignments
          </Link>
        </li>
      </ul>
    </main>
  );
}
