'use client';

import { useState, useRef } from 'react';
import { 
  LayoutDashboard, 
  Home, 
  DollarSign, 
  Package, 
  Phone, 
  Save,
  Upload,
  Plus,
  X,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Paket {
  id: number;
  name: string;
  price: number;
  mwstInklusiv: boolean;
}

interface MietSet {
  id: number;
  name: string;
  inhalt: string[];
  preis: number;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Highlights Editor
  const [selectedHighlightSet, setSelectedHighlightSet] = useState<number | null>(null);
  
  // Preis-Manager
  const [pakete, setPakete] = useState<Paket[]>([
    { id: 1, name: 'Technik Service', price: 400, mwstInklusiv: false },
    { id: 2, name: 'Live-Sound', price: 800, mwstInklusiv: false },
    { id: 3, name: 'Wedding-Paket', price: 1200, mwstInklusiv: false },
  ]);
  
  // Miet-Sets
  const [mietSets, setMietSets] = useState<MietSet[]>([
    { id: 1, name: 'PA-Komplettset Small', inhalt: ['2x PA-Lautsprecher', '1x Mischpult', '2x Mikrofon'], preis: 150 },
    { id: 2, name: 'DJ-Pult Pioneer', inhalt: ['DJ-Mischpult', 'Audio-Interface'], preis: 120 },
  ]);
  const [newSet, setNewSet] = useState({ name: '', inhalt: '', preis: 0 });
  
  // Business-Status
  const [businessStatus, setBusinessStatus] = useState({
    hinweis: '',
    oeffnungszeiten: {
      montag: '9:00 - 18:00',
      dienstag: '9:00 - 18:00',
      mittwoch: '9:00 - 18:00',
      donnerstag: '9:00 - 18:00',
      freitag: '9:00 - 18:00',
      samstag: '10:00 - 16:00',
      sonntag: 'Geschlossen',
    }
  });

  const handlePaketChange = (id: number, field: 'price' | 'mwstInklusiv', value: number | boolean) => {
    setPakete(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleHighlightSetChange = (setId: number | null) => {
    setSelectedHighlightSet(setId);
  };

  const handleAddMietSet = () => {
    if (newSet.name && newSet.inhalt && newSet.preis) {
      const inhaltArray = newSet.inhalt.split('\n').filter(line => line.trim());
      setMietSets(prev => [...prev, {
        id: prev.length + 1,
        name: newSet.name,
        inhalt: inhaltArray,
        preis: newSet.preis
      }]);
      setNewSet({ name: '', inhalt: '', preis: 0 });
    }
  };

  const handleRemoveMietSet = (id: number) => {
    setMietSets(prev => prev.filter(set => set.id !== id));
  };

  const handleOeffnungszeitChange = (tag: string, wert: string) => {
    setBusinessStatus(prev => ({
      ...prev,
      oeffnungszeiten: { ...prev.oeffnungszeiten, [tag]: wert }
    }));
  };

  const handleSave = () => {
    // Hier würde die API-Anfrage erfolgen
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'startseite', label: 'Startseite', icon: Home },
    { id: 'preise', label: 'Preise', icon: DollarSign },
    { id: 'mietpark', label: 'Mietpark', icon: Package },
    { id: 'kontakt', label: 'Kontakt', icon: Phone },
  ];

  const wochentage = [
    { key: 'montag', label: 'Montag' },
    { key: 'dienstag', label: 'Dienstag' },
    { key: 'mittwoch', label: 'Mittwoch' },
    { key: 'donnerstag', label: 'Donnerstag' },
    { key: 'freitag', label: 'Freitag' },
    { key: 'samstag', label: 'Samstag' },
    { key: 'sonntag', label: 'Sonntag' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-900">da-sound</h1>
            <p className="text-sm text-gray-500">Admin-Dashboard</p>
          </div>
          
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Übersicht</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Highlights Editor */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlight der Woche</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Produkt-Set auswählen
                      </label>
                      <select
                        value={selectedHighlightSet || ''}
                        onChange={(e) => handleHighlightSetChange(e.target.value ? Number(e.target.value) : null)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Kein Highlight</option>
                        {mietSets.map((set) => (
                          <option key={set.id} value={set.id}>
                            {set.name} ({set.preis}€)
                          </option>
                        ))}
                      </select>
                    </div>
                    {selectedHighlightSet && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        {(() => {
                          const selectedSet = mietSets.find(s => s.id === selectedHighlightSet);
                          if (!selectedSet) return null;
                          return (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">{selectedSet.name}</h4>
                              <ul className="text-sm text-gray-700 mb-2 list-disc list-inside">
                                {selectedSet.inhalt.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                              <p className="text-sm font-medium text-gray-900">
                                Preis: {selectedSet.preis}€
                              </p>
                              <p className="text-xs text-gray-500 mt-2">
                                Dieses Produkt-Set wird als Highlight der Woche angezeigt.
                              </p>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Preis-Manager */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preis-Manager</h3>
                  <div className="space-y-4">
                    {pakete.map((paket) => (
                      <div key={paket.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <label className="font-medium text-gray-900">{paket.name}</label>
                          <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                              type="checkbox"
                              checked={paket.mwstInklusiv}
                              onChange={(e) => handlePaketChange(paket.id, 'mwstInklusiv', e.target.checked)}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            MwSt inklusive anzeigen
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={paket.price}
                            onChange={(e) => handlePaketChange(paket.id, 'price', Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                          <span className="text-gray-600">€</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Miet-Sets */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Miet-Sets</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                      <h4 className="font-medium text-gray-900 mb-3">Neues Set anlegen</h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Name"
                          value={newSet.name}
                          onChange={(e) => setNewSet(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <textarea
                          placeholder="Inhalt (eine Zeile pro Stichpunkt)"
                          value={newSet.inhalt}
                          onChange={(e) => setNewSet(prev => ({ ...prev, inhalt: e.target.value }))}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            placeholder="Preis"
                            value={newSet.preis || ''}
                            onChange={(e) => setNewSet(prev => ({ ...prev, preis: Number(e.target.value) }))}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                          <span className="text-gray-600">€</span>
                        </div>
                        <button
                          onClick={handleAddMietSet}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          Set hinzufügen
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {mietSets.map((set) => (
                        <div key={set.id} className="border border-gray-200 rounded-lg p-3 flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{set.name}</h5>
                            <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                              {set.inhalt.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                            <p className="text-sm font-medium text-gray-900 mt-1">{set.preis}€</p>
                          </div>
                          <button
                            onClick={() => handleRemoveMietSet(set.id)}
                            className="text-red-600 hover:text-red-700 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business-Status */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business-Status</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aktueller Hinweis
                      </label>
                      <input
                        type="text"
                        placeholder="z.B. Heute wegen Event ab 14 Uhr geschlossen"
                        value={businessStatus.hinweis}
                        onChange={(e) => setBusinessStatus(prev => ({ ...prev, hinweis: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Öffnungszeiten
                      </label>
                      <div className="space-y-2">
                        {wochentage.map((tag) => (
                          <div key={tag.key} className="flex items-center gap-3">
                            <span className="w-24 text-sm text-gray-700">{tag.label}:</span>
                            <input
                              type="text"
                              value={businessStatus.oeffnungszeiten[tag.key as keyof typeof businessStatus.oeffnungszeiten]}
                              onChange={(e) => handleOeffnungszeitChange(tag.key, e.target.value)}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <Save className="w-5 h-5" />
                  Änderungen speichern
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Website wurde aktualisiert!</span>
                </div>
              )}
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="text-center py-12">
              <p className="text-gray-500">Diese Sektion ist noch nicht verfügbar.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
