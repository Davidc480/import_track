import { useAuth } from "../AuthContext/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter()

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/dashboard')
        }
    }, [isAuthenticated, router]);

    if (loading) return null;

    return children;
};

export default ProtectedRoute;