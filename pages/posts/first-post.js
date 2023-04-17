import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1>I Love ZeonSanHak</h1>
      <Link href="/">Back to home</Link>
      <div>
        <button>과제 완료</button>
      </div>
      <div>
        <a href="/script.html">제발 나좀 살려줘</a>
      </div>
    </div>
  );
}