import LoginBranding from "../components/auth/LoginBranding";
import LoginForm from "../components/auth/LoginForm";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;

  const role = params?.role || "student";

  return (
    <main className="min-h-screen bg-[#fcfcff]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Branding */}
        <LoginBranding />

        {/* Right Login */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <LoginForm role={role} />
        </div>

      </div>
    </main>
  );
}