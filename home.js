
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="home-container">
      <h2>Welcome back!</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
