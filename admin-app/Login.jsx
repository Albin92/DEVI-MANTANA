import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Firebase Auth logic will go here
        console.log("Logging in...", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-amber-900 p-4">

            {/* Background decoration for the glass to blur */}
            <div className="absolute w-96 h-96 bg-amber-600/30 rounded-full blur-[100px] top-1/4 left-1/4"></div>
            <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] bottom-1/4 right-1/4"></div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-amber-500/20 rounded-full border border-amber-500/30 mb-4">
                        <Lock className="text-amber-500 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-wider">ADMIN PORTAL</h2>
                    <p className="text-zinc-400 text-sm mt-2">Devi-Manthan Registration Desk</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-zinc-300 text-sm font-medium mb-2">Admin Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                            placeholder="admin@college.edu"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-300 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]"
                    >
                        Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
}