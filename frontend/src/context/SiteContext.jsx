import { createContext, useContext, useEffect, useState } from "react";

const API_DATA_URL = import.meta.env.VITE_DATA_API_URL;

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [company, setCompany] = useState(null);
  const [social, setSocial] = useState(null);
  const [news, setNews] = useState(null);
  const [projectHeader, setProjectHeader] = useState(null);
  const [project, setProject] = useState(null);
  const [servicesHeader, setServicesHeader] = useState(null);
  const [services, setServices] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [callback, setCallback] = useState(null);

  useEffect(() => {
    fetch(`${API_DATA_URL}/api/data`)
      .then((r) => r.json())
      .then((data) => {
        setCompany(data.company);
        setSocial(data.social);
        setNews(data.news);
        setProjectHeader(data.projectHeader);
        setProject(data.project);
        setServicesHeader(data.servicesHeader);
        setServices(data.services);
        setReviews(data.reviews);
        setCallback(data.callback);
      });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        company,
        social,
        news,
        projectHeader,
        project,
        servicesHeader,
        services,
        reviews,
        callback,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

// Хук для получения данных в любом компоненте
export const useSite = () => useContext(SiteContext);
