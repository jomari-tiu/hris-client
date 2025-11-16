import { Text } from "@/components/ui";
import { useAuth } from "@/context/AuthProvider/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center flex flex-col gap-4 items-center">
        <div className="w-16 bg-primary aspect-square rounded-xl flex items-center justify-center shadow-md animate-pulse">
          <Text weight="bold" size="2xl" color="white">
            HR
          </Text>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Logging you out...</h2>
          <p className="text-gray-500 mt-1">Redirecting to login page</p>
        </div>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
      </div>
    </div>
  );
}
