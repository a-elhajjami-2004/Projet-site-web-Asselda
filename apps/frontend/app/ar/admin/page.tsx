"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/lib/auth-client";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>جاري التحميل...</p>
      </div>
    );
  }

  if (!session) {
    router.push("/ar/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => signOut({ redirect: true })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                تسجيل الخروج
              </button>
              <span className="text-gray-600">
                {session.user.name} ({session.user.role})
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              لوحة التحكم
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            أهلا وسهلا، {session.user.name}!
          </h2>
          <p className="text-gray-600">
            الدور: <span className="font-semibold">{session.user.role}</span>
          </p>
        </div>

        {/* Content Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Articles Card */}
          <Link href="/ar/admin/articles">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                المقالات
              </h3>
              <p className="text-gray-600 mb-4">
                إدارة المقالات والأخبار على الموقع
              </p>
              <div className="flex items-center text-blue-600">
                <span>← الوصول</span>
              </div>
            </div>
          </Link>

          {/* Projects Card */}
          <Link href="/ar/admin/projets">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                المشاريع
              </h3>
              <p className="text-gray-600 mb-4">
                إدارة مشاريع الجمعية
              </p>
              <div className="flex items-center text-blue-600">
                <span>← الوصول</span>
              </div>
            </div>
          </Link>

          {/* Users Card (Admin Only) */}
          {isAdmin(session) && (
            <Link href="/ar/admin/utilisateurs">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  المستخدمون
                </h3>
                <p className="text-gray-600 mb-4">
                  إدارة المستخدمين والأدوار
                </p>
                <div className="flex items-center text-blue-600">
                  <span>← الوصول</span>
                </div>
              </div>
            </Link>
          )}

          {/* Partners Card */}
          <Link href="/ar/admin/partenaires">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                الشركاء
              </h3>
              <p className="text-gray-600 mb-4">
                إدارة الشركاء والشعارات
              </p>
              <div className="flex items-center text-blue-600">
                <span>← الوصول</span>
              </div>
            </div>
          </Link>

          {/* Activities Card */}
          <Link href="/ar/admin/activites">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                الأنشطة
              </h3>
              <p className="text-gray-600 mb-4">
                إدارة أنشطة الجمعية
              </p>
              <div className="flex items-center text-blue-600">
                <span>← الوصول</span>
              </div>
            </div>
          </Link>

          {/* Settings Card (Admin Only) */}
          {isAdmin(session) && (
            <Link href="/ar/admin/parametres">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  الإعدادات
                </h3>
                <p className="text-gray-600 mb-4">
                  تكوين الموقع والأدوار
                </p>
                <div className="flex items-center text-blue-600">
                  <span>← الوصول</span>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Permissions Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            الأذونات - {session.user.role}
          </h3>
          {session.user.role === "Admin" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ الوصول الكامل إلى جميع المحتويات</li>
              <li>✓ إدارة المستخدمين والأدوار</li>
              <li>✓ الوصول إلى إعدادات النظام</li>
              <li>✓ إنشاء وتعديل وحذف المحتوى</li>
            </ul>
          )}
          {session.user.role === "Éditeur" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ إنشاء وتعديل المقالات</li>
              <li>✓ إنشاء وتعديل المشاريع</li>
              <li>✓ نشر المحتوى</li>
              <li>✗ غير قادر على حذف المحتوى</li>
              <li>✗ لا يوجد وصول إلى إعدادات النظام</li>
            </ul>
          )}
          {session.user.role === "Lecteur" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ عرض المقالات</li>
              <li>✓ عرض المشاريع</li>
              <li>✗ غير قادر على إنشاء محتوى</li>
              <li>✗ غير قادر على تعديل المحتوى</li>
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
