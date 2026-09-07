import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import StudentDashboard from "@/app/components/dashboard/StudentDashboard";

export default async function StudentDashboardPage() {
    const session = await auth()
    
    if (!session?.user) {
        redirect("/login");
    }
    
    if (session.user.role !== "STUDENT") {
        redirect("/dashboard");
    }
    return(
        <StudentDashboard />

    )
}