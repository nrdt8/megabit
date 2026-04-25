import { useState, useEffect } from "react";

const API = "";

const inp = {
  display: "block",
  width: "100%",
  padding: "6px 8px",
  marginBottom: 8,
  boxSizing: "border-box",
  fontSize: 14,
};
const btn = {
  padding: "8px 20px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  marginRight: 8,
};
const section = {
  background: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: 20,
  marginBottom: 24,
};

// Загрузка изображения
async function uploadImage(file) {
  const fd = new FormData();
  fd.append("image", file);
  const res = await fetch(`${API}/upload`, { method: "POST", body: fd });
  const data = await res.json();

  // Если сервер вернул относительный путь — добавляем базовый URL
  const url = data.url;
  if (url && url.startsWith("/")) {
    return `${API}${url}`;
  }
  return url;
}
// Поле с загрузкой фото
function ImgField({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ fontSize: 13, color: "#555" }}>{label}</label>
      {value && (
        <img
          src={value}
          alt=""
          style={{
            display: "block",
            height: 80,
            marginBottom: 4,
            borderRadius: 4,
          }}
        />
      )}
      <input
        style={inp}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="URL картинки"
      />
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const url = await uploadImage(e.target.files[0]);
          onChange(url);
        }}
      />
    </div>
  );
}

export default function Admin() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [tab, setTab] = useState("company");

  useEffect(() => {
    fetch(`${API}/api/data`)
      .then((r) => r.json())
      .then(setData);
  }, []);

  const save = async () => {
    await fetch(`${API}/api/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus("✅ Сохранено!");
    setTimeout(() => setStatus(""), 3000);
  };

  const setCompany = (key, val) =>
    setData((d) => ({ ...d, company: { ...d.company, [key]: val } }));
  const setServicesHeader = (key, val) =>
    setData((d) => ({
      ...d,
      servicesHeader: { ...d.servicesHeader, [key]: val },
    }));
  const setProjectHeader = (key, val) =>
    setData((d) => ({
      ...d,
      projectHeader: { ...d.projectHeader, [key]: val },
    }));

  if (!data) return <p style={{ padding: 40 }}>Загрузка...</p>;

  const tabs = ["company", "social", "news", "projects", "services", "reviews"];
  const tabLabels = {
    company: "Компания",
    social: "Соцсети",
    news: "Новости",
    projects: "Проекты",
    services: "Услуги",
    reviews: "Отзывы",
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 24 }}>Админ панель</h1>

      {/* Табы */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}
      >
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              ...btn,
              background: tab === t ? "#1d4ed8" : "#e5e7eb",
              color: tab === t ? "#fff" : "#333",
            }}
          >
            {tabLabels[t]}
          </button>
        ))}
      </div>

      {/* Компания */}
      {tab === "company" && (
        <div style={section}>
          <h2>Компания</h2>
          {[
            ["name", "Название"],
            ["abbreviation", "Аббревиатура"],
            ["slogan", "Слоган"],
            ["description", "Описание"],
            ["adress", "Адрес"],
            ["phone", "Телефон"],
            ["arr", "Копирайт"],
          ].map(([key, label]) => (
            <div key={key}>
              <label style={{ fontSize: 13, color: "#555" }}>{label}</label>
              <input
                style={inp}
                value={data.company[key]}
                onChange={(e) => setCompany(key, e.target.value)}
              />
            </div>
          ))}
          <ImgField
            label="Фон героя"
            value={data.company.bg}
            onChange={(v) => setCompany("bg", v)}
          />
          <ImgField
            label="Фон callback"
            value={data.callback.img}
            onChange={(v) => setData((d) => ({ ...d, callback: { img: v } }))}
          />
        </div>
      )}

      {/* Соцсети */}
      {tab === "social" && (
        <div style={section}>
          <h2>Соцсети</h2>
          {data.social.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, color: "#555" }}>Название</label>
              <input
                style={inp}
                value={s.name}
                onChange={(e) => {
                  const arr = [...data.social];
                  arr[i] = { ...arr[i], name: e.target.value };
                  setData((d) => ({ ...d, social: arr }));
                }}
              />
              <label style={{ fontSize: 13, color: "#555" }}>URL</label>
              <input
                style={inp}
                value={s.url}
                onChange={(e) => {
                  const arr = [...data.social];
                  arr[i] = { ...arr[i], url: e.target.value };
                  setData((d) => ({ ...d, social: arr }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Новости */}
      {tab === "news" && (
        <div style={section}>
          <h2>Новости</h2>
          {data.news.map((n, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, color: "#555" }}>Дата</label>
              <input
                style={inp}
                value={n.date}
                onChange={(e) => {
                  const arr = [...data.news];
                  arr[i] = { ...arr[i], date: e.target.value };
                  setData((d) => ({ ...d, news: arr }));
                }}
              />
              <label style={{ fontSize: 13, color: "#555" }}>Заголовок</label>
              <input
                style={inp}
                value={n.title}
                onChange={(e) => {
                  const arr = [...data.news];
                  arr[i] = { ...arr[i], title: e.target.value };
                  setData((d) => ({ ...d, news: arr }));
                }}
              />
              <ImgField
                label="Картинка"
                value={n.img}
                onChange={(v) => {
                  const arr = [...data.news];
                  arr[i] = { ...arr[i], img: v };
                  setData((d) => ({ ...d, news: arr }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Проекты */}
      {tab === "projects" && (
        <div style={section}>
          <h2>Проекты</h2>
          <label style={{ fontSize: 13, color: "#555" }}>
            Заголовок раздела
          </label>
          <input
            style={inp}
            value={data.projectHeader.title}
            onChange={(e) => setProjectHeader("title", e.target.value)}
          />
          <label style={{ fontSize: 13, color: "#555" }}>
            Описание раздела
          </label>
          <input
            style={inp}
            value={data.projectHeader.description}
            onChange={(e) => setProjectHeader("description", e.target.value)}
          />
          {data.project.map((p, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, color: "#555" }}>Компания</label>
              <input
                style={inp}
                value={p.company}
                onChange={(e) => {
                  const arr = [...data.project];
                  arr[i] = { ...arr[i], company: e.target.value };
                  setData((d) => ({ ...d, project: arr }));
                }}
              />
              <label style={{ fontSize: 13, color: "#555" }}>Объект</label>
              <input
                style={inp}
                value={p.object}
                onChange={(e) => {
                  const arr = [...data.project];
                  arr[i] = { ...arr[i], object: e.target.value };
                  setData((d) => ({ ...d, project: arr }));
                }}
              />
              <ImgField
                label="Картинка"
                value={p.img}
                onChange={(v) => {
                  const arr = [...data.project];
                  arr[i] = { ...arr[i], img: v };
                  setData((d) => ({ ...d, project: arr }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Услуги */}
      {tab === "services" && (
        <div style={section}>
          <h2>Услуги</h2>
          <label style={{ fontSize: 13, color: "#555" }}>
            Заголовок раздела
          </label>
          <input
            style={inp}
            value={data.servicesHeader.title}
            onChange={(e) => setServicesHeader("title", e.target.value)}
          />
          <label style={{ fontSize: 13, color: "#555" }}>
            Описание раздела
          </label>
          <input
            style={inp}
            value={data.servicesHeader.description}
            onChange={(e) => setServicesHeader("description", e.target.value)}
          />
          {data.services.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, color: "#555" }}>Название</label>
              <input
                style={inp}
                value={s.title}
                onChange={(e) => {
                  const arr = [...data.services];
                  arr[i] = { ...arr[i], title: e.target.value };
                  setData((d) => ({ ...d, services: arr }));
                }}
              />
              <label style={{ fontSize: 13, color: "#555" }}>Описание</label>
              <input
                style={inp}
                value={s.description}
                onChange={(e) => {
                  const arr = [...data.services];
                  arr[i] = { ...arr[i], description: e.target.value };
                  setData((d) => ({ ...d, services: arr }));
                }}
              />
              <ImgField
                label="Картинка"
                value={s.img}
                onChange={(v) => {
                  const arr = [...data.services];
                  arr[i] = { ...arr[i], img: v };
                  setData((d) => ({ ...d, services: arr }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Отзывы */}
      {tab === "reviews" && (
        <div style={section}>
          <h2>Отзывы</h2>
          {data.reviews.map((r, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, color: "#555" }}>Название</label>
              <input
                style={inp}
                value={r.title}
                onChange={(e) => {
                  const arr = [...data.reviews];
                  arr[i] = { ...arr[i], title: e.target.value };
                  setData((d) => ({ ...d, reviews: arr }));
                }}
              />
              <ImgField
                label="Картинка"
                value={r.img}
                onChange={(v) => {
                  const arr = [...data.reviews];
                  arr[i] = { ...arr[i], img: v };
                  setData((d) => ({ ...d, reviews: arr }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Кнопка сохранить */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "#fff",
          padding: "16px 0",
          borderTop: "1px solid #eee",
        }}
      >
        <button
          style={{ ...btn, padding: "10px 32px", fontSize: 16 }}
          onClick={save}
        >
          💾 Сохранить
        </button>
        {status && (
          <span style={{ color: "green", fontWeight: "bold" }}>{status}</span>
        )}
      </div>
    </div>
  );
}
