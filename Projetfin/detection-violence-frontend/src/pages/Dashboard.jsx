// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Camera, Video, Bell, Clock, Shield } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* En-tête avec le nom de l'application */}
      <header className="p-6">
        <h1 className="text-3xl font-bold">DVPSystem</h1>
      </header>
      <img
        src="/bg-camera.jpg"
        alt="camera surveillance"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
      />
      {/* Contenu principal */}
      <main className="p-6">
      <h6 className="text-2xl font-semibold text-center">Welcome back!</h6><br /> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Link to="/cameras" className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition hover:bg-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <Camera size={28} />
              <h3 className="text-xl font-medium">Voir toutes les caméras</h3>
            </div>
            <p className="text-gray-400">Accédez en temps réel aux flux de toutes les caméras connectées. Surveillez chaque zone stratégique avec une clarté optimale pour garantir une sécurité constante.</p>
            </Link>

          <Link to="/test-video" className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition hover:bg-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <Video size={28} />
              <h3 className="text-xl font-medium">Tester une vidéo</h3>
            </div>
            <p className="text-gray-400">Importez une vidéo pour une analyse instantanée par notre système d'IA. Identifiez rapidement tout comportement suspect ou violent détecté dans l'enregistrement.</p>
            </Link>

          <Link to="/notifications" className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition hover:bg-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <Bell size={28} />
              <h3 className="text-xl font-medium">Notifications</h3>
            </div>
            <p className="text-gray-400">Consultez les alertes générées automatiquement lors de détections d'incidents. Restez informé en temps réel pour une réaction rapide et efficace.</p>
            </Link>

          <Link to="/historique" className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition hover:bg-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <Clock size={28} />
              <h3 className="text-xl font-medium">Historique</h3>
            </div>
            <p className="text-gray-400">Parcourez l'historique complet des événements enregistrés. Analysez les données passées pour améliorer les stratégies de sécurité et prévenir les incidents futurs.</p>
            </Link>

          <Link to="/admin" className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition hover:bg-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <Shield size={28} />
              <h3 className="text-xl font-medium">Admin Dashboard</h3>
            </div>
            <p className="text-gray-400">Gérez les paramètres avancés de l'application, les utilisateurs et les statistiques. Optimisez les performances du système et personnalisez les configurations selon vos besoins.</p>
            </Link>
        </div>
      </main>

      {/* Bouton de déconnexion en bas à droite */}
      <div className="absolute bottom-6 right-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-red-700 rounded-lg transition">
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
