import { useState, useEffect } from "react";
import { type Project, projects as fallbackProjects } from "@/data/projects";

const GIST_RAW_URL =
  import.meta.env.VITE_PROJECTS_GIST_URL ||
  "https://gist.githubusercontent.com/Tamunorth/8efad582f5fb10878c4379df18a54ee0/raw/projects.json";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(!!GIST_RAW_URL);

  useEffect(() => {
    if (!GIST_RAW_URL) return;

    let cancelled = false;

    async function fetchProjects() {
      try {
        const res = await fetch(GIST_RAW_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Project[] = await res.json();
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      } catch {
        // Silently fall back to hardcoded projects
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchProjects();
    return () => { cancelled = true; };
  }, []);

  return { projects, isLoading };
}
