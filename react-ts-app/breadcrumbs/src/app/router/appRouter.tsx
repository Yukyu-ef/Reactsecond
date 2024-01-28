import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "../page";

const AppRouter: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <Link href="/" passHref>
          <a className={pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        {/* 他のページのリンクを追加する場合はここに追加 */}
      </nav>
      <main>
        {/* ルートに基づいてコンポーネントを切り替える */}
        {pathname === "/" && <Home />}
        {/* 他のページのコンポーネントを追加する場合はここに追加 */}
      </main>
    </>
  );
};

export default AppRouter;
