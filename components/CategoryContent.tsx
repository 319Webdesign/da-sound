'use client';

import { CheckCircle2, Package } from 'lucide-react';

interface CategoryContentProps {
  longDescription?: string;
  features?: string[];
  typicalUseCases?: string[];
}

export default function CategoryContent({ longDescription, features, typicalUseCases }: CategoryContentProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Beschreibung */}
        {longDescription && (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {longDescription}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Features */}
          {features && features.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Package className="w-6 h-6 text-primary" />
                Leistungsmerkmale
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Typische Anwendungen */}
          {typicalUseCases && typicalUseCases.length > 0 && (
            <div className="bg-primary/5 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Typische Anwendungen
              </h2>
              <div className="flex flex-wrap gap-2">
                {typicalUseCases.map((useCase, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
