// src/pages/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen relative">
      
      {/* Image de fond en plein écran */}
      <img
        src="/bg-camera.jpg"
        alt="camera surveillance"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu centré sur l’image */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Système de Détection de Violence
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-sm">
        Surveillez, détectez et agissez instantanément contre tout acte de violence, grâce au Deep Learning en temps réel        </p>

        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-90 text-black placeholder-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-90 text-black placeholder-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
          >
            Se connecter
          </button>
          <div className="text-sm mt-2">
            <a href="#" className="text-indigo-300 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
