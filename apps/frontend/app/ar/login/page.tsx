"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error || "فشل المصادقة");
      } else if (result?.ok) {
        router.push("/ar/admin");
      }
    } catch (err) {
      setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Asselda
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          تسجيل الدخول
        </h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
              dir="ltr"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              dir="ltr"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          تحتاج إلى تسجيل الدخول للوصول إلى منطقة الإدارة.
        </p>
      </div>
    </div>
  );
}
