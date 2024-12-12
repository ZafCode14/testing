import Link from "next/link";

export default function Home() {
  return (
    <main className={`w-full flex`}>
      <Link href={"/crud"} className={`
        flex justify-center items-center
        w-[50%] h-[300px] bg-[gray]
      `}>
        <h1 className={`text-[40px] font-bold`}>CRUD</h1>
      </Link>
      <Link href={"/aiChatBot"} className={`
        flex justify-center items-center
        w-[50%] h-[300px] bg-[#afafaf]
      `}>
        <h1 className={`text-[40px] font-bold`}>AI ChatBot</h1>
      </Link>
    </main>
  );
}