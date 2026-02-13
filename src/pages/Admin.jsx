
import { useState } from "react";
import projectsSeed from "../data/projects.json";
import pubsSeed from "../data/publications.json";
import { load, save } from "../utils/storage";

const KEY = "admin_auth";
const PKEY = "admin_projects";
const BKEY = "admin_pubs";

export default function Admin(){
  const [authed, setAuthed] = useState(load(KEY,false));
  const [pwd, setPwd] = useState("");
  const [projects, setProjects] = useState(load(PKEY, projectsSeed));
  const [pubs, setPubs] = useState(load(BKEY, pubsSeed));
  const [projectsText, setProjectsText] = useState(() => JSON.stringify(load(PKEY, projectsSeed), null, 2));
  const [pubsText, setPubsText] = useState(() => JSON.stringify(load(BKEY, pubsSeed), null, 2));
  const [errors, setErrors] = useState({ projects: null, pubs: null });

  const login = () => {
    if(pwd && pwd === load("admin_pwd", null)){
      save(KEY,true); setAuthed(true);
    } else if(!load("admin_pwd", null)){
      save("admin_pwd", pwd); save(KEY,true); setAuthed(true);
    } else alert("Invalid password");
  };

  const persist = () => {
    if (errors.projects || errors.pubs) {
      alert("Fix JSON errors before saving.");
      return;
    }
    save(PKEY, projects);
    save(BKEY, pubs);
    alert("Saved locally");
  };

  if(!authed){
    return (
      <div className="container">
        <h2>Admin Login</h2>
        <input type="password" placeholder="Set or enter password" value={pwd} onChange={e=>setPwd(e.target.value)}/>
        <button onClick={login}>Login</button>
        <p className="muted">Local-only auth (no server). First login sets the password.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Admin Panel (Local)</h2>
      <p className="muted">Edit without touching code. Data saved to localStorage.</p>
      <h3>Projects</h3>
      <textarea
        rows="12"
        value={projectsText}
        onChange={(e) => {
          const next = e.target.value;
          setProjectsText(next);
          try {
            const parsed = JSON.parse(next);
            setProjects(parsed);
            setErrors((prev) => ({ ...prev, projects: null }));
          } catch (err) {
            setErrors((prev) => ({ ...prev, projects: "Invalid JSON" }));
          }
        }}
      />
      {errors.projects ? <p className="muted" style={{ color: 'var(--accent-danger)' }}>{errors.projects}</p> : null}
      <h3>Publications</h3>
      <textarea
        rows="10"
        value={pubsText}
        onChange={(e) => {
          const next = e.target.value;
          setPubsText(next);
          try {
            const parsed = JSON.parse(next);
            setPubs(parsed);
            setErrors((prev) => ({ ...prev, pubs: null }));
          } catch (err) {
            setErrors((prev) => ({ ...prev, pubs: "Invalid JSON" }));
          }
        }}
      />
      {errors.pubs ? <p className="muted" style={{ color: 'var(--accent-danger)' }}>{errors.pubs}</p> : null}
      <button onClick={persist}>Save</button>
    </div>
  );
}
