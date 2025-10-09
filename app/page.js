import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl mx-3 my-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link
        href="./week-2/"
        className="bg-red-500 px-3 py-1 mx-3 text-white rounded-full hover:bg-red-300">
        Week 2 Assignment
      </Link>
      <Link
        href="./week-3/"
        className="bg-orange-500 px-3 py-1 text-white rounded-full hover:bg-orange-400">
        Week 3 Assignment
      </Link>
      <Link
        href="./week-4/"
        className="bg-yellow-500 px-3 py-1 mx-3 text-white rounded-full hover:bg-yellow-300">
        Week 4 Assignment
      </Link>
      <Link
        href="./week-5/"
        className="bg-green-600 px-3 py-1  text-white rounded-full hover:bg-green-400">
        Week 4 Assignment
      </Link>
    </main>
  );
}
