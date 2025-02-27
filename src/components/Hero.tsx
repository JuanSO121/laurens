import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1583467875263-d0dec2c34847?auto=format&fit=crop&w=2000&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" /> {/* Fondo oscuro sutil */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-white mb-6">
            Descubre Tu Fragancia Ideal
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8">
            Explora nuestra colección exclusiva de perfumes.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center gap-3 px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-lg shadow-lg">
              <MessageCircle className="h-6 w-6" />
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
