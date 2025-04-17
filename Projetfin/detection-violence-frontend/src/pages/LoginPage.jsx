import React, { useState } from 'react';

const LoginPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* En-tête */}
      <header className="p-6 z-10 relative">
        <h1 className="text-3xl font-bold text-white">DVPSystem</h1>
      </header>

      {/* Vidéo de fond */}
      <video
        src="/vid.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 text-white text-center md:text-left">
        
        {/* Texte à gauche, visible avant l'affichage du formulaire */}
        {!showForm && (
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <p className="text-lg md:text-xl max-w-xl drop-shadow-sm">
              Surveillez, détectez et agissez instantanément contre tout acte de violence,
              grâce au Deep Learning en temps réel.
            </p>

            

            {/* Bouton de connexion */}
            <button
              onClick={() => setShowForm(true)}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg transition"
            >
             Connectez-vous ici pour accéder au système et commencer à surveiller.
            </button>
          </div>
        )}

        {/* Formulaire à droite, affiché après clic */}
        {showForm && (
          <div className="w-full md:w-1/3 px-4 animate-fade-in flex items-center justify-center h-full">
            <div className="bg-white bg-opacity-10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
              <form className="w-full space-y-6">
                
                {/* Champ e-mail */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Adresse e-mail"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-500 text-lg">
                    📧
                  </span>
                </div>

                {/* Champ mot de passe */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-500 text-lg">
                    🔒
                  </span>
                </div>

                {/* Bouton de connexion */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                >
                  Se connecter
                </button>

                {/* Lien mot de passe oublié */}
                <div className="text-sm text-center text-white">
                  <a href="#" className="hover:underline text-indigo-300">
                    Mot de passe oublié ?
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
