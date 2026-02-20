// components/QuoteForm.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useActionState } from 'react';
import { sendQuoteEmail } from '@/lib/quoteActions';   // ← standard @/ alias (works perfectly now that file is pushed)

interface QuoteFormProps {
  onSuccess?: () => void;
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [state, formAction, isPending] = useActionState(sendQuoteEmail, null);
  const [previews, setPreviews] = useState<{ name: string; url: string; type: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    if (state?.success && onSuccess) {
      onSuccess();
    }
  }, [state?.success, onSuccess]);

  const handleFiles = (newFiles: FileList | File[]) => {
    const filesArray = Array.from(newFiles);
    const validFiles = filesArray.filter((f) => f.size > 0);

    setSelectedFiles((prev) => [...prev, ...validFiles]);

    const newPreviews = validFiles.map((file) => ({
      name: file.name,
      url: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
      type: file.type,
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    const preview = previews[index];
    if (preview?.url) URL.revokeObjectURL(preview.url);

    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (fileInputRef.current) {
      const dt = new DataTransfer();
      selectedFiles.forEach((file) => dt.items.add(file));
      fileInputRef.current.files = dt.files;
    }
  }, [selectedFiles]);

  useEffect(() => {
    return () => {
      previews.forEach((p) => {
        if (p.url) URL.revokeObjectURL(p.url);
      });
    };
  }, [previews]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-green-700 mb-4">Get Your Free Quote</h2>
          <p className="text-2xl text-gray-700">Share your shop quote — I'll often beat it by up to 50%!</p>
          <p className="text-green-600 font-bold mt-2">Mobile mechanic serving The Woodlands, Kingwood, Conroe & all Montgomery County TX</p>
        </div>

        <form action={formAction} className="space-y-8 bg-gray-50 p-10 rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name *</label>
              <input type="text" name="name" required className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Vehicle Year/Make/Model</label>
              <input type="text" name="vehicle" className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" placeholder="2020 Ford F-150" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              VIN Number (optional) — Helps David provide a more accurate quote faster. Usually found on your insurance card.
            </label>
            <input type="text" name="vin" className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" placeholder="1FMJU1JT0MEA12345" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">ZIP Code or City (for service area)</label>
            <input type="text" name="zip" className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" placeholder="77380 The Woodlands" />
          </div>

          {(phoneValue || emailValue) && (
            <div>
              <label className="block text-sm font-medium mb-3">Preferred way for David to reach you</label>
              <div className="flex flex-wrap gap-6 text-lg">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPreferences" value="Call" className="w-5 h-5 accent-green-600" /> Call
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPreferences" value="Text" className="w-5 h-5 accent-green-600" /> Text
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPreferences" value="Email" className="w-5 h-5 accent-green-600" /> Email
                </label>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Problem or "Beat my shop quote by 50%" details *</label>
            <textarea name="message" required rows={5} className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600" placeholder="Oil change + brake inspection. Shop quoted me $850..."></textarea>
          </div>

          <div
            className={`border-4 border-dashed rounded-3xl p-12 text-center transition-all ${isDragging ? 'border-green-600 bg-green-50' : 'border-gray-300'}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFiles(e.dataTransfer.files);
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              name="files"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer block">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                📸
              </div>
              <p className="text-2xl font-bold text-green-700">Drag & drop photos or shop quote PDFs here</p>
              <p className="text-gray-600 mt-2">or click to select (images + PDFs OK)</p>
            </label>
          </div>

          {previews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative bg-white rounded-2xl overflow-hidden border">
                  {preview.url ? (
                    <img src={preview.url} alt="preview" className="w-full h-32 object-cover" />
                  ) : (
                    <div className="h-32 flex items-center justify-center bg-gray-100 text-4xl">📄</div>
                  )}
                  <div className="p-3 text-xs truncate">{preview.name}</div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending || state?.success}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-black text-2xl py-6 rounded-3xl transition-all flex items-center justify-center gap-3"
          >
            {isPending ? 'Sending...' : state?.success ? '✅ Sent — David is on it!' : 'SEND MY QUOTE REQUEST'}
          </button>

          {state?.message && (
            <p className={`text-center text-lg font-medium ${state.success ? 'text-green-600' : 'text-red-600'}`}>
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}