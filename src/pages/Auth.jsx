import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { supabase } from "../lib/supabase";

export function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [units, setUnits] = useState("1");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        if (data.user) navigate("/dashboard");
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              organization_name: orgName,
              number_of_units: parseInt(units)
            }
          }
        });
        
        if (error) throw error;
        
        // If email confirmation is off, data.user exists immediately
        if (data.user) {
          if (data.session) {
             navigate("/dashboard");
          } else {
             setError("Success! Please check your email for a confirmation link.");
          }
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 p-4">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl -z-10" />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/logo.jpg" alt="NutraLens Logo" className="h-10 w-auto rounded-lg shadow-sm" />
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">Nutralens</span>
          </Link>
        </div>

        <Card className="glass-card border-none shadow-2xl">
          <CardHeader>
            <CardTitle>{isLogin ? "Welcome back" : "Create your account"}</CardTitle>
            <CardDescription>
              {isLogin 
                ? "Enter your credentials to access the operator dashboard." 
                : "Sign up to start managing your smart vending machines."}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className={`p-3 rounded text-sm ${error.includes('Success') ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {error}
                </div>
              )}
              
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="fullName">Full Name</label>
                  <Input id="fullName" placeholder="John Doe" value={fullName} onChange={e => setFullName(e.target.value)} required />
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="orgName">Organization Name</label>
                    <Input id="orgName" placeholder="Acme Fitness" value={orgName} onChange={e => setOrgName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="units">Number of Units</label>
                    <Input id="units" type="number" min="1" placeholder="1" value={units} onChange={e => setUnits(e.target.value)} required />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                  {isLogin && <Link to="#" className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline">Forgot password?</Link>}
                </div>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-70">
                {loading ? "Please wait..." : (isLogin ? "Sign In" : "Get Started")}
              </Button>
              <p className="text-sm text-center text-slate-500 dark:text-slate-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button type="button" onClick={() => { setIsLogin(!isLogin); setError(null); }} className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                  {isLogin ? "Sign up" : "Log in"}
                </button>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
