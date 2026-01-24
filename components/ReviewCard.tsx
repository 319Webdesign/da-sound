'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  authorName: string;
  rating: number;
  text: string;
  time: number;
}

export default function ReviewCard({ authorName, rating, text, time }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Konvertiere Unix-Timestamp zu lesbarem Datum
  const reviewDate = new Date(time * 1000).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Prüfe, ob der Text lang genug ist, um einen "Mehr lesen"-Button zu zeigen
  const isLongText = text.length > 150;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      {/* Autor und Datum */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 text-base mb-1">{authorName}</h4>
          <p className="text-xs text-gray-500">{reviewDate}</p>
        </div>
      </div>

      {/* Sterne-Bewertung */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Rezensionstext */}
      <div className="flex-grow">
        <p className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${!isExpanded && isLongText ? 'line-clamp-3' : ''}`}>
          {text}
        </p>
        
        {/* Mehr lesen / Weniger anzeigen Button */}
        {isLongText && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
          >
            {isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}
          </button>
        )}
      </div>
    </div>
  );
}
