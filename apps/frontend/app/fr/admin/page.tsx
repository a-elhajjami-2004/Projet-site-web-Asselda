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
        <p>Chargement...</p>
      </div>
    );
  }

  if (!session) {
    router.push("/fr/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Tableau de Bord Admin
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                {session.user.name} ({session.user.role})
              </span>
              <button
                onClick={() => signOut({ redirect: true })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Bienvenue, {session.user.name}!
          </h2>
          <p className="text-gray-600">
            Rôle: <span className="font-semibold">{session.user.role}</span>
          </p>
        </div>

        {/* Content Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Articles Card */}
          <Link href="/fr/admin/articles">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Articles
              </h3>
              <p className="text-gray-600 mb-4">
                Gérer les articles et actualités du site
              </p>
              <div className="flex items-center text-blue-600">
                <span>Accéder →</span>
              </div>
            </div>
          </Link>

          {/* Projects Card */}
          <Link href="/fr/admin/projets">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Projets
              </h3>
              <p className="text-gray-600 mb-4">
                Gérer les projets de l'association
              </p>
              <div className="flex items-center text-blue-600">
                <span>Accéder →</span>
              </div>
            </div>
          </Link>

          {/* Users Card (Admin Only) */}
          {isAdmin(session) && (
            <Link href="/fr/admin/utilisateurs">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Utilisateurs
                </h3>
                <p className="text-gray-600 mb-4">
                  Gérer les utilisateurs et les rôles
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Accéder →</span>
                </div>
              </div>
            </Link>
          )}

          {/* Partners Card */}
          <Link href="/fr/admin/partenaires">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Partenaires
              </h3>
              <p className="text-gray-600 mb-4">
                Gérer les partenaires et logos
              </p>
              <div className="flex items-center text-blue-600">
                <span>Accéder →</span>
              </div>
            </div>
          </Link>

          {/* Activities Card */}
          <Link href="/fr/admin/activites">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Activités
              </h3>
              <p className="text-gray-600 mb-4">
                Gérer les activités de l'association
              </p>
              <div className="flex items-center text-blue-600">
                <span>Accéder →</span>
              </div>
            </div>
          </Link>

          {/* Settings Card (Admin Only) */}
          {isAdmin(session) && (
            <Link href="/fr/admin/parametres">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Paramètres
                </h3>
                <p className="text-gray-600 mb-4">
                  Configuration du site et rôles utilisateurs
                </p>
                <div className="flex items-center text-blue-600">
                  <span>Accéder →</span>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Permissions Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Permissions - {session.user.role}
          </h3>
          {session.user.role === "Admin" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ Accès complet à tous les contenus</li>
              <li>✓ Gestion des utilisateurs et des rôles</li>
              <li>✓ Accès aux paramètres du système</li>
              <li>✓ Création, modification et suppression de contenu</li>
            </ul>
          )}
          {session.user.role === "Éditeur" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ Création et modification d'articles</li>
              <li>✓ Création et modification de projets</li>
              <li>✓ Publication de contenu</li>
              <li>✗ Impossible de supprimer du contenu</li>
              <li>✗ Pas d'accès aux paramètres système</li>
            </ul>
          )}
          {session.user.role === "Lecteur" && (
            <ul className="text-blue-800 space-y-2">
              <li>✓ Consultation des articles</li>
              <li>✓ Consultation des projets</li>
              <li>✗ Impossible de créer du contenu</li>
              <li>✗ Impossible de modifier du contenu</li>
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
